    
const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  let guild = message.guild
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Kimin Avatarını İstediğini Yazmalısını').catch(console.error);
        const embed = new Discord.RichEmbed()

        .setAuthor(message.author.username, message.author.avatarURL)

        .setImage(user.avatarURL)

            .setColor(0x97ffff)
        
        return message.channel.sendEmbed(embed)
    
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['avatar'],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Avatarınızı gösterir',
  usage: 'avatar'
};

