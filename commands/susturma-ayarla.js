module.exports = {
    name: 'susturma-ayarla',
    description: ";sustur komutuu ayarlar",
    execute(message, args,) {
        if (message.member.permissions.has('ADMINISTRATOR')) {
            if (message.guild.roles.cache.find(role => role.name == "Üye"));
            message.channel.send('Sunucuda Zaten Bu Roller Var Şimdilik `;sustur` yazarak komutu kullanabilirsin.')
            if (message.guild.roles.cache.find(role => role.name == "susturuldu"));
            message.channel.send('Sunucuda Zaten Bu Roller Var Şimdilik `;sustur` yazarak komutu kullanabilirsin.')
            if (message.guild.roles.cache.find(role => role.name == "Üye")) return false;

            message.guild.roles.create({
                data: {
                    name: "Üye",
                    color: "#ff0000",
                    permissions: ["READ_MESSAGE_HISTORY"]
                }
            }).then(role => {
                message.channel.send(`**Rol \`${role.name}\` Oluşturuldu, Bu Rolü Herkese Vermeyi Unutma!**`);
            });
            if (message.guild.roles.cache.find(role => role.name == "susturuldu")) return false;

            message.guild.roles.create({
                data: {
                    name: "susturuldu",
                    color: "#ff0000",
                    permissions: ["VIEW_CHANNEL", "READ_MESSAGE_HISTORY"]
                }
            }).then(role => {
                message.channel.send(`**Rol \`${role.name}\` Oluşturuldu, Bu Roldeki Ayarları her kanal için değiştirmelisin,tüm kanallara izinler \`${role.name}\` ekleyip ordan sadece kanalları görüntüle demeyi unutma!** `);
            });


        } else {
            message.reply('**Bu Komutu Kullanmaya Yetkin Yok, Gereken Yetki** : `Yönetici`')
        }

    }

}