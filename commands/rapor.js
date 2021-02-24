module.exports = {
    name: 'rapor',
    description: "rapor ",
    execute(message, args,Discord) {
        if (!args[0]){
            message.reply('Hangi Kullanıcıyı Raporlayacağını seçmelisin Örnek Kullanım: `;rapor **@kullanıcı#0000** kurallara uymadı #yazı-kanalı`')
            return
        } if(args[0] === undefined){
            message.reply('Kullanıcı Bulunamadı Örnek Kullanım: `;rapor @kullanıcı#0000 kurallara uymadı #yazı-kanalı`')
            return
        } if (!args[1]){
            message.reply('Bir İnsannı sebepsiz bir yere neden rapor edersin ki? Anlamsız. Örnek Kullanım: `;rapor @kullanıcı#0000 **kurallara uymadı** #yazı-kanalı`')
            return
        } if (!args[2]){
            message.reply('Rapor özetini hangi kanala atmalıyım? Örnek Kullanım: `;rapor @kullanıcı#0000 kurallara uymadı **#yazı-kanalı**`')
            return
        }
        message.channel.send(`${args[0]} Kullanıcısı **${args[1]}** nedeniyle rapor edilmiştir!`)
    }
}