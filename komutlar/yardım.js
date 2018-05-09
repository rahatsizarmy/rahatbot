const Discord = require('discord.js');

exports.run = (client, message, args, tools) => {

  let pages = ['[❯  Genel Komutlar](https://discord.gg/yakinda)\n\n[rb!emojiler](https://discord.gg/yakinda)  •  Sunucunun emojilerini gösterir.\n[rb!tavsiye](https://discord.gg/yakinda)  •  Yapımcıya tavsiye yollarsınız.\n[rb!yardım](https://discord.gg/yakinda)  •  Botun Komutlarını Gösterir.\n[rb!avatar](https://discord.gg/yakinda) •  Etiketledğiniz Kişinin Avatarını Verir.\n[rb!sunucubilgi](https://discord.gg/yakinda)  •  Sunucu Hakkında Bilgi Verir.\n[rb!ping](https://discord.gg/yakinda) • Botun Pingini Gösterir.\n[rb!bilgi](https://discord.gg/yakinda)  • Bot Hakkında Bilgi Verir.\n[rb!kullanıcıbilgi](https://discordapp.gg/yakinda) • Etiketlene kişinin hakkında bilgi verir.\n[rb!avatar](https://discord.gg/yakinda)  • Etiketlediğiniz Kullanıcının Avatarını Verir.\n[rb!istatistik](https://discord.gg/yakinda) • Botun istatistiklerini Göstir.\n[rb!davet](https://discord.gg/yakinda)  •   Botun Davet Linkini Atar.','[❯  Sitemlerimiz](https://discord.gg/yakinda)\n\n**❯ \n**❯ _r-log Sistemi_**\n[r-log](https://discord.gg/yakinda) adında bir kanal yeterli. \n**❯ _Giriş-Çıkış Sistemi_**\n[giriş-çıkış](https://discord.gg/yakinda) adında bir kanal yeterli.','[❯  Eğlence Komutları](https://discord.gg/yakinda)\n\n [rb!1vs1](https://discord.gg/yakinda) •  Seçtiğiniz 2 kişiyi savaştırırsınız.\n[rb!tokat](https://discord.gg/yakinda) •  İstediğiniz kişiye tokat atar.\n[rb!aletim](https://discord.gg/yakinda) •  Aletinizin kaç cm olduğunu ölçer.\n[rb!sor](https://discord.gg/yakinda) •  Bota Sorular Sorarsınız.\n[rb!tkm](https://discord.gg/yakinda) •  Bot İle Taş-Kağıt-Makas Oynarsınız.\n[rb!günaydın](https://discord.gg/yakinda)  •  Günaydın Gifi Atar.\n[rb!yaz](https://discord.gg/yakinda)  •  Bota Yazı Yazdırırsınız.','[❯  Moderatör Komutları](https://discord.gg/yakinda)\n\n[rb!kurulum](https://discord.gg/yakinda)  •  `r-log`,`giriş-çıkış`  adlarında kanal açar.\n[rb!ban](https://discord.gg/yakinda) • Birini Sunucudan Yasaklar.\n[rb!unban](https://discord.gg/yakinda) •  (İD ile)Birinin Yasağını Açar.\n[rb!kick](https://discord.gg/yakinda) •   Birini Sunucudan Atar.\n[rb!sil](https://discord.gg/yakinda) •  Belirtilen Sayı Kadar Mesaj Siler.\n[rb!uyar](https://discord.gg/yakinda)  • Belirtin kişiyi belirtilen sebeble özelden uyarır.\n[rb!sustur](https://discord.gg/yakinda) • Belirtilen Kişiyi `@Susturulmuş` Rolü Verir.\n[rb!duyur](https://discord.gg/yakinda) •  Güzel Bir Duyuru Görünmü Sağlar.\n[rb!anket](https://discord.gg/yakinda) • Anket açarsınız.\n[rb!rbul](https://discord.gg/yakinda) • Sunucuda Reklam Yapanları Bulur.','[❯  Matamatik Komutları](https://discord.gg/yakinda) \n\n [rb!topla](https://discord.gg/yakinda)  • Bot Sizin İçin Toplama Yapar.\n [rb!çıkar](https://discord.gg/yakinda)  • Bot Sizin İçin Çıkarma Yapar.\n[rb!çarp](https://discord.gg/yakinda)  • Bot Sizin İçin Çarpma Yapar.\n[rb!böl](https://discord.gg/yakinda)  • Bot Sizin İçin Bölme Yapar.','[❯  Admin Komutları](https://discord.gg/yakinda) \n\n [rb!on](https://discord.gg/yakinda) • Botun yayıncı modunu istediğiniz şekilde değiştirir.\n[rb!off](https://discord.gg/yakinda) • Botun yayıncı modunu eski haline döndürür.\n[rb!ayrıl](https://discord.gg/yakinda) • Belirtilen sunucudan botu çıkartır.\n[rb!eval](https://discord.gg/yakinda) • JS kodu dener.\n[rb!unload](https://discord.gg/yakinda) • Bir komutu devre dışıbırakır.\n[rb!load](https://discord.gg/yakinda) •  Devredışı bir komutu yeniden başlatır.\n[rb!reboot](https://discord.gg/yakinda) •  Botu yenidenbaşlatır.\n[rb!reload](https://discord.gg/yakinda) •  Bir komutu yeniden başlatır.\n[rb!sunucular](https://discord.gg/yakinda) • Botun bulunduğu sunucuları gösterir. ']; // Sayfalar
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
aliases: ['h', 'halp', 'help', 'y'],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir.',
usage: 'yardım'
};
