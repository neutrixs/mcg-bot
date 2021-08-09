module.exports= {
    name:"tmptraffic",
    description:"tmp traffic",
    execute(msg,varstore,args,bot){
        const https = require('https')
        let embed = varstore.embed;
        if(args[3])return;
        if(msg.channel.type == 'DM'){
            msg.channel.send({embeds:[varstore.embednodm]})
            return
        }
        https.get(`https://api.truckyapp.com/v2/traffic/top?game=${args[1]?args[1]:"ets2"}&server=${args[2]?args[2]:!args[1]?"sim1":args[1]=='ets2'?"sim1":"ussim"}`, res=> {
            let data = '';
            res.on('data',chunk=>{
                data+=chunk;
            })
            res.on('end',()=>{
                res = JSON.parse(data);
                console.log(res)
                if(res.response == 0) {
                    msg.channel.send({embeds:[varstore.embederror.setDescription('wrong game name or server name!')]})
                }
                else{
                    embed = embed
                    .setAuthor(`${bot.user.username}#${bot.user.discriminator}`, bot.user.avatarURL())
                    .setTitle(`${args[1]?args[1].toUpperCase():"ETS2"} ${args[2]?args[2].toUpperCase():!args[1]?"SIM1":args[1]=='ets2'?"SIM1":"USSIM"}`)
                    .setFooter(`Requested by ${msg.member.user.username}#${msg.member.user.discriminator}`, msg.member.user.avatarURL())
                    .setThumbnail('https://truckersmp.com/assets/img/avatar.png')
                    .setTimestamp();

                    for(var i = 0;i<9;i++) {
                        cnt = res.response[i];
                        embed = embed
                        .addField(cnt.name, `Player: ${cnt.players}\nCountry: ${cnt.country}\nSeverity: ${cnt.newSeverity}`, true)
                    }
                    msg.channel.send({embeds:[embed]})
                }
            })
        })
    }
}