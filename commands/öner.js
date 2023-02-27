module.exports = {
    name: 'öner',
    description: "komut öner! ",
    execute(message, args,Discord) {

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#215B8F')
        .addFields(
          {value: 'Öneriniz Gönderilmiştir :u6307: '},
        )
        .setImage('https://media.giphy.com/media/utJaUUCnBNYwtMJiLu/giphy.gif')
        
        message.channel.send(newEmbed)
    }   
}