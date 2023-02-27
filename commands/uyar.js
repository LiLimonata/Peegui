module.exports = {
    name: 'uyar',
    description: "uyarma komutu",
    execute(message, args, Discord){
        const GuıldId = message.guild.id
        const msgId = message.member.id




        let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);

        var author = message.author

        var mesaj = args.slice(1).join(" ")

        if(!user){
            message.reply('Kimi uyaracağını yazmayı unuttun!')       
        }
            
        if(!args[1]){
            message.reply('Uyarma nedenini yazmadın')
            return
        }

        const profileModel = require("../models/profileSchema");

        module.exports = async (client, discord, member) => {
            let profile = await profileModel.create({
                userID: atan.id,
                serverID: member.guild.id,
                warnTimes: 0
        });
        profile.save();
        }; 
        
        user.user
            .send(`${author} Tarafından uyarıldın' uyarılma nedenin:"${mesaj}"`)

        

    }

}