module.exports = member => {
    let username = member.user.username;
    member.send('Hoş geldin **' + username + '** Dc adresimize gelmeyi unutma:https://discord.gg/XUG4g Botu Eklemek İçin: https://discordapp.com/oauth2/authorize?client_id=411935386407796737&scope=bot&permissions=268839983 !');
    member.guild.defaultChannel.send('hg '+username+'');
};
