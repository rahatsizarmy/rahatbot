const Discord = require("discord.js");
const moment = require("moment");

require("moment-duration-format");

exports.run = (client, message) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTimestamp()
.addField('• Bellek kullanımı ::  ',+(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)+' MB')
.addField('• Çalışma süresi   ::  ',`${duration}`)
.addField('• İşletim Sistemi  ::  ','Heroku')
.addField('• Kullanıcılar     ::  ',`${client.users.size}`)
.addField('• Kanallar         ::  ',`${client.channels.size.toLocaleString()}`)
.addField('• Sunucular        ::  ',`${client.guilds.size.toLocaleString()}`)
.addField('• Discord.JS sürüm ::  ',`v${Discord.version}`)
.addField('• Pingim           ::  ',`${client.ping}`)
.addField('• Yapımcı          ::  ','@👑Doğan👑#4996')
return message.channel.sendEmbed(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};