const ytdl = require('ytdl-core')
const ytSearch = require('yt-search');
const { query } = require('minecraft-server-util');
module.exports = {
    name: 'oynat',
    description: 'şarkı oynatır',
    async execute(message, args, Discord){
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.reply('Bu komutu kullanabilmek için bir ses kanalında olmalısın');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if(!permissions.has('CONNECT')) return message.reply('Bu komutu kullanmak için yetkin yok. Gereken Yetki `Bağlan`')
        if(!permissions.has('SPEAK')) return message.reply('Bu komutu kullanmak için yetkin yok. Gereken Yetki `Konuş`')
        if(!args.length) return message.reply('Hangi şarkıyı/videoyu çalmak istediğini yazmayı unutmuşsun!')


        const connection = await voiceChannel.join();

        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);

        return(videoResult.videos.length > 1) ? videoResult.videos[0] : null;

        }

        const video = await videoFinder(args.join(' '));

        if(video){
            const stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0,  volume: 1})
            .on('finish' , () =>{
                voiceChannel.leave();


            });

            await message.reply(`:thumbsup: ***${video.title}*** Oynatılıyor.`)

            } else{
                message.reply('Video Bulunamadı :face_with_monocle: ')
            }
        
        }
    }