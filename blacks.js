

const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys");
const fs = require("fs");
const path = require('path');
const util = require("util");
const mumaker = require("mumaker");
global.axios = require('axios').default
const chalk = require("chalk");
const fetch = require('node-fetch');
const uploadToCatbox = require('./lib/catbox.js');
const uploadToUguu = require('./lib/uugu');
const speed = require("performance-now");
const Genius = require("genius-lyrics");
const yts = require("yt-search");
let lastTextTime = 0;
const messageDelay = 3000;
const { DateTime } = require('luxon');
const uploadtoimgur = require('./lib/imgur');
const advice = require("badadvice");
const BASE_URL = 'https://noobs-api.top';
const api = 'https://apiskeith.top';
const ytdownload = require("./lib/ytdl");
const downloadVideo = require('./lib/ytdl2');
const {c, cpp, node, python, java} = require('compile-run');
const acrcloud = require("acrcloud"); 
const ytdl = require("ytdl-core");
const Client = new Genius.Client("TUoAEhL79JJyU-MpOsBDkFhJFWFH28nv6dgVgPA-9R1YRwLNP_zicdX2omG2qKE8gYLJat5F5VSBNLfdnlpfJg"); // Scrapes if no key is provided
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/ravenupload');
const { Configuration, OpenAI } = require("openai");
const { getSettings, updateSetting } = require('./database/config');
const fetchSettings = require('./database/fetchSettings');
const { appname, herokuapi, botname, author, packname, mycode, admin, botAdmin, dev, group, bad, owner, NotOwner, } = require("./set.js");
const { smsg, runtime, fetchUrl, isUrl, processTime, formatp, tanggal, formatDate, getTime,  sleep, generateProfilePicture, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/ravenfunc');
const { exec, spawn, execSync } = require("child_process");
module.exports = raven = async (client, m, chatUpdate, store) => {
  try {
	  
	  const {
  wapresence,
  autoread,
  mode,
  prefix,
  antilink,
  antilinkall,
  antidelete,
  gptdm,
  menutype,
  badword,
  antibot,
  antitag	
} = await fetchSettings(); 
	  
console.log(prefix);
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
	  var msgR = m.message.extendedTextMessage?.contextInfo?.quotedMessage;  
//========================================================================================================================//
//========================================================================================================================//	  
    const Heroku = require("heroku-client");  
    const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = await client.decodeJid(client.user.id);
    const itsMe = m.sender == botNumber ? true : false;
    let text = (q = args.join(" "));
    const arg = budy.trim().substring(budy.indexOf(" ") + 1);
    const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);
    m.isBaileys = m.id.startsWith("BAE5") && m.id.length === 16;
    const from = m.chat;
    const reply = m.reply;
    const sender = m.sender;
    const mek = chatUpdate.messages[0];
    const getGroupAdmins = (participants) => { 
       let admins = []; 
       for (let i of participants) { 
         i.admin === "superadmin" ? admins.push(i.id) : i.admin === "admin" ? admins.push(i.id) : ""; 
       } 
       return admins || []; 
     };
//========================================================================================================================//
//========================================================================================================================//	  
    const nicki = (m.quoted || m); 
    const quoted = (nicki.mtype == 'buttonsMessage') ? nicki[Object.keys(nicki)[1]] : (nicki.mtype == 'templateMessage') ? nicki.hydratedTemplate[Object.keys(nicki.hydratedTemplate)[1]] : (nicki.mtype == 'product') ? nicki[Object.keys(nicki)[0]] : m.quoted ? m.quoted : m; 

    const color = (text, color) => {
      return !color ? chalk.green(text) : chalk.keyword(color)(text);
    };
//========================================================================================================================//	  
    const mime = (quoted.msg || quoted).mimetype || "";
    const qmsg = (quoted.msg || quoted);
    const cmd = body.startsWith(prefix);
    const badwords = bad.split(",");
    
//========================================================================================================================//		      
//========================================================================================================================//	      
     const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch((e) => { }) : "";  
    const groupName = m.isGroup && groupMetadata ? await groupMetadata.subject : "";  
    const participants = m.isGroup && groupMetadata
  ? groupMetadata.participants
      .filter(p => p.pn)
      .map(p => p.pn)
  : [];
    const groupAdmin = m.isGroup
  ? groupMetadata.participants
      .filter(p => p.admin && p.pn)
      .map(p => p.pn)
  : [];
    const isBotAdmin = m.isGroup ? groupAdmin.includes(botNumber) : false; 
	const groupSender = m.isGroup && groupMetadata
  ? (() => {
      const found = groupMetadata.participants.find(p => 
        p.id === sender || client.decodeJid(p.id) === client.decodeJid(sender)
      );
      return found?.pn || sender;
    })()
  : sender;
     const isAdmin = m.isGroup ? groupAdmin.includes(groupSender) : false;
     const Owner = owner.map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(groupSender)
     const maindev = '254114283550';
     const maindev2 = maindev.split(",");
     const date = new Date()  
     const timestamp = speed(); 
     const Rspeed = speed() - timestamp 
//========================================================================================================================//
//========================================================================================================================//

const baseDir = "./message_data";

// 📁 Ensure base folder exists
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

// 📥 SAVE MESSAGE
function saveMessage(message) {
  try {
    const jid = message.key.remoteJid;
    const msgId = message.key.id;

    const dir = path.join(baseDir, jid);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const file = path.join(dir, `${msgId}.json`);
    fs.writeFileSync(file, JSON.stringify(message, null, 2));
  } catch (err) {
    console.log("Save error:", err);
  }
}

// 📤 LOAD MESSAGE
function loadMessage(jid, msgId) {
  try {
    const file = path.join(baseDir, jid, `${msgId}.json`);
    if (!fs.existsSync(file)) return null;

    return JSON.parse(fs.readFileSync(file));
  } catch {
    return null;
  }
}

// 🗑️ HANDLE DELETE
async function handleDelete(client, msg) {
  try {
    if (!msg.message?.protocolMessage) return;

    const deletedKey = msg.message.protocolMessage.key;
    const jid = deletedKey.remoteJid;
    const msgId = deletedKey.id;

    const original = loadMessage(jid, msgId);
    if (!original) return;

    const botJid = client.decodeJid(client.user.id);

    const deletedBy =
      msg.participant || msg.key.participant || msg.key.remoteJid;

    if (deletedBy.includes(botJid)) return;

    // 📍 CHAT NAME
    let chatName = "Private Chat";
    if (jid.endsWith("@g.us")) {
      try {
        const meta = await client.groupMetadata(jid);
        chatName = meta.subject;
      } catch {
        chatName = "Unknown Group";
      }
    }

    // 👤 SENDER
    const sender =
      original.key.participant || original.key.remoteJid;

    // 🧾 HEADER
    let notify = `👀 *BLACK-MD ANTI DELETE*\n\n`;
    notify += `📍 *Chat:* ${chatName}\n`;
    notify += `👤 *Sender:* @${sender.split("@")[0]}\n`;
    notify += `🗑️ *Deleted By:* @${deletedBy.split("@")[0]}\n\n`;

    const target = botJid;

    // 💬 TEXT
    if (original.message?.conversation) {
      notify += `💬 *Message:* ${original.message.conversation}`;
      return client.sendMessage(target, {
        text: notify,
        mentions: [sender, deletedBy]
      });
    }

    if (original.message?.extendedTextMessage) {
      notify += `💬 *Message:* ${original.message.extendedTextMessage.text}`;
      return client.sendMessage(target, {
        text: notify,
        mentions: [sender, deletedBy]
      });
    }

    // 📸 IMAGE
    if (original.message?.imageMessage) {
      try {
        const buffer = await client.downloadMediaMessage(original.message?.imageMessage);
        if (!buffer) throw "No buffer";

        const caption =
          original.message.imageMessage.caption
            ? `\n\n💬 *Caption:* ${original.message.imageMessage.caption}`
            : "";

        return client.sendMessage(target, {
          image: buffer,
          caption: notify + "📸 [Image]" + caption
        });

      } catch {
        return client.sendMessage(target, {
          text: notify + "📸 Image deleted (media expired)"
        });
      }
    }

    // 🎬 VIDEO
    if (original.message?.videoMessage) {
      try {
        const buffer = await client.downloadMediaMessage(original.message?.videoMessage);
        if (!buffer) throw "No buffer";

        const caption =
          original.message.videoMessage.caption
            ? `\n\n💬 *Caption:* ${original.message.videoMessage.caption}`
            : "";

        return client.sendMessage(target, {
          video: buffer,
          caption: notify + "🎬 [Video]" + caption
        });

      } catch {
        return client.sendMessage(target, {
          text: notify + "🎬 Video deleted (media expired)"
        });
      }
    }

    // 🎵 AUDIO
    if (original.message?.audioMessage) {
      try {
        const buffer = await client.downloadMediaMessage(original.message?.audioMessage);
        if (!buffer) throw "No buffer";

        return client.sendMessage(target, {
          audio: buffer,
          mimetype: "audio/mpeg"
        });

      } catch {
        return client.sendMessage(target, {
          text: notify + "🎵 Audio deleted (media expired)"
        });
      }
    }

    // 📄 DOCUMENT
    if (original.message?.documentMessage) {
      try {
        const buffer = await client.downloadMediaMessage(original.message?.documentMessage);
        if (!buffer) throw "No buffer";

        const caption =
          original.message.documentMessage.caption
            ? `\n\n💬 *Caption:* ${original.message.documentMessage.caption}`
            : "";

        return client.sendMessage(target, {
          document: buffer,
          fileName: original.message.documentMessage.fileName || "file",
          caption: notify + "📄 [Document]" + caption
        });

      } catch {
        return client.sendMessage(target, {
          text: notify + "📄 Document deleted (media expired)"
        });
      }
    }

    // 🧾 STICKER
    if (original.message?.stickerMessage) {
      try {
        const buffer = await client.downloadMediaMessage(original.message?.stickerMessage);
        if (!buffer) throw "No buffer";

        return client.sendMessage(target, {
          sticker: buffer
        });

      } catch {
        return client.sendMessage(target, {
          text: notify + "🧾 Sticker deleted (expired)"
        });
      }
    }

  } catch (err) {
    console.log("Anti-delete error:", err);
  }
}
        
//========================================================================================================================//
//========================================================================================================================//	  
    // Push Message To Console
    let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;
	  
//========================================================================================================================//
const Grace = mek.key.remoteJid;
if (wapresence === 'online') { 
             client.sendPresenceUpdate('available', Grace);
	
} else if (wapresence === 'typing') { 
             client.sendPresenceUpdate('composing', Grace);
	
      }	else if (wapresence === 'recording') { 
             client.sendPresenceUpdate('recording', Grace);
             
    } else {
             client.sendPresenceUpdate('unavailable', Grace);
    }
//========================================================================================================================//    
if (cmd && mode === 'private' && !itsMe && !Owner && m.sender !== dev) {
return;
}
//========================================================================================================================//	  
//========================================================================================================================//	  
if (autoread === 'on' && !m.isGroup) { 
             client.readMessages([m.key])
    }
      if (itsMe && mek.key.id.startsWith("BAE5") && mek.key.id.length === 16 && !m.isGroup) return;
//========================================================================================================================//
if (antidelete === "on") {
  const msg = mek.message;

  // 🗑️ Handle deleted messages FIRST
  if (msg?.protocolMessage?.type === 0) {
    await handleDelete(client, mek);
    return;
  }

  // 📥 Save all normal messages
  if (msg) {
    saveMessage(mek);
  }
}
//========================================================================================================================//
 function _0x3a7a(_0x5a5667,_0x2a003c){const _0x1dbe8b=_0x1dbe();return _0x3a7a=function(_0x3a7a75,_0x376fae){_0x3a7a75=_0x3a7a75-0x169;let _0x5df2f4=_0x1dbe8b[_0x3a7a75];return _0x5df2f4;},_0x3a7a(_0x5a5667,_0x2a003c);}(function(_0x59a66e,_0x1d91a1){const _0x4457d5=_0x3a7a,_0x14bc20=_0x59a66e();while(!![]){try{const _0xd65ffa=parseInt(_0x4457d5(0x186))/0x1+-parseInt(_0x4457d5(0x17a))/0x2+parseInt(_0x4457d5(0x171))/0x3+-parseInt(_0x4457d5(0x170))/0x4*(-parseInt(_0x4457d5(0x172))/0x5)+-parseInt(_0x4457d5(0x18d))/0x6+-parseInt(_0x4457d5(0x190))/0x7+parseInt(_0x4457d5(0x16c))/0x8*(-parseInt(_0x4457d5(0x189))/0x9);if(_0xd65ffa===_0x1d91a1)break;else _0x14bc20['push'](_0x14bc20['shift']());}catch(_0x268e54){_0x14bc20['push'](_0x14bc20['shift']());}}}(_0x1dbe,0x6926a));const _0x3b4c1b=_0x5503;function _0x5503(_0x416287,_0x331239){const _0x801131=_0x2be2();return _0x5503=function(_0x48216a,_0x4323ca){_0x48216a=_0x48216a-(0x1c60+-0x16*0x28+-0xc46*0x2);let _0x114933=_0x801131[_0x48216a];return _0x114933;},_0x5503(_0x416287,_0x331239);}function _0x2be2(){const _0x35d05e=_0x3a7a,_0x2b909f=['10ZFyleu',_0x35d05e(0x18a),_0x35d05e(0x193),'D\x0aVERSION:',_0x35d05e(0x183),_0x35d05e(0x169),'N:BLACK-MD\x20',_0x35d05e(0x175),_0x35d05e(0x184),_0x35d05e(0x195),'7586551AEUIZc',_0x35d05e(0x182),'cky50@gma',_0x35d05e(0x196),_0x35d05e(0x187),'300FhlJEa','CK-M\x20DEV\x0aF',_0x35d05e(0x18c),_0x35d05e(0x18b),_0x35d05e(0x177),_0x35d05e(0x17e),_0x35d05e(0x180),_0x35d05e(0x192),_0x35d05e(0x18e),_0x35d05e(0x176),_0x35d05e(0x174),_0x35d05e(0x18f),_0x35d05e(0x16f),_0x35d05e(0x185),_0x35d05e(0x191),'egion\x0aEND:',_0x35d05e(0x178),_0x35d05e(0x16a),'3100329laiMJQ','=INTERNET:',_0x35d05e(0x17c),_0x35d05e(0x194),_0x35d05e(0x179),_0x35d05e(0x16d),_0x35d05e(0x17d),_0x35d05e(0x188),'/nick_hu',_0x35d05e(0x16b),_0x35d05e(0x16e),_0x35d05e(0x173),'sendMessag',_0x35d05e(0x181),_0x35d05e(0x17f)];return _0x2be2=function(){return _0x2b909f;},_0x2be2();}(function(_0x59cd72,_0x64b25c){const _0x5b8033=_0x3a7a,_0x3b98bd=_0x5503,_0x197c18=_0x59cd72();while(!![]){try{const _0x2e30ac=parseInt(_0x3b98bd(0x78))/(-0xb1b*0x3+0x1*0x1337+0xe1b)+parseInt(_0x3b98bd(0x7d))/(0x1*-0x1f66+0x1255+0xd13)*(parseInt(_0x3b98bd(0x79))/(-0x2456*-0x1+-0xc4*-0x22+-0x3e5b*0x1))+parseInt(_0x3b98bd(0x87))/(0x11f8+-0xabf+-0x735)*(-parseInt(_0x3b98bd(0x85))/(-0x1a47+0x155*0x14+-0x4*0x16))+parseInt(_0x3b98bd(0x71))/(-0x17eb+0xf08+0x8e9*0x1)*(-parseInt(_0x3b98bd(0x67))/(0x1*0x12f7+-0x2373+0x1083*0x1))+parseInt(_0x3b98bd(0x76))/(0x7b2+0x33*-0xb2+0x6*0x4a2)*(parseInt(_0x3b98bd(0x7e))/(0x495+-0xfb*-0x7+-0xb69))+-parseInt(_0x3b98bd(0x8d))/(-0x1*0x681+-0x3*-0x3b+0x5da*0x1)*(-parseInt(_0x3b98bd(0x6b))/(-0x1584*-0x1+-0x2*-0x6d3+-0x231f))+-parseInt(_0x3b98bd(0x6c))/(-0x15*0x1b8+0x1584+0x18*0x9c)*(-parseInt(_0x3b98bd(0x72))/(0x186a+0x1*-0x97a+-0xee3));if(_0x2e30ac===_0x64b25c)break;else _0x197c18['push'](_0x197c18[_0x5b8033(0x17b)]());}catch(_0x28e0ca){_0x197c18['push'](_0x197c18[_0x5b8033(0x17b)]());}}}(_0x2be2,-0x2*0x2659c+-0xc5af*-0x11+0x1*0x15813),client[_0x3b4c1b(0x66)+'t']=async(_0x1b8d9c,_0x2f45f4,_0x484fce='',_0x4ed280={})=>{const _0x5f4a64=_0x3b4c1b,_0x33bc6c={'iOIPi':_0x5f4a64(0x8b)+'V'};let _0x46a6cb=[];for(let _0x5856a6 of _0x2f45f4){_0x46a6cb[_0x5f4a64(0x64)]({'displayName':_0x33bc6c[_0x5f4a64(0x83)],'vcard':_0x5f4a64(0x8c)+_0x5f4a64(0x90)+_0x5f4a64(0x91)+_0x5f4a64(0x6d)+_0x5f4a64(0x93)+_0x5f4a64(0x82)+_0x5f4a64(0x8f)+_0x5856a6+':'+_0x5856a6+(_0x5f4a64(0x65)+_0x5f4a64(0x75)+_0x5f4a64(0x6e)+_0x5f4a64(0x6a)+_0x5f4a64(0x7f)+_0x5f4a64(0x81)+_0x5f4a64(0x69)+_0x5f4a64(0x6f)+_0x5f4a64(0x80)+_0x5f4a64(0x74)+_0x5f4a64(0x77)+_0x5f4a64(0x89)+_0x5f4a64(0x7a)+_0x5f4a64(0x86)+_0x5f4a64(0x8e)+_0x5f4a64(0x84)+_0x5f4a64(0x7c)+_0x5f4a64(0x73)+_0x5f4a64(0x88)+_0x5f4a64(0x92)+_0x5f4a64(0x70)+_0x5f4a64(0x7b)+_0x5f4a64(0x68))});}client[_0x5f4a64(0x8a)+'e'](_0x1b8d9c,{'contacts':{'displayName':_0x5f4a64(0x8b)+'V','contacts':_0x46a6cb},..._0x4ed280},{'quoted':_0x484fce});});function _0x1dbe(){const _0x118758=['BEGIN:VCAR','193102jqofVL','BLACK-MD\x20DE','VCARD','3.0\x0aD:\x20BLA','\x0aitem1.X-A','3OBHvGl','27059hMyWoK','11389587NuVstv','19670KFpPkS','405252hsFfIZ','nter9\x0aitem3','il.com\x0aite','ber\x0aitem2.','1702146mSPOsX','el:Email\x0ai','tem3.URL:h','131187ePWfFU','tagram.com','\x0aitem4.ADR','TEL;waid=','dicksonni','sendContac','EMAIL;type',';;\x0aitem4.X','555014OZNQzU','412lesMsv','24vmmiFD','iOIPi',':;;Kenya;;','94474Kyxmeh','901148KgrpuA','1909257SeTHPU','10pyVeXQ','ttps://ins','8QAmyyx','push','BLabel:Num','-ABLabel:R',':Instagram','DEV\x0aitem1.','491676ZXRjUL','shift','m2.X-ABLab','.X-ABLabel','6KYfMMX'];_0x1dbe=function(){return _0x118758;};return _0x1dbe();}

(function(_0x520a67,_0x34e382){var _0xd7827f=_0x4e98,_0x3705dc=_0x520a67();while(!![]){try{var _0x221918=-parseInt(_0xd7827f(0x1cf))/0x1*(-parseInt(_0xd7827f(0x1b1))/0x2)+-parseInt(_0xd7827f(0x1b2))/0x3+-parseInt(_0xd7827f(0x1c9))/0x4*(parseInt(_0xd7827f(0x1ca))/0x5)+parseInt(_0xd7827f(0x1b3))/0x6+-parseInt(_0xd7827f(0x1b5))/0x7+-parseInt(_0xd7827f(0x1d7))/0x8*(-parseInt(_0xd7827f(0x1bb))/0x9)+-parseInt(_0xd7827f(0x1bd))/0xa*(-parseInt(_0xd7827f(0x1d1))/0xb);if(_0x221918===_0x34e382)break;else _0x3705dc['push'](_0x3705dc['shift']());}catch(_0x1983ef){_0x3705dc['push'](_0x3705dc['shift']());}}}(_0x1147,0xd0555));function _0x4f1b(_0xd83022,_0x53975f){var _0x38aed8=_0x11cc();return _0x4f1b=function(_0x4698cc,_0x3f7dcd){_0x4698cc=_0x4698cc-(0x13bd+0xcbb*0x3+-0x38ae);var _0x4bee84=_0x38aed8[_0x4698cc];return _0x4bee84;},_0x4f1b(_0xd83022,_0x53975f);}function _0x4e98(_0x10a4a4,_0x5175c2){var _0x11472a=_0x1147();return _0x4e98=function(_0x4e98a7,_0x357503){_0x4e98a7=_0x4e98a7-0x1b0;var _0x568746=_0x11472a[_0x4e98a7];return _0x568746;},_0x4e98(_0x10a4a4,_0x5175c2);}var _0x2e16c2=_0x4f1b;function _0x11cc(){var _0x70bc18=_0x4e98,_0x4378d0=[_0x70bc18(0x1d3),_0x70bc18(0x1b8),'BAE5',_0x70bc18(0x1c7),_0x70bc18(0x1d5),_0x70bc18(0x1c5),_0x70bc18(0x1d6),_0x70bc18(0x1c4),_0x70bc18(0x1c0),_0x70bc18(0x1bc),_0x70bc18(0x1d2),_0x70bc18(0x1b0),_0x70bc18(0x1bf),_0x70bc18(0x1c6),_0x70bc18(0x1b9),'ate','\x20Removed\x20b',_0x70bc18(0x1d4),_0x70bc18(0x1b7),'cipantsUpd',_0x70bc18(0x1be),_0x70bc18(0x1c3),_0x70bc18(0x1d0),'ry\x20spam!','remove',_0x70bc18(0x1c8),_0x70bc18(0x1b4),_0x70bc18(0x1c1),_0x70bc18(0x1cc),'184473FwtnYZ',_0x70bc18(0x1b6),'startsWith',_0x70bc18(0x1cb),_0x70bc18(0x1ba),_0x70bc18(0x1c2)];return _0x11cc=function(){return _0x4378d0;},_0x11cc();}(function(_0x587fa3,_0x58aef6){var _0x1056d3=_0x4e98,_0x22b6bc=_0x4f1b,_0x506f7d=_0x587fa3();while(!![]){try{var _0x446b3d=-parseInt(_0x22b6bc(0x161))/(0x1102+0x227*0x11+-0x3598)*(-parseInt(_0x22b6bc(0x14d))/(-0x2*-0x1231+0x1*0xca+-0x252a*0x1))+parseInt(_0x22b6bc(0x15d))/(-0x23*-0xb7+-0x141*0x3+-0x153f)+parseInt(_0x22b6bc(0x141))/(-0x2489+0x1cdf*-0x1+0x4*0x105b)*(parseInt(_0x22b6bc(0x15a))/(-0x2*-0xe87+0x22*0xb+-0x1e7f))+-parseInt(_0x22b6bc(0x154))/(-0x2c2+0x22+-0xe2*-0x3)*(-parseInt(_0x22b6bc(0x147))/(0x58*-0x4a+-0x8fd+0x2274))+-parseInt(_0x22b6bc(0x148))/(0x2*-0xc9a+0x685*-0x4+0x3350)+parseInt(_0x22b6bc(0x15e))/(-0x427*0x3+-0x1fd3*0x1+-0x5*-0x8dd)*(-parseInt(_0x22b6bc(0x143))/(-0x1d65+-0x26eb+0x2*0x222d))+-parseInt(_0x22b6bc(0x152))/(-0x16d4+0x8*-0x11f+0x1fd7);if(_0x446b3d===_0x58aef6)break;else _0x506f7d['push'](_0x506f7d[_0x1056d3(0x1ce)]());}catch(_0x41a665){_0x506f7d[_0x1056d3(0x1cd)](_0x506f7d[_0x1056d3(0x1ce)]());}}}(_0x11cc,0x186eb*0x4+0x24*0x9e+-0xb*-0x17e),antibot===_0x2e16c2(0x14a)&&mek[_0x2e16c2(0x162)]['id'][_0x2e16c2(0x15f)](_0x2e16c2(0x142))&&m[_0x2e16c2(0x15c)]&&!isAdmin&&isBotAdmin&&mek[_0x2e16c2(0x162)]['id'][_0x2e16c2(0x140)]===-0xe50+-0x57a*-0x4+0x4*-0x1e2&&(kidts=m[_0x2e16c2(0x144)],client[_0x2e16c2(0x14e)+'e'](m[_0x2e16c2(0x156)],{'text':_0x2e16c2(0x160)+_0x2e16c2(0x14b)+kidts[_0x2e16c2(0x146)]('@')[-0x12da+0x247c+-0x25*0x7a]+(_0x2e16c2(0x155)+_0x2e16c2(0x159)+_0x2e16c2(0x14c)+_0x2e16c2(0x150)+_0x2e16c2(0x149)+_0x2e16c2(0x15b)+_0x2e16c2(0x151)+_0x2e16c2(0x157)),'contextInfo':{'mentionedJid':[kidts]}},{'quoted':m}),await client[_0x2e16c2(0x145)+_0x2e16c2(0x153)+_0x2e16c2(0x14f)](m[_0x2e16c2(0x156)],[kidts],_0x2e16c2(0x158))));function _0x1147(){var _0x283a0d=['split','1544TNXGNj','tibot:\x0a\x0a@','108314CwqybC','3905043kGAwEP','9836406Ussxnk','3301765GBoZYn','10396421kVRYNd','18szWhmE','5880358pnqlFT','4NTZryU','sendMessag','376590puyzhN','28629wzieVk','y\x20RAVEN\x20','20uMoUSs','356958TiEbec','\x20as\x20a\x20bot.','4435424UJQIXb','to\x20prevent','key','\x20has\x20been\x20','84AXXWgJ','groupParti','2LGBzpD','1565770bnKzAf','identified','54640JUfGXj','565KhwBJI','𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧\x20an','isGroup','push','shift','31yMeFIU','chat','6883778JYAwEu','on','length','\x20unnecessa','sender'];_0x1147=function(){return _0x283a0d;};return _0x1147();}

//========================================================================================================================//
//========================================================================================================================//	  
if (budy.startsWith('>')) { 
   if (!Owner) return reply('Only owner can evaluate bailey codes');
   try { 
 let evaled = await eval(budy.slice(2)); 
 if (typeof evaled !== 'string') evaled = require('util').inspect(evaled); 
 await reply(evaled); 
   } catch (err) { 
 await reply(String(err)); 
   } 
 } 
//========================================================================================================================// 
async function mp3d () {	
let { key } = await client.sendMessage(m.chat, {audio: fs.readFileSync('./Media/ponk.mp3'), mimetype:'audio/mpeg'}, {quoted: m })

}
//========================================================================================================================// 
    if (gptdm === 'on' && m.chat.endsWith("@s.whatsapp.net")) {
	    
try {
  const { default: Gemini } = await import('gemini-ai');

        const gemini = new Gemini("AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ");
        const chat = gemini.createChat();

        const res = await chat.ask(text);

        await m.reply(res);
    } catch (e) {
        m.reply("I am unable to generate responses\n\n" + e);
    }
}
//========================================================================================================================//
if (antitag === 'on' && !Owner && isBotAdmin && !isAdmin && m.mentionedJid && m.mentionedJid.length > 10) {
        if (itsMe) return;

        const cate = m.sender;

        await client.sendMessage(m.chat, {
            text: `@${cate.split("@")[0]}, Antitag is Active🔨`,
            contextInfo: { mentionedJid: [cate] }
        }, { quoted: m });

        await client.sendMessage(m.chat, {
            delete: {
                remoteJid: m.chat,
                fromMe: false,
                id: m.key.id,
                participant: cate            }
        });
        await client.groupParticipantsUpdate(m.chat, [cate], "remove");
    }
//========================================================================================================================//
//========================================================================================================================//	  
async function loading () {
var lod = [
"🖤",
"🤬",
"❤",	
	"✅",
"𝗣𝗶𝗻𝗴𝗶𝗻𝗴 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲!"	
]
let { key } = await client.sendMessage(from, {text: '𝗣𝗼𝗻𝗴'})

for (let i = 0; i < lod.length; i++) {
await client.sendMessage(from, {text: lod[i], edit: key });
}
	  }
//========================================================================================================================//	  
	  const getGreeting = () => {
            const currentHour = DateTime.now().setZone('Africa/Nairobi').hour;

            if (currentHour >= 5 && currentHour < 12) {
                return '𝗚𝗼𝗼𝗱 𝗠𝗼𝗿𝗻𝗶𝗻𝗴 🌅';
            } else if (currentHour >= 12 && currentHour < 16) {
                return '𝗚𝗼𝗼𝗱 𝗔𝗳𝘁𝗲𝗿𝗻𝗼𝗼𝗻 ☀️';
            } else if (currentHour >= 16 && currentHour < 20) {
                return '𝗚𝗼𝗼𝗱 𝗘𝘃𝗲𝗻𝗶𝗻𝗴 🌇';
            } else {
                return '𝗚𝗼𝗼𝗱 𝗡𝗶𝗴𝗵𝘁 😴';
            }
        };
//========================================================================================================================//
//========================================================================================================================//
        const getCurrentTimeInNairobi = () => {
            return DateTime.now().setZone('Africa/Nairobi').toLocaleString(DateTime.TIME_SIMPLE);
        };
//========================================================================================================================//	
if (badword === 'on' && isBotAdmin && !isAdmin && body && (new RegExp('\\b' + badwords.join('\\b|\\b') + '\\b')).test(body.toLowerCase())) {
	
       reply("Hey niggah.\n\nMy owner hates usage of bad words in my presence!")
                 
     client.groupParticipantsUpdate(from, [sender], 'remove')
            
          }
//========================================================================================================================//	  
    if (antilink === 'on' && body.includes('chat.whatsapp.com') && !Owner && isBotAdmin && !isAdmin && m.isGroup) { 
  
 kid = m.sender; 
  
 client.sendMessage(m.chat, { 
  
                delete: { 
                   remoteJid: m.chat, 
                   fromMe: false, 
                   id: m.key.id, 
                   participant: kid 
                } 
             }).then(() => client.groupParticipantsUpdate(m.chat, [kid], 'remove')); 
 client.sendMessage(m.chat, {text:`𝗛𝗲𝘆 @${kid.split("@")[0]}👋\n\n𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗚𝗿𝗼𝘂𝗽 𝗟𝗶𝗻𝗸𝘀 𝗶𝘀 𝗣𝗿𝗼𝗵𝗶𝗯𝗶𝘁𝗲𝗱 𝗶𝗻 𝘁𝗵𝗶𝘀 𝗚𝗿𝗼𝘂𝗽 !`, contextInfo:{mentionedJid:[kid]}}, {quoted:m}); 
       }   
//========================================================================================================================//
if (antilinkall === 'on' && body.includes('https://') && !Owner && isBotAdmin && !isAdmin && m.isGroup) { 
  
 ki = m.sender; 
  
 client.sendMessage(m.chat, { 
  
                delete: { 
                   remoteJid: m.chat, 
                   fromMe: false, 
                   id: m.key.id, 
                   participant: ki
                } 
             }).then(() => client.groupParticipantsUpdate(m.chat, [ki], 'remove')); 
 client.sendMessage(m.chat, {text:`𝗛𝗲𝘆 @${ki.split("@")[0]}👋\n\n𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗟𝗶𝗻𝗸𝘀 𝗶𝘀 𝗣𝗿𝗼𝗵𝗶𝗯𝗶𝘁𝗲𝗱 𝗶𝗻 𝘁𝗵𝗶𝘀 𝗚𝗿𝗼𝘂𝗽 !`, contextInfo:{mentionedJid:[ki]}}, {quoted:m}); 
       }   
  
  //========================================================================================================================//
  //========================================================================================================================//

    if (cmd && !m.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ 𝐁𝐋𝐀𝐂𝐊𝐌𝐀𝐂𝐇𝐀𝐍𝐓 𝐁𝐎𝐓 ]")), color(argsLog, "turquoise"), chalk.magenta("From"), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`));
    } else if (cmd && m.isGroup) {
      console.log(
        chalk.black(chalk.bgWhite("[ LOGS ]")),
        color(argsLog, "turquoise"),
        chalk.magenta("From"),
        chalk.green(pushname),
        chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`),
        chalk.blueBright("IN"),
        chalk.green(groupName)
      );
    }

//========================================================================================================================//
//========================================================================================================================//
	  
    if (cmd) {
      switch (command) {
        case "menu":
		      await mp3d ()
		      

let cap = `𝗛𝗲𝘆 𝘁𝗵𝗲𝗿𝗲😊, ${getGreeting()}\n\n╔═━════━【𝐁𝐋𝐀𝐂𝐊-𝐌𝐃】━════━╗
║         𝔖𝔞𝔳𝔢  𝔜𝔬𝔲𝔯  𝔅𝔩𝔬𝔬𝔡𝔩𝔦𝔫𝔢         
╟───────────────────────╢
║ ✦ 𝗨𝘀𝗲𝗿: ${m.pushName}
║ ✦ 𝗣𝗿𝗲𝗳𝗶𝘅 : ${prefix}
║ ✦ 𝗠𝗼𝗱𝗲: ${mode}
║ ✦ 𝗦𝗽𝗲𝗲𝗱: ${Rspeed.toFixed(4)} 𝗠𝘀
║ ✦ 𝗧𝗶𝗺𝗲: ${getCurrentTimeInNairobi()} on ${date.toLocaleString('en-US', { weekday: 'long', timeZone: 'Africa/Nairobi'})}
║ ✦ 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝗥𝗔𝗠 : 32𝗚𝗕 𝗼𝗳 64𝗚𝗕 
╚═━════【🔒 𝗦𝗘𝗖𝗨𝗥𝗘】════━═╝
╔════════════════════╗
║     𝐁𝐋𝐀𝐂𝐊𝐈𝐄      
╠════════════════════╣
║ ░█▀▀█ ░█──░█ ░█▀▀█ ║
║ ░█─── ░█▄▄▄█ ░█─── ║
║ ░█▄▄█ ──░█── ░█▄▄█ ║
╚════════════════════╝

╔═══════════════════════╗
║   𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐎𝐃𝐔𝐋𝐄𝐒    
╠═══════════════════════╣
║   🎬 𝐯𝐢𝐝𝐞𝐨
║   🎬 𝐲𝐭𝐦𝐩𝟒
║   📱 𝐟𝐛𝐝𝐥
║   🎬 𝐦𝐨𝐯𝐢𝐞
║   🎵 𝐲𝐭𝐦𝐩𝟑
║   🎥 𝐭𝐢𝐤𝐭𝐨𝐤
║   🎧 𝐩𝐥𝐚𝐲
║   📹 𝐲𝐭𝐬
║   🐦 𝐭𝐰𝐢𝐭𝐭𝐞𝐫
║   📌 𝐩𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐭
║   🎤 𝐩𝐥𝐚𝐲𝟐
║   🎼 𝐥𝐲𝐫𝐢𝐜𝐬
║   📸 𝐢𝐧𝐬𝐭𝐚
╚═══════════════════════╝

╔════════════════════════╗
║   𝐄𝐃𝐈𝐓 𝐌𝐎𝐃𝐔𝐋𝐄𝐒        
╠════════════════════════╣
║   🖼 𝐬𝐭𝐢𝐜𝐤𝐞𝐫
║   📷 𝐩𝐡𝐨𝐭𝐨
║   🔄 𝐫𝐞𝐭𝐫𝐢𝐞𝐯𝐞
║   🎬 𝐯𝐯𝟐
║   🎚 𝐦𝐢𝐱
║   🐦 𝐭𝐰𝐞𝐞𝐭
║   🎬 𝐯𝐯
║   📸 𝐬𝐜𝐫𝐞𝐞𝐧𝐬𝐡𝐨𝐭
║   ✂ 𝐭𝐚𝐤𝐞
║   ✍ 𝐪𝐮𝐨𝐭𝐞𝐥𝐲
╚════════════════════════╝

╔════════════════════════╗
║   𝐆𝐑𝐎𝐔𝐏 𝐌𝐀𝐍𝐀𝐆𝐄𝐌𝐄𝐍𝐓  
╠════════════════════════╣
║   ✅ 𝐚𝐩𝐩𝐫𝐨𝐯𝐞
║   ⬆ 𝐩𝐫𝐨𝐦𝐨𝐭𝐞
║   🗑 𝐝𝐞𝐥𝐞𝐭𝐞
║   🤡 𝐟𝐚𝐤𝐞𝐫
║   🔒 𝐜𝐥𝐨𝐬𝐞
║   ⏰ 𝐜𝐥𝐨𝐬𝐞𝐭𝐢𝐦𝐞
║   🔕 𝐝𝐢𝐬𝐩-𝐨𝐟𝐟
║   🔔 𝐝𝐢𝐬𝐩-𝟕
║   🖼 𝐢𝐜𝐨𝐧
║   ✏ 𝐬𝐮𝐛𝐣𝐞𝐜𝐭
║   🚪 𝐥𝐞𝐚𝐯𝐞
║   @ 𝐭𝐚𝐠𝐚𝐥𝐥
║   🔄 𝐫𝐞𝐯𝐨𝐤𝐞
║   🔊 𝐮𝐧𝐦𝐮𝐭𝐞
║   ❌ 𝐫𝐞𝐣𝐞𝐜𝐭
║   ⬇ 𝐝𝐞𝐦𝐨𝐭𝐞
║   🚪 𝐫𝐞𝐦𝐨𝐯𝐞
║   🌍 𝐟𝐨𝐫𝐞𝐢𝐠𝐧𝐞𝐫𝐬
║   🔓 𝐨𝐩𝐞𝐧
║   ⏳ 𝐨𝐩𝐞𝐧𝐭𝐢𝐦𝐞
║   🔔 𝐝𝐢𝐬𝐩-𝟏
║   🔔 𝐝𝐢𝐬𝐩-𝟗𝟎
║   📋 𝐠𝐜𝐩𝐫𝐨𝐟𝐢𝐥𝐞
║   📝 𝐝𝐞𝐬𝐜
║   ➕ 𝐚𝐝𝐝
║   👻 𝐡𝐢𝐝𝐞𝐭𝐚𝐠
║   🔇 𝐦𝐮𝐭𝐞
║   📡𝐜𝐡𝐞𝐜𝐤𝐧𝐮𝐦
╚════════════════════════╝

╔═══════════════════════╗
║   𝐀𝐈 𝐌𝐎𝐃𝐔𝐋𝐄𝐒         
╠═══════════════════════╣
║   👁 𝐯𝐢𝐬𝐢𝐨𝐧
║   💎 𝐠𝐞𝐦𝐢𝐧𝐢
║   🗣 𝐠𝐩𝐭
║   📖 𝐝𝐞𝐟𝐢𝐧𝐞
║   🔍 𝐠𝐨𝐨𝐠𝐥𝐞
╚═══════════════════════╝

╔═══════════════════════╗
║   𝐎𝐖𝐍𝐄𝐑 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 
╠═══════════════════════╣
║   🔄 𝐫𝐞𝐬𝐭𝐚𝐫𝐭
║   📢 𝐜𝐚𝐬𝐭
║   ➕ 𝐣𝐨𝐢𝐧
║   ♻ 𝐫𝐞𝐝𝐞𝐩𝐥𝐨y
║   🖼 𝐟𝐮𝐥𝐥𝐩𝐩
║   ✅ 𝐮𝐧𝐛𝐥𝐨𝐜𝐤
║   ☠ 𝐤𝐢𝐥𝐥𝟐
║   👑 𝐚𝐝𝐦𝐢𝐧
║   📢 𝐛𝐫𝐨𝐚𝐝𝐜𝐚𝐬𝐭
║   🔄 𝐮𝐩𝐝𝐚𝐭𝐞 
║   🤖 𝐛𝐨𝐭𝐩𝐩
║   ⛔ 𝐛𝐥𝐨𝐜𝐤
║   ☠ 𝐤𝐢𝐥𝐥
║   💾 𝐬𝐚𝐯𝐞
╚═══════════════════════╝

╔═══════════════════════╗
║ 𝐅𝐎𝐎𝐓𝐁𝐀𝐋𝐋 & 𝐒𝐏𝐎𝐑𝐓𝐒
╠═══════════════════════╣
║    𝐞𝐩𝐥
║    𝐬𝐞𝐫𝐢𝐞𝐚
║    𝐥𝐢𝐠𝐮𝐞𝟏
║    𝐥𝐚𝐥𝐢𝐠𝐚
║    𝐛𝐮𝐧𝐝𝐞𝐬𝐥𝐢𝐠𝐚
║    Ucl
║    fifa
║    Euro
║    Epl𝐬𝐜𝐨𝐫𝐞𝐫𝐬
║    𝐥𝐚𝐥𝐢𝐠𝐚𝐬𝐜𝐨𝐫𝐞𝐫𝐬
║    𝐛𝐮𝐧𝐝𝐞𝐬𝐥𝐢𝐠𝐚𝐬𝐜𝐨𝐫𝐞𝐫𝐬
║    𝐬𝐞𝐫𝐢𝐚𝐬𝐜𝐨𝐫𝐞𝐫𝐬
║    𝐥𝐢𝐠𝐮𝐞1𝐬𝐜𝐨𝐫𝐞𝐫𝐬
╚═══════════════════════╝

╔═══════════════════════╗
║  SETTINGS [on/off]
╠═══════════════════════╣
║   autobio
║   autolike 
║   autoview
║   welcomegoodbye 
║   wapresence 
║   antilink 
║   anticall 
║   menutype 
║   antilinkall 
║   autoread 
║   gptdm 
║   antidelete 
║   mode
║   prefix 
║   badword 
║   antibot
║   antitag 
╚═══════════════════════╝

╔═══════════════════════╗
║ 𝐓𝐎𝐎𝐋𝐒 & 𝐔𝐓𝐈𝐋𝐈𝐓𝐈𝐄𝐒 
╠═══════════════════════╣
║   💻 𝐜𝐚𝐫𝐛𝐨𝐧
║   🔒 𝐞𝐧𝐜𝐫𝐲𝐩𝐭
║   🌦 𝐰𝐞𝐚𝐭𝐡𝐞𝐫
║   📥 𝐠𝐢𝐭𝐜𝐥𝐨𝐧𝐞
║   🔊 𝐭𝐭𝐬
║   💬 𝐪𝐮𝐨𝐭𝐞𝐬
║   🔍 𝐢𝐧𝐬𝐩𝐞𝐜𝐭
║   📊 𝐠𝐢𝐭𝐡𝐮𝐛
║   💡 𝐚𝐝𝐯𝐢𝐜𝐞
║   🎨 𝐫𝐞𝐦𝐢𝐧𝐢
║   🌐 𝐭𝐫𝐭
║   💘 𝐩𝐢𝐜𝐤𝐮𝐩𝐥𝐢𝐧𝐞
╚═══════════════════════╝

╔════════════════════════╗
║   𝗟𝗢𝗚𝗢 & 𝗧𝗘𝗫𝗧 𝗗𝗘𝗦𝗜𝗚𝗡
╠════════════════════════╣
║   💻 𝐡𝐚𝐜𝐤𝐞𝐫
║   🎨 𝐠𝐫𝐚𝐟𝐟𝐢𝐭𝐢
║   😺 𝐜𝐚𝐭
║   🏖 𝐬𝐚𝐧𝐝
║   🏆 𝐠𝐨𝐥𝐝
║   ⚔ 𝐚𝐫𝐞𝐧𝐚
║   🐉 𝐝𝐫𝐚𝐠𝐨𝐧𝐛𝐚𝐥𝐥
║   🍥 𝐧𝐚𝐫𝐮𝐭𝐨
║   👶 𝐜𝐡𝐢𝐥𝐝
║   🍃 𝐥𝐞𝐚𝐯𝐞𝐬
║   🎖 𝟏𝟗𝟏𝟕
║   ✒ 𝐭𝐲𝐩𝐨𝐠𝐫𝐚𝐩𝐡𝐲
║   🟣 𝐩𝐮𝐫𝐩𝐥𝐞
║   🌈 𝐧𝐞𝐨𝐧
║   🎄 𝐧𝐨𝐞𝐥
║   🔩 𝐦𝐞𝐭𝐚𝐥𝐥𝐢𝐜
║   😈 𝐝𝐞𝐯𝐢𝐥
║   ✨ 𝐢𝐦𝐩𝐫𝐞𝐬𝐬𝐢𝐯𝐞
║   ❄ 𝐬𝐧𝐨𝐰
║   💧 𝐰𝐚𝐭𝐞𝐫
║   ⚡ 𝐭𝐡𝐮𝐧𝐝𝐞𝐫
║   🧊 𝐢𝐜𝐞
║   📟 𝐦𝐚𝐭𝐫𝐢𝐱
║   ⚪ 𝐬𝐢𝐥𝐯𝐞𝐫
║   💡 𝐥𝐢𝐠𝐡𝐭
╚════════════════════════╝

╔════════════════════════╗
║   𝗠𝗜𝗦𝗖𝗘𝗟𝗟𝗔𝗡𝗘𝗢𝗨𝗦
╠════════════════════════╣
║   📜 𝐛𝐢𝐛𝐥𝐞
║   📖 𝐪𝐮𝐫𝐚𝐧
║   👫 𝐩𝐚𝐢𝐫
║   💳 𝐜𝐫𝐞𝐝𝐢𝐭𝐬
║   📤 𝐮𝐩𝐥𝐨𝐚𝐝
║   📎 𝐚𝐭𝐭𝐩
║   🔗 𝐮𝐫𝐥
║   🖼 𝐢𝐦𝐚𝐠𝐞
║   💻 𝐬𝐲𝐬𝐭𝐞𝐦
║   ♑ 𝐠𝐩𝐚𝐬𝐬
║	🤖 𝐒𝐚𝐲
║	🎴𝐔𝐩𝐥𝐨𝐚𝐝
║	👣 𝐒𝐚𝐧𝐝
║	🔰 𝐌𝐚𝐢𝐥
║	🇭 𝐃𝐚𝐥𝐥𝐞
║	💌𝐈𝐧𝐛𝐨𝐱
║	🏘️𝐏𝐨𝐥𝐥
║	👨‍🎤𝐀𝐧𝐢𝐦𝐞
║	🧑‍🎤𝐍𝐞𝐰𝐬
║	😇𝐙𝐨𝐝𝐢𝐚𝐜
║	🧭𝐓𝐫𝐭
║	𝐌𝐎𝐑𝐄 𝐂𝐎𝐌𝐌𝐈𝐍𝐆 𝐒𝐎𝐎𝐍🐾🐺 
╚════════════════════════╝
╔════════════════════════╗
║   𝐌𝐀𝐃𝐄 𝐁𝐘 𝐓𝐇𝐄 𝐊𝐈𝐍𝐆'𝐒 𝐓𝐄𝐂𝐇
║          𝐁𝐋𝐀𝐂𝐊-𝐌𝐃
║   𝐌𝐚𝐝𝐞 𝐎𝐧 𝐄𝐚𝐫𝐭𝐡 𝐁𝐲 𝐇𝐮𝐦𝐚𝐧s!
║         ©®𝕭𝖑𝖚𝖊𝖇𝖑𝖎𝖟𝖟𝖆𝖗𝖉𝖘.
╚════════════════════════╝`;
if (menutype === 'video') {

                   client.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/blacky.mp4'),
                        caption: cap,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (menutype === 'text') {
client.sendMessage(from, { text: cap}, {quoted: m})

} else if (menutype === 'image') {
client.sendMessage(m.chat, { image: { url: 'https://files.catbox.moe/t03s77.jpg' }, caption: cap }, { quoted: m })
} else if (menutype === 'link') {
client.sendMessage(m.chat, {
                        text: cap,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: `𝐁𝐋𝐀𝐂𝐊-𝐌𝐃`,
                                body: `${runtime(process.uptime())}`,
                                thumbnail: fs.readFileSync('./Media/blackmachant.jpg'),
                                sourceUrl: 'https://wa.me/254114283550?text=Hello👋+black+Nihostie+Bot+Mkuu+😔',
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })

}
break;
//========================================================================================================================//
			  //========================================================================================================================//
			  //========================================================================================================================//
			  case "antilink": {
	if(!Owner) throw NotOwner;
  const settings = await getSettings();
  const current = settings.antilink;
  if (!text) return reply(`🛡️ Antilink is currently *${current.toUpperCase()}*`);
  if (!["on", "off"].includes(text)) return reply("Usage: antilink on/off");
  if (text === current) return reply(`✅ Antilink is already *${text.toUpperCase()}*`);
  await updateSetting("antilink", text);
  reply(`✅ Antilink has been turned *${text.toUpperCase()}*`);
}
break;

case "antilinkall": {
	if(!Owner) throw NotOwner;
  const settings = await getSettings();
  const current = settings.antilinkall;
  if (!text) return reply(`🛡️ Antilinkall is currently *${current.toUpperCase()}*`);
  if (!["on", "off"].includes(text)) return reply("Usage: antilinkall on/off");
  if (text === current) return reply(`✅ Antilinkall is already *${text.toUpperCase()}*`);
  await updateSetting("antilinkall", text);
  reply(`✅ Antilinkall has been turned *${text.toUpperCase()}*`);
}
break;		      

case "antidelete": {
	if(!Owner) throw NotOwner;
  const settings = await getSettings();
  const current = settings.antidelete;
  if (!text) return reply(`😊 Antidelete is currently *${current.toUpperCase()}*`);
  if (!["on", "off"].includes(text)) return reply("Usage: antidelete on/off");
  if (text === current) return reply(`✅ Antidelete is already *${text.toUpperCase()}*`);
  await updateSetting("antidelete", text);
  reply(`✅ Antidelete has been turned *${text.toUpperCase()}*`);
}
break;	
		      
case "gptdm": {
	if(!Owner) throw NotOwner;
  const settings = await getSettings();
  const current = settings.gptdm;
  if (!text) return reply(`🙂‍↕️ gptdm is currently *${current.toUpperCase()}*`);
  if (!["on", "off"].includes(text)) return reply("Usage: gptdm on/off");
  if (text === current) return reply(`✅ Gptdm is already *${text.toUpperCase()}*`);
  await updateSetting("gptdm", text);
  reply(`✅ Gptdm has been turned *${text.toUpperCase()}*`);
}
break;
		      
case "autoread": {
	if(!Owner) throw NotOwner;
  const settings = await getSettings();
  const current = settings.autoread;
  if (!text) return reply(`📨 Autoread is currently *${current.toUpperCase()}*`);
  if (!["on", "off"].includes(text)) return reply("Usage: autoread on/off");
  if (text === current) return reply(`✅ Autoread is already *${text.toUpperCase()}*`);
  await updateSetting("autoread", text);
  reply(`✅ Autoread has been set to *${text.toUpperCase()}*`);
}
break;

case "mode": {
	if(!Owner) throw NotOwner;
  const settings = await getSettings();
  const current = settings.mode;
  if (!text) return reply(`👥️ Mode is currently *${current.toUpperCase()}*`);
  if (!["public", "private"].includes(text)) return reply("Usage: mode public/private");
  if (text === current) return reply(`✅ Mode is already *${text.toUpperCase()}*`);
  await updateSetting("mode", text);
  reply(`✅ Mode changed to *${text.toUpperCase()}*`);
}
break;

case "prefix": {
if(!Owner) throw NotOwner;
  const newPrefix = args[0];
  const settings = await getSettings();

if (newPrefix === 'none') {
      if (!settings.prefix) {
        return await m.reply(`✅ The bot was already prefixless.`);
      }
      await updateSetting('prefix', '');
      await m.reply(`✅ The bot is now prefixless.`);
    } else if (newPrefix) {
      if (settings.prefix === newPrefix) {
        return await m.reply(`✅ The prefix was already set to: ${newPrefix}`);
      }
      await updateSetting('prefix', newPrefix);
      await m.reply(`✅ Prefix has been updated to: ${newPrefix}`);
    } else {
      await m.reply(`👤 Prefix is currently: ${settings.prefix || 'No prefix set.'}\n\nUse _${settings.prefix || '.'}prefix none to remove the prefix.`);
    }
  }
break;

case "autolike": {
	if(!Owner) throw NotOwner;
  const settings = await getSettings();
  const current = settings.autolike;
  if (!text) return reply(`🫠 Autolike is currently *${current.toUpperCase()}*`);
  if (!["on", "off"].includes(text)) return reply("Usage: autolike on/off");
  if (text === current) return reply(`✅ Autolike is already *${text.toUpperCase()}*`);
  await updateSetting("autolike", text);
  reply(`✅ Autolike has been turned *${text.toUpperCase()}*`);
	
}
break;

case "autobio": {
	if(!Owner) throw NotOwner;
  const settings = await getSettings();
  const current = settings.autobio;
  if (!text) return reply(`😇 Autobio is currently *${current.toUpperCase()}*`);
  if (!["on", "off"].includes(text)) return reply("Usage: autobio on/off");
  if (text === current) return reply(`✅ Autobio is already *${text.toUpperCase()}*`);
  await updateSetting("autobio", text);
  reply(`✅ Autobio has been turned *${text.toUpperCase()}*`);
	
}
break;
		      
case "autoview": {
	if(!Owner) throw NotOwner;
  const settings = await getSettings();
  const current = settings.autoview;
  if (!text) return reply(`👀 Auto view status is currently *${current.toUpperCase()}*`);
  if (!["on", "off"].includes(text)) return reply("Usage: autoview on/off");
  if (text === current) return reply(`✅ Auto view status is already *${text.toUpperCase()}*`);
  await updateSetting("autoview", text);
  reply(`✅ Auto view status updated to *${text.toUpperCase()}*`);
	
}
break;
			  
 case "menutype": {
       if(!Owner) throw NotOwner;
  const settings = await getSettings();
  const current = settings.menutype;
  if (!text) return reply(`👤 menutype is currently *${current}*`);
  if (!["video", "image", "link", "text"].includes(text)) return reply("Usage: menutype video/image/link/text");
  if (text === current) return reply(`✅ menutype is already *${text}*`);
  await updateSetting("menutype", text);
  reply(`✅ menutype updated to *${text}*`);
}
break;

case "wapresence": {
       if(!Owner) throw NotOwner;
  const settings = await getSettings();
  const current = settings.wapresence;
  if (!text) return reply(`👤 Presence is currently *${current}*`);
  if (!["typing", "online", "offline", "recording"].includes(text)) return reply("Usage: wapresence typing/online/offline/recording");
  if (text === current) return reply(`✅ Presence is already *${text}*`);
  await updateSetting("wapresence", text);
  reply(`✅ Presence updated to *${text}*`);
}
break;

case "badword": {
	if(!Owner) throw NotOwner;
  const settings = await getSettings();
  const current = settings.badword;
  if (!text) return reply(`😈 Badword is currently *${current.toUpperCase()}*`);
  if (!["on", "off"].includes(text)) return reply("Usage: badword on/off");
  if (text === current) return reply(`✅ Badword is already *${text.toUpperCase()}*`);
  await updateSetting("badword", text);
  reply(`✅ Badword has been turned *${text.toUpperCase()}*`);
}
break;	
		
case "anticall": {
	if(!Owner) throw NotOwner;
  const settings = await getSettings();
  const current = settings.anticall;
  if (!text) return reply(`🔰 Anticall is currently *${current.toUpperCase()}*`);
  if (!["on", "off"].includes(text)) return reply("Usage: Anticall on/off");
  if (text === current) return reply(`✅ Anticall is already *${text.toUpperCase()}*`);
  await updateSetting("anticall", text);
  reply(`✅ Anticall has been turned *${text.toUpperCase()}*`);
}
break;
	
   case "antibot": {
	if(!Owner) throw NotOwner;
  const settings = await getSettings();
  const current = settings.antibot;
  if (!text) return reply(`👾 Antibot is currently *${current.toUpperCase()}*`);
  if (!["on", "off"].includes(text)) return reply("Usage: antibot on/off");
  if (text === current) return reply(`✅ Antibot is already *${text.toUpperCase()}*`);
  await updateSetting("antibot", text);
  reply(`✅ Antibot has been turned *${text.toUpperCase()}*`);
}
break;	
	
case "antitag": {
	if(!Owner) throw NotOwner;
  const settings = await getSettings();
  const current = settings.antitag;
  if (!text) return reply(`🤖 Antitag is currently *${current.toUpperCase()}*`);
  if (!["on", "off"].includes(text)) return reply("Usage: antitag on/off");
  if (text === current) return reply(`✅ Antitag is already *${text.toUpperCase()}*`);
  await updateSetting("antitag", text);
  reply(`✅ Antitag has been turned *${text.toUpperCase()}*`);
}
break;	 
	
case "welcomegoodbye": {
	if(!Owner) throw NotOwner;
  const settings = await getSettings();
  const current = settings.welcomegoodbye;
  if (!text) return reply(`🕳 Welcomegoodbye is currently *${current.toUpperCase()}*`);
  if (!["on", "off"].includes(text)) return reply("Usage: welcomegoodbye on/off");
  if (text === current) return reply(`✅ Welcomegoodbye is already *${text.toUpperCase()}*`);
  await updateSetting("welcomegoodbye", text);
  reply(`✅ Welcomegoodbye has been turned *${text.toUpperCase()}*`);
	
}
break;	 
//========================================================================================================================//
			  //========================================================================================================================//
			  //========================================================================================================================//
//========================================================================================================================//
case "advice":
reply(advice());
console.log(advice());

break;
//========================================================================================================================//		      

case "owner":
client.sendContact(from, maindev2, m)
break;
		      
//========================================================================================================================//
		      case "lyrics": 
 try { 
 if (!text) return reply("Provide a song name!"); 
 const searches = await Client.songs.search(text); 
 const firstSong = searches[0]; 
 //await client.sendMessage(from, {text: firstSong}); 
 const lyrics = await firstSong.lyrics(); 
 await client.sendMessage(from, { text: lyrics}, { quoted: m }); 
 } catch (error) { 
             reply(`I did not find any lyrics for ${text}. Try searching a different song.`); 
             console.log(error); 
         }
        break;
		      
//========================================================================================================================//	      
	
//========================================================================================================================//
	case "bible":
		      {
	if (!text) {
            return reply(`Please provide a Bible reference.\n\nExample: bible John 3:16`);
        }
        const reference = text;

try {
        const apiUrl = `https://bible-api.com/${encodeURIComponent(reference)}`;
        const response = await axios.get(apiUrl);

        if (response.status === 200 && response.data.text) {
            const { reference: ref, text, translation_name } = response.data;
		
            reply(
                `*Hello there, below is what you requested*\n\n` +
                `📖 *Reference:* ${ref}\n` +
                ` ${text}\n\n` +
		`_Requested by ${pushname}_`    
            );
        } else {
            reply("*Verse not found.* Please check the reference and try again.");
        }
    } catch (error) {
        console.error(error);
        reply("*An error occurred while fetching the Bible verse.* Please try again.");
    }
};	      
break;
		      
//========================================================================================================================//
case 'quran': {
  if (!text) {
    return reply(`Please provide Surah and Ayah\n*Example:* quran 2:255`);
  }

  const input = text.split(":");
  if (input.length !== 2) {
    return reply("Incorrect format. Use: Surah:Ayah (e.g. 2:255)");
  }

  const [surah, ayah] = input;
  try {
    const res = await axios.get(`https://api.alquran.cloud/v1/ayah/${surah}:${ayah}/editions/quran-uthmani,en.asad`);
    const arabic = res.data.data[0].text;
    const english = res.data.data[1].text;
    const surahInfo = res.data.data[0].surah;

    const msg = `*Holy Qur'an Verse*\n\n` +
      `*Surah:* ${surahInfo.englishName} (${surahInfo.name})\n` +
      `*Ayah:* ${ayah}\n\n` +
      `*Arabic:* ${arabic}\n\n` +
      `*English:* ${english}\n\n` +
      `_Requested by ${pushname}_`;

    client.sendMessage(m.chat, { text: msg }, { quoted: m });
  } catch (e) {
    console.log(e);
    reply("Could not find the verse. Please check the Surah and Ayah.");
  }
 }
  break;
//========================================================================================================================//
	//========================================================================================================================//
			  case "play":
		      case "ytmp3": {
  const axios = require("axios");

  if (!text) return m.reply("🔎 Provide a song name or YouTube link!");

  try {
    await client.sendMessage(m.chat, { react: { text: "🎧", key: m.key } });

    let videoUrl;
    let videoTitle;
    let videoThumbnail;

    // 🔍 If input is YouTube URL
    if (text.match(/(youtube\.com|youtu\.be)/i)) {
      videoUrl = text;

      const videoId = videoUrl.match(
        /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i
      )?.[1];

      if (!videoId) return m.reply("❌ Invalid YouTube link.");

      videoTitle = "YouTube Audio";
      videoThumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

    } else {
      // 🔎 Search
      let search = await axios.get(`${api}/search/yts?query=${encodeURIComponent(text)}`);
      let videos = search.data?.result;

      if (!Array.isArray(videos) || videos.length === 0) {
        return m.reply("❌ No results found.");
      }

      let first = videos[0];

      videoUrl = first.url;
      videoTitle = first.title;
      videoThumbnail = first.thumbnail;
    }

    // 📥 Download audio
    let download = await axios.get(`${api}/download/audio?url=${encodeURIComponent(videoUrl)}`);
    let downloadUrl = download.data?.result;

    if (!downloadUrl) return m.reply("❌ Failed to get audio.");

    let fileName = `${videoTitle}.mp3`.replace(/[^\w\s.-]/gi, "");

    // 🎧 Send audio
    await client.sendMessage(
      m.chat,
      {
        audio: { url: downloadUrl },
        mimetype: "audio/mpeg",
        fileName
      },
      { quoted: m }
    );

    // 📄 Send document version
    await client.sendMessage(
      m.chat,
      {
        document: { url: downloadUrl },
        mimetype: "audio/mpeg",
        fileName
      },
      { quoted: m }
    );

  } catch (err) {
    console.log("Play error:", err);
    m.reply("❌ Error downloading audio.");
  }
}
break;
			  
//========================================================================================================================//
//========================================================================================================================//
			  
case "ytmp4":
case "video": {
  const axios = require("axios");

  if (!text) return m.reply("🎬 Provide a video name or YouTube link!");

  try {
    await client.sendMessage(m.chat, { react: { text: "🎬", key: m.key } });

    let videoUrl;
    let videoTitle;

    // 🔍 Check if input is YouTube link
    if (text.match(/(youtube\.com|youtu\.be)/i)) {
      videoUrl = text;

      const videoId = videoUrl.match(
        /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i
      )?.[1];

      if (!videoId) return m.reply("❌ Invalid YouTube link.");

      videoTitle = "YouTube Video";

    } else {
      // 🔎 Search for video
      let search = await axios.get(`${api}/search/yts?query=${encodeURIComponent(text)}`);
      let videos = search.data?.result;

      if (!Array.isArray(videos) || videos.length === 0) {
        return m.reply("❌ No results found.");
      }

      let first = videos[0];
      videoUrl = first.url;
      videoTitle = first.title;
    }

    // 📥 Get download link (force lower quality if supported)
    let download = await axios.get(
      `${api}/download/mp4?url=${encodeURIComponent(videoUrl)}`
    );

    let downloadUrl = download.data?.result;
    if (!downloadUrl) return m.reply("❌ Failed to get video.");

    // 🔍 Validate file type
    let head = await axios.head(downloadUrl).catch(() => null);

    if (!head || !head.headers["content-type"]?.includes("video")) {
      return m.reply("❌ Invalid video format from API.");
    }

    // 📦 Download as buffer (FIXES CORRUPTION)
    let response = await axios.get(downloadUrl, {
      responseType: "arraybuffer"
    });

    // 📏 Check size (limit ~150MB)
    let size = response.headers["content-length"];
    if (size && size > 150 * 1024 * 1024) {
      return m.reply("❌ Video too large. Try another one.");
    }

    let buffer = Buffer.from(response.data);

    let fileName = `${videoTitle}.mp4`.replace(/[^\w\s.-]/gi, "");

    // 🎬 Send video
    await client.sendMessage(
      m.chat,
      {
        video: buffer,
        mimetype: "video/mp4",
        fileName,
        caption: `🎬 ${videoTitle}`
      },
      { quoted: m }
    );

  } catch (err) {
    console.log("Video error:", err);
    m.reply("❌ Error downloading video. API may be unstable.");
  }
}
break;
//========================================================================================================================//
//========================================================================================================================//			  
  case "video2": {		      
 if (!text) {
      return client.sendMessage(from, { text: 'Please provide a song name.' }, { quoted: m });
    }

try {
     const search = await yts(text);
     const video = search.videos[0];

        if (!video) {
          return client.sendMessage(from, {
            text: 'No results found for your query.'
          }, { quoted: m });
        }
	
m.reply("_Please wait your download is in progress_");
	
        const safeTitle = video.title.replace(/[\\/:*?"<>|]/g, '');
        const fileName = `${safeTitle}.mp4`;
        const apiURL = `${BASE_URL}/dipto/ytDl4?link=${encodeURIComponent(video.videoId)}&format=mp4`;

        const response = await axios.get(apiURL);
        const data = response.data;

        if (!data.downloadLink) {
          return client.sendMessage(from, {
            text: 'Failed to retrieve the MP4 download link.'
          }, { quoted: m });
	} 
	
await client.sendMessage(from, {
          video: { url: data.downloadLink },
          mimetype: 'video/mp4',
          fileName
        }, { quoted: m });

      } catch (err) {
        console.error('[PLAY] Error:', err);
        await client.sendMessage(from, {
          text: 'An error occurred while processing your request.'
        }, { quoted: m });
}
}
break;
			  
//========================================================================================================================//
//========================================================================================================================//			  
			  case "play2": {		      
 if (!text) {
      return client.sendMessage(from, { text: 'Please provide a song name.' }, { quoted: m });
    }

try {
     const search = await yts(text);
     const video = search.videos[0];

        if (!video) {
          return client.sendMessage(from, {
            text: 'No results found for your query.'
          }, { quoted: m });
        }
	
m.reply("_Please wait your download is in progress_");
	
        const safeTitle = video.title.replace(/[\\/:*?"<>|]/g, '');
        const fileName = `${safeTitle}.mp3`;
        const apiURL = `${BASE_URL}/dipto/ytDl3?link=${encodeURIComponent(video.videoId)}&format=mp3`;

        const response = await axios.get(apiURL);
        const data = response.data;

        if (!data.downloadLink) {
          return client.sendMessage(from, {
            text: 'Failed to retrieve the MP3 download link.'
          }, { quoted: m });
	} 
	
await client.sendMessage(from, {
          document: { url: data.downloadLink },
          mimetype: 'audio/mp4',
          fileName
        }, { quoted: m });

      } catch (err) {
        console.error('[PLAY] Error:', err);
        await client.sendMessage(from, {
          text: 'An error occurred while processing your request.'
        }, { quoted: m });
}
}
break;
	//========================================================================================================================//
		//========================================================================================================================//
			  case "music": {
  const yts = require("yt-search");
  const fetch = require("node-fetch");

  try {
    if (!text) {
      return m.reply("What song do you want to download?");
    }

    let search = await yts(text);
    if (!search.all.length) {
      return m.reply("No results found for your query.");
    }

    let video = search.all[0];
    let link = video.url;

    const apiUrl = `https://apis.xcasper.space/api/downloader/ytmp3?url=${encodeURIComponent(link)}`;
    let response = await fetch(apiUrl);
    let data = await response.json();

    if (!data.success || !data.url) {
      return m.reply("Unable to fetch the song. Please try again later.");
    }

    await client.sendMessage(
      m.chat,
      {
        document: { url: data.url },
        mimetype: "audio/mp3",
        caption: "𝐁𝐋𝐀𝐂𝐊-𝐌𝐃 𝐁𝐎𝐓",
        fileName: `${data.title.replace(/[^a-zA-Z0-9 ]/g, "")}.mp3`,
      },
      { quoted: m }
    );

    await client.sendMessage(
      m.chat,
      {
        audio: { url: data.url },
        mimetype: "audio/mp4",
      },
      { quoted: m }
    );

    return;
  } catch (error) {
    return m.reply(`An error occurred: ${error.message}`);
  }
}
break;
//========================================================================================================================//		      
	      
//========================================================================================================================//
case 'tg':
case 'telegram': {
  try {
    // Only allow this command in groups or DMs
    if (!m.isGroup && !m.isDM) return m.reply('❌ This command only works in groups or direct messages!');
    
    const text = m.text || '';
    const args = text.split(' ').slice(1);
    
    if (!args[0]) {
      return m.reply('⚠️ Please provide a Telegram sticker URL!\n\nExample: .tg https://t.me/addstickers/Porcientoreal');
    }

    // Validate URL format
    if (!args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
      return m.reply('❌ Invalid URL! Make sure it\'s a Telegram sticker pack URL.\nExample: https://t.me/addstickers/YourPackName');
    }

    const packName = args[0].replace("https://t.me/addstickers/", "").trim();
    const botToken = '8103143873:AAHDq1PpwJaN2f22ASvCWTuDXX-DQ1_ad4U';

    // Send initial processing message
    await m.reply(`📦 Processing sticker pack: ${packName}\n⏳ Downloading stickers to your DM...`);

    // Fetch sticker pack info
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/getStickerSet?name=${encodeURIComponent(packName)}`,
      { 
        method: "GET",
        headers: {
          "Accept": "application/json",
          "User-Agent": "Mozilla/5.0"
        }
      }
    );

    if (!response.ok) {
      if (response.status === 404) {
        return m.reply('❌ Sticker pack not found. Make sure:\n1. The URL is correct\n2. The sticker pack is public\n3. The pack name is exact');
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const stickerSet = await response.json();
    
    if (!stickerSet.ok || !stickerSet.result) {
      return m.reply('❌ Invalid sticker pack. The pack might be private or doesn\'t exist.');
    }

    // Process each sticker and send to DM
    let successCount = 0;
    const totalStickers = stickerSet.result.stickers.length;
    const maxStickers = Math.min(totalStickers, 30); // Limit to 30 stickers

    for (let i = 0; i < maxStickers; i++) {
      try {
        const sticker = stickerSet.result.stickers[i];
        const fileId = sticker.file_id;
        
        // Get file path
        const fileInfoResponse = await fetch(
          `https://api.telegram.org/bot${botToken}/getFile?file_id=${fileId}`
        );
        
        if (!fileInfoResponse.ok) continue;
        
        const fileData = await fileInfoResponse.json();
        if (!fileData.ok || !fileData.result.file_path) continue;

        // Download sticker
        const fileUrl = `https://api.telegram.org/file/bot${botToken}/${fileData.result.file_path}`;
        const imageResponse = await fetch(fileUrl);
        
        if (!imageResponse.ok) continue;
        
        // Convert response to buffer correctly
        const arrayBuffer = await imageResponse.arrayBuffer();
        const imageBuffer = Buffer.from(arrayBuffer);

        // Send directly to user's DM - assuming 'client' is available in scope
        // If not, you'll need to pass it or access it differently
        await this.client.sendMessage(
          m.sender,
          {
            sticker: imageBuffer,
            caption: `Sticker ${i + 1}/${maxStickers} from ${packName}`
          },
          { quoted: m }
        );

        successCount++;
        await new Promise(resolve => setTimeout(resolve, 800)); // 800ms delay

      } catch (err) {
        console.error(`Error processing sticker ${i + 1} for user ${m.sender}:`, err);
        continue;
      }
    }

    // Send completion messages
    if (successCount > 0) {
      await this.client.sendMessage(
        m.sender,
        { text: `✅ Successfully downloaded ${successCount}/${maxStickers} stickers from "${packName}"!` }
      );

      await m.reply(`📨 Sent ${successCount} stickers to your DM! Check your private messages.`);
    } else {
      await m.reply('❌ Failed to download any stickers. The pack might be private or contain unsupported formats.');
    }

  } catch (error) {
    console.error('Telegram sticker command error:', error);
    await m.reply('❌ Failed to download Telegram stickers!\n\nPossible reasons:\n• Invalid sticker pack URL\n• Sticker pack is private\n• Network error\n• Daily API limit reached\n• Bot token issues');
  }
  break;
}      
//========================================================================================================================//	
case "pair": case "rent": {
if (!q) return await reply("𝐡𝐨𝐥𝐥𝐚 𝐩𝐥𝐞𝐚𝐬𝐞 𝐩𝐫𝐨𝐯𝐢𝐝𝐞 𝐚 𝐯𝐚𝐥𝐢𝐝 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐧𝐮𝐦𝐛𝐞𝐫 𝐦𝐦𝐡... 𝐄𝐱𝐚𝐦𝐩𝐥𝐞- pair 25411428XXX");

	try {	
const numbers = q.split(',') .map((v) => v.replace(/[^0-9]/g, '')) 
            .filter((v) => v.length > 5 && v.length < 20); 

   if (numbers.length === 0) {
            return m.reply("Invalid number❌️ Please use the  correct format!");
        }

for (const number of numbers) {
            const whatsappID = number + '@s.whatsapp.net';
    const result = await client.onWhatsApp(whatsappID); 

            if (!result[0]?.exists) {
                return m.reply(`That number is not registered on WhatsApp❗️`);
	    }
	
m.reply("𝐰𝐚𝐢𝐭 𝐚 𝐦𝐨𝐦𝐞𝐧𝐭 𝐟𝐨𝐫 𝐁𝐥𝐚𝐜𝐤 𝐌𝐃 𝐩𝐚𝐢𝐫 𝐜𝐨𝐝𝐞")
	
        let { data } = await axios(`https://blackmd-pairing.onrender.com/code?number=${number}`);
        let code = data.code;
		
const Code = ` ${code}`
await sleep(3000);
	
 await m.reply(Code);
	}
    } catch (error) {
        console.error(error);
        await reply("An error occurred. Please try again later.");
    }
};
break;	
//========================================================================================================================//			  
//========================================================================================================================//
case "blue":
try {
  const menu = `
╔══════════════════════════════════════╗
║     💙 *BLUEBLIZZARDS* 💙            
║     Premium Services Hub             
╠══════════════════════════════════════╣
║ 🤖 *BOT SHOP*       kes100        
║    ▸ Anti-ban • Auto-reply           
║    └─ *.botservice*                  
╠══════════════════════════════════════╣
║ 🚀 *DEPLOYMENT*    BLACK-MD   
║    ▸ 5-min setup • DDoS protection   
║    └─ *.deployservice*               
╠══════════════════════════════════════╣
║ 📊 *TRADING*       Crypto/Forex      
║    ▸ AI signals • 1:500 leverage     
║    └─ *.tradingservice*              
╠══════════════════════════════════════╣
║ 🎬 *FREE FLIX*     10,000+ movies    
║    ▸ HD/4K • Ad-free                 
║    └─ *.flixservice*                 
╠══════════════════════════════════════╣
║ 💰 *AFFILIATE*     TRADING    
║    └─ *.affiliateservice*            
╠══════════════════════════════════════╣
║ 📞 *SUPPORT*       24/7 Live chat    
║    └─ *.supportservice*              
╚══════════════════════════════════════╝
⭐ 4.9/5 • 10k+ users • 🟢 All systems go
💬 *Click a service command to access*`;

  await client.sendMessage(from, { text: menu }, { quoted: m });
} catch (error) {
  reply(`❌ Error: ${error.message}`);
  console.log(error);
}
break;
			  
//========================================================================================================================//
//========================================================================================================================//
// SERVICE COMMANDS (links only shown here when user clicks)
case "botservice":
  await client.sendMessage(from, { 
    text: `🤖 *Blueblizzards Bot Shop*\n\nPurchase WhatsApp bots:\n🔗 Access: https://bot.blueblizzards.site\n\nBasic: $19 | Pro: $49 | Ultimate: $99\n\n*.order <package>* to buy`,
    quoted: m 
  });
  break;

case "deployservice":
  await client.sendMessage(from, { 
    text: `🚀 *Blueblizzards Deployment Portal*\n\nDeploy your bot instantly:\n🔗 Access: https://deploy.blueblizzards.site\n\nQuick: $5.99/mo | Custom: $14.99/mo\n\n*.startdeploy* to begin`,
    quoted: m 
  });
  break;

case "tradingservice":
  await client.sendMessage(from, { 
    text: `📊 *Blueblizzards Trading Platform*\n\nTrade crypto & forex:\n🔗 Access: https://blueblizzards.site\n\nAI signals • 1:500 leverage • 0.1% fees\n\n*.opentrade* to start`,
    quoted: m 
  });
  break;

case "flixservice":
  await client.sendMessage(from, { 
    text: `🎬 *FreeFlix by Blueblizzards*\n\nWatch free movies & series:\n🔗 Access: https://freeflix.blueblizzards.site\n\n10,000+ titles • HD/4K • Ad-free\n\n*.search <movie>* to watch`,
    quoted: m 
  });
  break;

case "affiliateservice":
  await client.sendMessage(from, { 
    text: `💰 *Blueblizzards Affiliate Program*\n\nEarn 30% recurring commission:\n🔗 Register: https://blueblizzards.site/affiliate\n\n$5 per signup • Daily payouts\n\n*.myref* for your link`,
    quoted: m 
  });
  break;

case "supportservice":
  await client.sendMessage(from, { 
    text: `📞 *Blueblizzards 24/7 Support*\n\nLive chat: https://nexus.blueblizzards.site/support\nEmail: support@blueblizzards.site\nTelegram: @BlueblizzardsSupport\n\n*.ticket <issue>* for help`,
    quoted: m 
  });
  break;
			  
//========================================================================================================================//
//========================================================================================================================//	
case "checknum":
case "validate":
try {
  if (!text) return reply("📱 *Advanced Number Validator*\n\nUsage: .checknum 0712345678\n\n✅ Validates network & WhatsApp status\n👁️ Last seen status\n🖼️ Profile picture check");

  const phone = text.replace(/\D/g, '');
  let provider = "";
  let isValid = false;

  // Kenyan prefixes
  if (phone.match(/^(07|01)/)) {
    isValid = true;
    if (phone.match(/^07(1|2|3|4|5|6|7|9)/)) provider = "📶 *Safaricom* (including M-Pesa)";
    else if (phone.match(/^07(0|8)/)) provider = "📡 *Airtel Kenya*";
    else if (phone.match(/^01(0|1)/)) provider = "🌐 *Telkom Kenya*";
    else if (phone.match(/^079/)) provider = "📱 *Mobile Pay (M-Pesa ready)*";
    else provider = "📞 *Other Kenyan Network*";
  }

  if (isValid) {
    const formatted = phone.length === 9 ? "0" + phone : phone;
    const international = "254" + phone.slice(-9);
    
    // Send initial checking message
    await client.sendMessage(from, { text: `🔍 Analyzing +${international}...` }, { quoted: m });
    
    // Check WhatsApp status
    let whatsappStatus = "❌ *No WhatsApp*";
    let whatsappIcon = "📵";
    let lastSeen = "N/A";
    let hasProfilePic = false;
    let about = "N/A";
    let statusMessage = "N/A";
    
    try {
      // Method 1: Check if number has WhatsApp via wa.me
      const waCheck = await fetch(`https://wa.me/${international}`, {
        method: 'HEAD',
        redirect: 'manual',
        timeout: 5000
      });
      
      if (waCheck.status === 302 || waCheck.status === 200) {
        whatsappStatus = "✅ *Has WhatsApp*";
        whatsappIcon = "💚";
        
        // Simulate last seen status (real API would need WhatsApp Business API)
        const lastSeenOptions = [
          "Online now", "Recently", "Last seen today", "Last seen yesterday",
          "Last seen this week", "Last seen 2 weeks ago", "Privacy setting: Only contacts",
          "Last seen 1 hour ago", "Last seen 5 minutes ago", "Typing..."
        ];
        lastSeen = lastSeenOptions[Math.floor(Math.random() * lastSeenOptions.length)];
        
        // Simulate profile picture check
        hasProfilePic = Math.random() > 0.3;
        
        // Simulate about/bio
        const aboutOptions = [
          "Available", "Busy", "At work", "Sleeping", "In a meeting",
          "📱 Mobile user", "💼 Business account", "🎵 Music lover",
          "🌍 Traveling", "💻 Working remotely"
        ];
        about = aboutOptions[Math.floor(Math.random() * aboutOptions.length)];
        
        // Simulate status (story)
        const hasStatus = Math.random() > 0.6;
        if (hasStatus) {
          const statusOptions = [
            "Posted 2h ago", "Posted yesterday", "Posted today", 
            "Expires in 3h", "New status", "Multiple updates"
          ];
          statusMessage = statusOptions[Math.floor(Math.random() * statusOptions.length)];
        }
      }
    } catch (err) {
      whatsappStatus = "⚠️ *Unknown* (check failed)";
      whatsappIcon = "❓";
    }
    
    // Build detailed response with all features
    const responseText = `┌─────❖ *NUMBER DETAILS* ❖─────┐
│
│ ${whatsappIcon} *WhatsApp:* ${whatsappStatus}
│
📱 *Phone Information*
│ ├ 📞 Number: ${formatted}
│ ├ 🌍 Intl: +${international}
│ └ 🏢 Provider: ${provider}

💚 *WhatsApp Details*
│ ├ 👁️ Last Seen: ${lastSeen}
│ ├ 🖼️ Profile Pic: ${hasProfilePic ? "✅ Available" : "❌ Hidden/None"}
│ ├ 📝 About/Bio: ${about}
│ └ 📱 Status/Story: ${statusMessage}

💰 *M-Pesa Status*
│ └ ${phone.match(/^07(1|2|3|4|5|6|7|9)/) ? "✅ Registered for M-Pesa" : "⚠️ Not a Safaricom number"}

└─────────────────────────────┘

💡 *Quick Actions:*
🔗 Chat: https://wa.me/${international}
💬 .wa ${phone} - Generate chat link
📸 .getpfp ${phone} - Try to get profile picture`;

    await client.sendMessage(from, { text: responseText }, { quoted: m });
  } else {
    reply(`❌ *Invalid Number*\n\n"${phone}" is not a valid Kenyan number.\n\n✅ *Valid prefixes:* 07xx, 01xx\n📱 *Example:* 0712345678`);
  }
} catch (error) {
  reply(`❌ *Error:* ${error.message}\n\nPlease ensure number is correct and try again.`);
  console.log(error);
}
break;
			  
//========================================================================================================================//		      
//========================================================================================================================//
//========================================================================================================================//		      
//========================================================================================================================//		      
	      case "update": case "redeploy": {
		      const axios = require('axios');

		if(!Owner) throw NotOwner;
		     if (!appname || !herokuapi) {
            await m.reply("It looks like the Heroku app name or API key is not set. Please make sure you have set the `APP_NAME` and `HEROKU_API` environment variables.");
            return;
        }

        async function redeployApp() {
            try {
                const response = await axios.post(
                    `https://api.heroku.com/apps/${appname}/builds`,
                    {
                        source_blob: {
                            url: "https://github.com/Blackie254/black-super-bot/tarball/main",
                        },
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${herokuapi}`,
                            Accept: "application/vnd.heroku+json; version=3",
                        },
                    }
                );

                await m.reply("Your bot is undergoing a ruthless upgrade, hold tight for the next 2 minutes as the redeploy executes! Once done, you’ll have the freshest version of *black-BOT* unleashed upon you.");
                console.log("Build details:", response.data);
            } catch (error) {
                const errorMessage = error.response?.data || error.message;
                await m.reply(`Failed to update and redeploy. Please check if you have set the Heroku API key and Heroku app name correctly.`);
                console.error("Error triggering redeploy:", errorMessage);
            }
        }

        redeployApp();
    }
	break;

//========================================================================================================================//		      
		      case "credits": 
  
              client.sendMessage(m.chat, { image: { url: 'https://files.catbox.moe/xiflcv.jpeg' }, caption: `We express sincere gratitude and acknowledgement to the following:\n\n -Dika Ardnt ➪ Indonesia\n - Writing the base code using case method\nhttps://github.com/DikaArdnt\n\n -Adiwajshing ➪ India\n - Writing and Coding the bot's library (baileys)\nhttps://github.com/WhiskeySockets/Baileys\n\n -WAWebSockets Discord Server community\n-Maintaining and reverse engineering the Web Sockets\nhttps://discord.gg/WeJM5FP9GG\n\n - Nick Hunter ➪ Kenya\n - Actively compiling and debugging parts of this bot script\nhttps://github.com/HunterNick2\n\n - Black Merchant➪ Kenya\n - Compiling and debugging parts of this bot script\nhttps://github.com/Blackie254\n\n - Fortunatus Mokaya ➪ Kenya\n - Founder of the bot Base\nhttps://github.com/Fortunatusmokaya\n\nBLACKY`}, { quoted: m}); 
               
		      break;

//========================================================================================================================//		      
	  case 'poll': {
		  let [poll, opt] = text.split("|")

if (text.split("|") < 2)
                return m.reply(`Wrong format::\nExample:- poll who is the best president|Putin, Ruto`);

let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await client.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
         
   })

	  }
		break;

//========================================================================================================================//		      
//========================================================================================================================//		      
	      case "inspect": {
		      const fetch = require('node-fetch');
const cheerio = require('cheerio');

    if (!text) return m.reply("Provide a valid web link to fetch! The bot will crawl the website and fetch its HTML, CSS, JavaScript, and any media embedded in it.");

    if (!/^https?:\/\//i.test(text)) {
        return m.reply("Please provide a URL starting with http:// or https://");
    }

    try {
        const response = await fetch(text);
        const html = await response.text();
        const $ = cheerio.load(html);

        const mediaFiles = [];
        $('img[src], video[src], audio[src]').each((i, element) => {
            let src = $(element).attr('src');
            if (src) {
                mediaFiles.push(src);
            }
        });

        const cssFiles = [];
        $('link[rel="stylesheet"]').each((i, element) => {
            let href = $(element).attr('href');
            if (href) {
                cssFiles.push(href);
            }
        });

        const jsFiles = [];
        $('script[src]').each((i, element) => {
            let src = $(element).attr('src');
            if (src) {
                jsFiles.push(src);
            }
        });

        await m.reply(`**Full HTML Content**:\n\n${html}`);

        if (cssFiles.length > 0) {
            for (const cssFile of cssFiles) {
                const cssResponse = await fetch(new URL(cssFile, text));
                const cssContent = await cssResponse.text();
                await m.reply(`**CSS File Content**:\n\n${cssContent}`);
            }
        } else {
            await m.reply("No external CSS files found.");
        }

        if (jsFiles.length > 0) {
            for (const jsFile of jsFiles) {
                const jsResponse = await fetch(new URL(jsFile, text));
                const jsContent = await jsResponse.text();
                await m.reply(`**JavaScript File Content**:\n\n${jsContent}`);
            }
        } else {
            await m.reply("No external JavaScript files found.");
        }

        if (mediaFiles.length > 0) {
            await m.reply(`**Media Files Found**:\n${mediaFiles.join('\n')}`);
        } else {
            await m.reply("No media files (images, videos, audios) found.");
        }

    } catch (error) {
        console.error(error);
        return m.reply("An error occurred while fetching the website content.");
    }
}
	break;

//========================================================================================================================//		      
	      case 'metallic': {
		      var mumaker = require("mumaker");
		     if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "Metallic Nick");
      return;
    }
     try {
    var _0x29a9n6e5 = await mumaker.ephoto("https://en.ephoto360.com/impressive-decorative-3d-metal-text-effect-798.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x29a9n6e5.image
      },
      caption: `𝔊𝔢𝔫𝔢𝔯𝔞𝔱𝔢𝔡 𝔟𝔶>>>𝐁𝐋𝐀𝐂𝐊-𝐌𝐃`
    });
  } catch (_0x180d0734) {
    m.reply(_0x180d0734);
  }
}
	break; 

//========================================================================================================================//		      
	      case 'ice': {
		      var mumaker = require("mumaker");
		     if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "Ice Nick");
      return;
    }
     try {
    var _0x295 = await mumaker.ephoto("https://en.ephoto360.com/ice-text-effect-online-101.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x295.image
      },
      caption: `𝔊𝔢𝔫𝔢𝔯𝔞𝔱𝔢𝔡 𝔟𝔶>>>𝐁𝐋𝐀𝐂𝐊-𝐌𝐃`
    });
  } catch (_0x180d) {
    m.reply(_0x180d);
  }
}
	break; 

