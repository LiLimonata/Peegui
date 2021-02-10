module.exports = {
    name: 'kayıt-ol',
    description:"kayıt olma komutu",
    execute(message, args){


        let role = message.guild.roles.cache.find(r => r.name === 'kayıtlı-uye');

    if(message.member.roles.cache.some(r => r.name === 'kayıtlı-uye')){
        message.reply('Sen zaten kayıtlısın ve özel odalara erişim var.');


    } else {
        message.reply('Tebrikler başarıyla kayıt oldun, artık özel odalara erişimin var.');
        message.member.roles.add(role).catch(console.error);
    }

    }
}
