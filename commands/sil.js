module.exports = {
  name: 'sil',
  description: "Clear messages!",
 async  execute(message, args, Discord) {
  if(message.member.permissions.has('MANAGE_MESSAGES')){
      if (!args[0]){
        var author = message.author
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#215B8F')
        .addFields(
          {name: '**Kaç Tane Mesaj Silmek İstediğini Yaz!**' , value:`@${author.tag} Tarafından İstendi`}
        )
        .setFooter('...')
        
        message.channel.send(newEmbed)
        return
        
      }

      if(isNaN(args[0])){
        var author = message.author
        const new1Embed = new Discord.MessageEmbed()
        .setColor('#215B8F')
        .addFields(
          {name: '**Bir sayı yazmalısın!**' , value:`@${author.tag} Tarafından İstendi`}
        )
        .setFooter('...')
        
        message.channel.send(new1Embed)
        return


      }

      if(args[0] > 100){
        var author = message.author
        const new2Embed = new Discord.MessageEmbed()
        .setColor('#215B8F')
        .addFields(
          {name: '**100den fazla mesaj silemezsin!**' , value:`@${author.tag} Tarafından İstendi`}
        )
        .setFooter('...')
        
        message.channel.send(new2Embed)
        return
      }
      
      if(args[0] < 1){
        var author = message.author
        const new3Embed = new Discord.MessageEmbed()
        .setColor('#215B8F')
        .addFields(
          {name: '**En az 1 mesaj silmelisin!**' , value:`@${author.tag} Tarafından İstendi`}
        )
        .setFooter('...')
        
        message.channel.send(new3Embed)
        return
      }

      await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
          message.channel.bulkDelete(messages)
  });
}else{
  var author = message.author
  const new4Embed = new Discord.MessageEmbed()
  .setColor('#215B8F')
  .addFields(
    {name: '**Bu Komutu Kullanmaya Yetkin Yok Gereken Yetki** : `Mesajları Yönet`' , value:`@${author.tag} Tarafından İstendi`}
  )
  .setFooter('...')
  
  message.channel.send(new4Embed)

}
}
}