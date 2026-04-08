const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

const defaultSettings = {
  antilink: 'on',
  antilinkall: 'off',
  autobio: 'off',
  antidelete: 'on',
  antitag: 'on',
  antibot: 'off',
  anticall: 'on',
  badword: 'on',
  gptdm: 'off',
  welcomegoodbye: 'off',
  autoread: 'off',
  mode: 'public',
  prefix: '.',
  autolike: 'on',
  menutype: 'video',
  autoview: 'on',
  wapresence: 'recording'
};

async function initializeDatabase() {
  const client = await pool.connect();
  console.log("📡 Connecting to PostgreSQL...");

  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS bot_settings (
        id SERIAL PRIMARY KEY,
        key TEXT UNIQUE NOT NULL,
        value TEXT NOT NULL
      );
    `);

    for (const [key, value] of Object.entries(defaultSettings)) {
      await client.query(
        `INSERT INTO bot_settings (key, value)
         VALUES ($1, $2)
         ON CONFLICT (key) DO NOTHING;`,
        [key, value]
      );
    }

    console.log("✅ Database initialized.");
  } catch (err) {
    console.error("❌ Initialization error:", err);
  } finally {
    client.release();
  }
}

async function getSettings() {
  const client = await pool.connect();

  try {
    const result = await client.query(
      `SELECT key, value FROM bot_settings WHERE key = ANY($1::text[])`,
      [Object.keys(defaultSettings)]
    );

    const settings = {};
    for (const row of result.rows) {
      settings[row.key] = row.value;
    }

    console.log("✅ Settings fetched from DB.");
    return settings;

  } catch (err) {
    console.error("❌ Failed to fetch settings:", err);
    return defaultSettings;

  } finally {
    client.release();
  }
}

async function updateSetting(key, value) {
  const client = await pool.connect();
  try {
    const validKeys = Object.keys(defaultSettings);
    if (!validKeys.includes(key)) {
      throw new Error(`Invalid setting key: ${key}`);
    }

    await client.query(
      `UPDATE bot_settings SET value = $1 WHERE key = $2`,
      [value, key]
    );

   
    return true;
  } catch (err) {
    console.error("❌ Failed to update setting:", err.message || err);
    return false;
  } finally {
    client.release();
  }
}

module.exports = {
  initializeDatabase,
  getSettings,
  updateSetting
};
