module.exports = {
    name: 'konuş',
    description: "Biri ile dm den engelliysen konuşma komutu",
    async execute(message, args, Discord) {

        const abc = 1
        let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);


        if (!user) {
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#215B8F')
                .setTitle('Kim ile Konuştuğunu yazmayı unuttun `Örnek Kullanım: ;konuş **@abcd#00001** naber`')
                .setFooter('Konuşmaların hiçbir şekilde bizle paylaşılmaz bot sadece mesajları atar!')
            message.channel.send(newEmbed)
            return
        }
        if (!args[1]) {
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#215B8F')
                .setTitle('Mesajını yazmayı unuttun `Örnek Kullanım: ;konuş *@abcd#00001 **naber**`')
                .setFooter('Konuşmaların hiçbir şekilde bizle paylaşılmaz bot sadece mesajları atar!')
            message.channel.send(newEmbed)
            return
        }

        var sendrr = args[0].id
        var authr = message.author
        var messgg = args[1 < 100]

        await message.channel.messages.fetch({ limit: 1 }).then(messages => {
            message.channel.bulkDelete(messages)
            message.author.send(`Mesajınız ${args[0]} kişisine gönderildi :tada:`);
            message.author.send('Bu komut sohbet komutu değildir eğer önemli birşey olduysa ve o kişi sizde engelliyse veya mesaj atamıyorsanız bu komutu kullanmalısınız')

            var mesaj = args.slice(1).join(" ")

            user.user
        .send(`${user} Kişisinden bir mesaj var. Mesajın içeriği: "${mesaj}"`)
        .send('Eğer size mesaj gelmesini istemiyorsanız botu engelleyebilirsiniz. Bu komut sohbet komutu değildir eğer önemli birşey olduysa ve o kişi sizde engelliyse veya yazı yazamıyorsanız bu komutu kullanmalısınız')
        .catch(() => message.author.send(`${user} Kişisine mesaj atılamadı, ya beni engelledi yada özel mesajları kabul etmiyor.`))
        
//          if (!args.slice(1).join(" "))
  //        user.user
    //        .send((`${args[0]} Kişisinden bir mesajın var! Mesaj içeriği:"${args.slice(1).join}"`))
        })



    
    }
}
