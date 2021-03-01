module.exports = {
    name:"userinfo",
    description:"get user info",
    execute(bot,msg,varstore,args){
        var embed = varstore.embed

        if(!args[1]){

            //activity
            useractivity = 'None';
            if(msg.author.presence.activities.toString() !== ''){
                if(msg.author.presence.activities[0].name == 'Spotify'){
                    spotify = msg.author.presence.activities[0];
                    useractivity = `Spotify:\n${spotify.details} by ${spotify.state}`
                }
                else{
                    presence = msg.author.presence.activities[0];
                    useractivity = `${presence.type.toLowerCase()} ${presence.name}`
                }
            }

            //joined discord
            dateformat = {
                day:'2-digit',
                month:'short',
                year:'numeric',
                hour:'2-digit',
                minute:'2-digit',
                second:'2-digit',
                timeZone:'Asia/Jakarta'
            }
            joinedDiscord = msg.author.createdAt.toLocaleString('en-GB',dateformat)
            joinedDiscord = joinedDiscord+' WIB'

            //avatar
            useravatar = msg.author.avatarURL().toString()
            useravatar = useravatar.replace('.webp','?size=4096')

            embed = embed
            .setColor('#00FF00')
            .setAuthor('USER INFO')
            .setTitle(`Username: ${msg.author.username}#${msg.author.discriminator}`)
            .addField('User ID',msg.author.id,true)
            .addField('isBOT',msg.author.bot,true)
            .addField('Status',msg.author.presence.status,true)
            .addField('Joined Discord',joinedDiscord,true)
            .addField('Activity',useractivity,true)

            .addField('Avatar URL',useravatar,false)
            .setThumbnail(useravatar)

            .setFooter(`Requested by ${msg.author.username}#${msg.author.discriminator}`)
            .setTimestamp()
            msg.channel.send(embed)
        }
        else{
            args[1] = args[1].replace('<@!','').replace('>','').replace('<@','')
            if(isNaN(args[1]) == true){
                embed = embed
                .setDescription('User ID must be a number!(or tag the person if you don\'t know how)')
                .setColor('#FF0000')
                msg.channel.send(embed)
            }
            else{
                async function fetchuser(){
                    try{
                        user = await bot.users.fetch(args[1],true,true)

                        //joined discord
                        dateformat = {
                            day:'2-digit',
                            month:'short',
                            year:'numeric',
                            hour:'2-digit',
                            minute:'2-digit',
                            second:'2-digit',
                            timeZone:'Asia/Jakarta'
                        }
                        //see https://discord.com/developers/docs/reference for reference
                        epoch = 1420070400000
                        joinedDiscord = parseInt(user.id)
                        joinedDiscord = joinedDiscord.toString(2)
                        joinedDiscord = '0'.repeat(64-joinedDiscord.length)+joinedDiscord
                        joinedDiscord = joinedDiscord.substr(0,42)
                        joinedDiscord = parseInt(joinedDiscord,2) + epoch


                        joinedDiscord = new Date(joinedDiscord).toLocaleString('en-GB',dateformat)
                        joinedDiscord = joinedDiscord+' WIB'

                        //avatar
                        useravatar = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}?size=4096`

                        embed = embed
                        .setColor('#00FF00')
                        .setAuthor('USER INFO')
                        .setTitle(`Username: ${user.username}#${user.discriminator}`)
                        .addField('User ID',user.id,true)
                        .addField('isBOT',user.bot,true)
                        .addField('Status','*this will be added later(maybe\nN E V E R)*',true)
                        .addField('Joined Discord',joinedDiscord,true)
                        .addField('Activity','*this will be added later(maybe\nN E V E R)*',true)

                        .addField('Avatar URL',useravatar,false)
                        .setThumbnail(useravatar)

                        .setFooter(`Requested by ${msg.author.username}#${msg.author.discriminator}`)
                        .setTimestamp()

                        msg.channel.send(embed)
                    }
                    catch(e){
                        msg.channel.send(varstore.embederror.setDescription(`\`\`\`${e}\`\`\``))
                    }

                }
                fetchuser()
            }
        }
    }
}