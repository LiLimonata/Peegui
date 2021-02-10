
const fs = require("fs");

module.exports = {
    name: 'kayıt-oynat',
    description: 'kayıtı oynatır',
    async execute(client, message, args) {

        const voicechannel = message.member.voice.channel;
        if (!voicechannel) return message.channel.send("Önce bir ses kanalına katıl!");

        if (!fs.existsSync(`./recorded-${message.author.id}.pcm`)) return message.channel.send("Sesin kaydedilemedi, tekrar dene!");

        const connection = await message.member.voice.channel.join();
        const stream = fs.createReadStream(`./recorded-${message.author.id}.pcm`);

        const dispatcher = connection.play(stream, {
            type: "converted"
        });

        dispatcher.on("finish", () => {
            message.member.voice.channel.leave();
            return message.channel.send("Kaydedilen dosyayı oynatmayı bitirdim!");
        })
    }
}

