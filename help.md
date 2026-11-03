# Flag Scout Tool – Help

Help for Flag Scout Tool (https://olihck.github.io/flag-scout/): draw, catalog and analyze 5-on-5 flag football plays in your browser – no account, your plays stay on your device. The quick start shows the essentials for each tab; the details below cover everything – search them with the field at the top.

## Quick start {#quick-start}

### Plays {#qs-plays}
1. Narrow the plays with **Team**, **Field** and **Formation**; **More filters ▸** has the rest (concept, depth, opponent, event, target, down, search).
2. Tap a card to open the play; **‹ ›** or a swipe step to the next one.
3. **Export as PDF** prints the filtered plays. For your own choice: **Select**, tap plays, then **PDF**.
4. Tap ☆ to mark a must-know play. Old plays: **Archive** (play details or selection) – nothing is deleted.

More: [Plays](#catalog) · [Play details](#play) · [Select](#select) · [Archive](#archive)

### Analysis {#qs-analysis}
1. The heatmap shows **where the routes end** for the filtered plays – Open Field or Endzone.
2. **Options ▸ → Count:** “By frequency” or “Targets only” use the game log. **Receiver:** only the routes of X, Z …
3. Open **Concepts & depth** and tap a bar to filter by it.
4. Only some plays: in the Plays tab **Select** them, then **Analyze**.

More: [Heatmap](#heatmap) · [Receiver](#receiver) · [Selection](#analysis-scope)

### Drafts {#qs-drafts}
1. New plays wait here – from Draw or from Import.
2. Check the graphic and the fields; tap **OK** on unsure values.
3. **Approve** puts the play into the catalog (**Approve all** for many). “Same as” and “Variant of” mean the play is already in the catalog.

More: [Drafts](#drafts) · [Duplicates and variants](#duplicates)

### Draw {#qs-draw}
1. Set team, season, field, direction and **formation** at the top.
2. Tool **Route**: draw from a player. **Option**, **Delay**, **Motion** and **Ball** for the rest; tap a player to change label or colour.
3. Pick the concept, then **Save & next** – the play goes to Drafts, the field is ready for the next one.

More: [Draw](#draw) · [Tools](#draw-tools)

### Export, import, backup {#qs-export}
1. **Back up regularly:** Export ▾ → **Backup & restore** → **Back up now** (all plays with game log and must-know marks). Your plays exist only in this browser.
2. On a new device: **Backup & restore → Restore** brings everything back with the same IDs. **Import** is for plays someone sent you.
3. **Save offline version (HTML)** makes one file to open anywhere without internet.
4. Add the tool to your **home screen** – it works like an app and starts offline. iPhone/iPad: the app has its own storage, so back up in Safari and restore in the app.
5. Keep teams or seasons apart in **catalogs**: **Catalog: … ▾** at the top. Backups always cover the open catalog.

More: [Export and import](#export) · [Backup and restore](#backup) · [Your data](#storage) · [Catalogs](#catalogs) · [Use it as an app](#app)

## Getting started {#start}

### The page at a glance {#tabs}
- **Header:** the number of plays and teams, **Export as PDF**, the menu **Export ▾** (with [Backup & restore](#backup)), **Import** and **?** (this help).
- **Plays:** all plays as cards, with filters. Tap a card to open the [play details](#play).
- **Analysis:** the [heatmap](#heatmap) of route ends for the filtered plays.
- **Drafts:** new plays wait here until you approve them – see [Drafts](#drafts).
- **Draw:** draw plays with pen, finger or mouse – see [Draw](#draw).
- The filters at the top work for **Plays** and **Analysis** together.

### Your data stays in this browser {#storage}
- Your plays are saved **only in this browser on this device**. Nothing is uploaded, there is no account.
- Another browser, another device or a private window does not see them. Clearing the browser data deletes them.
- So **back up regularly**: Export ▾ → Backup & restore → Back up now – see [Backup and restore](#backup). On a computer with Chrome or Edge the tool can also [save to a folder](#folder) by itself.
- At the start the tool asks the browser for **persistent storage**. Backup & restore shows the answer: *persistent* means the browser does not clear your plays on its own; otherwise it may clear them when space runs low.
- iPhone and iPad keep data most reliably in the [app on the Home Screen](#app).
- The backup is how you [move your plays to another device](#move); to share plays with others use [JSON](#json).

### Use it as an app {#app}
- **iPhone / iPad:** open the page in Safari → Share → **Add to Home Screen**.
- **Android:** open the page in Chrome → menu ⋮ → **Add to Home screen** / **Install app**.
- **Computer:** Chrome or Edge show an install icon in the address bar.
- The app starts **without internet**, too. Started online, it opens the newest version. Was it still open in the background, the [update bar](#updates) appears instead – tap it.

### iPhone and iPad: separate storage {#iphone}
- On iPhone and iPad the app on the Home Screen has **its own storage**, separate from Safari – plays you saved in Safari are not in the app.
- Before you switch: in Safari choose Export ▾ → **Backup & restore → Back up now**, open the app and choose **Backup & restore → Restore from backup** with that file. Plays keep their IDs, game log and must-know marks. From then on use only the app.

### Catalogs {#catalogs}
- A **catalog** is a separate collection of plays, e.g. one for your club and one for a national team. Each catalog has its own plays, drafts, game log, must-know marks and backups.
- The open catalog is shown at the top: **Catalog: <name> ▾**. Pick another one in this menu – the page reloads with it. Unsaved work (a drawing in Draw, an open edit) asks first. Next time the tool opens the catalog you used last.
- **New catalog…** starts an empty catalog and switches to it. **Rename…** renames the open catalog. A name must not be empty or the same as another catalog (upper and lower case count as the same).
- **Delete…** deletes the open catalog with all its plays, drafts and game log. It shows how many there are and asks you to type the name. The last catalog cannot be deleted. Back up first if you might need the plays again.
- Your plays from before there were catalogs are in **My plays**.
- **Backups per catalog:** Back up now, Restore from backup, the offline version and [Save to folder](#folder) always work on the open catalog. File names start with the catalog name (e.g. *playbook-club-export-….json*), and the file notes the catalog. Restore and Import put the plays into the open catalog – switch first.

### Move plays to another catalog {#catalog-move}
- Only shown when there are at least two catalogs.
- **A whole team:** Manage teams → Teams → **Move to… ▾** next to the team → choose the catalog.
- **Any plays, also from several teams:** **Select**, pick the plays → **Move to catalog (n)** → choose the catalog.
- It asks first, e.g. “Move 22 plays (Team A) to “Club”? 3 get new IDs.”
- Game log and must-know marks move along. Drafts stay in this catalog, and so do the opponents named in other plays.
- If a play ID is already taken in the other catalog, the play gets the next free number of its team. The old ID is noted in the play (JSON → *_meta*).
- Moving is safe: the plays are first copied and checked, then removed here. If it stops halfway, nothing is lost – some plays may then be in both catalogs; delete the extra ones.
- **Open “…”** in the dialog switches to the other catalog.

### Updates {#updates}
- When a newer version of the page is out, a bar at the top says **Update available – tap to reload**. Tap it to load the new version, or tap **✕** to hide it until the next start.
- The page checks when you come back to it (switching apps or tabs). An open page never reloads by itself; opened anew, it starts with the newest version.
- Unsaved work (a drawing in Draw, an open edit, a draft field you are typing in) is protected: the first tap only warns, tap again to reload anyway.
- Bar still there after reloading? Close the page and open it again.

### Fold-out areas {#folding}
- Extra options fold out where you need them: **More filters ▸** (plays and analysis), **Options ▸** (heatmap), and in a play **Game log** and **JSON**. Each remembers in this browser whether it is open.
- Folded filters and options still work – they are listed as chips (“Also filtered”, “Options”); tap × to remove one.
- **ⓘ** next to a text shows more background; tap it again to hide it.

## Plays {#catalog}

### Cards and sorting {#cards}
- Each card shows the play's graphic, its ID and the ★ for [must-know](#must-know). Formation, concept, depth and comment are in the [play details](#play).
- The play ID is built from team, formation, Endzone and a number, e.g. `TIGE_Spread_03` or `TIGE_Pro_EZ_01` (team “Tigers”). It changes when the formation or the field changes.
- **Sort:** by name, by formation, by date (newest or oldest saved first) or by **Frequency** (most uses in the [game log](#game-log) first – the Opponent and Down filters count; same number → by ID). Open Field plays always come first, then Endzone plays, grouped by distance: 10 yd / 2PAT, 5–10 yd, 5 yd / 1PAT. With Frequency there are no distance groups – all Endzone plays are sorted by uses.
- PDF and ‹ › in the play details follow the same order.
- **Show targets/frequency** shows the targets on every card and the number of uses from the [game log](#game-log) next to the ★, e.g. “×7”. Off by default.

### Filters {#catalog-filters}
- Always visible: **Team**, **Field** (Open Field / Endzone), **Formation** and the ☆ for must-know plays only.
- **More filters ▸**: Direction, Concept, Depth S-I-D, Season, Opponent, Event, Target, Down and Search (play ID, comment, concept, opponent, event). Folded, the button shows how many of them are set.
- Every list only offers values that exist with the other filters, with the number of plays, e.g. “Flood (3)”.
- **Show archived** (in More filters) shows [archived plays](#archive) greyed out with the badge “Archived”.
- **Clear filters** resets all filters, including Show archived. Filters also apply to the [heatmap](#heatmap), the PDF and the exports.
- **Field** is one filter for Plays and Analysis. The Analysis always shows one field: its switch sets this filter, and “all” becomes the field shown there.
- Opponent, Event, Target and Down come from the [game log](#game-log) and the play itself ([events](#events)).

### Must-know {#must-know}
- Tap ☆ on a card or “☆ Must-know” in the play details to mark a play every player has to know. Tap again to remove it.
- Everyone sees the ★. The ☆ filter next to Formation shows only must-know plays; the PDF notes it in its filter line.
- The mark belongs to the play ID – if the ID changes (new formation), the mark is lost.
- The marks are part of the JSON export and the [backup](#backup): Restore brings them back, [Import](#import) puts them on the new IDs.

### Manage teams {#teams}
- **Manage teams** next to the Team filter: **Hide** / **Show** a team or **Delete** all its plays (you confirm by typing the team name).
- Each team shows its **code** – the start of its play IDs, e.g. `MAIN` in `MAIN_Spread_03`. **Code** changes it: 2–6 capital letters or digits, not used by another team.
- If plays already use the old code, you choose: **Rename play IDs too** (only the code at the start changes, e.g. `MAIN_Spread_03` → `MAI_Spread_03`; game log, must-know marks, Undo last edit and drafts move along) or **Only change the team code** (existing IDs stay, new plays get the new code). If a new ID already exists, nothing is renamed and the IDs are listed.
- **+ New team** adds a team with name and code before it has plays – choose it in [Draw](#draw) or when you edit plays.
- Hidden teams are left out of the catalog, the heatmap and the PDF. “Show hidden teams” shows them again (marked “hidden”). The JSON export and the backup always contain all teams.
- Backups: the dialog links to [Backup & restore](#backup).

### Opponents {#opponents}
- **Manage teams → Opponents** lists every name that only appears as an opponent (no plays of its own), with the number of plays and uses.
- **Rename** fixes a name everywhere – in the plays, the [game log](#game-log) and the drafts. Renaming to a name that already exists (upper/lower case does not matter) merges both.
- **Delete** removes the name from all plays and drafts. The uses stay in the game log, with unknown opponent.

### Events {#events-manage}
- **Manage teams → Events** lists every [event](#events) of plays and uses, with the number of plays and uses.
- **Rename** fixes a name everywhere – in the plays, the [game log](#game-log) and the drafts. Renaming to a name that already exists (upper/lower case does not matter) merges both.
- **Delete** removes the name from all plays and drafts. The uses stay in the game log, with unknown event.

### Select plays {#select}
- **Select** turns on selection mode: a click on a card adds or removes it (Ctrl/Cmd + click works too), Shift + click adds the range from the last clicked play.
- The bar at the bottom: **Select all** (all filtered plays, never [archived](#archive) ones), **Deselect filtered**, **Only selection** (only the selected plays, in the order you picked them), **Clear**, **Done**.
- **PDF** prints the selection in the order you picked it – handy for a training sheet across teams.
- **Analyze** opens the [Analysis](#analysis-scope) with only the selected plays.
- **JSON** exports only the selected plays. **★**, **Edit**, **Archive** and **Delete** work on all selected plays.
- The selection stays when you change filters or sorting, and is gone after reloading the page.

### Edit several plays {#bulk-edit}
- **Edit** in the selection bar: set or clear the **season**, **add** or **replace opponents** or **events**, or move the plays to another **team**. Empty fields change nothing.
- A new team gives the plays new IDs; their game log and must-know marks move along.
- **Delete** asks once with the number of plays. Their game log is deleted too.

### Archive {#archive}
- **Archive** takes outdated plays out of the catalog **without deleting them**: in the play details, or **Archive (n)** in the selection bar (asks once with the number). Whole season or team: filter, **Select all**, **Archive**.
- Archived plays never count in the [analysis](#heatmap), are not added by Select all and are not printed (PDF, offline version).
- **More filters → Show archived** shows them greyed out with “Archived”. Open one and tap **Unarchive**, or select them and tap **Unarchive (n)**. Even when shown they do not count in the analysis.
- Nothing is lost: the game log stay. The JSON export and the backup contain archived plays with their mark, and an import keeps it.
- A play you draw or import again that matches an archived play is reported as “matches archived play … – unarchive?” – see [duplicates](#duplicates).

## Play details {#play}

### What you see {#play-info}
- The graphic, the play ID and chips: ★ Must-know, Formation, QB, Direction, Concept, **S-I-D** (routes short-intermediate-deep), Field and distance, Situation. A highlighted chip means **unsure** – the value was not clear and is not confirmed yet.
- Below: team, season, opponents (“vs …”) and events (“@ …”), the comment and when the play was saved or edited.
- Fold-out areas: [Game log](#game-log) and **JSON** (the play as data).

### Chips and editing {#play-edit}
- Tap a chip (Formation, QB, Direction, Concept, Field) to change that entry. **Only the entry changes, never the drawing.**
- **Edit** changes all entries at once, plus comment, opponents and events, and confirms unsure values.
- Opponents and events in Edit: each one is a chip – **×** removes it. **+ add …** picks a known name, **+ new …** opens a field for a new one (**Add**). Nothing is saved until **Save**.
- A new formation or field changes the play ID.

### Previous, next, swipe {#play-nav}
- **‹ ›** at the top step through the plays in catalog order with the current filters, e.g. “3 / 41”.
- On a computer use the arrow keys ← →, on a phone swipe sideways. **×** or Esc closes the play.

### Edit in Draw {#play-draw}
- **Edit in Draw** opens the play in the [Draw](#draw) tab to change routes and line-up. “Save changes” saves it right back into the catalog with the same ID.
- **Undo last edit** (tap twice) brings back the version before the last edit in Draw – one step.
- **Duplicate & draw** opens a copy of the play in Draw. **Save copy** adds it to the catalog as a new play with the next free ID – without game log, targets, opponents, events and must-know. **Cancel editing** saves nothing.

## Game log {#game-log}

### Uses and opponents {#uses}
- The **Game log** area in the play details records each time a play was used: against whom, who was targeted and on which down. There is no result (complete, yards).
- Folded, it shows a summary like “5× · Z 3 · C 1 · – 1” (– = no target).
- Choose the opponent under **vs**, then tap a target button. The list shows this play's opponents first (“This play”), then all other known teams (“Other teams”), or “+ new opponent …”. Choosing a team saves nothing yet – the first entry makes it an opponent of the play. **Undo last entry** removes the last one; the list below lets you delete single entries.
- Rename, merge or delete opponents in [Manage teams → Opponents](#opponents).
- Opponents of a play can also be set in Draw, Drafts and with [Edit several plays](#bulk-edit).

### Events {#events}
- An **event** says when in the season a play was used, e.g. “Worldcup” or “Gameday 02.05.”. Optional, a play can have several.
- Choose the event under **at**, below **vs** – it works the same way: this play's events first (“This play”), then all other events (“Other events”), or “+ new event …” (also added to the play's events). Preselected: the Event filter, otherwise the last event you used.
- Rename, merge or delete events in [Manage teams → Events](#events-manage).
- Events of a play can also be set with **Edit** in the details, in Draw, Drafts and with [Edit several plays](#bulk-edit).

### Targets {#targets}
- One button per receiver and the center (with option routes also per ending, e.g. “+Z·2”), plus **QB run** (QB or 2nd QB run), **No target** (incomplete without a clear receiver, throwaway or sack) and **Played** (target not known).
- Faster: **double-click** (mouse, pen) or **long press** (finger) on a route or a player in the graphic adds it as target.
- “Show targets on the graphic” puts small numbers at the targeted route ends.
- In Plays, **Show targets/frequency** does this on every card and adds the number of uses next to the ★, e.g. “×7” (no number without uses). Off by default.
- Draw and Drafts have the same buttons, so you can record targets while you draw or check a play.

### Downs {#downs}
- Optional: pick **1st–4th**, **1PAT** or **2PAT** above the target buttons – it applies to the next entries until you tap it again. In the list you can set the down of each entry later. Opening a play starts without a down; in Draw, **Save & next** clears it.
- The summary shows e.g. “Downs: 1st 2 · 3rd 1 · 2PAT 1”.
- The **Down** filter (More filters) also lists 1PAT and 2PAT: it finds plays with a use on that down **or** with 1PAT/2PAT in their situation.

### Flipped {#flipped}
- **↔ Flipped** next to the downs: the play was run mirrored (left and right swapped). It applies to the next entries until you tap it again and is off for every new play. The target stays the same route, e.g. Z.
- In the list, **↔** at each entry switches it later. Flipped entries show “↔ flipped”, the summary adds e.g. “2× flipped”.
- Draw and Drafts have the same switch.
- In the [heatmap](#count) with Side “Real side” and Count “By frequency” or “Targets only”, flipped uses count on the mirrored side – in the routes view, too. “Strong side right”, the bars and the filters do not change.

### Where the game log counts {#game-log-use}
- Filters **Opponent**, **Event**, **Target** and **Down** (More filters). With an opponent or event filter only the uses against that opponent or at that event count everywhere; with both, only uses against that opponent at that event.
- Heatmap: [Count](#count) “By frequency” and “Targets only”, the Target bars and “Group by Opponent”.

## Draw {#draw}

### What Draw is for {#draw-about}
- Draw a play directly – with a pen on a tablet, a mouse or your finger – instead of drawing on paper. The play is exact right away, nothing has to be recognized.
- Every play is saved as a **draft** first and goes into the catalog when you approve it in [Drafts](#drafts).
- Good for video analysis: draw many plays in a row, check them later.

### Line-up {#draw-setup}
- Top: **Team** (or “+ New team …”), **Season**, **Opponent** (optional – also preselected for the targets; a new name is offered for all plays after the first save), **Events** (optional, several with commas – stays for **Save & next**, the first is preselected for the targets), **Field**; for Endzone the **distance** (5, 7, 10 yd or other) and **PAT** (1PAT = 5 yd, 2PAT = 10 yd).
- **Direction** (strong side left or right), **QB** (Gun 7 yd or Under Center) and **Formation** – each tile shows the standard line-up.
- The setup stays for the next play and is remembered in this browser.
- **Formation from the line-up:** if you move players into another formation, the page switches the formation and tells you (“Keep …” goes back).
- Changing the formation after drawing asks: **Replace line-up** (players move to the new standard positions, routes move along) or **Keep line-up** (only the formation entry changes). Changing the direction mirrors the whole play.

### Tools {#draw-tools}
- **Route:** draw from a player; draw from the end of a route to make it longer. Tap a player to select it.
- **Option:** draw from the point where a route branches off – the new line becomes a dashed option ending with its own arrow.
- **Delay:** see [Delay](#delay).
- **Motion:** pre-snap motion from a player; the route then starts where the motion ends.
- **Ball:** from the center to the player who gets the snap (side snap, pitch), or from the ball carrier to a player (handoff, pitch).
- **Move:** drag players sideways or into the backfield (never past the line); routes move along. With a pen, your finger always moves players.
- **Line style** for the next lines: **Auto** (sharp bends become cuts), **Curve** (smooth, follows your stroke), **Straight** (straight pieces with clear cuts).
- **Click points** (only with a mouse): instead of holding the button, each click sets a point and the line runs straight from point to point; **double-click** (or Enter) finishes it, Esc cancels. Works for Route, Option, Motion and Ball. Freehand stays the default; finger and pen always draw freehand.
- **Undo** / **Redo** (Ctrl+Z / Ctrl+Y) and **Clear** (start this play again).
- Small wobbles are smoothed out – more with a finger (phone) than with a mouse or pen, where short stems and fake steps from about 1 yd stay.
- A short hook at the very end of a stroke is ignored, so the arrow points the way the route runs. If the end points back toward the line, **Comeback ^** is set for you.

### Selected player {#draw-player}
- Tap a player: change the **label** (X, Y, Z or initials – Enter or a click anywhere else saves it and ends Move, Esc cancels) and the **colour**, set **Comeback ^** (arrow back toward the line), switch the route between **Curve** and **Straight**, remove delays, or delete the route, the last option, the motion or the ball path.

### Delay {#delay}
- Choose the tool **Delay** and tap a route where the receiver delays (stutter at the start, hook & go after 5 yd …) – a short zigzag appears there. Tap it again to remove it, or select the player and use **Remove delay**.
- A clear zigzag you draw yourself (at least three sharp turns) also becomes a delay. Small wobbles of your finger do not.

### Save as draft {#draw-save}
- Pick the **Concept** (a suggestion from the routes is preselected); **Depth S-I-D** is counted for you. Add a situation (e.g. “3rd & 5”), a comment and targets if you like.
- **Save & next** saves the play as a draft with the next free number of the team and clears the field for the next play with the same setup. The down for targets is cleared too – pick it again for the next play.
- Targets: with **1PAT** or **2PAT** and a down 1st–4th selected, a hint asks if that is intended. You can still add the target and save – a play can also be run on a normal down.
- Plays of one team on one day form a group in Drafts (“Draw · Team · date”). “Review in Drafts” jumps there.
- The same play as one in the catalog becomes a draft marked “Same as …” or “Variant of …” – see [Duplicates and variants](#duplicates).

### Duplicate hint while drawing {#draw-duplicates}
- From **3 routes** on, the Save box checks your drawing against the plays and open drafts of the same team – e.g. “Looks identical to …”, “Variant of … (Z route differs)”, “Mirrored version of …”, “Played in 2025 too (…)”. It uses the same rules as **Save & next** ([Duplicates and variants](#duplicates)) and never blocks saving.
- Tap the play ID to open that play over the Draw tab – e.g. to add a target in its game log if the play came up again. Close it (×) and you are back at your drawing. For an open draft, Drafts opens; **Back to Draw** brings you back. Your drawing stays in both cases.
- The hint disappears with fewer than 3 routes and while you edit a saved play.

### Change a saved play {#draw-edit}
- **Edit in Draw** (play details or a draft) loads the play with line-up and routes; **Duplicate & draw** (play details) loads a copy that is saved as a new play ([more](#play-draw)). A bar shows what you are editing; **Cancel editing** leaves without saving.
- **Save changes** saves a catalog play right away (same ID; “Undo last edit” in the play details brings the old version back) or a draft back to Drafts. Your setup and a play you had started stay untouched.

## Drafts {#drafts}

### Where drafts come from {#drafts-source}
- New plays never go straight into the catalog. They wait here as drafts:
  - plays from [Draw](#draw),
  - plays from [Import](#import) with target “Drafts”.
- Drafts are grouped by sheet or drawing session, in their original order. After 14 days the tab reminds you of old drafts.

### Check and approve {#drafts-check}
- Each draft shows the graphic. Name, field, formation, QB, concept, situation, opponent, events and comment can be changed; every change is saved at once.
- **Unsure** values are marked. Tap **OK** next to a value, or **All OK** for the whole play, once it is right.
- Endzone plays with an **unclear distance** cannot be approved until you set it (“Set 7 yd”, the situation) or choose **Distance unknown**.
- “Will be saved as …” shows the final play ID.
- **Approve** moves the play into the catalog. **Approve all** approves every draft that has no open points and tells you what is left.
- **Edit in Draw** changes routes and line-up. **Discard** (tap twice) deletes the draft.

### Duplicates and variants {#duplicates}
- **Same as …:** the play is already in the catalog. “Approve (don't save)” only removes the draft – new opponents, events or targets are added to the existing play.
- **Variant of …:** same line-up, exactly one route different. “Approve merge” adds the different route as a dashed **option** to the existing play (a preview shows the result).
- **Keep separate** turns it into a normal draft that is saved as its own play.
- If the catalog play is [archived](#archive), the draft says “Matches archived play … – unarchive?”; **Unarchive** brings it back instead of saving the play again.
- Plays from different seasons are never merged – you only get a note. In the Endzone mirrored plays are kept separate, too.

## Analysis: heatmap {#heatmap}

### Zones and depth {#zones}
- Shows the **share of route ends per zone** for the filtered plays (or only the [selected plays](#analysis-scope)); [archived plays](#archive) never count. Zones are the same as in Depth S-I-D: Open Field depth from the line (short ≤ 7 yd incl. backfield, intermediate 7–12 yd, deep > 12 yd), Endzone depth from the goal line.
- **Field:** Open Field or Endzone – the plays of the other field are not counted. It is the same filter as Field in the Plays tab (that one is hidden here): switching sets both, and “all” there becomes the field shown here. With [Selection](#analysis-scope) the switch only changes the analysis.
- Players **without a route** are not shown in the heatmap (in Depth S-I-D they count as short).
- A **route end is not the pass target** – for targets use [Count](#count) → “Targets only”.
- Few plays give a “small sample” note: read the numbers with care.

### Filtered or selection {#analysis-scope}
- With plays selected ([Select](#select) in the Plays tab), the switch **Filtered / Selection (n)** appears at the top of the Analysis tab. **Filtered** (default) uses the plays that match the filters. **Selection** uses only the selected plays – across teams, the filters are ignored and hidden.
- **Analyze** in the selection bar jumps here with Selection.
- The banner “Analyzing 8 selected plays” shows it; with a bar filter it reads “8 selected · 3 shown”. **Back to Filtered** returns to the normal view.
- Bar clicks in Concepts & depth narrow the selection further; the filters of the Plays tab stay as they are.
- Count, Side and Options work as usual. Archived plays do not count here either.
- Clearing the selection or reloading the page goes back to Filtered.

### Side {#side}
“Real side” shows plays as drawn (not mirrored); with Count “By frequency” or “Targets only”, uses marked [flipped](#flipped) count mirrored. “Strong side right” mirrors plays with direction Left, so the strong side is always right.

### Group by {#group-by}
Splits the heatmap into one per formation, team, direction, concept, depth, season or opponent. A play with several opponents appears in each of their groups.

### Options {#heatmap-options}
- **Options ▸** folds out four settings: **Split option endings** (each ending of an option route counts on its own), **Show routes** (the routes next to the heatmap), **Count** and [Receiver](#receiver).
- Folded, settings that differ from the default stay visible as chips; × sets one back.

### Receiver {#receiver}
- Under **Options**, choose one or more receivers by label – **C** (center), **X**, **Y**, **Z** or other labels from the plays. Heatmap and Show routes then count only their routes and route ends, e.g. to see where Z runs or gets the ball.
- **All** (default) shows every route. Tap a label again to remove it. Folded, the choice stays visible as a chip “Receivers: X, Z ×”.
- Works with Count: with “Targets only” only the targets of these receivers count. Field, Side, Group by, the filters and [Selection](#analysis-scope) work as usual.
- The label counts, not the alignment: X is X whether it lines up outside or in the slot. A label without a route in the plays shown keeps its chip as “(0)”.
- Concepts & depth stay per play and ignore the receiver choice.

### Count {#count}
“Every play once” – each play counts once. “By frequency” – plays count as often as they were used ([game log](#game-log)); plays without entries count once. “Targets only” – only route ends that were targeted in the game log.

### Concepts & depth {#concepts}
- Share of plays (or uses / targeted routes, depending on Count) per concept, per depth combination S-I-D and per target.
- Click a bar to filter heatmap and catalog by it, click again to clear. Active filters also show as chips above the heatmap.
- Collapsed by default; click the heading to open it. **Show example plays** lists the plays behind the heatmap.

## Export and import {#export}

### PDF {#pdf}
- **Export as PDF** prints the filtered plays in catalog order: A4, three plays per row, only the graphics with play ID and situation. [Archived plays](#archive) are never printed.
- First you get a **PDF title** with a suggestion from teams, field and formation; Enter or “Create PDF” makes the file.
- Under the title a grey line lists field, formations, active filters, number of plays and date. Endzone plays start on a new page, grouped by distance.
- To print your own choice in your own order use [Select](#select) → PDF.

### JSON {#json}
- **Export ▾ → Export all plays as JSON**: all plays as one file – the way to share plays, and the same file as your [backup](#backup). Hidden teams and archived plays are included (archived ones with their mark), and so are the must-know marks.
- **Include game log** (ticked by default): uses, targets and downs of each play go into the file; Import and Restore bring them back. Untick it when you share plays with others.
- An export **without** the game log does not count as a backup – the backup bar stays.
- The play details have the same data under **JSON**.

### Offline version (HTML) {#offline-html}
- **Save offline version (HTML)**: one file with the current plays (without archived ones) that opens in any browser without internet – e.g. for the sideline. It is a snapshot: new plays only appear with a new export.
- It keeps filters, heatmap, PDF and this help, but nothing can be changed.

### Import {#import}
- **Import**: choose a JSON file with plays (from “Export all plays as JSON”, from Draw or from someone else) and where they go: **Drafts** (to check first) or **Catalog**.
- Before importing, the dialog shows each play, where it goes and its new ID. Every play gets a **new ID**; plays that are already in the catalog or in Drafts are skipped.
- Must-know marks and the game log in the file go along to the new ID (a draft gets its mark when you approve it).
- Variants of catalog plays always go to Drafts, to merge them there.
- To bring back your own backup with the same IDs use [Restore](#backup), not Import.

### Older and newer files {#file-versions}
- Every JSON file (export, selection, backup, folder file) starts with a short note on the version of the play format it was saved with.
- **Older files** stay readable: Import and Restore bring their plays up to date first, so nothing is lost when the format changes. Files from before this note count as the oldest version.
- **File from a newer version**: the dialog says so – reload the page to get the update, then import or restore again. The plays are read anyway.
- **Unknown fields**: if a file has fields this version does not know, the dialog lists them (“unknown fields (kept)”). They stay in the play and are not dropped.

### Backup and restore {#backup}
- **Export ▾ → Backup & restore** has everything in one place: when you last backed up, **Back up now** and **Restore from backup**. Manage teams links there, too.
- **Back up now** (or **Export now** in the backup bar) saves all plays with their game log and must-know marks in one JSON file. Keep it outside this browser, e.g. in your mail or cloud.
- The bar at the top reminds you when there is no backup yet, or the last one is older than 7 days and plays changed. “Export all plays as JSON” with “Include game log” counts as a backup, too – without the game log it does not.
- **Restore from backup**: choose a backup file. Only what is missing is restored, with the old IDs, game log and must-know marks – existing plays, game log entries and marks are never overwritten.
- Restore is for your own backups; plays from others come in with [Import](#import).

### Save to folder {#folder}
- **Computer with Chrome or Edge only** – other browsers, iPhone and Android do not show it; there use **Back up now**.
- Export ▾ → **Backup & restore** → **Save to folder…** → choose a folder, e.g. one your cloud syncs. The tool saves all plays of the open [catalog](#catalogs) with game log and must-know marks as **flag-scout-<catalog name>.json** (e.g. *flag-scout-my-plays.json*) – the same file as Back up now. Each catalog has its own file and remembers its own folder.
- After renaming a catalog the file gets the new name once the page reloads; the old file stays in the folder.
- The file is updated a few seconds after every change. While it runs, the backup bar stays away.
- After the browser restarts it asks for permission again: a bar at the top says **Saving to folder paused** – click **Allow**. Nothing is saved until you do, and changes wait.
- If the folder already has a file with plays, nothing is overwritten: choose **Restore from folder** to add what is missing here, or **Replace file**.
- **Restore from folder** works like [Restore from backup](#backup): only what is missing comes back. **Stop saving to folder** ends it; the file stays.
### Move to another device {#move}
1. On the old device: Export ▾ → **Backup & restore** → **Back up now**.
2. Send the file to the new device (mail, cloud, messenger).
3. On the new device: open the tool, Export ▾ → **Backup & restore** → **Restore from backup** → choose the file. Plays keep their IDs, game log and must-know marks.
- The two devices do not stay in sync – keep working on one of them.

## Terms {#terms}

### Words used on the page {#glossary}
- **LOS** – line of scrimmage, where the play starts.
- **Open Field / Endzone** – a play in the open field, or near the goal line (Endzone 10 yd deep; distance 5, 7 or 10 yd, 1PAT = 5 yd, 2PAT = 10 yd).
- **Direction** – the side of the strong side (more receivers), Left or Right.
- **Strong side / weak side** – the side with more / fewer receivers next to the center.
- **Formation** – Spread, Wing, Wing-Pro, Pro, 3-Bunch, Trips, 4-Bunch, Offset Back, Eagle.
- **Concept** – Hitches, Hitches + Shot, Mesh/Crosses, Flood, Follow, Run/2nd QB, Basic (no special concept), Special.
- **S-I-D** – how many routes (center and three receivers) end short, intermediate and deep, e.g. 2-1-1.
- **Option ending** – a dashed second ending of a route: the receiver reads and picks one.
- **Comeback ^** – a route whose end points back toward the line (hitch, comeback).
- **Delay** – a short zigzag on a route: stutter, hook & go.
- **Motion** – pre-snap movement of a player (grey dashed line).
- **Side snap / pitch / handoff** – ball paths other than the direct snap to the QB.
- **Must-know** – a play every player has to know (★).
- **Draft** – a new play that waits for approval.
- **Game log** – uses of a play: opponent, event, target, down.
- **Event** – when in the season a play was used, e.g. “Worldcup” or “Gameday 02.05.”.
- **Target** – the player the ball was thrown to.
