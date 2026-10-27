// Service Worker des Flag Scout Tools (Backlog P25f) – Vorlage; der Build (tools/playbook-seite/pwa.mjs) setzt die
// Build-Version und die Dateiliste ein und legt die Datei als sw.js neben index.html.
// Aufgabe: Start ohne Netz. Er speichert die Seite (index.html), das Manifest und die Icons zwischen. Strategie „Netz
// zuerst“: online kommt immer die neueste Fassung (und ersetzt die gespeicherte), ohne Netz – oder wenn das Netz nach
// einigen Sekunden nicht antwortet – die gespeicherte. Andere Anfragen laufen wie ohne ihn.
// Webschriften (Google Fonts, Stylesheet aus der Seite = SCHRIFTEN): beim Installieren mitgeladen und in einem eigenen
// Cache gespeichert, der Updates überdauert – ohne Netz sieht die Seite damit gleich aus. Gespeichert zuerst (Schriftdateien
// ändern sich nie, das Stylesheet wird online im Hintergrund aufgefrischt).
// Die Plays der Nutzer (Browser-Speicher IndexedDB) fasst er nicht an. Neue Build-Version = neuer Cache-Name: die neue
// Fassung übernimmt sofort und löscht die alten Caches dieser Seite (außer den Schriften).
const CACHE = "flag-scout-1f20d10dd81e";
const DATEIEN = ["index.html", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/apple-touch-icon.png", "help.html", "help.md"];
const SCHRIFTEN = ["https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=IBM+Plex+Mono:wght@500&family=IBM+Plex+Sans:wght@400;500;600&display=swap"];
const SCHRIFT_CACHE = "flag-scout-schriften";
const SCHRIFT_HOSTS = ["https://fonts.googleapis.com", "https://fonts.gstatic.com"];
const WARTEN_MS = 4000; // so lange aufs Netz warten, wenn eine gespeicherte Fassung da ist

self.addEventListener("install", (e) => {
  e.waitUntil(Promise.all([
    caches.open(CACHE).then((c) => c.addAll(DATEIEN.map((f) => new Request(f, { cache: "reload" })))),
    // Schriften: Fehler oder langsames Netz halten die Installation nicht auf (sie kommen dann beim nächsten Aufruf)
    Promise.race([schriftenLaden().catch(() => {}), new Promise((ok) => setTimeout(ok, 10000))]),
  ]).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k.startsWith("flag-scout-") && k !== CACHE && k !== SCHRIFT_CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url), scope = new URL(self.registration.scope);
  if (SCHRIFT_HOSTS.includes(url.origin)) { e.respondWith(schrift(e, url.href)); return; }
  if (url.origin !== scope.origin || !url.pathname.startsWith(scope.pathname)) return;
  const pfad = url.pathname.slice(scope.pathname.length);
  // Seite: Adresse mit oder ohne index.html (auch mit ?…); sonst nur die Dateien der Liste
  const key = req.mode === "navigate" ? (pfad === "" || pfad === "index.html" ? "index.html" : null) : DATEIEN.includes(pfad) ? pfad : null;
  if (!key) return;
  const { antwort, gespeichert } = netzZuerst(url.href, key);
  e.respondWith(antwort);
  e.waitUntil(gespeichert);
});

function netzZuerst(href, key) {
  const netz = fetch(href, { cache: "no-cache" }).then((r) => ({ r, kopie: r.ok && !r.redirected ? r.clone() : null }));
  const gespeichert = netz.then(({ kopie }) => kopie && caches.open(CACHE).then((c) => c.put(key, kopie))).catch(() => {});
  const antwort = caches.open(CACHE).then((c) => c.match(key)).then((alt) => {
    if (!alt) return netz.then(({ r }) => r);
    return Promise.race([
      netz.then(({ r }) => (r.ok ? r : alt), () => alt),
      new Promise((ok) => setTimeout(() => ok(alt), WARTEN_MS)),
    ]);
  });
  return { antwort, gespeichert };
}

// Stylesheet(s) der Schriften laden und mit allen darin genannten Schriftdateien speichern
async function schriftenLaden() {
  const c = await caches.open(SCHRIFT_CACHE);
  for (const href of SCHRIFTEN) {
    const r = await fetch(href, { mode: "cors" });
    if (!r.ok) continue;
    const css = await r.clone().text();
    await c.put(href, r);
    const dateien = [...css.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)\s]+)\)/g)].map((m) => m[1]);
    await Promise.all(dateien.map(async (f) => {
      if (await c.match(f)) return;
      const x = await fetch(f, { mode: "cors" });
      if (x.ok) await c.put(f, x);
    }));
  }
}

// Schrift-Anfrage: gespeichert zuerst; sonst aus dem Netz holen und speichern
async function schrift(e, href) {
  const c = await caches.open(SCHRIFT_CACHE);
  const holen = () => fetch(href, { mode: "cors" }).then((r) => (r.ok ? c.put(href, r.clone()).then(() => r, () => r) : r));
  const alt = await c.match(href);
  if (!alt) return holen();
  if (href.startsWith("https://fonts.googleapis.com/")) e.waitUntil(holen().catch(() => {})); // Stylesheet auffrischen
  return alt;
}
