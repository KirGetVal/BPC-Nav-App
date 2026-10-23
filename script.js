/* ---------- Config: change these if your APK file is named differently ---------- */
const APK_PATH = 'assets/BPCCampusNav.apk';
const APP_VERSION = '2.1.0';

/* ---------- Content ---------- */
const FEATURES = [
  { id: 'map', title: 'Interactive campus map', icon: '🗺️',
    lead: 'Pinch, pan and double-tap on OpenStreetMap tiles centered on BPC Main Campus.',
    points: ['20 color-coded pins for campus facilities, with a live BUSY badge on rooms in a meeting',
             'One-tap switch to ESRI satellite imagery',
             'Tap a pin for floor, coordinates, description, notes and your distance from it',
             'Copy coordinates, share a location, or request a room reservation from the same sheet',
             'Center BPC Campus and Pinpoint My Location buttons re-aim the camera instantly'] },
  { id: 'search', title: 'Smart search and filters', icon: '🔍',
    lead: 'A floating search bar finds places by name, category, floor, description or keyword.',
    points: ['Try "CR", "ComLab", "canteen", "printing" or "2nd floor". Search ignores capitals',
             'Results drop down in an elevated card while you type',
             'Filter chips narrow the map to Academic Buildings, Offices, Laboratories, Restrooms, Food and Dining, Stores, Health or Amenities'] },
  { id: 'route', title: 'Walking route planner', icon: '🧭',
    lead: 'Routes follow verified pedestrian pathways using Dijkstra\'s shortest path algorithm.',
    points: ['Start from your GPS position or from any campus room',
             'Turn-by-turn waypoint cards sit in one smooth scrolling list',
             'If your GPS is more than 2 km from campus, the route starts at the Main Entrance Arch Gate instead'] },
  { id: 'roles', title: 'Roles and admin dashboard', icon: '🔑',
    lead: 'Sign in as a Student, Teacher or Campus Administrator.',
    points: ['Admins see pending requests, active meetings and registered users at a glance',
             'Approve or reject each room request right on its card',
             'A user directory lists students, teachers and admins with their ID numbers',
             'Quick demo sign-in buttons make testing fast'] },
  { id: 'conflict', title: 'Booking conflict prevention', icon: '🛡️',
    lead: 'The app blocks a new booking when its time overlaps an approved one for the same room.',
    points: ['A red banner explains the conflict inside the reservation window',
             'Duplicate pending requests for the same room and time are rejected, and the submit button locks after one tap',
             'Students and teachers can only cancel their own pending requests'] },
  { id: 'profile', title: 'Profile and themes', icon: '👤',
    lead: 'Your initials appear in a round avatar with a color for your role.',
    points: ['Edit your name, ID number, email and password',
             'Material 3 theme in BPC forest green (#15803D) with light and dark modes',
             'Accounts, favorites, search history and reservations are saved on your device only'] }
];

const DEMOS = [
  { role: 'Admin', icon: '👑', email: 'admin@bpc.edu.ph', pass: 'admin123', note: 'Approve requests, see the user directory' },
  { role: 'Teacher', icon: '👨‍🏫', email: 'teacher@bpc.edu.ph', pass: 'teacher123', note: 'Request rooms for classes and meetings' },
  { role: 'Student', icon: '🎓', email: 'student@bpc.edu.ph', pass: 'student123', note: 'Browse the map, request a study room' }
];

const TESTS = [
  ['Dataset integrity', 'Exactly 20 locations with unique IDs and valid GPS'],
  ['Restroom records', '4 restrooms kept: 2 Boys CR, 2 Girls CR'],
  ['Footprint geometry', 'Activity Center and Building B use opposite corners'],
  ['Search engine', 'Matches "science", "comlab", "CR" and "2nd floor"'],
  ['Distance calculation', 'Haversine distance from entrance to main building'],
  ['Dijkstra routing', 'Walking path built with step waypoints'],
  ['Ongoing meetings', 'Active approved reservations report as ongoing'],
  ['Schedule conflict', 'Overlapping bookings for one room are rejected']
];

const FAQ = [
  ['Is the app free?', 'Yes. It uses free OpenStreetMap and ESRI tiles, so no paid map keys are involved.'],
  ['Does it work offline?', 'Your accounts, favorites, history and reservations live on the phone. Map tiles need internet the first time each area is shown, then OSMDroid can reuse its cache.'],
  ['Why does Android warn me about the APK?', 'The file is installed directly instead of from Google Play, so Android asks you to allow it. Only install APKs from sources you trust.'],
  ['Do I need to turn on location?', 'Only for centering on yourself and for routes from your position. You can still pick any campus room as the starting point.'],
  ['Which Android versions work?', 'Android 7.0 (API 24) or newer.'],
  ['Are reservations shared between phones?', 'No. Everything is stored locally, so each phone keeps its own accounts and bookings.']
];