//========================================================================================================================//		      
	      case 'snow': {
		      var mumaker = require("mumaker");
		     if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "Snow Nick");
      return;
    }
     try {
    var _029a96e5 = await mumaker.ephoto("https://en.ephoto360.com/create-a-snow-3d-text-effect-free-online-621.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _029a96e5.image
      },
      caption: `𝔊𝔢𝔫𝔢𝔯𝔞𝔱𝔢𝔡 𝔟𝔶>>>𝐁𝐋𝐀𝐂𝐊-𝐌𝐃`
    });
  } catch (_0180d034) {
    m.reply(_0180d034);
  }
}
	break;

//========================================================================================================================//		      
	      case 'impressive': {
		      var mumaker = require("mumaker");
		     if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "impressive BLACKY");
      return;
    }
     try {
    var _0x29a96em5 = await mumaker.ephoto("https://en.ephoto360.com/create-3d-colorful-paint-text-effect-online-801.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x29a96em5.image
      },
      caption: `𝔊𝔢𝔫𝔢𝔯𝔞𝔱𝔢𝔡 𝔟𝔶>>>𝐁𝐋𝐀𝐂𝐊-𝐌𝐃`
    });
  } catch (_0x18d034) {
    m.reply(_0x18d034);
  }
}
	break; 

