// ──bot settings
fetch('/settings')
  .then(r => r.json())
  .then(set => {
    const el = (id) => document.getElementById(id);

    el('val-botname').textContent = set.botname || 'BLACK-MD';
    el('val-mode').textContent    = (set.mode   || 'public').toUpperCase();
    el('val-prefix').textContent  = set.prefix  || '.';
    el('val-presence').textContent    = (set.wapresence || 'recording').toUpperCase();
    el('val-menutype').textContent  = (set.menutype  || 'video').toUpperCase();

    const owners = set.dev ? set.dev.split(',') : [];
    if (owners.length > 0) {
      const num    = owners[0].trim();
      const masked = num.slice(0, 5) + '****' + num.slice(-3);
      el('val-owner').textContent = masked + (owners.length > 1 ? ` +${owners.length - 1} more` : '');
    } else {
      el('val-owner').textContent = 'Not set';
    }

    if ((set.mode || 'public') === 'private') {
      el('val-mode').style.color = '#febc2e';
    }
  })
  .catch(err => console.error('Failed to load /settings:', err));

// ──bot uptime
let botUptimeSeconds = 0;

function pad(n) { return String(n).padStart(2, '0'); }

function formatUptime(s) {
  const d   = Math.floor(s / 86400);
  const h   = Math.floor((s % 86400) / 3600);
  const m   = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (d > 0) return `${d}d ${pad(h)}:${pad(m)}:${pad(sec)}`;
  return `${pad(h)}:${pad(m)}:${pad(sec)}`;
}

fetch('/uptime')
  .then(r => r.json())
  .then(data => { botUptimeSeconds = data.uptime || 0; })
  .catch(() => { botUptimeSeconds = 0; });

setInterval(() => {
  botUptimeSeconds++;
  const el = document.getElementById('val-uptime');
  if (el) el.textContent = formatUptime(botUptimeSeconds);
}, 1000);
