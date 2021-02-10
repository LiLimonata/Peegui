const { DiscordAPIError, MessageEmbed } = require('discord.js');
const ms = require('ms');
module.exports = {
    name: 'sustur',
    description: "istediğin kişiyi istediğin kadar sustur!",
    execute(message, args, Discord) {

        if(message.member.permissions.has('ADMINISTRATOR')){
        const target = message.mentions.users.first();
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Üye');

            let muteRole = message.guild.roles.cache.find(role => role.name === 'susturuldu');

            if (mainRole === undefined){
                message.reply('Bu Rol Sizde Yok öncelikle `;susturma-ayarla` yazmalısınız')
                return
            }if (muteRole === undefined){
                message.reply('Bu Rol Sizde Yok öncelikle `;susturma-ayarla` yazmalısınız')
                return
            }
            

            let memberTarget = message.guild.members.cache.get(target.id);


            if (!args[1]) {

                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> Susturuldu!`)
                return

            }

            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> ${ms(ms(args[1]))} Süreliğine Susturuldu!`);

            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));

        } else {
            message.reply('Kullanıcı Bulunamadı')
        }
        }else{
            message.reply('**Bu Komutu Kullanmaya Yetkin Yok Gereken Yetki** : `Yönetici`')
        }
            

    

        }

    }
