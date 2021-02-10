module.exports = {
    name: 'yt',
    description:"yt komutu",
    execute(message, args, Discord){
     const newEmbed = new Discord.MessageEmbed()
     .setColor('#215B8F')
     .setTitle('YouTube')
     .setURL('https://www.youtube.com/channel/UCiJymGtm9kq-Fhuqoin0DiQ')
     .addFields(
       {name: 'https://www.youtube.com/channel/UCiJymGtm9kq-Fhuqoin0DiQ', value: '**YouTube Kanalım!**'}
     )
     .setFooter('By LighTra#5975')
     
     message.channel.send(newEmbed)


    }
    
    }
