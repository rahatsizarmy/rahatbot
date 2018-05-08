const Discord = require("discord.js");
const moment = require("moment");

require("moment-duration-format");

exports.run = (client, message) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
    .setTimestamp()
    .setDescription(message.guild.name +' ('+ message.guild.id + ')')
    .setThumbnail(message.guild.iconURL)
    .setFooter(message.guild.name, message.guild.iconURL)
    .addField('❯  İşletim Sistemi:  ','  Linux')
    .addField('❯  Çalışma süresi:  ',`${duration}`)
    .addField('❯  Sürüm:  ',`v${Discord.version}`)
    .addField('❯  Bellek kullanımı :  ',+(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)+' MB')
    .addField('❯  Genel İstatistikler:  ',`• Sunucular: ${client.guilds.size.toLocaleString()}`+`• Kullanıcılar: ${client.users.size}`+`• Kanallar: ${client.channels.size.toLocaleString()}`+`• Pingim: ${client.ping}`)
    .addField('❯  Yapımcım:  ',`@🌹Doğan.🌙#4996 `)
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