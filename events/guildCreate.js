const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const girismesaj = [
  '**Rahatsız BOT sunucunuza eklendi!**',
  '**Rahatsız BOT** sunucunuzdaki insanlara kolaylıklar sağlar.',
  'Bot Doğan M. tarafından geliştirilmektedir ',
  'Botumuzun özelliklerini öğrenmek için rb!yardım komutunu kullanabilirsin.',
  '**ÖNEMLİ:** Botun kullanması için mod-log kanalı açın ve deneme için',
  'rb!uyarı komutunu kullanın.',
  '',
  `**Botun Davet Linki ** https://goo.gl/8qpw2X `,
  `**Rahatsız Adam Resmi Discord Sunucusu** https://discord.gg/W3hJJVJ `

]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)
	client.user.setGame(prefix + 'yardım | ' + client.guilds.size + ' sunucu | ' + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ' kullanıcı');
})