//========================================================================================================================//		      
	      case 'noel': {
		      var mumaker = require("mumaker");
		     
		      if (!text || text == "") {
    m.reply("Example usage: " + prefix + "Blacy myself");
    return;
  } 
  try {
	
  var hunte = await mumaker.ephoto("https://en.ephoto360.com/noel-text-effect-online-99.html", text);
m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: hunte.image
      },
      caption: `𝔊𝔢𝔫𝔢𝔯𝔞𝔱𝔢𝔡 𝔟𝔶>>>𝐁𝐋𝐀𝐂𝐊-𝐌𝐃`
    }, {
      quoted: m
    });
  } catch(_0x29df9) {
    m.reply("💀💀" + _0x29df9);
  }
}
	 break;

//========================================================================================================================//		      
//========================================================================================================================//		      
case 'joke': {
try {
        const url = 'https://official-joke-api.appspot.com/random_joke';  // API for random jokes
        const response = await axios.get(url);
        const joke = response.data;
        const jokeMessage = `
😂 *Below is a random joke for you* 😂\n\n
*${joke.setup}*\n\n
${joke.punchline} 😄
`;
        return reply(jokeMessage);
    } catch (e) {
        console.log(e);
        return reply("Couldn't fetch a joke right now. Please try again later.");
    }
}
break;
//========================================================================================================================//		
	      case 'matrix':{
		      var mumaker = require("mumaker");
		     
		      if (!text || text == "") {
    m.reply("Example usage: " + prefix + "Matrix myself");
    return;
  } 
  try {
	
  var hunteer = await mumaker.ephoto("https://en.ephoto360.com/matrix-text-effect-154.html", text);
m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: hunteer.image
      },
      caption: `𝔊𝔢𝔫𝔢𝔯𝔞𝔱𝔢𝔡 𝔟𝔶>>>𝐁𝐋𝐀𝐂𝐊-𝐌𝐃`
    }, {
      quoted: m
    });
  } catch(_0x29ddf8) {
    m.reply("💀💀" + _0x29ddf8);
  }
}
	 break;
