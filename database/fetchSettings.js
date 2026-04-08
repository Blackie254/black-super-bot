const { getSettings } = require('../database/config');

async function fetchSettings() {
  const data = await getSettings();

  return {
    wapresence: data.wapresence,
    autoread: data.autoread,
    mode: data.mode,
    prefix: data.prefix,
    autolike: data.autolike,
    menutype: data.menutype,
    autoview: data.autoview,
    antilink: data.antilink,
    antilinkall: data.antilinkall,
    antidelete: data.antidelete,
    antitag: data.antitag,
    antibot: data.antibot,
    welcomegoodbye: data.welcomegoodbye,
    autobio: data.autobio,
    badword: data.badword,
    gptdm: data.gptdm, 
    anticall: data.anticall
  };
}

module.exports = fetchSettings;
