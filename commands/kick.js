module.exports = {
    name: 'kick',
    description:"birini atar",
    execute(message, args, Discord){
        if(message.member.permissions.has('KICK_MEMBERS')){

        const member = message.mentions.users.first();
         
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            
            var author = message.author
            const new1Embed = new Discord.MessageEmbed()
            .setColor('#215B8F')
            .addFields(
              {name: '**Kullanıcı Atıldı**' , value:`@${author.tag} Tarafından İstendi`}
            )
            .setFooter('By LighTra#5975')
            
            message.channel.send(new1Embed)

    
        

        }else{
            var author = message.author
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#215B8F')
            .addFields(
              {name: '**Bu Kullanıcıyı Atamazsın!**' , value:`@${author.tag} Tarafından İstendi`}
            )
            .setFooter('By LighTra#5975')
            
            message.channel.send(newEmbed)
            
        }
    }else {
        var author = message.author
        const new2Embed = new Discord.MessageEmbed()
        .setColor('#215B8F')
        .addFields(
          {name: '**Bu Komutu Kullanmaya Yetkin Yok Gereken Yetki** : `Üyeleri At`' , value:`@${author.tag} Tarafından İstendi`}
        )
        .setFooter('By LighTra#5975')
        
        message.channel.send(new2Embed)
    }
    }
}