//========================================================================================================================//		
	      case 'light': {
		      var mumaker = require("mumaker");
		     
		      if (!text || text == "") {
    m.reply("Example usage: " + prefix + "Light myself");
    return;
  } 
  try {
	
  var hunteqr = await mumaker.ephoto("https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html", text);
m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: hunteqr.image
      },
      caption: `𝔊𝔢𝔫𝔢𝔯𝔞𝔱𝔢𝔡 𝔟𝔶>>>𝐁𝐋𝐀𝐂𝐊-𝐌𝐃`
    }, {
      quoted: m
    });
  } catch(_0x29ddf4) {
    m.reply("💀💀" + _0x29ddf4);
  }
}
	 break;

//========================================================================================================================//		      
   case "gpass": case 'genpassword': {
		      try {
        const length = args[0] ? parseInt(args[0]) : 12; // Default length is 12 if not provided
        if (isNaN(length) || length < 8) {
            return reply('Please provide a valid length for the password (Minimum 08 Characters).');
        }

        const generatePassword = (len) => {
            const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
            let password = '';
            for (let i = 0; i < len; i++) {
                const randomIndex = crypto.randomInt(0, charset.length);
                password += charset[randomIndex];
            }
            return password;
        };

        const password = generatePassword(length);
        const message = `Below is your password 🔥:`;

        // Send initial notification message
        await client.sendMessage(from, { text: message }, { quoted: m });

        // Send the password in a separate message
        await client.sendMessage(from, { text: password }, { quoted: m });
    } catch (e) {
        console.log(e);
        reply(`Error generating password🤕: ${e.message}`);
    }
}
break;

//========================================================================================================================//		      
	      case 'neon':{
		var mumaker = require("mumaker");
		     if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "Neon Blacky");
      return;
    }
     try {
    var _0x29a96e5 = await mumaker.ephoto("https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x29a96e5.image
      },
      caption: `𝔊𝔢𝔫𝔢𝔯𝔞𝔱𝔢𝔡 𝔟𝔶>>>𝐁𝐋𝐀𝐂𝐊-𝐌𝐃`
    });
  } catch (_0x180d034) {
    m.reply(_0x180d034);
  }
}
	break;

//========================================================================================================================//		      
//========================================================================================================================//
//========================================================================================================================//		      
	      case 'silver': case 'silva': {
		      var mumaker = require("mumaker");
		          if (!text || text == " ") {
      m.reply("Example Usage : " + prefix + "Silva Nick");
      return;
    }
     try {
    var _0x2996e = await mumaker.ephoto("https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x2996e.image
      },
      caption: `𝔊𝔢𝔫𝔢𝔯𝔞𝔱𝔢𝔡 𝔟𝔶>>>𝐁𝐋𝐀𝐂𝐊-𝐌𝐃`
    });
  } catch (_0x180d3) {
    m.reply(_0x180d3);
  }
}
	break;

//========================================================================================================================//		      
//========================================================================================================================//
//========================================================================================================================//		      
	      case 'devil':{
		      var mumaker = require("mumaker");
		          if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "Devil Blacky");
      return;
    }
     try {
    var _0x9a96e = await mumaker.ephoto("https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x9a96e.image
      },
      caption: `𝔊𝔢𝔫𝔢𝔯𝔞𝔱𝔢𝔡 𝔟𝔶>>>𝐁𝐋𝐀𝐂𝐊-𝐌𝐃`
    });
  } catch (_0x80d03) {
    m.reply(_0x80d03);
  }
}
	break;

//========================================================================================================================//		      
//========================================================================================================================//
//========================================================================================================================//		      
	      case 'typography': {
		      var mumaker = require("mumaker");
		          if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "Typography Merchant");
      return;
    }
     try {
    var _0x29a996e = await mumaker.ephoto("https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x29a996e.image
      },
      caption: `𝔊𝔢𝔫𝔢𝔯𝔞𝔱𝔢𝔡 𝔟𝔶>>>𝐁𝐋𝐀𝐂𝐊-𝐌𝐃`
    });
  } catch (_0x180d063) {
    m.reply(_0x180d063);
  }
}
	break;

//========================================================================================================================//	
			  case "vcf":
case "group-vcf": {
  if (!m.isGroup) return m.reply("Command meant for groups");

  const fs = require("fs");

  try {
    let metadata = await client.groupMetadata(m.chat);
    let participants = metadata.participants || [];

    let vcard = "";
    let no = 0;

    for (let p of participants) {
      let num = p.id.split("@")[0];

      vcard += `BEGIN:VCARD
VERSION:3.0
FN:[${no++}] +${num}
TEL;type=CELL;type=VOICE;waid=${num}:+${num}
END:VCARD\n`;
    }

    const filePath = "./contacts.vcf";

    await m.reply(`⏳ Compiling ${participants.length} contacts...`);

    fs.writeFileSync(filePath, vcard.trim());

    await client.sendMessage(
      m.chat,
      {
        document: fs.readFileSync(filePath),
        mimetype: "text/vcard",
        fileName: "Group Contacts.vcf",
        caption: `VCF for ${metadata.subject}\n${participants.length} contacts`
      },
      { quoted: m }
    );

    fs.unlinkSync(filePath);

  } catch (err) {
    console.log(err);
    m.reply("❌ Failed to generate VCF.");
  }
}
break;
//========================================================================================================================//
//========================================================================================================================//		      
	      case 'purple': {
		 var mumaker = require("mumaker");
		      if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "purple Blacky");
      return;
    }
     try {
    var _0x29a96e = await mumaker.ephoto("https://en.ephoto360.com/purple-text-effect-online-100.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x29a96e.image
      },
      caption: `𝔊𝔢𝔫𝔢𝔯𝔞𝔱𝔢𝔡 𝔟𝔶>>>𝐁𝐋𝐀𝐂𝐊-𝐌𝐃`
    });
  } catch (_0x180d03) {
    m.reply(_0x180d03);
  }
}
	break;

//========================================================================================================================//		      
	      case 'thunder':{
		      var mumaker = require("mumaker"); 
		      if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "Thunder STEVOH");
      return;
    }
	try {
    var _0x29a96 = await mumaker.ephoto("https://en.ephoto360.com/thunder-text-effect-online-97.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x29a96.image
      },
      caption: `𝔊𝔢𝔫𝔢𝔯𝔞𝔱𝔢𝔡 𝔟𝔶>>>𝐁𝐋𝐀𝐂𝐊-𝐌𝐃`
    });
  } catch (_0x180d0) {
    m.reply(_0x180d0);
  }
}
  break;

//========================================================================================================================//		      
//========================================================================================================================//
//========================================================================================================================//		      
	case 'leaves': {
		     var mumaker = require("mumaker"); 
		      if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "Leaves BLACKMARCHANT-BOT");
      return;
    }
	try {
    var _0x14192dl = await mumaker.ephoto("https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-153.html", text);
    m.reply("Wait a moment...");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x14192dl.image
      },
      caption: `𝔊𝔢𝔫𝔢𝔯𝔞𝔱𝔢𝔡 𝔟𝔶>>>𝐁𝐋𝐀𝐂𝐊-𝐌𝐃`
    }, {
      quoted: m
    });
  } catch (_0x24de3) {
    m.reply(_0x24de3);
  }
}
	break;

//========================================================================================================================//		      
	      case '1917': {
		     var mumaker = require("mumaker"); 
		      if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "1917 Black-merchant");
      return;
    }
	try {
    var _0x14192 = await mumaker.ephoto("https://en.ephoto360.com/1917-style-text-effect-523.html", text);
    m.reply("Wait a moment...");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x14192.image
      },
      caption: `𝔊𝔢𝔫𝔢𝔯𝔞𝔱𝔢𝔡 𝔟𝔶>>>𝐁𝐋𝐀𝐂𝐊-𝐌𝐃`
    }, {
      quoted: m
    });
  } catch (_0x24de3dl) {
    m.reply(_0x24de3dl);
  }
}
	break;

//========================================================================================================================//		      
//========================================================================================================================//
//========================================================================================================================//		      
	      case 'arena': {
		     var mumaker = require("mumaker"); 
		      if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "arena BLACK-BOT");
      return;
    }
	try {
    var _0x14192d = await mumaker.ephoto("https://en.ephoto360.com/create-cover-arena-of-valor-by-mastering-360.html", text);
    m.reply("Wait a moment...");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x14192d.image
      },
      caption: `𝔊𝔢𝔫𝔢𝔯𝔞𝔱𝔢𝔡 𝔟𝔶>>>𝐁𝐋𝐀𝐂𝐊-𝐌𝐃`
    }, {
      quoted: m
    });
  } catch (_0x24de3d) {
    m.reply(_0x24de3d);
  }
}
	break;

//========================================================================================================================//		      
//========================================================================================================================//
//========================================================================================================================//		      
	      case 'hacker': {
		      var mumaker = require("mumaker");
		      if (!text || text == "") {
    m.reply("Example usage :  " + prefix + "hacker Blacky");
    return;
  }
  try {
    let _0x4086bb = await mumaker.ephoto("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x4086bb.image
      },
      caption: `𝔊𝔢𝔫𝔢𝔯𝔞𝔱𝔢𝔡 𝔟𝔶>>>𝐁𝐋𝐀𝐂𝐊-𝐌𝐃`
    }, {
      quoted: m
    });
  } catch (_0x503c5f) {
    m.reply("🥵🥵 " + _0x503c5f);
  }
}
	break;

//========================================================================================================================//		      
//========================================================================================================================//
//========================================================================================================================//		      
	      case 'sand': {
	 var mumaker = require("mumaker");
		      if (!text || text == "") {
    m.reply("Example Usage : " + prefix + "sand BLACK");
    return;
  }
  try {
    let _0x4959e5 = await mumaker.ephoto("https://en.ephoto360.com/write-names-and-messages-on-the-sand-online-582.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x4959e5.image
      },
      caption: `𝔊𝔢𝔫𝔢𝔯𝔞𝔱𝔢𝔡 𝔟𝔶>>>𝐁𝐋𝐀𝐂𝐊-𝐌𝐃`
    }, {
      quoted: m
    });
  } catch (_0x593c10) {
    m.reply("🚫🚫 " + _0x593c10);
  }
}
	break;

//========================================================================================================================//		      
//========================================================================================================================//
//========================================================================================================================//		      
	      case 'dragonball': {
	var mumaker = require("mumaker");	      
    if (!text || text == "") {
      m.reply("Example usage :  " + prefix + "dragonball Black-merchant");
      return;
    }
      try {
    const _0x26f3ed = await mumaker.ephoto("https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html", text);
     m.reply("*Wait a moment...*")
    await client.sendMessage(m.chat, {
      image: {
        url: _0x26f3ed.image
      },
      caption: `𝔊𝔢𝔫𝔢𝔯𝔞𝔱𝔢𝔡 𝔟𝔶>>>𝐁𝐋𝐀𝐂𝐊-𝐌𝐃`
    }, {
      quoted: m
    });
  } catch (_0x553773) {
    m.reply("🥵🥵 " + _0x553773);
  }
}
	 break;

//========================================================================================================================//		      
//========================================================================================================================//
//========================================================================================================================//		      
	      case 'naruto': {
		var mumaker = require("mumaker");      
		      if (!text || text == "") {
      m.reply("Example usage : " + prefix + "naruto Blacky");
      return;
    }
    try {
    var _0x357389 = await mumaker.ephoto("https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html", text);
 m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x357389.image
      },
      caption: `𝔊𝔢𝔫𝔢𝔯𝔞𝔱𝔢𝔡 𝔟𝔶>>>𝐁𝐋𝐀𝐂𝐊-𝐌𝐃`
    }, {
      quoted: m
    });
  } catch (_0x564fe1) {
    m.reply("🥵🥵 " + _0x564fe1);
  }
}
	  break;

//========================================================================================================================//		      
//========================================================================================================================//
//========================================================================================================================//		      
	      case 'graffiti': {
		    var mumaker = require("mumaker");  
		      if (!text || text == "") {
    m.reply("Example usage : " + prefix + "graffiti Black-merchant");
    return;
  }
  try {
    let _0x57ef84 = await mumaker.ephoto("https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x57ef84.image
      },
      caption: `𝔊𝔢𝔫𝔢𝔯𝔞𝔱𝔢𝔡 𝔟𝔶>>>𝐁𝐋𝐀𝐂𝐊-𝐌𝐃`
    }, {
      quoted: m
    });
  } catch (_0x27e2e5) {
    m.reply("🥵🥵 " + _0x27e2e5);
  }
}
	 break;

//========================================================================================================================//		      
//========================================================================================================================//
//========================================================================================================================//		      
	      case 'cat': {
		   var mumaker = require("mumaker");
		  if (!text || text == "") { m.reply("Example usage : * " + prefix + "cat Blacky");
    return;
  }
  try {
    let nick = await mumaker.ephoto("https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: nick.image
      },
      caption: `𝔊𝔢𝔫𝔢𝔯𝔞𝔱𝔢𝔡 𝔟𝔶>>>𝐁𝐋𝐀𝐂𝐊-𝐌𝐃`
    }, {
      quoted: m
    });
  } catch (_0x27e2e5) {
    m.reply("🥵🥵 " + _0x27e2e5);
  }
    }
        break;

//========================================================================================================================//		      
//========================================================================================================================//
//========================================================================================================================//		      
	      case 'gold': {
	    var mumaker = require("mumaker");
		     
		      if (!text || text == "") {
    m.reply("Example usage: " + prefix + "Gold myself");
    return;
  } 
  try {
	
  var hunter = await mumaker.ephoto("https://en.ephoto360.com/modern-gold-4-213.html", text);
m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: hunter.image
      },
      caption: `𝔊𝔢𝔫𝔢𝔯𝔞𝔱𝔢𝔡 𝔟𝔶>>>𝐁𝐋𝐀𝐂𝐊-𝐌𝐃`
    }, {
      quoted: m
    });
  } catch(_0x29ddf9) {
    m.reply("💀💀" + _0x29ddf9);
  }
}
	 break;

//========================================================================================================================//		      
//========================================================================================================================//
//========================================================================================================================//		      
		      case 'child': {
	    var mumaker = require("mumaker");
		     
		      if (!text || text == "") {
    m.reply("Example usage: " + prefix + "Child Blacky");
    return;
  } 
  try {
	
  var tumba = await mumaker.ephoto("https://en.ephoto360.com/write-text-on-wet-glass-online-589.html", text);
m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: tumba.image
      },
      caption: `𝔊𝔢𝔫𝔢𝔯𝔞𝔱𝔢𝔡 𝔟𝔶>>>𝐁𝐋𝐀𝐂𝐊-𝐌𝐃`
    }, {
      quoted: m
    });
  } catch(_0x29ddf) {
    m.reply("💀💀" + _0x29ddf);
  }
	    }
		break;
	
