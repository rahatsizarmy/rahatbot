const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let twitchtitle = args.slice(0).join(' ');
	if (twitchtitle.length < 1) return message.reply('Yayın için herhangi bir başlık yazmalısın.');
  message.delete();
  client.user.setStatus("");
  client.user.setGame(`${twitchtitle}`, 'https://www.twitch.tv/doganmuslu');
  message.channel.send(`:white_check_mark: Twitch basligi: **${twitchtitle}** olarak deyiştirildi.`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yayin+', 'twitch-on', 'yayin-ac', 'yayın'],
  permLevel: 4
};

exports.help = {
  name: 'yayin-yap',
  description: 'Botun yayin basligini gösterir.',
  usage: 'yayin-yap <twitch basligi>'
};
