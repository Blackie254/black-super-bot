fetch('/set.js')
  .then(r => r.text())
  .then(data => {
    
    const clean = data
      .replace(/^[\s\S]*?module\.exports\s*=\s*/, '')
      .replace(/;\s*$/, '')
      .replace(/\/\/[^\n]*/g, '')
      .trim();

    let set = {};
    try {
      
      set = Function('"use strict"; return (' + clean + ')')();
    } catch (e) {
      console.warn('Could not parse set.js:', e);
    }

    const el = (id) => document.getElementById(id);

    el('val-botname').textContent = set.botname  || 'BLACK-MD';
    el('val-mode').textContent    = (set.mode     || 'public').toUpperCase();
    el('val-prefix').textContent  = set.prefix    || '.';
    el('val-pack').textContent    = set.packname  || 'skipper';
    el('val-author').textContent  = set.author    || 'botto';

    const owners = set.dev ? set.dev.split(',') : [];
    if (owners.length > 0) {
      const num = owners[0].trim();
      const masked = num.slice(0, 5) + '****' + num.slice(-3);
      el('val-owner').textContent = masked + (owners.length > 1 ? ` +${owners.length - 1} more` : '');
    } else {
      el('val-owner').textContent = 'Not set';
    }

    const modeEl = el('val-mode');
    if ((set.mode || 'public') === 'private') {
      modeEl.style.color = '#febc2e';
    }
  })
  .catch(() => {
    document.getElementById('val-botname').textContent = 'BLACK-MD';
    document.getElementById('val-mode').textContent    = 'PUBLIC';
    document.getElementById('val-prefix').textContent  = '.';
    document.getElementById('val-pack').textContent    = 'skipper';
    document.getElementById('val-author').textContent  = 'botto';
    document.getElementById('val-owner').textContent   = '254****550';
  });
