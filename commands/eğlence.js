module.exports = {
    name: 'eğlence',
    description:"eğlence komutu",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#215B8F')
        .setTitle('Komutlar')
        .setURL('https://www.youtube.com/channel/UCiJymGtm9kq-Fhuqoin0DiQ')
        .setDescription('*Kullanabileceğin Eğlence Komutları bunlar.*')
        .addFields(
          {name: '`;yt`', value: '*youtube kanalımı atar*'},
          {name: '`;fbi`', value: '*fbi çağırır*'},
          {name: '`;ping`', value: '*pong komutunu geri atar hiçbi amacı yok*'},
          {name: '`;meme`' , value: '*Burdurlannden bir meme atar*' }
        )
        .setFooter('By LighTra#5975')
        
        message.channel.send(newEmbed)
    }
}
