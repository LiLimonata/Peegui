module.exports = {
    name: 'destek',
    description:"destek komutu",
    execute(message, args, Discord){
      const newEmbed = new Discord.MessageEmbed()
      .setColor('#215B8F')
      .addFields(
        {name: '**Destek Sunucumuz**', value: 'https://discord.gg/T9FQ8Sn3jH'},
      )
      .setFooter('By LighTra#5975')
      
      message.channel.send(newEmbed)
  }
}
