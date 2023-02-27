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
          {name: '`;susturma-aç <üye-ismi>`' , value: '*Seçtiğin üyenin susturmasını kaldırır.*'},
          {name: '`;susturma-ayarla`' , value: '*Eğer sunucunuzda susturma için gerekli düzenlemeeler yoksa kullanabileceğiniz komut*' },
          {name: '`;rapor <üye-ismi> <rapor-kanalı> <rapor-nedeni>`' , value: '*İstediğiniz kanala istdeiğniz kişiyi istediğniz nedenle raporlar*' },      
          )
        .setImage("https://media.giphy.com/media/utJaUUCnBNYwtMJiLu/giphy.gif")
        
        message.channel.send(newEmbed)
    }
}