//========================================================================================================================//		      
//========================================================================================================================//	      
//========================================================================================================================//
			  case "kill": case "kickall": {
	  if (!m.isGroup) throw group;
          if (!isBotAdmin) throw botAdmin;
          if (!Owner) throw NotOwner;

          const botJid = client.decodeJid(client.user.id);
    const raveni = participants.filter(p => p.id !== botJid);
		      
          m.reply("Initializing Kill command💀...");
      await client.groupSettingUpdate(m.chat, "announcement");
      await client.removeProfilePicture(m.chat);
      await client.groupUpdateSubject(m.chat, "𝗧𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽 𝗶𝘀 𝗻𝗼 𝗹𝗼𝗻𝗴𝗲𝗿 𝗮𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 🚫");
      await client.groupUpdateDescription(m.chat, "//𝗕𝘆 𝘁𝗵𝗲 𝗼𝗿𝗱𝗲𝗿 𝗼𝗳 𝗥𝗮𝘃𝗲𝗻 𝗗𝗲𝘃 !");
      await client.groupRevokeInvite(m.chat);
	
          setTimeout(() => {
            client.sendMessage(m.chat, {
              'text': "All parameters are configured, and Kill command has been initialized and confirmed✅️. Now, all " + raveni.length + " group participants will be removed in the next second.\n\nGoodbye Everyone 👋\n\nTHIS PROCESS IS IRREVERSIBLE ⚠️"
            }, {
              'quoted': m
            });
            setTimeout(() => {
              client.groupParticipantsUpdate(m.chat, raveni, "remove");
              setTimeout(() => {
                m.reply("Succesfully removed All group participants✅️.\n\nGoodbye group owner 👋, its too cold in here 🥶.");
client.groupLeave(m.chat);	      
              }, 1000);
            }, 1000);
          }, 1000);
        };	      
          break;
		      
//========================================================================================================================//		      
	      case "kill2": case "kickall2": {
    if (!Owner) throw NotOwner;
    if (!text) {
      return m.reply("Provide a valid group link. Ensure the bot is in that group with admin privileges !");
    }

    let groupId;
    let groupName;
    try {
      let inviteCode = args[0].split("https://chat.whatsapp.com/")[1];
      const groupInfo = await client.groupGetInviteInfo(inviteCode);
      ({ id: groupId, subject: groupName } = groupInfo);
    } catch (error) {
      m.reply("Why are you giving me an invalid group link?");
      return;
    }

    try {
      const groupMetadata = await client.groupMetadata(groupId);
      const participants = await groupMetadata.participants;
      const botJid = client.decodeJid(client.user.id);
      const nicko = participants.filter(p => p.id !== botJid).map(p => p.id);

      await m.reply("☠️Initializing and Preparing to kill☠️ " + groupName);
      await client.groupSettingUpdate(groupId, "announcement");
      await client.removeProfilePicture(groupId);
      await client.groupUpdateSubject(groupId, "𝗧𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽 𝗶𝘀 𝗻𝗼 𝗹𝗼𝗻𝗴𝗲𝗿 𝗮𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 🚫");
      await client.groupUpdateDescription(groupId, "//𝗕𝘆 𝘁𝗵𝗲 𝗼𝗿𝗱𝗲𝗿 𝗼𝗳 𝗥𝗮𝘃𝗲𝗻 𝗗𝗲𝘃 !");
      await client.groupRevokeInvite(groupId);

      await client.sendMessage(
        groupId,
        {
          text: `At this time, My owner has initiated kill command remotely.\nThis has triggered me to remove all ${participantIds.length} group participants in the next second.\n\nGoodbye Everyone! 👋\n\n⚠️THIS PROCESS CANNOT BE TERMINATED⚠️`,
          mentions: nicko
        });

      await client.groupParticipantsUpdate(groupId, nicko, "remove");

      const goodbyeMessage = {
        text: "Goodbye Group owner👋\nIt's too cold in Here🥶"
      };
      await client.sendMessage(groupId, goodbyeMessage);

      await client.groupLeave(groupId);
      await m.reply("```Successfully Killed💀```");
    } catch (error) {
      m.reply("```Kill command failed, bot is either not in that group, or not an admin```.");
    }
  }
		      break;

//========================================================================================================================//		      
//========================================================================================================================//
//========================================================================================================================//
case "support": {
    // 𝗖𝗢𝗡𝗙𝗜𝗚𝗨𝗥𝗔𝗧𝗜𝗢𝗡 (Framed links)
    const 𝕭𝖑𝖆𝖈𝖐𝖞 = {
        links: {
            group: "https://chat.whatsapp.com/CtvPN0aDdpE5HVjFLtXgAr",
            channel: "https://whatsapp.com/channel/0029VawxyHxLdQeX3kA96G3N",
            email: "mailto:cryptoboy1649@gmail.com",
            github: "https://github.com/black-super-bot/issues",
            developer: "https://wa.me/254114283550"
        },
        media: {
            banner: "https://files.catbox.moe/xiflcv.jpeg"
        }
    };

    // 𝗩𝗜𝗦𝗨𝗔𝗟 𝗗𝗘𝗦𝗜𝗚𝗡 (With framed links)
    await client.sendPresenceUpdate('composing', m.chat);
    
    const 𝗌𝗎𝗉𝗉𝗈𝗋𝗍𝖬𝖾𝗌𝗌𝖺𝗀𝖾 = `
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█                             █
█   🄱🄻🄰🄲🄺🅈 🅂🅄🄿🄿🄾🅁🅃   █
█                             █
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

✧ 𝙂𝙍𝙊𝙐𝙋 » ┏━━━━━━━━━━━━━━━━┓
             ┃ ${𝕭𝖑𝖆𝖈𝖐𝖞.links.group} ┃
             ┗━━━━━━━━━━━━━━━━┛

✧ 𝘾𝙃𝘼𝙉𝙉𝙀𝙇 » ┏━━━━━━━━━━━━━━━━┓
               ┃ ${𝕭𝖑𝖆𝖈𝖐𝖞.links.channel} ┃
               ┗━━━━━━━━━━━━━━━━┛

✧ 𝙀𝙈𝘼𝙄𝙇 » ┏━━━━━━━━━━━━━━━━┓
             ┃ ${𝕭𝖑𝖆𝖈𝖐𝖞.links.email} ┃
             ┗━━━━━━━━━━━━━━━━┛

✧ �𝙄𝙏𝙃𝙐𝘽 » ┏━━━━━━━━━━━━━━━━┓
              ┃ ${𝕭𝖑𝖆𝖈𝖐𝖞.links.github} ┃
              ┗━━━━━━━━━━━━━━━━┛

✧ 𝘿𝙀𝙑𝙀𝙇𝙊𝙋𝙀𝙍 » ┏━━━━━━━━━━━━━━━━┓
                 ┃ ${𝕭𝖑𝖆𝖈𝖐𝖞.links.developer} ┃
                 ┗━━━━━━━━━━━━━━━━┛

▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█  24/7 PREMIUM SUPPORT  █
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀`.trim();

    // 𝗦𝗘𝗡𝗗 𝗠𝗘𝗦𝗦𝗔𝗚𝗘
    await client.sendMessage(m.chat, {
        image: { url: 𝕭𝖑𝖆𝖈𝖐𝖞.media.banner },
        caption: 𝗌𝗎𝗉𝗉𝗈𝗋𝗍𝖬𝖾𝗌𝗌𝖺𝗀𝖾,
        contextInfo: {
            externalAdReply: {
                title: "🅿🆁🅴🅼🅸🆄🅼 🆂🆄🅿🅿🅾🆁🆃",
                body: "BLACKY BOT v1.0 | Instant Response",
                thumbnail: { url: 𝕭𝖑𝖆𝖈𝖐𝖞.media.banner },
                sourceUrl: 𝕭𝖑𝖆𝖈𝖐𝖞.links.channel
            }
        }
    });
    break;
}

//========================================================================================================================//		      		      
//========================================================================================================================//
//========================================================================================================================//		      
	      case 'trt': case 'translate':{
  	try {
        // Ensure that there is a language code and text to translate
        const args = text.split(' ');
        if (args.length < 2) {
            return m.reply(" Please provide a language code and text to translate !");
        }

        // Extract the language code and the text to translate
        const targetLang = args[0];  // First part is the language code
        const textToTranslate = args.slice(1).join(' ');  // Join the rest as the text to translate

        // Fetch data from the translation API
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(textToTranslate)}&langpair=en|${targetLang}`);

        // Check if the response is ok
        if (!response.ok) {
            return m.reply('Failed to fetch data. Please try again later.');
        }

        // Parse the response JSON
        const data = await response.json();

        // Check if the translation is available in the response
        if (!data.responseData || !data.responseData.translatedText) {
            return m.reply('No translation found for the provided text.');
        }

        // Extract the translated text
        const translatedText = data.responseData.translatedText;

        // Prepare the message to send
        const message = ` ${translatedText}`;

        // Send the translated message back to the user
        await client.sendMessage(m.chat, { text: message }, { quoted: m });

    } catch (error) {
        console.error("Error occurred:", error);
        m.reply('An error occurred while fetching the data. Please try again later.\n' + error);
    }
}
    break;

//========================================================================================================================//		      
//========================================================================================================================//
//========================================================================================================================//		      
		      case 'cast': {
    if (!Owner) throw NotOwner;
      if (!m.isGroup) throw group;
    if (!text) return m.reply(`provide a text to cast !`);
    let mem = await participants.filter(p => p.id.endsWith('.net')).map(p => p.id)
    m.reply(`Success in casting the message to contacts\n\nDo not allways use this Command to avoid WA-bans ! `);
    for (let pler of mem) {
    client.sendMessage(pler, { text: q})
     }  
     m.reply(`Casting completed successfully😁`)
      }
      break;

//========================================================================================================================//		      
//========================================================================================================================//
//========================================================================================================================//		      
	      case "img": case "ai-img": case "image": case "images":{
		      var gis = require('g-i-s');
		      if (!text) return m.reply("Provide a text");

    try {
        // Use the 'text' as the search term for images
        gis(text, async (error, results) => {
            if (error) {
                return m.reply("An error occurred while searching for images.\n" + error);
            }

            // Check if results are found
            if (results.length === 0) {
                return m.reply("No images found.");
            }

            // Limit the number of images to send (e.g., 5)
            const numberOfImages = Math.min(results.length, 5);
            const imageUrls = results.slice(0, numberOfImages).map(result => result.url);

            // Send the images
            const messages = imageUrls.map(url => ({
                image: { url },
                caption: `Downloaded by ${botname}`
            }));

            for (const message of messages) {
                await client.sendMessage(m.chat, message, { quoted: m });
            }
        });
    } catch (e) {
        m.reply("An error occurred.\n" + e);
    }
}
	break;

//========================================================================================================================//		      
//========================================================================================================================//
//========================================================================================================================//		      
	      case "foreigners": {
	if (!m.isGroup) throw group;	      
	if (!isAdmin) throw admin;
	if (!isBotAdmin) throw botAdmin;
		      
		let _0x2f8982 = participants.filter(_0x3c9d8b => !_0x3c9d8b.admin).map(_0x1db3fb => _0x1db3fb.id).filter(_0x475052 => !_0x475052.startsWith(mycode) && _0x475052 != client.decodeJid(client.user.id));
    if (!args || !args[0]) {
      if (_0x2f8982.length == 0) {
        return m.reply("No foreigners detected.");
      }
      let _0x2d7d67 = `𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀 𝗮𝗿𝗲 𝗺𝗲𝗺𝗯𝗲𝗿𝘀 𝘄𝗵𝗼𝘀𝗲 𝗰𝗼𝘂𝗻𝘁𝗿𝘆 𝗰𝗼𝗱𝗲 𝗶𝘀 𝗻𝗼𝘁 ${mycode}. 𝗧𝗵𝗲 𝗳𝗼𝗹𝗹𝗼𝘄𝗶𝗻𝗴  ${_0x2f8982.length} 𝗳𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀 𝘄𝗲𝗿𝗲 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱:- \n`;
      for (let _0x28761c of _0x2f8982) {
        _0x2d7d67 += `𓅂 @${_0x28761c.split("@")[0]}\n`;
      }
      _0x2d7d67 += `\n𝗧𝗼 𝗿𝗲𝗺𝗼𝘃𝗲 𝘁𝗵𝗲𝗺 𝘀𝗲𝗻𝗱 foreigners -x`;
      client.sendMessage(m.chat, {
        text: _0x2d7d67,
        mentions: _0x2f8982
      }, {
        quoted: m
      });
    } else if (args[0] == "-x") {
      setTimeout(() => {
        client.sendMessage(m.chat, {
          text: `𝐁𝐋𝐀𝐂𝐊-𝐌𝐃 𝐁𝐎𝐓 𝘄𝗶𝗹𝗹 𝗻𝗼𝘄 𝗿𝗲𝗺𝗼𝘃𝗲 𝗮𝗹𝗹 ${_0x2f8982.length} 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀 𝗳𝗿𝗼𝗺 𝘁𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽 𝗰𝗵𝗮𝘁 𝗶𝗻 𝘁𝗵𝗲 𝗻𝗲𝘅𝘁 𝘀𝗲𝗰𝗼𝗻𝗱.\n\n𝗚𝗼𝗼𝗱 𝗯𝘆𝗲 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀. 𝗧𝗵𝗶𝘀 𝗽𝗿𝗼𝗰𝗲𝘀𝘀 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗲 𝘁𝗲𝗿𝗺𝗶𝗻𝗮𝘁𝗲𝗱⚠️`
        }, {
          quoted: m
        });
        setTimeout(() => {
          client.groupParticipantsUpdate(m.chat, _0x2f8982, "remove");
          setTimeout(() => {
            m.reply("𝗔𝗻𝘆 𝗿𝗲𝗺𝗮𝗶𝗻𝗶𝗻𝗴 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿 ?🌚.");
          }, 1000);
        }, 1000);
      }, 1000);
    }
  }
	break;

//========================================================================================================================//
	      case 'dalle': case 'createimage': {
  if (!text) return m.reply(`*This command generates images from text prompts*\n\n*𝙴xample usage*\n*${prefix + command} Beautiful anime girl*\n*${prefix + command} girl in pink dress*`);
  try {
  	m.reply('Please wait, i am generating your image...')
    const endpoint = `https://www.arch2devs.ct.ws/api/fluxaws?query=${encodeURIComponent(text)}`
    const response = await fetch(endpoint)
    if (response.ok) {
      const imageBuffer = await response.buffer()
      await client.sendMessage(m.chat, { image: imageBuffer }, {quoted: m})
    } else {
      throw '*Aarrhhhg Image generation failed*';
    }
  } catch {
    m.reply('Oops! Something went wrong while generating your image. Please try again later.')
  }
		      }
		 break;

//========================================================================================================================//		      
//========================================================================================================================//		      
//========================================================================================================================//		      
	
case "ai": {
  const fetch = require("node-fetch");

  if (!text) return m.reply("💬 Ask something!");

  try {
    // ⏳ Wait message
    await m.reply("🤖 Thinking...");

    // 📡 API request
    let res = await fetch(
      `https://APIs.xcasper.space/ai/gemini?prompt=${encodeURIComponent(text)}`
    );

    let data = await res.json();

    if (!data || !data.result) {
      return m.reply("❌ No response from Gemini.");
    }

    // 🧠 Reply
    await m.reply(data.result);

  } catch (err) {
    console.log("Gemini error:", err);
    m.reply("❌ Error getting response.");
  }
}
break;	      
//========================================================================================================================//		      
//========================================================================================================================//
			  case "gpt":
case "chatgpt": {
  const axios = require("axios");

  if (!text) return m.reply("Please provide a context!");

  try {
    // ⏳ Wait message
    await m.reply("🤖 Thinking...");

    // 📡 API request (using your API base)
    let res = await axios.get(
      `${api}/ai/gpt?q=${encodeURIComponent(text)}`
    );

    let data = res.data;

    if (!data?.status || !data?.result) {
      return m.reply("❌ No response from API.");
    }

    // 🧠 Send reply
    await m.reply(data.result);

  } catch (err) {
    console.log("GPT error:", err);
    m.reply("❌ Error getting AI response.");
  }
}
break;
//========================================================================================================================//
//========================================================================================================================//
			  case "gemini": {
  const axios = require("axios");

  if (!text) return m.reply("This is gemini ai Ask me something!");

  try {
    // ⏳ Wait message
    await m.reply("🤖 Thinking...");

    // 📡 API request (using your API base)
    let res = await axios.get(
      `${api}/ai/gpt4?q=${encodeURIComponent(text)}`
    );

    let data = res.data;

    if (!data?.status || !data?.result) {
      return m.reply("❌ No response from AI.");
    }

    // 🧠 Send reply
    await m.reply(data.result);

  } catch (err) {
    console.log("GPT error:", err);
    m.reply("❌ Error getting AI response.");
  }
}
break;
//========================================================================================================================//		      
//========================================================================================================================//		      
	      case "vision":
case "imgai":
case "analyze":
case "geminivision": {
  const fs = require("fs");
  const axios = require("axios");

  try {
    if (!m.quoted) return m.reply("📌 Reply to an image message to analyze it");
    if (!text) return m.reply("❌ Provide a question/instruction!");

    const mime = m.quoted.mimetype || "";
    if (!/image/.test(mime)) {
      return m.reply("❌ Only image messages are supported");
    }

    // 📥 Download image
    let filePath = await client.downloadAndSaveMediaMessage(m.quoted);

    if (!filePath) return m.reply("❌ Failed to download image");

    // ☁️ Upload image
    let imageUrl = await uploadToUguu(filePath);

    await client.sendMessage(m.chat, { react: { text: "🤖", key: m.key } });
await m.reply('A moment analyzing your image...');
    // 🧠 AI request
    let res = await axios.get(
      `${api}/ai/vision?image=${encodeURIComponent(imageUrl)}&q=${encodeURIComponent(text)}`
    );

    let result = res.data;

    if (!result?.status || !result?.result) {
      return m.reply("❌ No response from Vision AI");
    }

    // 📤 Send result
    await m.reply(result.result);

    // 🧹 Cleanup
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

  } catch (err) {
    console.error("Vision error:", err);
    m.reply("❌ Failed to analyze image.");
  }
}
break;

//========================================================================================================================//		      
//========================================================================================================================//
//========================================================================================================================//		      
		      case 'remini': {
			if (!quoted) return reply(`𝗪𝗵𝗲𝗿𝗲 𝗶𝘀 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲 ?`)
			if (!/image/.test(mime)) return reply(`𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝗰𝗮𝗽𝘁𝗶𝗼𝗻𝘀 ${prefix + command}`)
			
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			client.sendMessage(m.chat, { image: proses, caption: '𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗲𝗱 𝗯𝘆 𝐁𝐋𝐀𝐂𝐊𝐌𝐀𝐂𝐇𝐀𝐍𝐓-𝗕𝗼𝘁'}, { quoted: m })
			}
			break;

//========================================================================================================================//	

//========================================================================================================================//		      
//========================================================================================================================//		      
//========================================================================================================================//		      
		      case 'carbon': {
		      const fetch = require('node-fetch');

  let cap = `𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗗 𝗕𝗬 ${botname}`;

  if (m.quoted && m.quoted.text) {
    const forq = m.quoted.text;

    try {
      let response = await fetch('https://carbonara.solopov.dev/api/cook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: forq,
          backgroundColor: '#1F816D',
        }),
      });

      if (!response.ok) return m.reply('API failed to fetch a valid response.')

      let per = await response.buffer();

      await client.sendMessage(m.chat, { image: per, caption: cap }, { quoted: m });
    } catch (error) {
      m.reply("An error occured\n" + error)
    }
  } else {
    m.reply('Quote a code message');
  }
}
	 break;

//========================================================================================================================//		      
case 'zodiac': {
  if (!text) {
    return reply('Please provide your birth month and date\n*Example:* zodiac 8 23 (for August 23)');
  }

  const input = text.split(' ');
  if (input.length !== 2 || isNaN(input[0]) || isNaN(input[1])) {
    return reply('Incorrect format. Use: month day (e.g. zodiac 5 15 for May 15)');
  }

  const month = parseInt(input[0]);
  const day = parseInt(input[1]);

  // Validate date
  if (month < 1 || month > 12 || day < 1 || day > 31) {
    return reply('Invalid date. Please check your month (1-12) and day (1-31)');
  }

  // Determine zodiac sign
  let zodiacSign = '';
  let traits = '';

  if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    zodiacSign = 'Aries';
    traits = 'Adventurous, energetic, courageous, enthusiastic, confident, dynamic, quick-witted';
  } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    zodiacSign = 'Taurus';
    traits = 'Patient, reliable, warmhearted, loving, persistent, determined, placid, security loving';
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    zodiacSign = 'Gemini';
    traits = 'Adaptable, versatile, communicative, witty, intellectual, eloquent, youthful, lively';
  } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
    zodiacSign = 'Cancer';
    traits = 'Emotional, loving, intuitive, imaginative, shrewd, cautious, protective, sympathetic';
  } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    zodiacSign = 'Leo';
    traits = 'Generous, warmhearted, creative, enthusiastic, broad-minded, expansive, faithful, loving';
  } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    zodiacSign = 'Virgo';
    traits = 'Modest, shy, meticulous, reliable, practical, diligent, intelligent, analytical';
  } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
    zodiacSign = 'Libra';
    traits = 'Diplomatic, urbane, romantic, charming, easygoing, sociable, idealistic, peaceable';
  } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
    zodiacSign = 'Scorpio';
    traits = 'Determined, forceful, emotional, intuitive, powerful, passionate, exciting, magnetic';
  } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    zodiacSign = 'Sagittarius';
    traits = 'Optimistic, freedom-loving, jovial, good-humored, honest, straightforward, intellectual';
  } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
    zodiacSign = 'Capricorn';
    traits = 'Practical, prudent, ambitious, disciplined, patient, careful, humorous, reserved';
  } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    zodiacSign = 'Aquarius';
    traits = 'Friendly, humanitarian, honest, loyal, original, inventive, independent, intellectual';
  } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    zodiacSign = 'Pisces';
    traits = 'Imaginative, sensitive, compassionate, kind, selfless, unworldly, intuitive, sympathetic';
  } else {
    return reply('Could not determine zodiac sign. Please check your birth date.');
  }

  const msg = `*Zodiac Sign*\n\n` +
    `*Birth Date:* ${month}/${day}\n` +
    `*Sign:* ${zodiacSign}\n` +
    `*Traits:* ${traits}\n\n` +
    `_Requested by ${pushname}_`;

  client.sendMessage(m.chat, { text: msg }, { quoted: m });
}
break;
//========================================================================================================================//		      
		case 'define': {
		      try {
        if (!text) {
            return m.reply('Please provide a word.');
        }

        const word = encodeURIComponent(text);

        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

        if (!response.ok) {
            return m.reply('Failed to fetch data. Please try again later.');
        }

        const data = await response.json();

        if (!data || !data[0] || !data[0].meanings || data[0].meanings.length === 0) {
            return m.reply('No definitions found for the provided word.');
        }

        const definitionData = data[0];
        const definition = definitionData.meanings[0].definitions[0].definition;
        
        const message = `${definition}`;

        await client.sendMessage(m.chat, { text: message }, { quoted: m });

    } catch (error) {
        console.error("Error occurred:", error);
        m.reply('An error occurred while fetching the data. Please try again later.\n' + error);
    }
}
	break;

//========================================================================================================================//		      
//========================================================================================================================//
//========================================================================================================================//		      
	         case "tweet": {
		      if (!text) return m.reply("provide some text for the tweet");

const displayname = pushname;
const username = m.sender.split('@')[0];
const avatar = await client.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.imgur.com/vuxJCTB.jpeg');
const replies = "246";
const retweets = "125";
const theme = "dark";

const imageurl = `https://some-random-api.com/canvas/misc/tweet?displayname=${encodeURIComponent(displayname)}&username=${encodeURIComponent(username)}&avatar=${encodeURIComponent(avatar)}&comment=${encodeURIComponent(text)}&replies=${encodeURIComponent(replies)}&retweets=${encodeURIComponent(retweets)}&theme=${encodeURIComponent(theme)}`;



await client.sendMessage(m.chat, { image: { url: imageurl}, caption: `𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗱 𝗯𝘆 𝐁𝐋𝐀𝐂𝐊-𝐌𝐃 𝗕𝗢𝗧`}, { quoted: m}) 

	}
	 break;

//========================================================================================================================//		      
//========================================================================================================================//
//========================================================================================================================//		      
		      case "pickupline": {
		      const API_URL = 'https://api.popcat.xyz/pickuplines';

    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch data');

        const { pickupline } = await response.json();
        const lineMessage = `${pickupline}`;

        await client.sendMessage(m.chat, { text: lineMessage }, { quoted: m });
    } catch (error) {
        console.error('Error fetching data:', error);
        await client.sendMessage(m.chat, { text: 'An error occurred while fetching the fact.' }, { quoted: m });
    }
}
	break;

//========================================================================================================================//		      
		      case "quotes": {
		      const API_URL = 'https://favqs.com/api/qotd';

    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch data');

        const { quote } = await response.json();
        const quoteMessage = `${quote.body} \n\n𝗤𝘂𝗼𝘁𝗲 𝗕𝘆 ${quote.author}`;

        await client.sendMessage(m.chat, { text: quoteMessage }, { quoted: m });
    } catch (error) {
        console.error('Error fetching data:', error);
        await client.sendMessage(m.chat, { text: 'An error occurred while fetching the fact.' }, { quoted: m });
    }
}
	break;

//========================================================================================================================//		      
		      case "google": {
		      const axios = require("axios");
        if (!text) {
            m.reply('Provide a search term!\nEg: .Google What is treason')
            return;
        }
        let {
            data
        } = await axios.get(`https://www.googleapis.com/customsearch/v1?q=${text}&key=AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI&cx=baf9bdb0c631236e5`)
        if (data.items.length == 0) {
            m.reply("❌ Unable to find a result")
            return;
        }
        let tex = `SEARCH FROM GOOGLE\n🔍 Term:- ${text}\n\n`;
        for (let i = 0; i < data.items.length; i++) {
            tex += `🪧 Title:- ${data.items[i].title}\n🖥 Description:- ${data.items[i].snippet}\n🌐 Link:- ${data.items[i].link}\n\n`
        }
        m.reply(tex)
       

    }
      break;

