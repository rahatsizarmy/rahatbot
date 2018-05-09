const Discord = require('discord.js');

exports.run = (client, message, args, tools) => {

  let pages = ['[❯  Sistemler  \n\ngiriş-çıkış == Adlı bir kanal oluşturursanız giren ve çıkan kişileri orada sayar. \n[Davet Linkim](https://discordapp.com/oauth2/authorize?client_id=411935386407796737&scope=bot&permissions=268839983)  ','❯  Genel Komutlar\n\nrb!ping == pingimi gösterir.\nrb!spp == Sunucu ikonunu atar.\nrb!sunucubilgi == sunucu hakkında blgi verir.\nrb!yardım  ==  Botun Komutlarını Gösterir.\nrb!avatar ==  Etiketledğiniz Kişinin Avatarını Verir.\nrb!bilgi  == Bot Hakkında Bilgi Verir.\nrb!tavsiye == Yapımcıya Tavsiye Gönderirsiniz.','❯  Moderasyon\n\nrb!ban == birini suncudan yasaklar\nrb!kick == birini sunucudan atar.\nrb!rbul == Oynuyor kısmında reklam yapanları bulur.\nrb!temizle == Sohbeti Temizler\nrb!uyar == Bir Kişiyi Uyarırsınız\nrb!sustur == Bir kişiyi susturusun.\nrb!duyur == Güzel Bir Duyuru Görünümü Sağlar\nrb!kilitle == İstediğiniz Bir Kanalı Kilitlersiniz.\nrb!unban == (İd) ile bir kişinin yasağını kaldırırsınız.\nrb!anket == Anket Açar.\nrb!kanal-aç == Metin Kanalı Açarsınız.\nrb!dmat == Etiketlediğiniz kişiye seçtiğiniz mesajı gönderir.','❯  Eğlence\n\nrb!çay-iç == çay içersiniz.\nrb!1vs1 == Seçtiğiniz 2 kişiyi savaştırırsınız.\nrb!mcs == İstediğiniz birinin minecraft skinini gösterir.\nrb!lahmacun == lahmacun yersiniz.\nrb!çekiç == İstediğiniz Kişiye Çekiç Atarsınız.\nrb!tokat == İstediğiniz Birine Osamanlı Tokadı Atarsınız.\nrb!tkm == Taş Kağıt Makas Oynarsınız.\nrb!yazıtura == Yazı Turaz Atarsınız.\nrb!günaydın == Günaydın Gifi Atar.','❯  Matematik Komutları\n\nrb!topla == Bot sizin için toplama işlemi yapar.\nrb!çıkar == Bot sizin için çıkarma yapar.\nrb!çarp ==Bot sizin için çarpma yapar.\nrb!böl == Bot sizin için bölme yapar.','Yapımcı Komutları \n\nBurasını Güvenlik İçin Gösteremiyorum :D :D © 2018 Rahatsız Bot|👑Doğan👑#4996 tarfından yapıldı.']; // Sayfalar
  let page = 1; // Sayfa 1

  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(message.guild.name,client.user.avatarURL)
  .setFooter(`© 2018 Rahatsız Bot|Sayfa ${page} / ${pages.length}`,client.user.avatarURL)
  .setThumbnail(client.user.avatarURL)
  .setDescription(pages[page-1])
  .setAuthor(message.guild.name,client.user.avatarURL)
message.channel.send(embed).then(msg => {

    msg.react('⬅').then(r => {
      msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`© 2018 Rahatsız Bot|Sayfa ${page} / ${pages.length}`,client.user.avatarURL)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`© 2018 Rahatsız Bot|Sayfa ${page} / ${pages.length}`,client.user.avatarURL)
        msg.edit(embed)
      })

    })
  })
};


exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['y'],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir.',
usage: 'yardım2'
};