module.exports = {
    name: 'moderatör',
    description:"moderatör komutu",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#215B8F')
        .setTitle('Moderatör Komutları')
        .setURL('https://www.youtube.com/channel/UCiJymGtm9kq-Fhuqoin0DiQ')
        .setDescription('*Kullanabileceğin moderatör komutları bunlar.')
        .addFields(
          {name: '`;sil <mesaj-sayısı>`', value: '*Silmek istediğin kadar mesajı siler.*'},
          {name: '`;kick <üye-ismi>`' , value: '*Seçtiğin üyeyi atar.*'},
          {name: '`;ban <üye-ismi>`' , value: '*Seçtiğin üyeyi banlar.*'},
          {name: '`;sustur <üye-ismi>`' , value: '*Seçtiğin üyeyi susturur.*'},
          {name: '`;susturma-aç <üye-ismi>`' , value: '*Seçtiğin üyenin susturmasını kaldırır.*'}        
          )
          .setFooter('By LighTra#5975')
        
        message.channel.send(newEmbed)
    }
}
