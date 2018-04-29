const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setTitle('Komut listesi')
  .addField('Genel Komutlar','rb!ping == pingimi gösterir.\nrb!sunucubilgi == sunucu hakkında blgi verir.\nrb!yardım  ==  Botun Komutlarını Gösterir.\nrb!avatar ==  Etiketledğiniz Kişinin Avatarını Verir.\nrb!bilgi  == Bot Hakkında Bilgi Verir.')
  .addField('Moderasyon','rb!ban == birini suncudan yasaklar\nrb!kick == birini sunucudan atar.\nrb!temizle == Sohbeti Temizler\nrb!uyar == Bir Kişiyi Uyarırsınız\nrb!duyur == Güzel Bir Duyuru Görünümü Sağlar')
  return message.channel.sendEmbed(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
