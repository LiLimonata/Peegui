module.exports = {
    name: 'yardım',
    description:"yardım komutu",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#215B8F')
        .setTitle('Komutlar')
        .setURL('https://www.youtube.com/channel/UCiJymGtm9kq-Fhuqoin0DiQ')
        .setDescription('*Kullanabileceğin Komutlar bunlar.*')
        .addFields(
          {name: ':grinning: `;eğlence`', value: '*Eğlence komutlarını gösterir.*'},
          {name: ':hammer_pick: `;moderatör`', value: '*moderatör komutlarını gösterir.*'},
          
        )
        .setFooter('By LighTra#5975')
        
        message.channel.send(newEmbed)
    }
}
