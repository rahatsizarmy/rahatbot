module.exports = member => {
  let guild = member.guild;
  member.send('niye gittin tekrar bekleriz ? Btu eklemek için https://discordapp.com/oauth2/authorize?client_id=411935386407796737&scope=bot&permissions=268839983');
  guild.defaultChannel.send(`${member.user.username} gitti.`);
};
