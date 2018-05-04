module.exports = member => {
  const channel = member.guild.channels.find('name', 'rgelen-giden');
  if (!channel) return;
  channel.send(`**${member}** **Sunucuya Hosgeldin Keyfine Bak :smile:!**`);
};