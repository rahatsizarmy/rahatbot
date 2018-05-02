const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`sustur` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  message.channel.send("Uyarıyorum!")
  .then(m => {
        m.edit( 'Kullanıcıya `@Susturulmuş` Yetkisini Verdim Ve `#r-log` Kanalına Bildirdim!İyi Günler!');
      });
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'r-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Sustrulmuş');
  if (!muteRole) return message.reply('`Susturulmuş` adlı bir rol bulamıyorum.').catch(console.error);
   if (!modlog) return message.reply('`r-log` kanalını bulamıyorum.').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('Kimi Susturacağımı yazmalısın.').catch(console.error);
  if (reason.length < 1) return message.reply('Susturma sebebini yazmalısın.').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
    .setTimestamp()
    .addField('Eylem:', '🛃 Susturma')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('Gerekli izinlere sahip değilim.').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
      guild.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      guild.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  }

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'sustur',
  description: 'İstediğiniz kişiyi  susturur.',
  usage: 'sustur [kullanıcı] [sebep]'
};