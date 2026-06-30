// BLACK-MD v3

require('dotenv').config({ path: './.Env' });
const {
  default: ravenConnect,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  downloadContentFromMessage,
  jidNormalizedUser,
  getContentType,
} = require("@whiskeysockets/baileys");

const pino = require("pino");
const { Boom } = require("@hapi/boom");
const fs = require("fs");
const path = require('path');
const express = require("express");
const chalk = require("chalk");
const FileType = require("file-type");
const figlet = require("figlet");
const app = express();
const logger = pino({ level: 'silent' });
const { fetchCore } = require('./fetchCore');
const { session, port } = require("./set.js");    
const makeInMemoryStore = require('./store/store.js'); 
const store = makeInMemoryStore({ logger: logger.child({ stream: 'store' }) });
const color = (text, color) => !color ? chalk.green(text) : chalk.keyword(color)(text);
const SESSION_DB_URL = process.env.SESSION_DB_URL || 'postgresql://session_reader.hohpglkadousjyfutkwe:ReadOnly2026BlackMD@aws-1-eu-north-1.pooler.supabase.com:5432/postgres';

async function authentication() {
  try {
    const sessionDir = path.join(__dirname, 'session');
    const credPath = path.join(sessionDir, 'creds.json');

    if (!session || typeof session !== 'string' || session.trim() === '') {
      throw new Error('SESSION env variable is missing or empty. Set it in your environment.');
    }

    const delimiterIndex = session.indexOf(':~');
    if (delimiterIndex === -1) {
      throw new Error('Invalid session format. Expected: BLACK-MD:~<key>');
    }

    const header = session.slice(0, delimiterIndex);
    const payload = session.slice(delimiterIndex + 2).trim();

    if (header !== 'BLACK-MD') {
      throw new Error(`Invalid session header "${header}". Expected "BLACK-MD".`);
    }

    if (!payload) {
      throw new Error('Session payload is empty after the BLACK-MD:~ prefix.');
    }

    let credsJson;

    if (/^[0-9A-F]{8}$/.test(payload)) {
      console.log('🔑 Short key detected — fetching from central DB...');
      const { Pool } = require('pg');
      const pool = new Pool({
        connectionString: SESSION_DB_URL,
        ssl: { rejectUnauthorized: false }
      });
      try {
        const result = await pool.query(
          'SELECT creds FROM sessions WHERE session_key = $1',
          [payload]
        );
        if (!result.rows.length) {
          throw new Error(`Session key "${payload}" not found. Re-generate your session at the session generator.`);
        }
        credsJson = result.rows[0].creds;
        console.log('✅ Session successfully fetched from central DB.');
      } finally {
        await pool.end();
      }
    } else {
      console.log('🔑 Legacy base64 session — decoding...');
      credsJson = Buffer.from(payload, 'base64').toString('utf8');
      try {
        JSON.parse(credsJson);
      } catch (_) {
        throw new Error('Session data is not valid JSON after decoding. Re-generate your session.');
      }
    }

    if (!fs.existsSync(sessionDir)) {
      fs.mkdirSync(sessionDir, { recursive: true });
    }

    fs.writeFileSync(
      credPath,
      typeof credsJson === 'string' ? credsJson : JSON.stringify(credsJson),
      'utf8'
    );
    console.log('✅ Session decoded and loaded successfully');

  } catch (error) {
    console.error('❌ Session Error:', error.message);
    process.exit(1);
  }
}

authentication(); 

