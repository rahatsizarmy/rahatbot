const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setTitle('Komut listesi')
  .addField('Genel Komutlar','rb!ping == pingimi gösterir.\nrb!sunucubilgi == sunucu hakkında blgi verir.\nrb!yardım  ==  Botun Komutlarını Gösterir.\nrb!avatar ==  Etiketledğiniz Kişinin Avatarını Verir.\nrb!bilgi  == Bot Hakkında Bilgi Verir.\nrb!tavsiye == Yapımcıya Tavsiye Gönderirsiniz.')
  .addField('Moderasyon','rb!ban == birini suncudan yasaklar\nrb!kick == birini sunucudan atar.\nrb!temizle == Sohbeti Temizler\nrb!uyar == Bir Kişiyi Uyarırsınız\nrb!duyur == Güzel Bir Duyuru Görünümü Sağlar\nrb!kilitle == İstediğiniz Bir Kanalı Kilitlersiniz.\nrb!unban == (İd) ile bir kişinin yasağını kaldırırsınız')
  .addField('Eğlence','rb!çay-iç == çay içersiniz.\nrb!lahmacun == lahmacun yersiniz.\neb!çekiç == İstediğiniz Kişiye Çekiç Atarsınız.\nrb!tokat == İstediğiniz Birine Osamanlı Tokadı Atarsınız ')
  .addField('Yapımcı','Burasını Güvenlik İçin Gösteremiyorum :D :D')
  .addField('© 2018 Rahatsız Bot|👑Doğan👑#4996 tarfından yapıldı.')
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
