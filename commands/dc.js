module.exports = {
    name: 'dc',
    description: 'vc den çıkar',
    async execute(message, args, Discord) {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.reply('Müziği durdurabilmek için bir ses kanalında olmalısın!')
        await voiceChannel.leave();
        await message.reply(':thumbsup: Ses kanalından çıkılıyor!')



    }
}