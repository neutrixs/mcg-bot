module.exports = {
    name:"tmpstats",
    description:"tmp server stats",
    execute(msg,varstore,args,config,bot){
        const https = require('https');
        let embed = varstore.embed;

        if(msg.channel.type == 'DM'){
            msg.channel.send({embeds:[varstore.embednodm]});
            return
        }

        https.get('https://api.truckersmp.com/v2/servers', respon=> {
            let data = '';
            respon.on('data', chunk=>{
                data+=chunk
            })
            respon.on('end',()=>{
                res = JSON.parse(data);
                //all list
                if(!args[1]) {
                    play = 0;
                    totplay = 0;
                    queue = 0;
                    embed = embed
                    .setAuthor(`${bot.user.username}#${bot.user.discriminator}`, `${bot.user.avatarURL()}`)
                    .setTitle('TMP Stats')
                    .setURL('https://truckersmp.com/status')
                    .setFooter(`type ${config.PREFIX}tmpstats [0-${res.response.length-1}] for more information\nRequested by ${msg.member.user.username}#${msg.member.user.discriminator}`, msg.member.user.avatarURL())
                    .setThumbnail('https://images-ext-1.discordapp.net/external/G_PK8zmzCSh-LzJqItmXokDt21tFI09bsLpJXBnzhcs/https/truckersmp.com/assets/img/avatar.png')
                    .setTimestamp();

                    for(var C = 0; C<res.response.length; C++) {
                        let current = res.response[C];
                        embed = embed
                        .addField(
                            `[${C}]${current.game}: ${current.shortname}`,
                            `${current.name}\n`+
                            `${current.players}/${current.maxplayers}\n`+
                            `${current.online == true?'<:online:780997781472411671>':'<:offline:780997812782759939>'}`+
                            `${current.promods == true?'<:promods:780997888288751637>':''}`+
                            `${current.speedlimiter == 1?current.game == 'ETS2'?'<:110eu:780997844144357386>':'<:80us:780998084330651691>':''}`+
                            `${current.carsforplayers == true?':red_car:':''}`+
                            `${current.collisions == true?':boom:':''}`,
                            true
                        );
                        play += current.players;
                        totplay += current.maxplayers;
                        queue += current.queue;
                    }
                    embed = embed
                    .setDescription(`${play}/${totplay} players(${Math.floor(play/totplay*100)}%), ${queue} in queue`)
                    msg.channel.send({embeds:[embed]})
                }
                //specific channel
                if(args[1] && isNaN(args[1]) == false && parseInt(args[1]) < res.response.length && parseInt(args[1])>=0) {
                    let current = res.response[parseInt(args[1])];
                    embed = embed
                    .setAuthor(`${current.game}: ${current.shortname}`)
                    .setTitle(`${current.name}`)
                    .setDescription(`${current.online == true?'<:online:780997781472411671>':'<:offline:780997812782759939>'} Server is ${current.online == true?'online!':'offline!'} ${current.players}/${current.maxplayers} Players(${Math.floor(current.players/current.maxplayers*100)}%) ${current.queue} in queue`)
                    .setFooter(`Requested by ${msg.member.user.username}#${msg.member.user.discriminator}`,msg.member.user.avatarURL())
                    .setTimestamp()
                    .setThumbnail('https://images-ext-1.discordapp.net/external/G_PK8zmzCSh-LzJqItmXokDt21tFI09bsLpJXBnzhcs/https/truckersmp.com/assets/img/avatar.png')
                    .addField(`${current.game == 'ETS2'?'<:110eu:780997844144357386>':'<:80us:780998084330651691>'} Speed limiter`,`${current.speedlimiter == 0?':x: Disabled ':':white_check_mark: Enabled '}${current.speedlimiter == 1?current.game == 'ETS2'?'(60kmh / 110kmh)':'(45mph / 80mph)':''}${current.speedlimiter == 2?'(80kmh / 150kmh)':''}`, false)
                    .addField(':boom: Collisions', `${current.collisions == true?':white_check_mark: Enabled':':x: Disabled'}`,false)
                    .addField(':red_car: Cars for player', `${current.carsforplayers == true?':white_check_mark: Enabled':':x: Disabled'}`,false)
                    .addField(':police_car: Police cars for player', `${current.policecarsforplayers == true?':white_check_mark: Enabled':':x: Disabled'}`,true)
                    .addField(':no_entry_sign: AFK Kick', `${current.afkenabled == true?':white_check_mark: Enabled':':x: Disabled'}`,true)
                    .addField('<:promods:780997888288751637> Promods', `${current.promods == true?':white_check_mark: Promods server':':x: Not Promods server'}`,true)
                    .addField(':partying_face: Event server', `${current.event == true || current.specialEvent == true?':white_check_mark: Event server':':x: Not Event server'}`, true);
                    msg.channel.send({embeds:[embed]})
                }
                if(parseInt(args[1]) >=(res.response.length) || parseInt(args[1]) < 0) {
                    embed = embed
                        .setTitle('Invalid Server!')
                        .setDescription(`Use \`${config.PREFIX}tmpstats [0-${res.response.length-1}]\``)
                        .setColor('#FF0000')
                    msg.channel.send({embeds:[embed]})
                }
            })
        })

    }
}