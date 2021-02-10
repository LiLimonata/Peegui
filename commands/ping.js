module.exports = {
    name: 'ping',
    description:"ping komutu",
    execute(message, args){
        message.reply('pong!');
    }
}