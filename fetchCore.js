'use strict';

const fetch = require('node-fetch');
const fs    = require('fs');
const path  = require('path');

const REPO   = 'McrayNick/BLACK-MD-PLUGINS';
const BRANCH = 'main';

async function fetchFolder(repoFolder, localFolder) {
      try {
    const files = await fetch(
      `https://api.github.com/repos/${REPO}/contents/${repoFolder}?ref=${BRANCH}`
    ).then(r => r.json());

    if (!Array.isArray(files)) return;
    if (!fs.existsSync(localFolder)) fs.mkdirSync(localFolder, { recursive: true });

    for (const file of files) {
      if (!file.name.endsWith('.js')) continue;
      const code = await fetch(file.download_url).then(r => r.text());
      fs.writeFileSync(path.join(localFolder, file.name), code, 'utf8');
      console.log(`  ↳ updated ${repoFolder}/${file.name}`);
    }
  } catch (err) {
    console.warn(`⚠️ Failed to fetch ${repoFolder}:`, err.message);
  }
}

async function fetchCore() {
  try {
    console.log('🔄 Fetching latest core files from GitHub...');
    try {
      const code = await fetch(
        `https://raw.githubusercontent.com/${REPO}/${BRANCH}/blacks.js`
      ).then(r => r.text());
      fs.writeFileSync(path.join(__dirname, 'blacks.js'), code, 'utf8');
      console.log('  ↳ updated blacks.js');
    } catch (err) {
      console.warn('⚠️ Failed to fetch blacks.js:', err.message);
    }

    await fetchFolder('lib', path.join(__dirname, 'lib'));
    await fetchFolder('database', path.join(__dirname, 'database'));
    await fetchFolder('action', path.join(__dirname, 'action'));

    console.log('✅ Core files loaded and updated successfully');
  } catch (err) {
    console.warn('⚠️ Failed to fetch Core files, using local files instead:', err.message);
  }
}

module.exports = { fetchCore };