/* ---------- Helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ---------- Features (tabs) ---------- */
const tabs = $('#featureTabs'), panel = $('#featurePanel');
function showFeature(i) {
  const f = FEATURES[i];
  [...tabs.children].forEach((b, n) => { b.setAttribute('aria-selected', n === i); b.tabIndex = n === i ? 0 : -1; });
  panel.setAttribute('aria-labelledby', 'tab-' + f.id);
  panel.innerHTML = `
    <div class="text-4xl mb-4" aria-hidden="true">${f.icon}</div>
    <h3 class="font-display font-bold text-2xl md:text-3xl">${esc(f.title)}</h3>
    <p class="mt-3 text-lg text-mist/80 max-w-2xl">${esc(f.lead)}</p>
    <ul class="mt-6 space-y-3 max-w-2xl">
      ${f.points.map(p => `<li class="flex gap-3 text-mist/75"><span class="mt-2 w-2 h-2 rounded-full bg-gold shrink-0"></span><span>${esc(p)}</span></li>`).join('')}
    </ul>`;
}
FEATURES.forEach((f, i) => {
  const b = document.createElement('button');
  b.className = 'ftab'; b.id = 'tab-' + f.id; b.setAttribute('role', 'tab');
  b.innerHTML = `<span aria-hidden="true" class="mr-2">${f.icon}</span>${esc(f.title)}`;
  b.addEventListener('click', () => showFeature(i));
  b.addEventListener('keydown', e => {
    if (!['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].includes(e.key)) return;
    e.preventDefault();
    const dir = (e.key === 'ArrowRight' || e.key === 'ArrowDown') ? 1 : -1;
    const n = (i + dir + FEATURES.length) % FEATURES.length;
    showFeature(n); tabs.children[n].focus();
  });
  tabs.appendChild(b);
});
showFeature(0);

/* ---------- Demo accounts ---------- */
$('#demoList').innerHTML = DEMOS.map((d, i) => `
  <div class="rounded-2xl bg-forest-900 border border-white/10 p-5 flex flex-wrap items-center gap-4 justify-between">
    <div class="flex items-center gap-4">
      <span class="text-3xl" aria-hidden="true">${d.icon}</span>
      <div>
        <h3 class="font-bold">${d.role}</h3>
        <p class="text-sm text-mist/60">${esc(d.note)}</p>
        <p class="mt-1 text-sm font-mono text-gold-soft break-all">${esc(d.email)} / ${esc(d.pass)}</p>
      </div>
    </div>
    <div class="flex gap-2">
      <button class="copy-btn px-3 py-2 rounded-lg border border-white/20 text-sm hover:border-gold" data-copy="${esc(d.email)}">Copy email</button>
      <button class="copy-btn px-3 py-2 rounded-lg border border-white/20 text-sm hover:border-gold" data-copy="${esc(d.pass)}">Copy password</button>
    </div>
  </div>`).join('');

document.addEventListener('click', async e => {
  const btn = e.target.closest('[data-copy]');
  if (!btn) return;
  const text = btn.dataset.copy, label = btn.textContent;
  try { await navigator.clipboard.writeText(text); }
  catch {
    const t = document.createElement('textarea'); t.value = text; document.body.appendChild(t); t.select();
    try { document.execCommand('copy'); } catch {} t.remove();
  }
  btn.textContent = 'Copied'; btn.classList.add('copied');
  setTimeout(() => { btn.textContent = label; btn.classList.remove('copied'); }, 1400);
});

/* ---------- Tests ---------- */
$('#testList').innerHTML = TESTS.map(([name, what]) => `
  <li class="flex items-start gap-3 rounded-xl bg-forest-900 border border-white/10 px-4 py-3">
    <span class="mt-0.5 text-xs font-bold bg-bpc text-white rounded px-2 py-0.5">Pass</span>
    <span><span class="font-bold">${esc(name)}.</span> <span class="text-mist/70">${esc(what)}</span></span>
  </li>`).join('');

/* ---------- FAQ ---------- */
$('#faqList').innerHTML = FAQ.map(([q, a]) => `
  <details class="py-4">
    <summary class="flex items-center justify-between gap-4 font-bold text-lg">
      ${esc(q)}
      <svg class="chev shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
    </summary>
    <p class="mt-3 text-mist/75 leading-relaxed">${esc(a)}</p>
  </details>`).join('');

/* ---------- APK download: file size + missing-file guard ---------- */
const status = $('#dlStatus'), sizeEl = $('#metaSize');
let apkMissing = false;

document.querySelectorAll('.apk-link').forEach(a => a.setAttribute('href', APK_PATH));
$('#metaVersion').textContent = APP_VERSION;

function fmtSize(bytes) {
  return bytes >= 1048576 ? (bytes / 1048576).toFixed(1) + ' MB' : Math.max(1, Math.round(bytes / 1024)) + ' KB';
}

(async function checkApk() {
  try {
    const res = await fetch(APK_PATH, { method: 'HEAD', cache: 'no-store' });
    if (!res.ok) { apkMissing = true; sizeEl.textContent = 'Unavailable'; return; }
    const len = res.headers.get('content-length');
    if (len) sizeEl.textContent = fmtSize(+len);
  } catch { /* opened as a local file, or blocked: let the browser try the download */ }
})();

document.addEventListener('click', e => {
  const link = e.target.closest('.apk-link');
  if (!link) return;
  if (apkMissing) {
    e.preventDefault();
    status.className = 'mt-4 text-sm min-h-[1.25rem] text-red-300';
    status.textContent = `The APK was not found at ${APK_PATH}. Put the file in the assets folder with that name, or update APK_PATH in script.js.`;
    return;
  }
  status.className = 'mt-4 text-sm min-h-[1.25rem] text-gold-soft';
  status.textContent = 'Download started. When it finishes, open the file from your Downloads and allow the install.';
});
