module.exports = {
    name:"tmptime",
    description:"idk",
    execute(msg,varstore,bot){
        const https = require('https');
        let embed = varstore.embed;
        if(msg.channel.type == 'dm'){
            msg.channel.send(varstore.embednodm)
            return
        }

        https.get('https://api.truckersmp.com/v2/game_time',respon=>{
            let data = '';
            respon.on('data', info=>{
                data+=info;
            })
            respon.on('end',()=>{
                res = JSON.parse(data);
                if(res.error == false) {
                    currenttime = res.game_time-1;
                    currenttime = currenttime % 1440;
                    hour = Math.floor(currenttime / 60);
                    minutes = currenttime % 60;
                    minutes = minutes<10?'0'+minutes.toString():minutes;
                    finalresult = `${hour}:${minutes}`;
                    //embedding
                    embed = embed
                    .setAuthor(`${bot.user.username}#${bot.user.discriminator}`, bot.user.avatarURL())
                    .setTitle(`TMP Time`)
                    .setURL('https://stats.truckersmp.com')
                    .setDescription(`in-game time: **${finalresult}**`)
                    .setFooter(`Requested by ${msg.member.user.username}#${msg.member.user.discriminator}`)
                    .setTimestamp()
                    .setThumbnail('https://truckersmp.com/assets/img/avatar.png');
                    msg.channel.send(embed)
                }
            })
        })
    }
}