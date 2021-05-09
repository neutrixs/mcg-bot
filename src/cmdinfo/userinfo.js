module.exports = {
    name:"userinfo",
    description:"get user info",
    execute(bot,msg,varstore,args){
        var embed = varstore.embed
        var requestedBy = `Requested by ${msg.author.username}#${msg.author.discriminator}`


        async function getnsend(){
            if(args[1]){
                args[1] = args[1].replace('<@','').replace('!','').replace('>','')
                if(isNaN(args[1])){
                    embed = embed
                    .setDescription('User ID must be a number!(or tag the person if you don\'t know how)')
                    .setColor('#FF0000')
                    msg.channel.send(embed)
                    return
                }
                msg.author = bot.users.cache.find(m=>m.id==args[1])
                if(msg.author == undefined){
                    try{
                        msg.author = await bot.users.fetch(args[1])
                    }
                    catch(e){
                        msg.channel.send(varstore.embederror.setDescription(e))
                        return
                    }
                }
            }

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

            .setFooter(requestedBy)
            .setTimestamp()
            msg.channel.send(embed)
        }
        getnsend()
    }
}