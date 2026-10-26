// Service Worker des Flag Scout Tools (Backlog P25f) – Vorlage; der Build (tools/playbook-seite/pwa.mjs) setzt die
// Build-Version und die Dateiliste ein und legt die Datei als sw.js neben index.html.
// Aufgabe: Start ohne Netz. Er speichert die Seite (index.html), das Manifest und die Icons zwischen. Strategie „Netz
// zuerst“: online kommt immer die neueste Fassung (und ersetzt die gespeicherte), ohne Netz – oder wenn das Netz nach
// einigen Sekunden nicht antwortet – die gespeicherte. Andere Anfragen (Webschriften u. Ä.) laufen wie ohne ihn.
// Die Plays der Nutzer (Browser-Speicher IndexedDB) fasst er nicht an. Neue Build-Version = neuer Cache-Name: die neue
// Fassung übernimmt sofort und löscht die alten Caches dieser Seite.
const CACHE = "flag-scout-44a8aff70f9d";
const DATEIEN = ["index.html", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/apple-touch-icon.png"];
const WARTEN_MS = 4000; // so lange aufs Netz warten, wenn eine gespeicherte Fassung da ist

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE)
    .then((c) => c.addAll(DATEIEN.map((f) => new Request(f, { cache: "reload" }))))
    .then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k.startsWith("flag-scout-") && k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url), scope = new URL(self.registration.scope);
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