async function startRaven() {
  const Events                   = require('./action/events');
  const { smsg }                 = require('./lib/ravenfunc');
  const { initializeDatabase }   = require('./database/config');
  const fetchSettings            = require('./database/fetchSettings');
  const { startPeriodicCleanup } = require('./lib/antidelete');
  const { fetchPlugins }         = require('./lib/fetchPlugins');

  try {
        initializeDatabase();
        console.log("✅ Database initialized successfully.");
      } catch (err) {
        console.error("❌ Failed to initialize database:", err.message || err);
  }
  
  let autobio, autolike, autoview, mode, prefix, anticall;

  try {
    const settings = await fetchSettings();
    console.log("😴 settings object:", settings);
    ({ autobio, autolike, autoview, mode, prefix, anticall } = settings);
    console.log("✅ Settings loaded successfully.... indexfile");
  } catch (error) {
    console.error("❌ Failed to load settings:...indexfile", error.message || error);
    return;
  }

  const { state, saveCreds } = await useMultiFileAuthState('session');
  await fetchPlugins();
  const { version, isLatest } = await fetchLatestBaileysVersion();
  console.log(`using WA v${version.join(".")}, isLatest: ${isLatest}`);
  console.log(
    color(
      figlet.textSync("BLACK-MD", {
        font: "Standard",
        horizontalLayout: "default",
        verticalLayout: "default",
        whitespaceBreak: false,
      }),
      "green"
    )
  );

  const client = ravenConnect({
    version,
    logger: pino({ level: "silent" }),
    printQRInTerminal: false,
    browser: ["BLACK-MD", "Safari", "5.1.7"],
    auth: state,
    syncFullHistory: true,
  });

  store.bind(client.ev);
  
  client.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === 'close') {
      let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
      if (reason === DisconnectReason.badSession) {
        console.log(`Bad Session File, Please Delete Session and Scan Again`);
        process.exit();
      } else if (reason === DisconnectReason.connectionClosed) {
        console.log("Connection closed, reconnecting....");
        startRaven();
      } else if (reason === DisconnectReason.connectionLost) {
        console.log("Connection Lost from Server, reconnecting...");
        startRaven();
      } else if (reason === DisconnectReason.connectionReplaced) {
        console.log("Connection Replaced, Another New Session Opened, Please Restart Bot");
        process.exit();
      } else if (reason === DisconnectReason.loggedOut) {
        console.log(`Device Logged Out, Please Delete Session_id and Scan Again.`);
        process.exit();
      } else if (reason === DisconnectReason.restartRequired) {
        console.log("Restart Required, Restarting...");
        startRaven();
      } else if (reason === DisconnectReason.timedOut) {
        console.log("Connection TimedOut, Reconnecting...");
        startRaven();
      } else {
        console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
        startRaven();
      }
    } else if (connection === 'open') {
  
  try {
        await client.groupAcceptInvite('GDgPc1O7vzP5HujmwlES01');
      } catch (_) {}

      startPeriodicCleanup();
      console.log(color("Congrats, BLACK MD has successfully connected to this server", "green"));
      console.log(color("Follow me on github as Blackie254", "red"));
      console.log(color("Text the bot number with menu to check my command list"));
      const Texxt = `✅ 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 » »【BLACK MD】\n` +
                    `👥 𝗠𝗼𝗱𝗲 »» ${mode}\n` +
                    `👤 𝗣𝗿𝗲𝗳𝗶𝘅 »» ${prefix}`;
      client.sendMessage(client.user.id, { text: Texxt });
    }
  });
  
  client.ev.on("creds.update", saveCreds);
  
  setInterval(async () => {
    try {
      const liveSettings = await fetchSettings();
      if (liveSettings.autobio === 'on') {
        const date = new Date();
        client.updateProfileStatus(
          `${date.toLocaleString('en-US', { timeZone: 'Africa/Nairobi' })} It's a ${date.toLocaleString('en-US', { weekday: 'long', timeZone: 'Africa/Nairobi' })}.`
        );
      }
    } catch (e) {
      console.error('autobio interval error:', e.message);
    }
  }, 10 * 1000);

  client.ev.on("messages.upsert", async (chatUpdate) => {
    try {
      if (!chatUpdate.messages || !chatUpdate.messages[0]) return;

      let mek = chatUpdate.messages[0];
      if (!mek.message) return;

      mek.message = getContentType(mek.message) === "ephemeralMessage"
        ? mek.message.ephemeralMessage.message
        : mek.message;

      const isStatus = mek.key.remoteJid === "status@broadcast";

      if (isStatus) {
        try {
          const liveSettings = await fetchSettings();
          const participantToUse = mek.key.participantPn || mek.key.participant;
          if (!participantToUse) return;

          const botJid = jidNormalizedUser(client.user.id);
          const baseKey = {
            remoteJid: mek.key.remoteJid,
            id: mek.key.id,
            fromMe: mek.key.fromMe,
            participant: participantToUse,
          };

          if (liveSettings.autoview === "on") {
            await client.readMessages([baseKey]);
          }

          if (liveSettings.autolike === "on") {
            const emojis = ['💚', '🗿', '⌚️', '💠', '👣', '💙', '✅', '🤍', '🛰️', '💫', '♥️'];
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            await client.sendMessage(
              mek.key.remoteJid,
              { react: { key: baseKey, text: randomEmoji } },
              { statusJidList: [participantToUse, botJid] }
            );
          }
        } catch (error) {
          console.error("Status handling error:", error);
        }
      }

      if (!client.public && !mek.key.fromMe && chatUpdate.type === "notify") return;

      let m = smsg(client, mek, store);
      const raven = require("./blacks");
      raven(client, m, chatUpdate, store);

    } catch (err) {
      console.log("Error in messages.upsert:", err);
    }
  });
  
  const unhandledRejections = new Map();
  process.on("unhandledRejection", (reason, promise) => {
    unhandledRejections.set(promise, reason);
    console.log("Unhandled Rejection at:", promise, "reason:", reason);
  });
  process.on("rejectionHandled", (promise) => {
    unhandledRejections.delete(promise);
  });
  process.on("uncaughtException", function (err) {
    console.log("Caught exception: ", err);
  });

  client.ev.on("contacts.update", (update) => {
    for (let contact of update) {
      let id = jidNormalizedUser(contact.id);
      if (store && store.contacts) store.contacts[id] = { id, name: contact.notify };
    }
  });
  
  client.ev.on("contacts.upsert", (contacts) => {
    for (let contact of contacts) {
      const id = jidNormalizedUser(contact.id);
      if (store && store.contacts) store.contacts[id] = { id, name: contact.notify || contact.name || "" };
    }
  });

  client.ev.on("group-participants.update", async (update) => {
    Events(client, update);
  });
  
  let lastTextTime = 0;
  const messageDelay = 5000;
  
  client.ev.on('call', async (callData) => {
    try {
      const liveSettings = await fetchSettings();
      if (liveSettings.anticall === 'on') {
        const callId = callData[0].id;
        const callerId = callData[0].from;
        const isGroup = callData[0].isGroup;
        if (isGroup) return;
        await client.rejectCall(callId, callerId);
        const currentTime = Date.now();
        if (currentTime - lastTextTime >= messageDelay) {
          await client.sendMessage(callerId, {
            text: "🚫 Anticall is active! Only text messages are allowed"
          });
          lastTextTime = currentTime;
        } else {
          console.log('Message skipped to prevent overflow');
        }
      }
    } catch (e) {
      console.error('anticall handler error:', e.message);
    }
  });
      
  client.getName = (jid, withoutContact = false) => {
    let id = jidNormalizedUser(jid);
    withoutContact = client.withoutContact || withoutContact;
    let v;
    if (id.endsWith("@g.us"))
      return new Promise(async (resolve) => {
        v = store.contacts[id] || {};
        if (!(v.name || v.subject)) v = client.groupMetadata(id) || {};
        resolve(v.name || v.subject || PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber("international"));
      });
    else
      v = id === "0@s.whatsapp.net"
        ? { id, name: "WhatsApp" }
        : id === jidNormalizedUser(client.user.id)
          ? client.user
          : store.contacts[id] || {};
    return (withoutContact ? "" : v.name) || v.subject || v.verifiedName ||
      PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber("international");
  };

  client.public = true;
  client.serializeM = (m) => smsg(client, m, store);

  client.downloadMediaMessage = async (message) => {
    let mime = (message.msg || message).mimetype || '';
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
    const stream = await downloadContentFromMessage(message, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk]);
    return buffer;
  };

  client.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message;
    let mime = (message.msg || message).mimetype || '';
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
    const stream = await downloadContentFromMessage(quoted, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk]);
    let type = await FileType.fromBuffer(buffer);
    if (!type) throw new Error(`Could not detect file type for: ${messageType}`);
    let baseName = filename || `media_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    let trueFileName = attachExtension ? (baseName + '.' + type.ext) : baseName;
    fs.writeFileSync(trueFileName, buffer);
    return trueFileName;
  };

  client.sendText = (jid, text, quoted = "", options) =>
    client.sendMessage(jid, { text: text, ...options }, { quoted });

  return client;
}

app.use(express.static("pixel"));
app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
app.listen(port, () => console.log(`Server listening on port http://localhost:${port}`));

fetchCore().then(() => startRaven());

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
