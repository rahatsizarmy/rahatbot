const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`istatistik` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
      .setColor("RANDOM")
    .setTimestamp()
    .setDescription(message.guild.name +' ('+ message.guild.id + ')')
    .setThumbnail(message.guild.iconURL)
    .setFooter(message.guild.name, message.guild.iconURL)
    .addField('❯  İşletim Sistemi:  ','  Linux')
    .addField('❯  Çalışma süresi:   ',`${duration}`)
    .addField('❯  Sürüm:  ',`v${Discord.version}`)
    .addField('❯  Bellek kullanımı :  ',+(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)+' MB')
    .addField('❯  Genel İstatistikler:  ',`• Sunucular: ${client.guilds.size.toLocaleString()}`+`• Kullanıcılar: ${client.users.size}`+`• Kanallar: ${client.channels.size.toLocaleString()}`+`• Pingim: ${client.ping}`)
    .addField('❯  Yapımcım:  ',`@🌹Doğan.🌙#4996 `)
    return message.channel.sendEmbed(istatistik);
    }
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