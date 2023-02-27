module.exports = {
    name: 'ban',
    description:"birini banalar",
    execute(message, args, Discord){

        if(message.member.permissions.has('BAN_MEMBERS')){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            const newEmbed = new Discord.MessageEmbed()
            var author = message.author
            .setColor('#215B8F')
            .addFields(
              {name: '**Kullanıcı Banlandı**' , value:`@${author.tag} Tarafından İstendi`},
            )
            .setFooter('...')
            
            message.channel.send(newEmbed)

        }else{
            var author = message.author
            const new1Embed = new Discord.MessageEmbed()
            .setColor('#215B8F')
            .addFields(
              {name: '**Bu Kullanıcıyı Banlayamazsın**' , value:`@${author.tag} Tarafından İstendi`}
            )
            .setFooter('...')
            
            message.channel.send(new1Embed)
        }
    }else{
    var author = message.author
    const new2Embed = new Discord.MessageEmbed()
    .setColor('#215B8F')
    .addFields(
      {name: '**Bu Komutu Kullanmaya Yetkin Yok Gereken Yetki** : `Üyeleri Engelle`' , value:`@${author.tag} Tarafından İstendi`},
    )
    .setFooter('...')
    
    message.channel.send(new2Embed)
    }
    }
}