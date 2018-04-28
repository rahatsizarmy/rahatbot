const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField("❯  __ "+mesaj+'__','**Okusanız İyi Olur Önemli Olabilir! @here**')
  return message.channel.sendEmbed(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases:[],
  permLevel: 2
};

exports.help = {
  name: 'duyur',
  description: 'İstediğiniz duyuruyu güzel bir şekilde bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
