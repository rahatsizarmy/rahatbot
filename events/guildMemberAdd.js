module.exports = member => {
  const channel = member.guild.channels.find('name', 'giriş-çıkış');
  if (!channel) return;
  channel.send(`**${member}** **Sunucuya Hosgeldin Keyfine Bak :smile:!**`);
};