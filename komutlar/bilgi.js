const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Bot sürümü: v' + ayarlar.surum + ' Yapımcı: Doğan **Rahatsız Bot**\n\n**HAKKIMDA**\n\nBen Önce Rahatsız Adam Sunucusunda Kullanılacaktım Fakat Yapımcım Şuna Karar verdi:Neden Botu Herkes kullanmasın? Ve bunun sonucuyla sizlerleyim.Hergün geliştirilmeye devam ediyorum!\n\n**YAPIMCIM**\n\n@👑Doğan👑#4996 \n\n_**BOTU EKLEMEK LİNK VE DESTEK SUNUCUSU:**_\n\n[Davet Linkim](https://discordapp.com/oauth2/authorize?client_id=444200033781547028&scope=bot&permissions=2146958591) \n\n[Destek Sunucusu](https://discord.gg/7xYz3nh)\n\n**:copyright: 2018 Rahatsız Bot**');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
