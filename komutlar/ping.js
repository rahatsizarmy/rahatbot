const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.reply(':point_right: Pong! **' + client.ping + '** ms');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: ['ping', 'p',]
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};