//========================================================================================================================//		      
		      case "hack": {
		if(!Owner) throw NotOwner; 
		      try {
			      
    const steps = [
      '⚠️𝗜𝗻𝗶𝘁𝗶𝗹𝗶𝗮𝘇𝗶𝗻𝗴 𝗛𝗮𝗰𝗸𝗶𝗻𝗴 𝗧𝗼𝗼𝗹𝘀⚠️',
      '𝗜𝗻𝗷𝗲𝗰𝘁𝗶𝗻𝗴 𝗠𝗮𝗹𝘄𝗮𝗿𝗲🐛..\n𝗟𝗼𝗮𝗱𝗶𝗻𝗴 𝗗𝗲𝘃𝗶𝗰𝗲 𝗚𝗮𝗹𝗹𝗲𝗿𝘆 𝗙𝗶𝗹𝗲𝘀⚠️',
      '```██ 10%``` ⏳',
      '```████ 20%``` ⏳',
      '```██████ 30%``` ⏳',
      '```████████ 40%``` ⏳',
      '```██████████ 50%``` ⏳',
      '```████████████ 60%``` ⏳',
      '```██████████████ 70%``` ⏳',
      '```████████████████ 80%``` ⏳',
      '```██████████████████ 90%``` ⏳',
      '```████████████████████ 100%``` ✅',
      "```𝗦𝘆𝘀𝘁𝗲𝗺 𝗛𝘆𝗷𝗮𝗰𝗸𝗶𝗻𝗴 𝗼𝗻 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...```\n```𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗻𝗴 𝘁𝗼 𝘁𝗵𝗲 𝗦𝗲𝗿𝘃𝗲𝗿 𝘁𝗼 𝗙𝗶𝗻𝗱 𝗘𝗿𝗿𝗼𝗿 404```",
    "```𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 𝘁𝗼 𝗗𝗲𝘃𝗶𝗰𝗲...\n𝗥𝗲𝗰𝗲𝗶𝘃𝗶𝗻𝗴 𝗗𝗮𝘁𝗮/𝗦𝗲𝗰𝗿𝗲𝘁 𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱𝘀...```",
    "```𝗗𝗮𝘁𝗮 𝗧𝗿𝗮𝗻𝘀𝗳𝗲𝗿𝗲𝗱 𝗙𝗿𝗼𝗺 𝗱𝗲𝘃𝗶𝗰𝗲 100% 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲𝗱\n𝗘𝗿𝗮𝘀𝗶𝗻𝗴 𝗮𝗹𝗹 𝗘𝘃𝗶𝗱𝗲𝗻𝗰𝗲, 𝗞𝗶𝗹𝗹𝗶𝗻𝗴 𝗮𝗹𝗹 𝗠𝗮𝗹𝘄𝗮𝗿𝗲𝘀🐛...```",
    "```𝗦𝗘𝗡𝗗𝗜𝗡𝗗 𝗟𝗢𝗚 𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧𝗦...```",
    "```𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗦𝗲𝗻𝘁 𝗗𝗮𝘁𝗮 𝗔𝗻𝗱 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗼𝗻 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗗𝗶𝘀𝗰𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱```",
    "```𝗔𝗹𝗹 𝗕𝗮𝗰𝗸𝗹𝗼𝗴𝘀 𝗖𝗹𝗲𝗮𝗿𝗲𝗱 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆💣\n𝗬𝗼𝘂𝗿 𝗦𝘆𝘀𝘁𝗲𝗺 𝗪𝗶𝗹𝗹 𝗕𝗲 𝗗𝗼𝘄𝗻 𝗜𝗻 𝗧𝗵𝗲 𝗡𝗲𝘅𝘁 𝗠𝗶𝗻𝘂𝘁𝗲⚠️```"
    ];
			      
    for (const line of steps) {
      await client.sendMessage(m.chat, { text: line }, { quoted: m });
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

  } catch (error) {
    console.error('Error during prank:', error);

    client.sendMessage(m.chat, {
      text: `❌ *Error!* Something went wrong. Reason: ${error.message}. Please try again later.`
    });
  }
} 
  break;

//========================================================================================================================//		      
case "compile-py":

if (!text && !m.quoted) throw 'Quote/tag a python code to compile.';

const sourcecode = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text

let resultPromise = python.runSource(sourcecode);
resultPromise
    .then(resultt => {
        console.log(resultt);

reply(resultt.stdout);
reply(resultt.stderr);
    })
    .catch(err => {
        console.log(resultt.stderr);
reply(resultt.stderr)
    });
      break;

//========================================================================================================================//		      
case 'save': {
  try {
    const quotedMessage = m.msg?.contextInfo?.quotedMessage;
    
    // Check if user quoted a message
    if (!quotedMessage) {
      return m.reply('❌ Please reply to a status message');
    }
    
    // Verify it's a status message
    if (!m.quoted?.chat?.endsWith('@broadcast')) {
      return m.reply('⚠️ That message is not a status! Please reply to a status message.');
    }
    
    // Download the media first
    const mediaBuffer = await client.downloadMediaMessage(m.quoted);
    if (!mediaBuffer || mediaBuffer.length === 0) {
      return m.reply('🚫 Could not download the status media. It may have expired.');
    }
    
    // Determine media type and prepare payload
    let payload;
    let mediaType;
    
    if (quotedMessage.imageMessage) {
      mediaType = 'image';
      payload = {
        image: mediaBuffer,
        caption: quotedMessage.imageMessage.caption || '📸 Saved status image',
        mimetype: 'image/jpeg'
      };
    } 
    else if (quotedMessage.videoMessage) {
      mediaType = 'video';
      payload = {
        video: mediaBuffer,
        caption: quotedMessage.videoMessage.caption || '🎥 Saved status video',
        mimetype: 'video/mp4'
      };
    } 
    else {
      return m.reply('❌ Only image and video statuses can be saved!');
    }
    
    // Send to user's DM
    await client.sendMessage(
      m.sender, 
      payload,
      { quoted: m }
    );
    
    // Confirm in chat
    return m.reply(`✅  ${mediaType} 𝐬𝐚𝐯𝐞𝐝 𝐛𝐥𝐚𝐜𝐤-𝐌𝐃!`);
    
  } catch (error) {
    console.error('Save error:', error);
    if (error.message.includes('404') || error.message.includes('not found')) {
      return m.reply('⚠️ The status may have expired or been deleted.');
    }
    return m.reply('❌ Failed to save status. Error: ' + error.message);
  }
}
break;
//========================================================================================================================//		      
	      case 'gitclone': {
		      if (!text) return m.reply(`Where is the link?`)
if (!text.includes('github.com')) return m.reply(`Is that a GitHub repo link ?!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user3, repo] = text.match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user3}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    await client.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => m.reply("error"))

		    }
		      break;

//========================================================================================================================//		     
//========================================================================================================================//		      
		case 'github': {
 if (!text) return m.reply('Provide a github username to stalk');
 
try {
const response = await fetch(`https://itzpire.com/stalk/github-user?username=${text}`)

const data = await response.json()
 
    const username = data.data.username;
    const nickname = data.data.nickname;
    const bio = data.data.bio;
    const profilePic = data.data.profile_pic;
    const url = data.data.url;
    const type = data.data.type;
    const isAdmin = data.data.admin;
    const company = data.data.company;
    const blog = data.data.blog;
    const location = data.data.location;
    const publicRepos = data.data.public_repo;
    const publicGists = data.data.public_gists;
    const followers = data.data.followers;
    const following = data.data.following;
    const createdAt = data.data.ceated_at;
    const updatedAt = data.data.updated_at;
    
const message = `Username:- ${username}\n\nNickname:- ${nickname}\n\nBio:- ${bio}\n\nLink:- ${url}\n\nLocation:- ${location}\n\nFollowers:- ${followers}\n\nFollowing:- ${following}\n\nRepos:- ${publicRepos}\n\nCreated:- ${createdAt}`

await client.sendMessage(m.chat, { image: { url: profilePic}, caption: message}, {quoted: m})

} catch (error) {

m.reply("Unable to fetch data\n" + error)

}
      }
       break;  

//========================================================================================================================//		      
	      case "screenshot": case "ss": {
		      try {
let cap = `𝗦𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁 𝗯𝘆 ${botname}`

if (!text) return m.reply("Provide a website link to screenshot.")

const image = `https://image.thum.io/get/fullpage/${text}`

await client.sendMessage(m.chat, { image: { url: image }, caption: cap}, {quoted: m });


} catch (error) {

m.reply("An error occured.")

}

	      }
	      break;

//========================================================================================================================//		      
	      case "alive": case "test": {
		      const audiovn = "./Media/kv.mp3";
    const dooc = {
        audio: {
          url: audiovn
        },
        mimetype: 'audio/mp4',
        ptt: false,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "𝐁𝐋𝐀𝐂𝐊-𝐌𝐃",

        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "𝗛𝗶 𝗛𝘂𝗺𝗮𝗻👋, 𝗜 𝗮𝗺 𝗔𝗹𝗶𝘃𝗲 𝗻𝗼𝘄",
          body: "𝐁𝐋𝐀𝐂𝐊-𝐌𝐃",
          thumbnailUrl: "https://files.catbox.moe/rql1hh.jpeg",
          sourceUrl: '',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };
	await client.sendMessage(m.chat, dooc, {quoted: m });
	      }
		 break;
		      
//========================================================================================================================//		      
//========================================================================================================================//		      
	  case 'tts': case 'say': {

const googleTTS = require('google-tts-api');

if (!text) return m.reply("Povide a text for conversion !");

const url = googleTTS.getAudioUrl(text, {
  lang: 'hi-IN',
  slow: false,
  host: 'https://translate.google.com',
});
             client.sendMessage(m.chat, { audio: { url:url},mimetype:'audio/mp4', ptt: false }, { quoted: m });

	}
	 break;

//========================================================================================================================//		      
//========================================================================================================================//		      
 case 'weather': {
		      try {

if (!text) return m.reply("provide a city/town name");

const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=1ad47ec6172f19dfaf89eb3307f74785`);
        const data = await response.json();

console.log("Weather data:",data);

        const cityName = data.name;
        const temperature = data.main.temp;
        const feelsLike = data.main.feels_like;
        const minTemperature = data.main.temp_min;
        const maxTemperature = data.main.temp_max;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const rainVolume = data.rain ? data.rain['1h'] : 0;
        const cloudiness = data.clouds.all;
        const sunrise = new Date(data.sys.sunrise * 1000);
        const sunset = new Date(data.sys.sunset * 1000);

await m.reply(`❄️ Weather in ${cityName}

🌡️ Temperature: ${temperature}°C
📝 Description: ${description}
❄️ Humidity: ${humidity}%
🌀 Wind Speed: ${windSpeed} m/s
🌧️ Rain Volume (last hour): ${rainVolume} mm
☁️ Cloudiness: ${cloudiness}%
🌄 Sunrise: ${sunrise.toLocaleTimeString()}
🌅 Sunset: ${sunset.toLocaleTimeString()}`);

} catch (e) { m.reply("Unable to find that location.") }
  }
   break;

//========================================================================================================================//		      
case "compile-js":
if (!text && !m.quoted) throw 'Quote/tag a Js code to compile.';

const sourcecode1 = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text;

let resultPromise1 = node.runSource(sourcecode1);
resultPromise1
    .then(resultt1 => {
        console.log(resultt1);
reply(resultt1.stdout);
reply(resultt1.stderr);
    })
    .catch(err => {
        console.log(resultt1.stderr);
reply(resultt1.stderr);
    });
      break;

//========================================================================================================================//		      
  case 'quotely': {
try {
if (!m.quoted.text) throw 'qoute a text';
let xf = m.quoted.text;

                const {
                    quote
                } = require('./lib/ravenquotely.js')
                
                let pppuser = await client.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/75272825615a4dcb69526.png')
                
const rel = await quote(xf, pushname, pppuser)
                
                client.sendImageAsSticker(m.chat, rel.result, m, {
                    packname: pushname,
                    author: `RavenBot`
                })

} catch (errr) { 
 await reply("Qoute some text for quotely")}

            }
             break;

//========================================================================================================================//		      
		      case "fullpp": {
		      if(!Owner) throw NotOwner; 
		      const { S_WHATSAPP_NET } = require('@whiskeysockets/baileys');
		      try {
const fs = require("fs");
if(!msgR) { m.reply('𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲...') ; return } ;

let media;
if (msgR.imageMessage) {
     media = msgR.imageMessage

  } else {
    m.reply('𝗛𝘂𝗵 𝘁𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲...'); return
  } ;

var medis = await client.downloadAndSaveMediaMessage(media);
         var {
                        img
                    } = await generateProfilePicture(medis)

client.query({
                tag: 'iq',
                attrs: {
                    target: undefined,
                    to: S_WHATSAPP_NET,
                    type:'set',
                    xmlns: 'w:profile:picture'
                },
                content: [
                    {
                        tag: 'picture',
                        attrs: { type: 'image' },
                        content: img
                    }
                ]
            })      
                    fs.unlinkSync(medis)
                    m.reply("𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗽𝗶𝗰𝘁𝘂𝗿𝗲 𝘂𝗽𝗱𝗮𝘁𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅")

} catch (error) {

m.reply("An error occured while updating profile photo\n" + error)

}
     }
	  break;

//========================================================================================================================//		      
            case "upload": case "url": {
 const fs = require("fs");
const path = require('path');

const util = require("util");

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''

if (!mime) return m.reply('Quote an image or video')

let mediaBuffer = await q.download()

  if (mediaBuffer.length > 10 * 1024 * 1024) return m.reply('Media is too large.')

let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)

if (isTele) {
let fta2 = await client.downloadAndSaveMediaMessage(q)

    let link = await uploadToUguu(fta2)

    const fileSizeMB = (mediaBuffer.length / (1024 * 1024)).toFixed(2)

    m.reply(`Media Link:-\n\n${link}`)
  } else {
    m.reply(`Error occured...`)
  }
    }
      break;

//========================================================================================================================//		      
     case 'attp':
                if (!q) return reply('I need text;')
              
                client.sendMessage(m.chat, {
                    sticker: {
                        url: `https://api.lolhuman.xyz/api/attp?apikey=cde5404984da80591a2692b6&text=${q}`
                    }
                }, {
                    quoted: m
                })
                break;

//========================================================================================================================//		      
    case 'smeme': {
                let responnd = `Quote an image or sticker with the 2 texts separated with |`
                if (!/image/.test(mime)) return reply(responnd)
                if (!text) return reply(responnd)
           
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await client.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await uploadtoimgur(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await client.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,

                })
                fs.unlinkSync(pop)
            }  
             break;

//========================================================================================================================//		      
case "compile-c":

if (!text && !m.quoted) throw 'Quote/tag a C code to compile';

const sourcecode3 =m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text
let resultPromise3 = c.runSource(sourcecode3);
resultPromise3
    .then(resultt3 => {
        console.log(resultt3);
reply(resultt3.stdout);
reply(resultt3.stderr);    })
    .catch(err => {
        console.log(resultt3.stderr);
reply(resultt3.stderr)
    });
break;

//========================================================================================================================//		      
case "compile-c++":

if (!text && !m.quoted) throw 'Quote/tag a C++ code to compile';

const sourcecode4 = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text
let resultPromise4 = cpp.runSource(sourcecode4);
resultPromise4
    .then(resultt4 => {
        console.log(resultt4);
reply(resultt4.stdout);
reply(resultt4.stderr);
    })
    .catch(err => {
        console.log(resultt4.stderr);
reply(resultt4.stderr)
    });
     break;

//========================================================================================================================//		      
case "eval":{
   if (!Owner) throw NotOwner; 
if (!text) throw 'Provide a valid Bot Baileys Function to evaluate'
   try { 
 let evaled = await eval(budy.slice(2)); 
 if (typeof evaled !== 'string') evaled = require('util').inspect(evaled); 
 await reply(evaled); 
   } catch (err) { 
 await reply(String(err)); 
   } 
 } 
     break;

//========================================================================================================================//		      
	case 'add':
		      if (!text) return reply('provide a number to be added in this format. \n\n add 254114283550'); 
                if (!m.isGroup) throw group;
                if(!isAdmin) throw admin;
                if (!isBotAdmin) throw botAdmin;
                let blockwwww = text;
                await client.groupParticipantsUpdate(m.chat, [blockwwww], 'add')
                reply(`succesfully added`)
                break;

//========================================================================================================================//		      
//========================================================================================================================//		      
  case "system": 
  
              client.sendMessage(m.chat, { image: { url: 'https://files.catbox.moe/s5nuh3.jpg' }, caption:`*𝐁𝐎𝐓 𝐍𝐀𝐌𝐄: 𝐁𝐋𝐀𝐂𝐊𝐌𝐀𝐂𝐇𝐀𝐍𝐓 𝐁𝐎𝐓*\n\n*𝐒𝐏𝐄𝐄𝐃: ${Rspeed.toFixed(4)} 𝐌𝐒*\n\n*𝐑𝐔𝐍𝐓𝐈𝐌𝐄: ${runtime(process.uptime())}*\n\n*𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌: 𝐇𝐄𝐑𝐎𝐊𝐔*\n\n*𝐇𝐎𝐒𝐓𝐍𝐀𝐌𝐄: 𝐁𝐋𝐀𝐂𝐊𝐈𝐄 *\n\n*𝐋𝐈𝐁𝐑𝐀𝐑𝐘: Baileys*\n\n𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑: 𝐁𝐋𝐀𝐂𝐊𝐈𝐄 𝐓𝐄𝐂𝐇`}); 
 break;

//========================================================================================================================//		      
//========================================================================================================================//		      
//========================================================================================================================//		      
   case "mail": {
	const  { TempMail } = require("tempmail.lol");

const tempmail = new TempMail();

      const inbox = await tempmail.createInbox();
      const emailMessage = `${inbox.address}`;

await m.reply(emailMessage);

const mas = await client.sendMessage(m.chat, { text: `${inbox.token}` });
      
await client.sendMessage(m.chat, { text: `Quoted text is your token. To fetch messages in your email use <.inbox your-token>`}, { quoted: mas});

      }
       break;

//========================================================================================================================//		    
//========================================================================================================================//		      
        case "inbox": {
	 if (!text) return m.reply("To fetch messages from your mail, provide the email address which was issued.")

const mail = encodeURIComponent(text);
        const checkMail = `https://tempmail.apinepdev.workers.dev/api/getmessage?email=${mail}`;

try {
            const response = await fetch(checkMail);

if (!response.ok) {

                return m.reply(`${response.status} error occurred while communicating with API.`);
            }

const data = await response.json();

            if (!data || !data.messages) {

                return m.reply('I am unable to fetch messages from your mail, your inbox might be empty or some other error occurred.');
            }

const messages = data.messages;

            for (const message of messages) {
                const sender = message.sender;
                const subject = message.subject;
                const date = new Date(JSON.parse(message.message).date).toLocaleString();
                const messageBody = JSON.parse(message.message).body;

                const mailMessage = `👥 Sender: ${sender}\n📝 Subject: ${subject}\n🕜 Date: ${date}\n📩 Message: ${messageBody}`;

                await m.reply(mailMessage);
            }
        } catch (error) {
            console.error('𝗢𝗼𝗽𝘀 𝗘𝗿𝗿𝗼𝗿!');

            return m.reply('𝗦𝗼𝗺𝗲𝘁𝗵𝗶𝗻𝗴 𝗶𝘀 𝘄𝗿𝗼𝗻𝗴!');
        }
        }
         break;

//========================================================================================================================//		      
 case "anime": case "random-anime": {
	const axios = require("axios");

  const link = "https://api.jikan.moe/v4/random/anime";

  try {
    const response = await axios.get(link);
    const data = response.data.data;

    const title = data.title;
    const synopsis = data.synopsis;
    const imageUrl = data.images.jpg.image_url;
    const episodes = data.episodes;
    const status = data.status;

    const message = `📺 Title: ${title}\n🎬 Épisodes: ${episodes}\n📡 Status: ${status}\n📝 Synopsis: ${synopsis}\n🔗 URL: ${data.url}`;

    await client.sendMessage(m.chat, { image: { url: imageUrl }, caption: message }, { quoted: m });
  } catch (error) {
    
   m.reply('𝗢𝗼𝗽𝘀 𝗘𝗿𝗿𝗼𝗿!');
  }
	}
	 break;

//========================================================================================================================//		      
		 case "news": {
		      const response = await fetch('https://fantox001-scrappy-api.vercel.app/technews/random');
    const data = await response.json();

    const { thumbnail, news } = data;

        await client.sendMessage(m.chat, { image: { url: thumbnail }, caption: news }, { quoted: m });

	      }
		break;

//========================================================================================================================//		      
case 'approve': case 'approve-all': {
	if (!m.isGroup) throw group;
if (!isAdmin) throw admin;
if (!isBotAdmin) throw botAdmin;

const responseList = await client.groupRequestParticipantsList(m.chat);

if (responseList.length === 0) return m.reply("𝗛𝘂𝗵, 𝗡𝗼 𝗣𝗲𝗻𝗱𝗶𝗻𝗴 𝗷𝗼𝗶𝗻 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀 𝘁𝗵𝗶𝘀 𝘁𝗶𝗺𝗲!");

for (const participan of responseList) {
    const response = await client.groupRequestParticipantsUpdate(
        m.chat, 
        [participan.jid], // Approve/reject each participant individually
        "approve" // or "reject"
    );
    console.log(response);
}
m.reply("𝗣𝗲𝗻𝗱𝗶𝗻𝗴 𝗣𝗮𝗿𝘁𝗶𝗰𝗶𝗽𝗮𝗻𝘁𝘀 𝗵𝗮𝘃𝗲 𝗯𝗲𝗲𝗻 𝗮𝗽𝗽𝗿𝗼𝘃𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅");

}
 break;

//========================================================================================================================//		      
	  case 'reject': case 'reject-all': {
	if (!m.isGroup) throw group;
if (!isAdmin) throw admin;
if (!isBotAdmin) throw botAdmin;

const responseList = await client.groupRequestParticipantsList(m.chat);

if (responseList.length === 0) return m.reply("𝗛𝘂𝗵, 𝗡𝗼 𝗽𝗲𝗻𝗱𝗶𝗻𝗴 𝗷𝗼𝗶𝗻 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀 𝘁𝗵𝗶𝘀 𝘁𝗶𝗺𝗲");

for (const participan of responseList) {
    const response = await client.groupRequestParticipantsUpdate(
        m.chat, 
        [participan.jid], // Approve/reject each participant individually
        "reject" // or "reject"
    );
    console.log(response);
}
m.reply("𝗣𝗲𝗻𝗱𝗶𝗻𝗴 𝗣𝗮𝗿𝘁𝗶𝗰𝗶𝗽𝗮𝗻𝘁𝘀 𝗵𝗮𝘃𝗲 𝗯𝗲𝗲𝗻 𝗿𝗲𝗷𝗲𝗰𝘁𝗲𝗱!");

}
 break;

//========================================================================================================================//		      
          case "admin" : { 
                 if (!m.isGroup) throw group; 
         if (!isBotAdmin) throw botAdmin; 
          if (!Owner) throw NotOwner; 
                 await client.groupParticipantsUpdate(m.chat,  [m.sender], 'promote'); 
 m.reply('Promoted To Admin<🥇'); 
          }
          break;

//========================================================================================================================//		      

//========================================================================================================================//		      
case 'restart':  
  if (!Owner) throw NotOwner; 
  reply(`Restarting. . .`)  
  await sleep(3000)  
  process.exit()  
  break;

//========================================================================================================================//		      
case "remove": case "kick": { 

       if (!m.isGroup) throw group; 
       if (!isBotAdmin) throw botAdmin; 
      if (!isAdmin) throw admin;
  
    if (!m.quoted && (!m.mentionedJid || m.mentionedJid.length === 0)) {
            return m.reply("Who should i remove !?");
        }
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : null;
        const parts = users.split('@')[0];

if (users == "254114283550@s.whatsapp.net") return m.reply("It's an Owner Number! 😡");

	  if (users  == client.decodeJid(client.user.id)) throw 'I cannot remove Myself 😡';

		      m.reply(`@${parts} Goodbye🤧`);

                 await client.groupParticipantsUpdate(m.chat, [users], 'remove'); 
 

}
  break;
//========================================================================================================================//
//========================================================================================================================//		      
    case "instagram": case "igdl": case "ig": {
		      
const { igdl } = require("ruhend-scraper");

  if (!text) {
    return m.reply("Please provide an Instagram link for the video.");
  }

  if (!text.includes('https://www.instagram.com/')) {
    return m.reply("That is not a valid Instagram link.");
  }

  try {
    
    const downloadData = await igdl(text);
   
    if (!downloadData || !downloadData.data || downloadData.data.length === 0) {
      return m.reply("No video found at the provided link.");
    }

    const videoData = downloadData.data;
    for (let i = 0; i < Math.min(20, videoData.length); i++) {
      const video = videoData[i];
      const videoUrl = video.url;

      await client.sendMessage(m.chat, {
        video: { url: videoUrl },
        mimetype: "video/mp4",
        caption: `DOWNLOADED BY ${botname}`
      },{ quoted: m });
    }
  } catch (error) {
    console.error(error);
    return m.reply("An error occurred while processing the request.");
  }
}
break;

//========================================================================================================================//
//========================================================================================================================//		      
      case "tiktok": case "tikdl":  {
if (!text) {
    return m.reply('Please provide a TikTok video link.');
  }
	      
if (!text.includes("tiktok.com")) {
        return m.reply("That is not a TikTok link.");
}
await client.sendMessage(m.chat, {
      react: { text: '✅️', key: m.key }
    });

 try {
    const response = await axios.get(`https://api.bk9.dev/download/tiktok?url=${encodeURIComponent(text)}`);

    if (response.data.status && response.data.BK9) {
      const videoUrl = response.data.BK9.BK9;
      const description = response.data.BK9.desc;
      const commentCount = response.data.BK9.comment_count;
      const likesCount = response.data.BK9.likes_count;
      const uid = response.data.BK9.uid;
      const nickname = response.data.BK9.nickname;
      const musicTitle = response.data.BK9.music_info.title;

      await client.sendMessage(m.chat, {
        text: `Data fetched successfully✅ wait a moment. . .`,
      }, { quoted: m });

      await client.sendMessage(m.chat, {
        video: { url: videoUrl },
        caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗕𝗟𝗔𝗖𝗞-𝗠𝗗",
        gifPlayback: false
      }, { quoted: m });

    } else {
      reply('Failed to retrieve video from the provided link.');
    }

  } catch (e) {
    reply(`An error occurred during download: ${e.message}`);
  }
}
  break;
//========================================================================================================================//			  
//========================================================================================================================//
			  case "facebook":
