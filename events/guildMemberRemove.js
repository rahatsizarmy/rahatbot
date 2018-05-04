module.exports = member => {
  const channel = member.guild.channels.find('name', 'sohbet');
  if (!channel) return;
  channel.send(`**${member}** **Sunucudan Cikti Seni Ozlicez :wave:**`);
};