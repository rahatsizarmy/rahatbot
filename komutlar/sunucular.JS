const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
    if (message.author.id !== ayarlar.sahip) return message.reply('Yapımcım Sen Değilsin...');
    message.channel.send('KİLİT AÇILDI')
    message.channel.bulkDelete(2);
    message.channel.send(`client.guilds.map(g => g.name)`);
    message.channel.send('**___Toplam Bulunduğum Sunucular___**\n'+ client.guilds.size);
  };
};


       exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 4
      };
      
      exports.help = {
        name: 'sunucular',
        description: 'Kod denemek için kullanılır.',
        usage: 'eval [kod]'
      };