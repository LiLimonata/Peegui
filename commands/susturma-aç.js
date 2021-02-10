module.exports = {
    name: 'susturma-aç',
    description:"istediğin kişinin susturmasını aç",
    execute(message, args){
        if(message.member.permissions.has('ADMINISTRATOR')){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Üye');
            if(mainRole === undefined){
                message.reply('Bu Rol Şmdilik Yok ;susturma-ayarla yazmayı dene !')
                return
            }
            let muteRole = message.guild.roles.cache.find(role => role.name === 'susturuldu');
            if(muteRole === undefined){
                message.reply('Bu Rol Şmdilik Yok ;susturma-ayarla yazmayı dene !')
                return
            }

            let memberTarget= message.guild.members.cache.get(target.id);


            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);

            message.channel.send(`<@${memberTarget.user.id}>'nın susturması açıldı!`)

        } else{
            message.reply('Kullanıcı Bulunamadı')
        }
        }   
    }
}