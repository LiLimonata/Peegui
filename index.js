const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = ';';

const fs = require('fs');

const Levels = require('discord-xp')

const mongoose = require('mongoose')

require('dotenv').config();


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}




client.once('ready', () => {
    console.log('Peegui Bot is online!');
    client.user.setActivity(";yardım")
});



-
    client.on('message', async message => {


        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        const randomXp = Math.floor(Math.random() * 9) + 1;
        const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
        if (hasLeveledUp) {
            const user = await Levels.fetch(message.author.id, message.guild.id);
            const newEmbed = new Discord.MessageEmbed()
            var author = message.author
                .setColor('#215B8F')
                .setURL('https://www.youtube.com/channel/UCiJymGtm9kq-Fhuqoin0DiQ')
                .setDescription('*Kullanabileceğin Komutlar bunlar.*')
                .addFields(
                    { name: ` @${author}'ın leveli artık **${user.level}**`, value: '...' },

                )

            message.channel.send(newEmbed)
        }



        if (command === 'ping') {
            client.commands.get('ping').execute(message, args);
        } else if (command == 'yt') {
            client.commands.get('yt').execute(message, args, Discord);
        } else if (command == 'yardım') {
            client.commands.get('yardım').execute(message, args, Discord)
        } else if (command == 'kayıt-ol') {
            client.commands.get('kayıt-ol').execute(message, args)
        } else if (command == 'fbi') {
            client.commands.get('fbi').execute(message, args)
        } else if (command == 'sil') {
            client.commands.get('sil').execute(message, args, Discord)
        } else if (command == 'eğlence') {
            client.commands.get('eğlence').execute(message, args, Discord)
        } else if (command == 'moderatör') {
            client.commands.get('moderatör').execute(message, args, Discord)
        } else if (command == 'kick') {
            client.commands.get('kick').execute(message, args, Discord)
        } else if (command == 'ban') {
            client.commands.get('ban').execute(message, args, Discord)
        } else if (command == 'sustur') {
            client.commands.get('sustur').execute(message, args, Discord)
        } else if (command == 'susturma-aç') {
            client.commands.get('susturma-aç').execute(message, args, Discord)
        } else if (command == 'susturma-ayarla') {
            client.commands.get('susturma-ayarla').execute(message, args, Discord)
        } else if (command == 'meme') {
            client.commands.get('meme').execute(message, args, Discord)
        } else if (command == 'destek') {
            client.commands.get('destek').execute(message, args, Discord)
        } else if (command == 'server') {
            client.commands.get('server').execute(client, message, args, Discord)
        } else if (command == 'oynat') {
            client.commands.get('oynat').execute(message, args, Discord)
        } else if (command == 'dc') {
            client.commands.get('dc').execute(message, args, Discord)
        } else if (command == 'kayıt') {
            client.commands.get('kayıt').execute(client, message, args)
        } else if (command == 'kayıt-oynat') {
            client.commands.get('kayıt-oynat').execute(client, message, args)
        } else if (command === "rank-liste") {
            const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5);
            if (rawLeaderboard.length < 1) return reply("Daha tabloda hiçkimseler yok. ");

            const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard);

            const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}`);
            const lb1 = leaderboard.map(e => `\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`)
            const newEmbed = new Discord.MessageEmbed()

                .setColor('#215B8F')
                .setTitle('Rank Listesi')
                .setURL('https://www.youtube.com/channel/UCiJymGtm9kq-Fhuqoin0DiQ')
                .addFields(
                    { name: lb, lb1, value: '...' },
                )


            message.channel.send(newEmbed)
        } else if (command === "rank") {
            const user = await Levels.fetch(message.author.id, message.guild.id);
            const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5);
            const leaderboard1 = await Levels.computeLeaderboard(client, rawLeaderboard);
            const lb2 = await leaderboard1.map(e => `\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`)
            var author = message.author
            const newEmbed = new Discord.MessageEmbed()

                .setColor('#215B8F')
                .setTitle(`${author.tag}`)
                .addFields(
                    { name: `Level:`, value: ` ${user.level}` },
                    { name: 'XP:', value: `${user.xp}` }
                )

            message.channel.send(newEmbed)
        } else if (command == 'rapor') {
            client.commands.get('rapor').execute(message, args, Discord)
        } else if (command == 'bom-oyna'){
            client.commands.get('bom-oyna').execute(message, args, Discord)
        } else if (command == 'konuş'){
            client.commands.get('konuş').execute(message, args, Discord)
        } else if (command == 'uyar'){
            client.commands.get('uyar').execute(message, args, Discord)
        } else if (command == 'öner'){
            client.commands.get('öner').execute(message, args, Discord)
        }









    });


Levels.setURL(process.env.MONGO_SRV)

client.login(process.env.DISCORD_TOKEN)


