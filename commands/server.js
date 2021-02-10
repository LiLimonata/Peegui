const util = require('minecraft-server-util');

module.exports = {
    name: 'server',
    description: 'server durumu',
    execute(client, message, args, Discord) {
        if (!args[0]) {
            var author = message.author
            const new1Embed = new Discord.MessageEmbed()
                .setColor('#215B8F')
                .addFields(
                    { name: 'Lütfen Bir Port girin `Örnek Kullanım: ;server mc.hypixel.net **25565**`', value: `@${author.tag} Tarafından İstendi` }
                )
                .setFooter('By LighTra#5975')

            message.channel.send(new1Embed)
            return
        }
        if (!args[1]) {
            var author = message.author
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#215B8F')
                .addFields(
                    { name:'Lütfen Bir server adresi girin! `Örnek Kullanım: ;server **mc.hypixel.net** 25565`', value: `@${author.tag} Tarafından İstendi` }
                )
                .setFooter('By LighTra#5975')

            message.channel.send(newEmbed)



            return
        }

        util.status(args[0], { port: parseInt(args[1]) }).then((response) => {
            console.log(response);
            const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Minecraft Server Durumu')
                .addFields(
                    { name: 'Server IP', value: response.host },
                    { name: 'Çevrimiçi Oyuncular', value: response.onlinePlayers },
                    { name: 'Maksimum Oyuncular', value: response.maxPlayers },
                    { name: 'Versiyon', value: response.version }
                )
                .setFooter('By LighTra#5975');

            message.channel.send(embed);
        })
    }
}