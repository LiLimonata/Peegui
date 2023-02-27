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
          //{name: '`;meme`' , value: '*Burdurlannden bir meme atar*' },
          {name: '`:bom-oyna`' , value: '*Daha tam çalışmıyor denerseniz problem çıkabilir!*' },
          {name: '`;konuş`' , value: '*Eğer bir kişi sizde engelli ise veya acil ulaşmanız gerekiyorsa kullanın*' },
          {name: '`;server`' , value: '*Yazdığınız minecraft sunucunun bilgilerini atar*' },
        )
        .setImage('https://media.giphy.com/media/utJaUUCnBNYwtMJiLu/giphy.gif')
        
        message.channel.send(newEmbed)
    }
}
