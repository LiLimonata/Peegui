module.exports = {
    name: 'bom-oyna',
    description: "bom oynama komutu",
    execute(message, args, Discord) {
        var bom = args[0]

        var targetid = message.member.id

        var author = message.author



        if (!args[0]) {
            message.channel.send('Sayı yazmalısın! Örnek Kullanım:`-bom-oyna 1 , -bom oyna 2`')
            return
        }

        //let filter = msg => {
        //return msg.content.toLowerCase() == message.content.toLowerCase()
        //msg.author == message.author; // check if the author is the same
        //}

        //if (bom2 = args[0]){
        //message.channel.send('Teker teker saymalısın atlama!')
        //return

        //} 






        if (Number.isNaN(+bom) && bom != "bom") {
            message.channel.send('Sayı yazmalısın')
        } else {
            if (args[0] == 5) {
                message.channel.send("oyun bitti 5'in katları olan bir sayıda bom yazman gerekiyodu")
                return
            }
            if (args[0] == 10) {
                message.channel.send("oyun bitti 5'in katları olan bir sayıda bom yazman gerekiyodu")
                return
            }
            if (args[0] == 15) {
                message.channel.send("oyun bitti 5'in katları olan bir sayıda bom yazman gerekiyodu")
                return
            }
            if (args[0] == 20) {
                message.channel.send("oyun bitti 5'in katları olan bir sayıda bom yazman gerekiyodu")
                return
            }
            if (args[0] == 25) {
                message.channel.send("oyun bitti 5'in katları olan bir sayıda bom yazman gerekiyodu")
                return
            }
            if (args[0] == 30) {
                message.channel.send("oyun bitti 5'in katları olan bir sayıda bom yazman gerekiyodu")
                return
            }
            if (args[0] == 35) {
                message.channel.send("oyun bitti 5'in katları olan bir sayıda bom yazman gerekiyodu")
                return
            }
            if (args[0] == 40) {
                message.channel.send("oyun bitti 5'in katları olan bir sayıda bom yazman gerekiyodu")
                return
            }
            if (args[0] == 45) {
                message.channel.send("oyun bitti 5'in katları olan bir sayıda bom yazman gerekiyodu")
                return
            }
            if (args[0] == 50) {
                message.channel.send("oyun bitti 5'in katları olan bir sayıda bom yazman gerekiyodu")
                return
            } if (args[0] == 51) {
                message.channel.send("oyun bitti, en fazla 50 ye kadar gidebilirdin tekrar başlamak için `;bom-oyna 1` yaz!")
                return
            }
            message.channel.send(`Tebrikler, **${args[0]}** sayısını/yazısını doğru yazdın!`)
            var bom123 = 0
            var bom123 = args[0] + 1
            
            
            

        }







    }
}