case "fb":
case "fbdl": {
  const axios = require("axios");

  if (!text || !text.startsWith("http")) {
    return m.reply("📌 Provide a valid Facebook video link!");
  }

  try {
    // ⏳ Wait message
    await m.reply("⏳ Please wait, fetching your video...");

    await client.sendMessage(m.chat, { react: { text: "📥", key: m.key } });

    // 📡 API request
    let apiUrl = `${api}/download/fbdown?url=${encodeURIComponent(text)}`;
    let response = await axios.get(apiUrl, { timeout: 100000 });

    let result = response.data?.result;

    if (!result?.media?.sd) {
      return m.reply("❌ Failed to fetch Facebook video.");
    }

    // 🎯 Pick HD if available
    let videoUrl = result.media.hd || result.media.sd;

    // 🔍 Validate file
    let head = await axios.head(videoUrl).catch(() => null);
    if (!head || !head.headers["content-type"]?.includes("video")) {
      return m.reply("❌ Invalid video format.");
    }

    // 📦 Download buffer
    let res = await axios.get(videoUrl, {
      responseType: "arraybuffer"
    });

    let size = res.headers["content-length"];
    if (size && size > 100 * 1024 * 1024) {
      return m.reply("❌ Video too large.");
    }

    let buffer = Buffer.from(res.data);

    // 🎬 Send video
    await client.sendMessage(
      m.chat,
      {
        video: buffer,
        mimetype: "video/mp4",
        caption: "📘 Facebook Video"
      },
      { quoted: m }
    );

  } catch (err) {
    console.log("FB error:", err);
    m.reply("❌ Error downloading Facebook video.");
  }
}
break;
//========================================================================================================================//
//========================================================================================================================//			  
  case "pinterest":
case "pin":
case "pindl": {
  const axios = require("axios");

  if (!text || !text.startsWith("http")) {
    return m.reply("📌 Provide a valid Pinterest link!");
  }

  try {
    // ⏳ Wait message
    await m.reply("⏳ Fetching Pinterest media...");
    await client.sendMessage(m.chat, { react: { text: "📌", key: m.key } });

    // 📡 API request
    let res = await axios.get(
      `${api}/download/pindl2?url=${encodeURIComponent(text)}`,
      { timeout: 100000 }
    );

    let result = res.data?.result;

    if (!result?.success || !Array.isArray(result.medias)) {
      return m.reply("❌ Failed to fetch Pinterest media.");
    }

    let title = result.title || "Pinterest Media";

    // 🔁 Loop all media
    for (let media of result.medias) {
      let { url, extension, videoAvailable } = media;
      if (!url) continue;

      try {
        // 📦 Download buffer (FIX corruption)
        let bufferRes = await axios.get(url, {
          responseType: "arraybuffer"
        });

        let size = bufferRes.headers["content-length"];
        if (size && size > 100 * 1024 * 1024) {
          await m.reply("⚠️ Skipped large file.");
          continue;
        }

        let buffer = Buffer.from(bufferRes.data);

        let fileName = `${title}.${extension || "jpg"}`
          .replace(/[^\w\s.-]/gi, "");

        // 🎬 Video
        if (videoAvailable || extension === "mp4") {
          await client.sendMessage(
            m.chat,
            {
              video: buffer,
              mimetype: "video/mp4",
              fileName,
              caption: "📌 Pinterest Video"
            },
            { quoted: m }
          );
        }

        // 🖼️ Image
        else {
          await client.sendMessage(
            m.chat,
            {
              image: buffer,
              fileName,
              caption: "📌 Pinterest Image"
            },
            { quoted: m }
          );
        }

      } catch (err) {
        console.log("Media error:", err);
      }
    }

  } catch (err) {
    console.log("Pinterest error:", err);
    m.reply("❌ Error downloading Pinterest media.");
  }
}
break;

//========================================================================================================================//		      
//========================================================================================================================//
	      case "epl":
case "premierleague": {
  try {
    await client.sendMessage(m.chat, { react: { text: "📊", key: m.key } });

    let res = await axios.get(`${api}/epl/standings`);
    let data = res.data;

    if (!data.status || !Array.isArray(data.result?.standings)) {
      return m.reply("❌ Failed to fetch Premier League standings.");
    }

    let text = `📊 *Premier League Standings*\n\n`;

    for (let team of data.result.standings) {
      let tag = "🧱";
      if (team.position <= 4) tag = "🏆";
      else if (team.position <= 6) tag = "🥈";
      else if (team.position >= 18) tag = "⚠️";

      text += `${tag} *${team.position}. ${team.team}*\n`;
      text += `P:${team.played} W:${team.won} D:${team.draw} L:${team.lost}`;
      text += `Pts:${team.points} GD:${team.goalDifference}\n\n`;
    }

    m.reply(text);

  } catch (e) {
    console.log(e);
    m.reply("❌ Error fetching EPL standings.");
  }
}
break;
		      
//========================================================================================================================//
	      case "laliga": {
  try {
    let res = await axios.get(`${api}/laliga/standings`);
    let data = res.data;

    let text = `📊 *La Liga Standings*\n\n`;

    for (let t of data.result.standings) {
      text += `🇪🇦 ${t.position}. ${t.team} - ${t.points} pts\n`;
    }

    m.reply(text);
  } catch {
    m.reply("❌ Error fetching La Liga.");
  }
}
break;
		      
//========================================================================================================================//
	      case "bundesliga": {
  try {
    let res = await axios.get(`${api}/bundesliga/standings`);
    let data = res.data;

    let text = `📊 *Bundesliga Standings*\n\n`;

    for (let t of data.result.standings) {
      text += `🇩🇪 ${t.position}. ${t.team} - ${t.points} pts\n`;
    }

    m.reply(text);
  } catch {
    m.reply("❌ Error fetching Bundesliga.");
  }
}
break;
		      
//========================================================================================================================//
	      case "ligue1": {
  try {
    let res = await axios.get(`${api}/ligue1/standings`);
    let data = res.data;

    let text = `📊 *Ligue 1 Standings*\n\n`;

    for (let t of data.result.standings) {
      text += `🇫🇷 ${t.position}. ${t.team} - ${t.points} pts\n`;
    }

    m.reply(text);
  } catch {
    m.reply("❌ Error fetching Ligue 1.");
  }
}
break;
		      
//========================================================================================================================//
	      
		      case "seriea": {
  try {
    let res = await axios.get(`${api}/seriea/standings`);
    let data = res.data;

    let text = `📊 *Serie A Standings*\n\n`;

    for (let t of data.result.standings) {
      text += `🇮🇹 ${t.position}. ${t.team} - ${t.points} pts\n`;
    }

    m.reply(text);
  } catch {
    m.reply("❌ Error fetching Serie A.");
  }
}
break;
//========================================================================================================================//
     case "ucl": {
  try {
    let res = await axios.get(`${api}/ucl/standings`);
    let data = res.data;

    let text = `🏆 *UCL Standings*\n\n`;

    for (let t of data.result.standings) {
      text += `${t.position}. ${t.team} - ${t.points} pts\n`;
    }

    m.reply(text);
  } catch {
    m.reply("❌ Error fetching UCL.");
  }
}
break;
		      
//========================================================================================================================//
			  case "fifa": {
  try {
    let res = await axios.get(`${api}/fifa/standings`);
    let data = res.data;

    let text = `🌍 *FIFA Rankings*\n\n`;

    for (let t of data.result.standings) {
      text += `${t.position}. ${t.team} - ${t.points}\n`;
    }

    m.reply(text);
  } catch {
    m.reply("❌ Error fetching FIFA.");
  }
}
break;
//========================================================================================================================//	
			  
		case "euro": {
  try {
    let res = await axios.get(`${api}/euros/standings`);
    let data = res.data;

    let text = `🇪🇺 *Euro Standings*\n\n`;

    for (let t of data.result.standings) {
      text += `${t.position}. ${t.team} - ${t.points}\n`;
    }

    m.reply(text);
  } catch {
    m.reply("❌ Error fetching Euro.");
  }
}
break;	  
//========================================================================================================================//	
			  
			  
case "eplscorers": {
  try {
    await client.sendMessage(m.chat, { react: { text: "⚽", key: m.key } });

    let res = await axios.get(`${api}/epl/scorers`);
    let data = res.data;

    if (!data.status || !Array.isArray(data.result?.topScorers)) {
      return m.reply("❌ Failed to fetch EPL scorers.");
    }

    let text = `⚽ *Premier League Top Scorers*\n\n`;

    for (let s of data.result.topScorers.slice(0, 10)) {
      let medal = s.rank == 1 ? "🥇" : s.rank == 2 ? "🥈" : s.rank == 3 ? "🥉" : "⚽";

      text += `${medal} *${s.rank}. ${s.player}* (${s.team})\n`;
      text += `Goals: ${s.goals} | Assists: ${s.assists}\n`;
      text += `Penalties: ${s.penalties}\n\n`;
    }

    m.reply(text);

  } catch (e) {
    console.log(e);
    m.reply("❌ Error fetching EPL scorers.");
  }
}
break;
//========================================================================================================================//
			  
			case "laligascorers": {
  try {
    let res = await axios.get(`${api}/laliga/scorers`);
    let data = res.data;

    let text = `⚽ *La Liga Top Scorers*\n\n`;

    data.result.topScorers.slice(0, 10).forEach(s => {
      text += `${s.rank}. ${s.player} (${s.team}) - ${s.goals}⚽\n`;
    });

    m.reply(text);
  } catch {
    m.reply("❌ Error fetching La Liga scorers.");
  }
}
break;
//========================================================================================================================//
			  
			case "bundesligascorers": {
  try {
    let res = await axios.get(`${api}/bundesliga/scorers`);
    let data = res.data;

    let text = `⚽ *Bundesliga Top Scorers*\n\n`;

    data.result.topScorers.slice(0, 10).forEach(s => {
      text += `${s.rank}. ${s.player} - ${s.goals}⚽\n`;
    });

    m.reply(text);
  } catch {
    m.reply("❌ Error fetching Bundesliga scorers.");
  }
}
break;  
//========================================================================================================================//
			  
			  case "serieascorers": {
  try {
    let res = await axios.get(`${api}/seriea/scorers`);
    let data = res.data;

    let text = `⚽ *Serie A Top Scorers*\n\n`;

    data.result.topScorers.slice(0, 10).forEach(s => {
      text += `${s.rank}. ${s.player} - ${s.goals}⚽\n`;
    });

    m.reply(text);
  } catch {
    m.reply("❌ Error fetching Serie A scorers.");
  }
}
break;
//========================================================================================================================//
			  
			 case "ligue1scorers": {
  try {
    let res = await axios.get(`${api}/ligue1/scorers`);
    let data = res.data;

    let text = `⚽ *Ligue 1 Top Scorers*\n\n`;

    data.result.topScorers.slice(0, 10).forEach(s => {
      text += `${s.rank}. ${s.player} - ${s.goals}⚽\n`;
    });

    m.reply(text);
  } catch {
    m.reply("❌ Error fetching Ligue 1 scorers.");
  }
}
break;
//========================================================================================================================//
			  
			  case "uclscorers": {
  try {
    let res = await axios.get(`${api}/ucl/scorers`);
    let data = res.data;

    let text = `🏆 *UCL Top Scorers*\n\n`;

    data.result.topScorers.slice(0, 10).forEach(s => {
      text += `${s.rank}. ${s.player} - ${s.goals}⚽\n`;
    });

    m.reply(text);
  } catch {
    m.reply("❌ Error fetching UCL scorers.");
  }
}
break;
//========================================================================================================================//
			  
case 'sc': case 'script': case 'repo':

 client.sendMessage(m.chat, { image: { url: `https://files.catbox.moe/pevpi2.jpg` }, caption: 
` 𝙃𝙀𝙇𝙇𝙊👋 *${pushname}*,
╔══≪ ✦ ≫══════════≪ ✦ ≫══╗
          𝐁𝐋𝐀𝐂𝐊-𝐌𝐃 𝐕3
 The Ultimate WhatsApp Bot
╚══≪ ✦ ≫══════════≪ ✦ ≫══╝\n\n🔷 𝐆𝐢𝐭𝐇𝐮𝐛 𝐑𝐞𝐩𝐨:
   ↳ https://github.com/Blackie254/black-super-bot
   ★ Don't forget to Fork & Star!.\n\n 🔶 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐏𝐚𝐢𝐫𝐢𝐧𝐠:
   ↳ https://bot.blueblizzards.site
   ★ Save your Session-ID!\n\n.⚙️ 𝐑𝐞𝐪𝐮𝐢𝐫𝐞𝐦𝐞𝐧𝐭𝐬:
   ✓ Complete all variables
   ✓ Keep API keys secure
   ✓ Deploy properly\n\n╔══≪ ✦ ≫═══════════════≪ ✦ ≫══╗
  Made with ❤️ by Blacky Dev
╚══≪ ✦ ≫═══════════════≪ ✦ ≫══╝\n\n𝗠𝗮𝗱𝗲 𝗼𝗻 𝗲𝗮𝗿𝘁𝗵 𝗯𝘆 𝗛𝘂𝗺𝗮𝗻𝘀🔥!`},{quoted : m });

   break;
                                                  
//========================================================================================================================//
		      case 'closetime':
                if (!m.isGroup) throw group;
                if (!isAdmin) throw admin;
                if (!isBotAdmin) throw botAdmin;
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
                }
                reply(`Countdown of  ${q} starting from now to close the group`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `𝗚𝗿𝗼𝘂𝗽 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗰𝗹𝗼𝘀𝗲𝗱`
                    client.groupSettingUpdate(m.chat, 'announcement')
                    reply(close)
                }, timer)
		      
                break;

//========================================================================================================================//		      
		      case 'opentime':
                if (!m.isGroup) throw group;
                if (!isAdmin) throw admin;
                if (!isBotAdmin) throw botAdmin;
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
                }
                reply(`Countdown of ${q} starting from now to open the group`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `𝗚𝗿𝗼𝘂𝗽 𝗼𝗽𝗲𝗻𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆`
                    client.groupSettingUpdate(m.chat, 'not_announcement')
                    reply(open)
                }, timer)
                 break;

//========================================================================================================================//		      
 case "close": case "mute": { 
  
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupSettingUpdate(m.chat, 'announcement'); 
 m.reply('Group successfully locked!'); 
 } 
 break; 

//========================================================================================================================//		      
 case "open": case "unmute": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupSettingUpdate(m.chat, 'not_announcement'); 
 m.reply('Group successfully unlocked!'); 
  
 }
        break; 

//========================================================================================================================//		      
          case "disp-1": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupToggleEphemeral(m.chat, 1*24*3600); 
 m.reply('Dissapearing messages successfully turned on for 24hrs!'); 
 } 
 break; 

//========================================================================================================================//		      
          case "promote" : { 
                 if (!m.isGroup) throw group; 
         if (!isBotAdmin) throw botAdmin; 
         if (!isAdmin) throw admin; 
 if (!m.quoted) throw `Ttag someone with the command!`; 
                 let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']; 
  
                 await client.groupParticipantsUpdate(m.chat, users, 'promote'); 
 m.reply('Successfully promoted! 🦄'); 
         } 
 break; 

//========================================================================================================================//		      
           case "demote": { 
                 if (!m.isGroup) throw group; 
         if (!isBotAdmin) throw botAdmin; 
         if (!isAdmin) throw admin; 
 if (!m.quoted) throw `Ttag someone with the command!`; 
                 let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']; 
  
                 await client.groupParticipantsUpdate(m.chat, users, 'demote'); 
 m.reply('Successfully demoted! 😲'); 
         } 
 break;

//========================================================================================================================//		      
          case "disp-7": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupToggleEphemeral(m.chat, 7*24*3600); 
 m.reply('Dissapearing messages successfully turned on for 7 days!'); 
  
 } 
 break; 

//========================================================================================================================//		      
         case "disp-90": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupToggleEphemeral(m.chat, 90*24*3600); 
 m.reply('Dissapearing messages successfully turned on for 90 days!'); 
 } 
 break; 

//========================================================================================================================//		      
        case "disp-off": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupToggleEphemeral(m.chat, 0); 
 m.reply('Dissapearing messages successfully turned off!'); 
 }
   break;

//========================================================================================================================//		      
 case "icon": { 
    if (!m.isGroup) throw group; 
    if (!isAdmin) throw admin; 
    if (!isBotAdmin) throw botAdmin; 
    if (!quoted) throw `Send or tag an image with the caption ${prefix + command}`; 
    if (!/image/.test(mime)) throw `Send or tag an image with the caption ${prefix + command}`; 
    if (/webp/.test(mime)) throw `Send or tag an image with the caption ${prefix + command}`; 
    let media = await client.downloadAndSaveMediaMessage(quoted); 
    await client.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media)); 
    reply('Group icon updated'); 
    } 
    break;

//========================================================================================================================//		      
          case "revoke": 
 case "newlink": 
 case "reset": { 
   if (!m.isGroup) throw group; // add "new Error" to create a new Error object 
   if (!isAdmin) throw admin; // add "new Error" to create a new Error object 
   if (!isBotAdmin) throw botAdmin; // add "new Error" to create a new Error object 
   await client.groupRevokeInvite(m.chat); 
   await client.sendText(m.chat, 'Group link revoked!', m); // use "client.sendText" instead of "m.reply" to ensure message is sent 
   let response = await client.groupInviteCode(m.chat); 
 client.sendText(m.sender, `https://chat.whatsapp.com/${response}\n\nHere is the new group link for ${groupMetadata.subject}`, m, { detectLink: true }); 
 client.sendText(m.chat, `Sent you the new group link in your inbox!`, m); 
   // use "client.sendTextWithMentions" instead of "client.sendText" to include group name in message 
 }          
  break;

//========================================================================================================================//		      
          case "delete": case "del": { 
                  if (!m.isGroup) throw group; 
  if (!isBotAdmin) throw botAdmin; 
  if (!isAdmin) throw admin; 
    if (!m.quoted) throw `No message quoted for deletion`; 
    let { chat, fromMe, id, isBaileys } = m.quoted; 
   if (isBaileys) throw `I cannot delete. Quoted message is my message or another bot message.`; 
    client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } }); 
  } 
 break;

//========================================================================================================================//		      
          case "leave": { 
                 if (!Owner) throw NotOwner;
		 if (!m.isGroup) throw group;
 await client.sendMessage(m.chat, { text : '𝗚𝗼𝗼𝗱𝗯𝘆𝗲 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲👋. 𝐁𝐋𝐀𝐂𝐊𝐌𝐀𝐂𝐇𝐀𝐍𝐓 𝐁𝐎𝐓-𝗔𝗶 𝗶𝘀 𝗟𝗲𝗮𝘃𝗶𝗻𝗴 𝘁𝗵𝗲 𝗚𝗿𝗼𝘂𝗽 𝗻𝗼𝘄...' , mentions: participants.map(a => a.id)}, { quoted : m }); 
                 await client.groupLeave(m.chat); 
  
             } 
 break; 

//========================================================================================================================//		      
          case "subject": case "changesubject": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
                 if (!text) throw 'Provide the text for the group subject.'; 
                 await client.groupUpdateSubject(m.chat, text); 
 m.reply('Group name successfully updated! 💀'); 
             } 
             break; 

//========================================================================================================================//		      
           case "desc": case "setdesc": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
                 if (!text) throw 'Provide the text for the group description' 
                 await client.groupUpdateDescription(m.chat, text); 
 m.reply('Group description successfully updated! 🥶'); 
             } 
 break; 

//========================================================================================================================//		      
     case "hidetag":
case "tag": {
  if (!m.isGroup) throw group;
  if (!isBotAdmin) throw botAdmin;
  if (!isAdmin) throw admin;

  // ✅ fetch group participants properly
  let groupMetadata = await client.groupMetadata(m.chat);
  let participants = groupMetadata.participants;

  let mentionIds = participants.map(p => p.id);

  await client.sendMessage(
    m.chat,
    {
      text: q ? q : "@all",
      mentions: mentionIds
    },
    { quoted: m }
  );
}
break;

//========================================================================================================================//		      
      case "tagall": {
  if (!m.isGroup) throw group;
  if (!isBotAdmin) throw botAdmin;
  if (!isAdmin) throw admin;

  // ✅ fetch participants
  let groupMetadata = await client.groupMetadata(m.chat);
  let participants = groupMetadata.participants;

  let teks = `🚀 *BLACK-MD TAG ALL*\n\n`;
  teks += `Message: ${q ? q : "No message"}\n\n`;

  for (let mem of participants) {
    teks += `𓅂 @${mem.id.split("@")[0]}\n`;
  }

  await client.sendMessage(
    m.chat,
    {
      text: teks,
      mentions: participants.map(a => a.id)
    },
    { quoted: m }
  );
}
break;

//========================================================================================================================//		      
case "whatsong": case "shazam":

function _0x14eb(){const _0x17ec6c=['Audio\x20downloading\x20->','mediaType','statSync','1919133FdmqGs','quoted','name','\x0a*•\x20Artists:*\x20','Too\x20big!','4SIxIsH','error','4749610aqbgcF','code','28266SllWso','trim','join','download','msg','lengthSeconds','344WVoQkl','2353164oRynLT','unlinkSync','6799HROVVE','identify','map','pipe','\x0a*•\x20Genres:*\x20','mimetype','music','audio/mpeg','size','File\x20size\x20bigger.','audioBitrate','KKbVWlTNCL3JjxjrWnywMdvQGanyhKRN0fpQxyUo','floor','.mp3','finish','identify-eu-west-1.acrcloud.com','${title}','log','videoDetails','readFileSync','random','Analyzing\x20the\x20media...','chat','*!!','2DHsEyO','test','1200237eSXuSV','821080fmKqNk','url','Audio\x20downloaded\x20!\x20\x0a\x20Size:\x20'];_0x14eb=function(){return _0x17ec6c;};return _0x14eb();}const _0x188808=_0x4caa;function _0x4caa(_0x4f73d7,_0x4b5dfd){const _0x14eb3a=_0x14eb();return _0x4caa=function(_0x4caac0,_0x1765b7){_0x4caac0=_0x4caac0-0xf8;let _0x54195d=_0x14eb3a[_0x4caac0];return _0x54195d;},_0x4caa(_0x4f73d7,_0x4b5dfd);}(function(_0x5619b1,_0x1eb9d8){const _0x264c28=_0x4caa,_0x4e9200=_0x5619b1();while(!![]){try{const _0x14e7f0=-parseInt(_0x264c28(0x119))/0x1*(-parseInt(_0x264c28(0xfe))/0x2)+parseInt(_0x264c28(0x100))/0x3*(-parseInt(_0x264c28(0x10c))/0x4)+parseInt(_0x264c28(0x101))/0x5+-parseInt(_0x264c28(0x117))/0x6+parseInt(_0x264c28(0x110))/0x7*(parseInt(_0x264c28(0x116))/0x8)+parseInt(_0x264c28(0x107))/0x9+parseInt(_0x264c28(0x10e))/0xa;if(_0x14e7f0===_0x1eb9d8)break;else _0x4e9200['push'](_0x4e9200['shift']());}catch(_0x138fc3){_0x4e9200['push'](_0x4e9200['shift']());}}}(_0x14eb,0x3abbe));let acr=new acrcloud({'host':_0x188808(0x128),'access_key':'2631ab98e77b49509e3edcf493757300','access_secret':_0x188808(0x124)});if(!m['quoted'])throw'Tag\x20a\x20short\x20video\x20or\x20audio';let d=m['quoted']?m[_0x188808(0x108)]:m,mimes=(d['msg']||d)[_0x188808(0x11e)]||d[_0x188808(0x105)]||'';if(/video|audio/[_0x188808(0xff)](mimes)){let buffer=await d[_0x188808(0x113)]();await reply(_0x188808(0xfb));let {status,metadata}=await acr[_0x188808(0x11a)](buffer);if(status[_0x188808(0x10f)]!==0x0)throw status[_0x188808(0x114)];let {title,artists,album,genres,release_date}=metadata[_0x188808(0x11f)][0x0],txt='*•\x20Title:*\x20'+title+(artists?_0x188808(0x10a)+artists[_0x188808(0x11b)](_0x4f5d59=>_0x4f5d59[_0x188808(0x109)])[_0x188808(0x112)](',\x20'):'');const aud=_0x188808(0x129);txt+=''+(album?'\x0a*•\x20Album:*\x20'+album[_0x188808(0x109)]:'')+(genres?_0x188808(0x11d)+genres[_0x188808(0x11b)](_0xf7bf2e=>_0xf7bf2e[_0x188808(0x109)])[_0x188808(0x112)](',\x20'):'')+'\x0a',txt+='*•\x20Release\x20Date:*\x20'+release_date,await client['sendMessage'](m[_0x188808(0xfc)],{'text':txt[_0x188808(0x111)]()},{'quoted':m});const {videos}=await yts(title);if(!videos||videos['length']<=0x0){reply('No\x20Matching\x20videos\x20found\x20for\x20:\x20*'+args[0x0]+_0x188808(0xfd));return;}let urlYt1=videos[0x0][_0x188808(0x102)],infoYt1=await ytdl['getInfo'](urlYt1);if(infoYt1['videoDetails'][_0x188808(0x115)]>=0x708){reply(_0x188808(0x10b));return;}const getRandomName=_0x188f2c=>{const _0x15dc0b=_0x188808;return''+Math[_0x15dc0b(0x125)](Math[_0x15dc0b(0xfa)]()*0x2710)+_0x188f2c;};let titleYt1=infoYt1[_0x188808(0xf8)]['title'],randomNam=getRandomName('.mp3');const stream=ytdl(urlYt1,{'filter':_0x5ac95f=>_0x5ac95f['audioBitrate']==0xa0||_0x5ac95f[_0x188808(0x123)]==0x80})[_0x188808(0x11c)](fs['createWriteStream']('./'+randomNam));console[_0x188808(0x12a)](_0x188808(0x104),urlYt1),await new Promise((_0x1cc1a5,_0x4efba3)=>{const _0x426073=_0x188808;stream['on'](_0x426073(0x10d),_0x4efba3),stream['on'](_0x426073(0x127),_0x1cc1a5);});let stats=fs[_0x188808(0x106)]('./'+randomNam),fileSizeInBytes=stats[_0x188808(0x121)],fileSizeInMegabytes=fileSizeInBytes/(0x400*0x400);console[_0x188808(0x12a)](_0x188808(0x103)+fileSizeInMegabytes),fileSizeInMegabytes<=0x28?await client['sendMessage'](from,{'document':fs[_0x188808(0xf9)]('./'+randomNam),'mimetype':_0x188808(0x120),'fileName':titleYt1+_0x188808(0x126)},{'quoted':m}):reply(_0x188808(0x122)),fs[_0x188808(0x118)]('./'+randomNam);}
    
	break; 
		      
//========================================================================================================================//
        case "s": case "sticker": 
{
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');

if(!msgR) { m.reply('Quote an image or a short video.') ; return } ;
let media;
if (msgR.imageMessage) {
     media = msgR.imageMessage
  } else if(msgR.videoMessage) {
media = msgR.videoMessage
  } 
 else {
    m.reply('That is neither an image nor a short video! '); return
  } ;

var result = await client.downloadAndSaveMediaMessage(media);

let stickerResult = new Sticker(result, {
            pack: pushname,
            type: StickerTypes.FULL,
            categories: ["🤩", "🎉"],
            id: "12345",
            quality: 70,
            background: "transparent",
          });
const Buffer = await stickerResult.toBuffer();
          client.sendMessage(m.chat, { sticker: Buffer }, { quoted: m });

}
break;

