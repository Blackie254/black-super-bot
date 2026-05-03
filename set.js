/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'BLACK MD;;;0mdnVQSL#Xv4I0Hg5h1gXglD8vM_6sr-TGUuqGPxwVvq3VZmouqo';
const session = process.env.SESSION || '';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const botname = process.env.BOTNAME || '𝐁𝐋𝐀𝐂𝐊-𝐌𝐃 𝐁𝐎𝐓';
const author = process.env.STICKER_AUTHOR || '𝗕𝗢𝗧';
const packname = process.env.STICKER_PACKNAME || '𝐁𝐋𝐀𝐂𝐊𝐌𝐄𝐑𝐂𝐇𝐀𝐍𝐓';
const dev = process.env.DEV || '254114283550,254105309571';
const owner = dev.split(",");
const bad = process.env.BAD_WORD || 'fuck,umbwa,kuma,pussy,slut,bitch,cock,stupid';
const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';
const mycode = process.env.CODE || '254';
const port = process.env.PORT || 10000;
const databaseUrl = process.env.DATABASE_URL || '';

module.exports = {
  session,
  sessionName,
  author,
  packname,
  dev,
  owner,
  bad,
  group,
  NotOwner,
  botname,
  botAdmin,
  admin,
  mycode,
  herokuapi,
  port,
  appname,
  databaseUrl
};