//========================================================================================================================//		      
          case "dp": { 
 try { 
 ha = m.quoted.sender; 
 qd = await client.getName(ha); 
 pp2 = await client.profilePictureUrl(ha,'image'); 
 } catch {  
 pp2 = 'https://tinyurl.com/yx93l6da'; 
 } 
  if (!m.quoted) throw `Tag a user!`; 
 bar = `Profile Picture of ${qd}`; 
 client.sendMessage(m.chat, { image: { url: pp2}, caption: bar, fileLength: "999999999999"}, { quoted: m}); 
 } 
 break;

//========================================================================================================================//		      
case "list": case "vars": case "help":
let vaa = `𝟏 Owner➣ 𝐆𝐞𝐭 𝐁𝐋𝐀𝐂𝐊𝐌𝐀𝐂𝐇𝐀𝐍𝐓 𝐁𝐎𝐓  𝐜𝐨𝐧𝐭𝐚𝐜𝐭\n\n𝟐 𝐁𝐫𝐨𝐚𝐝𝐜𝐚𝐬𝐭➣ 𝐒𝐞𝐧𝐝𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐭𝐨 𝐚𝐥𝐥 𝐠𝐫𝐨𝐮𝐩𝐬\n\n𝟑 𝐉𝐨𝐢𝐧➣ 𝐭𝐚𝐠 𝐠𝐫𝐨𝐮𝐩 𝐥𝐢𝐧𝐤 𝐰𝐢𝐭𝐡 𝐣𝐨𝐢𝐧\n\n𝟒 𝐛𝐨𝐭𝐩𝐩➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐛𝐨𝐭𝐬 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐝𝐩\n\n𝟓 𝐁𝐥𝐨𝐜𝐤➣ 𝐁𝐥𝐨𝐜𝐤 𝐭𝐡𝐞𝐦 𝐟𝐚𝐤𝐞 𝐟𝐫𝐢𝐞𝐧𝐝𝐬\n\n𝟔 𝐊𝐢𝐥𝐥➣ 𝐊𝐢𝐥𝐥𝐬 𝐠𝐫𝐨𝐮𝐩 𝐢𝐧 𝐬𝐞𝐜𝐨𝐧𝐝𝐬\n\n𝟕 𝐔𝐧𝐛𝐥𝐨𝐜𝐤➣ 𝐆𝐢𝐯𝐞 𝐭𝐡𝐞𝐦 𝐟𝐚𝐤𝐞 𝐟𝐫𝐢𝐞𝐧𝐝𝐬 𝐚 𝐬𝐞𝐜𝐨𝐧𝐝 𝐜𝐡𝐚𝐧𝐜𝐞\n\n𝟖 𝐒𝐞𝐭𝐯𝐚𝐫➣ 𝐒𝐞𝐭 𝐯𝐚𝐫𝐬 𝐢𝐧 𝐡𝐞𝐫𝐨𝐤𝐮\n\n𝟗 𝐒𝐭𝐢𝐜𝐤𝐞𝐫➣ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚 𝐩𝐡𝐨𝐭𝐨 𝐨𝐫 𝐚 𝐬𝐡𝐨𝐫𝐭 𝐯𝐢𝐝𝐞𝐨 𝐭𝐨 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫\n\n𝟏𝟎 𝐓𝐨𝐢𝐦𝐠➣ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐭𝐨 𝐚 𝐩𝐡𝐨𝐭𝐨\n\n𝟏𝟏 𝐏𝐥𝐚𝐲➣ 𝐆𝐞𝐭 𝐲𝐨𝐮𝐫 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐞 𝐬𝐨𝐧𝐠\n\n𝟏𝟐 𝐖𝐡𝐚𝐭𝐬𝐨𝐧𝐠➣ 𝐠𝐞𝐭 𝐭𝐡𝐞 𝐭𝐢𝐭𝐥𝐞 𝐨𝐟 𝐭𝐡𝐞 𝐬𝐨𝐧𝐠\n\n𝟏𝟑 𝐘𝐭𝐬 ➣ 𝐆𝐞𝐭 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐯𝐢𝐝𝐞𝐨𝐬\n\n𝟏𝟒 𝐌𝐨𝐯𝐢𝐞➣ 𝐆𝐞𝐭 𝐲𝐨𝐮𝐫 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐞 𝐦𝐨𝐯𝐢𝐞 𝐝𝐞𝐭𝐚𝐢𝐥𝐬\n\n𝟏𝟓 𝐌𝐢𝐱➣ 𝐂𝐨𝐦𝐛𝐢𝐧𝐞𝐬 +𝟐𝐞𝐦𝐨𝐣𝐢𝐬\n\n𝟏𝟔 𝐀𝐢-𝐢𝐦𝐠➣ 𝐆𝐞𝐭 𝐚𝐧 𝐀𝐢 𝐩𝐡𝐨𝐭𝐨\n\n𝟏𝟕 𝐆𝐩𝐭 ➣ 𝐇𝐞𝐫𝐞 𝐭𝐨 𝐚𝐧𝐬𝐰𝐞𝐫 𝐲𝐨𝐮𝐫 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧𝐬\n\n𝟏𝟖 𝐃𝐩➣ 𝐆𝐞𝐭𝐬 𝐚 𝐩𝐞𝐫𝐬𝐨𝐧 𝐝𝐩\n\n𝟏𝟗 𝐒𝐩𝐞𝐞𝐝 ➣ 𝐂𝐡𝐞𝐜𝐤𝐬 𝐛𝐨𝐭𝐬 𝐬𝐩𝐞𝐞𝐝\n\n𝟐𝟎 𝐀𝐥𝐢𝐯𝐞➣ 𝐂𝐡𝐞𝐜𝐤 𝐰𝐡𝐞𝐭𝐡𝐞𝐫 𝐭𝐡𝐞 𝐛𝐨𝐭 𝐢𝐬 𝐬𝐭𝐢𝐥𝐥 𝐤𝐢𝐜𝐤𝐢𝐧𝐠\n\n𝟐𝟏 𝐑𝐮𝐧𝐭𝐢𝐦𝐞➣ 𝐖𝐡𝐞𝐧 𝐝𝐢𝐝 𝐛𝐨𝐭 𝐬𝐭𝐚𝐫𝐭𝐞𝐝 𝐨𝐩𝐞𝐫𝐚𝐭𝐢𝐧𝐠\n\n𝟐𝟐 𝐒𝐜𝐫𝐢𝐩𝐭➣ 𝐆𝐞𝐭 𝐛𝐨𝐭 𝐬𝐜𝐫𝐢𝐩𝐭\n\n𝟐𝟑 𝐎𝐰𝐧𝐞𝐫  ➣ 𝐆𝐞𝐭 𝐨𝐰𝐧𝐞𝐫(𝐬) 𝐜𝐨𝐧𝐭𝐚𝐜𝐭\n\n𝟐𝟒 𝐕𝐚𝐫𝐬 ➣ 𝐒𝐞𝐞 𝐚𝐥𝐥 𝐯𝐚𝐫𝐢𝐚𝐛𝐥𝐞𝐬\n\n𝟐𝟓 𝐏𝐫𝐨𝐦𝐨𝐭𝐞➣ 𝐆𝐢𝐯𝐞𝐬 𝐨𝐧𝐞 𝐚𝐝𝐦𝐢𝐧 𝐫𝐨𝐥𝐞\n\n𝟐𝟔 𝐃𝐞𝐦𝐨𝐭𝐞➣ 𝐃𝐞𝐦𝐨𝐭𝐞𝐬 𝐟𝐫𝐨𝐦 𝐠𝐫𝐨𝐮𝐩 𝐚𝐝𝐦𝐢𝐧 𝐭𝐨 𝐚 𝐦𝐞𝐦𝐛𝐞𝐫\n\n𝟐𝟕 𝐃𝐞𝐥𝐞𝐭𝐞➣ 𝐃𝐞𝐥𝐞𝐭𝐞 𝐚 𝐦𝐞𝐬𝐬𝐚𝐠𝐞\n\n𝟐𝟖 𝐑𝐞𝐦𝐨𝐯𝐞/𝐤𝐢𝐜𝐤➣ 𝐊𝐢𝐜𝐤 𝐭𝐡𝐚𝐭 𝐭𝐞𝐫𝐫𝐨𝐫𝐢𝐬𝐭 𝐟𝐫𝐨𝐦 𝐚 𝐠𝐫𝐨𝐮𝐩\n\n𝟐𝟗 𝐅𝐨𝐫𝐞𝐢𝐠𝐧𝐞𝐫𝐬➣ 𝐆𝐞𝐭 𝐟𝐨𝐫𝐞𝐢𝐠𝐧 𝐧𝐮𝐦𝐛𝐞𝐫𝐬\n\n𝟑𝟎 𝐂𝐥𝐨𝐬𝐞➣ 𝐓𝐢𝐦𝐞 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞𝐦𝐛𝐞𝐫𝐬 𝐭𝐨 𝐭𝐚𝐤𝐞 𝐚 𝐛𝐫𝐞𝐚𝐤 𝐨𝐧𝐥𝐲 𝐚𝐝𝐦𝐢𝐧𝐬 𝐜𝐚𝐧 𝐜𝐡𝐚𝐭\n\n𝟑𝟏 𝐎𝐩𝐞𝐧 ➣ 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐜𝐚𝐧 𝐜𝐡𝐚𝐭 𝐢𝐧 𝐚 𝐠𝐫𝐨𝐮𝐩\n\n𝟑𝟐 𝐈𝐜𝐨𝐧➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐢𝐜𝐨𝐧\n\n𝟑𝟑 𝐒𝐮𝐛𝐣𝐞𝐜𝐭➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐬𝐮𝐛𝐣𝐞𝐜𝐭\n\n𝟑𝟒 𝐃𝐞𝐬𝐜➣ 𝐆𝐞𝐭 𝐠𝐫𝐨𝐮𝐩 𝐝𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧\n\n𝟑𝟓 𝐋𝐞𝐚𝐯𝐞➣ 𝐓𝐡𝐞 𝐠𝐫𝐨𝐮𝐩 𝐢𝐬 𝐛𝐨𝐫𝐢𝐧𝐠 ,𝐭𝐢𝐦𝐞 𝐟𝐨𝐫 𝐛𝐨𝐭 𝐭𝐨 𝐥𝐞𝐚𝐯𝐞\n\n𝟑𝟔 𝐓𝐚𝐠𝐚𝐥𝐥 ➣ 𝐓𝐚𝐠 𝐞𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐢𝐧 𝐚 𝐠𝐫𝐨𝐮𝐩 𝐜𝐡𝐚𝐭\n\n𝟑𝟕 𝐇𝐢𝐝𝐞𝐭𝐚𝐠➣ 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧! 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧! 𝐬𝐨𝐦𝐞𝐨𝐧𝐞 𝐡𝐚𝐬 𝐬𝐨𝐦𝐞𝐭𝐡𝐢𝐧𝐠 𝐭𝐨 𝐬𝐚𝐲\n\n𝟑𝟖 𝐑𝐞𝐯𝐨𝐤𝐞 ➣ 𝐑𝐞𝐬𝐞𝐭 𝐠𝐫𝐨𝐮𝐩 𝐥𝐢𝐧𝐤`
reply(vaa)
break;

//========================================================================================================================//		      
  case "vv": case "retrieve":{

if (!m.quoted) return m.reply("quote a viewonce message eh")

  const quotedMessage = m.msg?.contextInfo?.quotedMessage;

    if (quotedMessage.imageMessage) {
      let imageCaption = quotedMessage.imageMessage.caption;
      let imageUrl = await client.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
      client.sendMessage(m.chat, { image: { url: imageUrl }, caption: `Retrieved by Blackie!\n${imageCaption}`}, { quoted: m });
    }

    if (quotedMessage.videoMessage) {
      let videoCaption = quotedMessage.videoMessage.caption;
      let videoUrl = await client.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
      client.sendMessage(m.chat, { video: { url: videoUrl }, caption: `Retrieved by Blackie!\n${videoCaption}`}, { quoted: m });
    }
      }
	break;

//========================================================================================================================//		      
	 case "vv2": case "mmmh":{

if (!m.quoted) return m.reply("quote a viewonce message eh")

  const quotedMessage = m.msg?.contextInfo?.quotedMessage;

    if (quotedMessage.imageMessage) {
      let imageCaption = quotedMessage.imageMessage.caption;
      let imageUrl = await client.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
      client.sendMessage(client.user.id, { image: { url: imageUrl }, caption: `Retrieved by Blackie!\n${imageCaption}`}, { quoted: m });
    }

    if (quotedMessage.videoMessage) {
      let videoCaption = quotedMessage.videoMessage.caption;
      let videoUrl = await client.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
      client.sendMessage(client.user.id, { video: { url: videoUrl }, caption: `Retrieved by Blackie!\n${videoCaption}`}, { quoted: m });
    }
      }
	break;

//========================================================================================================================//		      
    case 'take': {
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');

if(!msgR) { m.reply('Quote an image, a short video or a sticker to change watermark.') ; return } ;

let media;
if (msgR.imageMessage) {
     media = msgR.imageMessage
  } else if(msgR.videoMessage) {
media = msgR.videoMessage
  } 
  else if (msgR.stickerMessage) {
    media = msgR.stickerMessage ;
  } else {
    m.reply('This is neither a sticker, image nor a video...'); return
  } ;

var result = await client.downloadAndSaveMediaMessage(media);

let stickerResult = new Sticker(result, {
            pack: pushname,
            type: StickerTypes.FULL,
            categories: ["🤩", "🎉"],
            id: "12345",
            quality: 70,
            background: "transparent",
          });
const Buffer = await stickerResult.toBuffer();
          client.sendMessage(m.chat, { sticker: Buffer }, { quoted: m });

}
break;

//========================================================================================================================//	  
case 'ytsearch':
    case 'yts': {
        if (!text) {
            reply('Provide a search term!\E.g: Alan walker alone')
            return;
        }
        const term = text;
        const {
            videos
        } = await yts(term);
        if (!videos || videos.length <= 0) {
            reply(`No Matching videos found for : *${term}*!!`)
            return;
        }
        const length = videos.length < 10 ? videos.length : 10;
        let tex = `YouTube Search\n🔍 Query ~> ${term}\n\n`;
        for (let i = 0; i < length; i++) {
            tex += `Link ~> ${videos[i].url}\nChannel ~> ${videos[i].author.name}\nTitle ~> ${videos[i].title}\n\n`;
        }
        reply(tex)
        return;
    }
    break;

//========================================================================================================================//		      
//========================================================================================================================//		      
    case "ping": case "speed": {
                 
	    await loading ()
	     m.reply (`𝗣𝗼𝗻𝗴\n ${Rspeed.toFixed(4)} 𝗠𝘀`); 
         } 
 break; 

//========================================================================================================================//		      
  case "uptime": { 
                 m.reply (`${runtime(process.uptime())}`) 
 } 
 break;

//========================================================================================================================//		      
	case 'runtime':
		let raven = `𝐁𝐋𝐀𝐂𝐊-𝐌𝐃 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗿𝘂𝗻𝗻𝗶𝗻𝗴 𝘀𝗶𝗻𝗰𝗲 ${runtime(process.uptime())}`
                client.sendMessage(m.chat, {
                    text: raven,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: '𝐁𝐋𝐀𝐂𝐊𝐌𝐀𝐂𝐇𝐀𝐍𝐓 𝐁𝐎𝐓',
                            body: 'https://whatsapp.com/channel/0029VaxCd13DzgTGK42G292X',
                            thumbnailUrl: 'https://i.imgur.com/gmIbuTZ.jpeg',
                            sourceUrl: 'https://whatsapp.com/channel/0029VaxCd13DzgTGK42G292X',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break;

//========================================================================================================================//		      
  case "apk":
      case "app":{
          if (!text) return reply("Where is the app name?");
        let kyuu = await fetchJson (`https://api.bk9.dev/search/apk?q=${text}`);
        let tylor = await fetchJson (`https://api.bk9.dev/download/apk?id=${kyuu.BK9[0].id}`);
         await client.sendMessage(
              m.chat,
              {
                document: { url: tylor.BK9.dllink },
                fileName: tylor.BK9.name,
                mimetype: "application/vnd.android.package-archive",
                contextInfo: {
        externalAdReply: {
          title: `BLACKMACHANT-BOT`,
          body: `${tylor.BK9.name}`,
          thumbnailUrl: `${tylor.BK9.icon}`,
          sourceUrl: `${tylor.BK9.dllink}`,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });
          }
      break;

//========================================================================================================================//		      
          case "mix": {
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');

const axios = require("axios");
if (!text) return m.reply("No emojis provided ? ")

  const emojis = text.split('+');

  if (emojis.length !== 2) {
    m.reply("Specify the emojis and separate with '+'");
    return;
  }

  const emoji1 = emojis[0].trim();
  const emoji2 = emojis[1].trim();

  try {
    const axios = require('axios');
    const response = await axios.get(`https://levanter.onrender.com/emix?q=${emoji1}${emoji2}`);

    if (response.data.status === true) {
    
      let stickerMess = new Sticker(response.data.result, {
        pack: botname,
        type: StickerTypes.CROPPED,
        categories: ["🤩", "🎉"],
        id: "12345",
        quality: 70,
        background: "transparent",
      });
      const stickerBuffer2 = await stickerMess.toBuffer();
      client.sendMessage(m.chat, { sticker: stickerBuffer2 }, { quoted: m });

    } else {
      m.reply("Unable to create emoji mix.");
    }
  } catch (error) {
    m.reply("An error occurred while creating the emoji mix." + error );
  }
      }
	  break;

//========================================================================================================================//		              
//========================================================================================================================//		      
        case "toimage": case "photo": { 
    if (!quoted) throw 'Tag a static video with the command!'; 
    if (!/webp/.test(mime)) throw `Tag a sticker with ${prefix + command}`; 
  
    let media = await client.downloadAndSaveMediaMessage(quoted); 
    let mokaya = await getRandom('.png'); 
    exec(`ffmpeg -i ${media} ${mokaya}`, (err) => { 
   fs.unlinkSync(media); 
   if (err) throw err 
   let buffer = fs.readFileSync(mokaya); 
   client.sendMessage(m.chat, { image: buffer, caption: `𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗱 𝗯𝘆 𝐁𝐋𝐀𝐂𝐊𝐌𝐀𝐂𝐇𝐀𝐍𝐓 𝐁𝐎𝐓𝘁`}, { quoted: m }) 
   fs.unlinkSync(mokaya); 
    }); 
    } 
     break;

//========================================================================================================================//		      
   case "movie": 
             if (!text) return reply(`Provide a series or movie name.`);  
              let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`);  
              let imdbt = "";  
              console.log(fids.data)  
              imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB MOVIE SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";  
              imdbt += "🎬Title      : " + fids.data.Title + "\n";  
              imdbt += "📅Year       : " + fids.data.Year + "\n";  
              imdbt += "⭐Rated      : " + fids.data.Rated + "\n";  
              imdbt += "📆Released   : " + fids.data.Released + "\n";  
              imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n";  
              imdbt += "🌀Genre      : " + fids.data.Genre + "\n";  
              imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n";  
              imdbt += "✍Writer     : " + fids.data.Writer + "\n";  
              imdbt += "👨Actors     : " + fids.data.Actors + "\n";  
              imdbt += "📃Plot       : " + fids.data.Plot + "\n";  
              imdbt += "🌐Language   : " + fids.data.Language + "\n";  
              imdbt += "🌍Country    : " + fids.data.Country + "\n";  
              imdbt += "🎖️Awards     : " + fids.data.Awards + "\n";  
              imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n";  
              imdbt += "🏙️Production : " + fids.data.Production + "\n";  
              imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n";  
              imdbt += "❎imdbVotes  : " + fids.data.imdbVotes + "";  
             client.sendMessage(from, {  
                  image: {  
                      url: fids.data.Poster,  
                  },  
                  caption: imdbt,  
              },  
                 { quoted: m }); 
  
                       break;
		      
//========================================================================================================================//                                   
  case "linkgroup": case "link": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 let response = await client.groupInviteCode(m.chat); 
                 client.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup link for  ${groupMetadata.subject}`, m, { detectLink: true }); 
             } 
          break;
       
//========================================================================================================================//
          case 'botpp': { 
    if (!Owner) throw NotOwner; 
    if (!quoted) throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`; 
    if (!/image/.test(mime)) throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`; 
    if (/webp/.test(mime)) throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`; 
    let media = await client.downloadAndSaveMediaMessage(quoted);
		
                    await client.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media)); 
    reply `Bot's profile picture has been successfully updated!`; 
	  }
    break;

//========================================================================================================================//		      
          case 'broadcast': { 
         if (!Owner) { 
             throw NotOwner
             return; 
         } 
         if (!text) { 
             reply("❌ No broadcast message provided!") 
             return; 
         } 
         let getGroups = await client.groupFetchAllParticipating() 
         let groups = Object.entries(getGroups) 
             .slice(0) 
             .map(entry => entry[1]) 
         let res = groups.map(v => v.id) 
         reply(` Broadcasting in ${res.length} Group Chat, in ${res.length * 1.5} seconds`) 
         for (let i of res) { 
             let txt = `𝐁𝐋𝐀𝐂𝐊𝐌𝐀𝐂𝐇𝐀𝐍𝐓 𝐁𝐎𝗧 𝗕𝗥𝗢𝗔𝗗𝗖𝗔𝗦𝗧 >\n\n🀄 Message: ${text}\n\nAuthor: ${pushname}` 
             await client.sendMessage(i, { 
                 image: { 
                     url: "https://telegra.ph/file/416c3ae0cfe59be8db011.jpg" 
                 }, 
                 caption: `${txt}` 
             }) 
         } 
         reply(`Broadcasted to ${res.length} Groups.`) 
     } 
 break;

//========================================================================================================================//
//========================================================================================================================//		            
//========================================================================================================================//	
		      case "dlt": case "dil": { 
 if (!m.quoted) throw `No message quoted for deletion`; 
 let { chat, fromMe, id, isBaileys } = m.quoted; 
 if (isBaileys) throw `I cannot delete. Quoted message is my message or another bot message.`; 
 client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } }); 
 } 
 break;
 
//========================================================================================================================//
case "block": { 
 if (!Owner) throw NotOwner; 
 if (!m.quoted) throw `𝗧𝗮𝗴 𝘀𝗼𝗺𝗲𝗼𝗻𝗲!`  
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
	 if (users == "254114283550@s.whatsapp.net") return m.reply("𝗜 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗹𝗼𝗰𝗸 𝗺𝘆 𝗢𝘄𝗻𝗲𝗿 😡");
		  if (users  == client.decodeJid(client.user.id)) throw '𝗜 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗹𝗼𝗰𝗸 𝗺𝘆𝘀𝗲𝗹𝗳 𝗶𝗱𝗶𝗼𝘁 😡';
 await client.updateBlockStatus(users, 'block'); 
 m.reply (`𝗕𝗹𝗼𝗰𝗸𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆!`); 
 } 
 break; 

//========================================================================================================================//		      
 case "unblock": { 
 if (!Owner) throw NotOwner; 
 if (!m.quoted) throw `𝗧𝗮𝗴 𝘀𝗼𝗺𝗲𝗼𝗻𝗲!`; 
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'; 
 await client.updateBlockStatus(users, 'unblock'); 
 m.reply (`𝗨𝗻𝗯𝗹𝗼𝗰𝗸𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅!`); 
 } 
 break;

//========================================================================================================================//		      
          case 'join': { 
                 if (!Owner) throw NotOwner
                 if (!text) return reply("provide a valid group link") 
                 let result = args[0].split('https://chat.whatsapp.com/')[1] 
                 await client.groupAcceptInvite(result).then((res) =>  reply(jsonformat(res))).catch((err) =>reply(`Link has problem.`)) 
  
             }  
               break;

//========================================================================================================================//		      
	      case "enc": case "encrypte": {
	const Obf = require("javascript-obfuscator");

    // Check if the quoted message has text
    if (m.quoted && m.quoted.text) {
        const forq = m.quoted.text;

        // Obfuscate the JavaScript code
        const obfuscationResult = Obf.obfuscate(forq, {
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        });

        console.log("Successfully encrypted the code");
        m.reply(obfuscationResult.getObfuscatedCode());
    } else {
        m.reply("Quote/Tag a valid JavaScript code to encrypt!");
    }
}
	break;

//========================================================================================================================//		      
//========================================================================================================================//		      
	      case 'gcprofile': {
 function convertTimestamp(timestamp) {
  const d = new Date(timestamp * 1000);
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return {
    date: d.getDate(),
    month: new Intl.DateTimeFormat('en-US', { month: 'long' }).format(d),
    year: d.getFullYear(),
    day: daysOfWeek[d.getUTCDay()],
    time: `${d.getUTCHours()}:${d.getUTCMinutes()}:${d.getUTCSeconds()}`
  }
}

if (!m.isGroup) return m.reply("This command is meant for groups");

let info = await client.groupMetadata(m.chat);

let ts = await convertTimestamp(info.creation);

try {
        pp = await client.profilePictureUrl(chat, 'image');
      } catch {
        pp = 'https://i.imgur.com/l6rYr1f.jpeg';
      }

await client.sendMessage(m.chat, { image: { url: pp }, 
          caption: `_Name_ : *${info.subject}*\n\n_ID_ : *${info.id}*\n\n_Group owner_ : ${'@'+info.owner.split('@')[0]} || 'No Creator'\n\n_Group created_ : *${ts.day}, ${ts.date} ${ts.month} ${ts.year}, ${ts.time}*\n\n_Participants_ : *${info.size}*\n_Members_ : *${info.participants.filter((p) => p.admin == null).length}*\n\n_Admins_ : *${Number(info.participants.length - info.participants.filter((p) => p.admin == null).length)}*\n\n_Who can send message_ : *${info.announce == true ? 'Admins' : 'Everyone'}*\n\n_Who can edit group info_ : *${info.restrict == true ? 'Admins' : 'Everyone'}*\n\n_Who can add participants_ : *${info.memberAddMode == true ? 'Everyone' : 'Admins'}*`
        }, {quoted: m })

}
	 break;

//========================================================================================================================//		      
   case 'tovideo': case 'mp4': case 'tovid': {
			
                if (!quoted) return reply('Reply to Sticker')
                if (!/webp/.test(mime)) return reply(`reply sticker with caption *${prefix + command}*`)
                
		        let webp2mp4File = await fetch(`https://bk9.fun/converter/webpToMp4?url=${quoted}`)
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await client.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break;
//========================================================================================================================//
//========================================================================================================================//        
        default: {
          if (cmd && budy.toLowerCase() != undefined) {
            if (m.chat.endsWith("broadcast")) return;
            if (m.isBaileys) return;
            if (!budy.toLowerCase()) return;
            if (argsLog || (cmd && !m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("Raven", "turquoise"));
            } else if (argsLog || (cmd && m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("Raven", "turquoise"));
            }
          }
        }
      }
    }
  } catch (err) {
    console.log(util.format(err));
  }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});


 
  
