async function info(bot,msg,varstore,args){
    let embed = varstore.embed,
    userInfo,
    userID,
    usingGuildUser = true,
    userActivity,
    dateFormat,
    joinedDiscord,
    avatarURL,
    username,
    discriminator,
    isBOT,
    status

    args[1] = args[1]?.replace('<@','').replace('!','').replace('>','') //if tagged

    if(args[1] && isNaN(args[1])){
        let temp = varstore.embederror.setDescription('User ID must be a number!(or tag the person if you don\'t know how)')
        msg.channel.send({embeds:[temp]})
        return
    }

    userID = args[1] ? args[1] : msg.author.id

    userInfo = msg.guild?.members.cache.find(m=>m.id == userID)

    if(!userInfo){
        userInfo = await bot.users.fetch(userID)
        usingGuildUser = false
    }

    userActivity = 'Unknown'
    if(userInfo.presence?.activities){
        if(userInfo.presence.activities[0].name == 'Spotify'){
            let spotify = userInfo.presence.activities[0];
            userActivity = `Spotify:\n${spotify.details} by ${spotify.state}`
        }
        else{
            let presence = userInfo.presence.activities[0];
            userActivity = `${presence.type.toLowerCase()} ${presence.name}`
        }
    }

    dateFormat = {
        day:'2-digit',
        month:'short',
        year:'numeric',
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        timeZone:'Asia/Jakarta'
    }

    joinedDiscord = usingGuildUser ? userInfo.user.createdAt : userInfo.createdAt
    joinedDiscord = joinedDiscord.toLocaleString('en-GB',dateFormat) + ' WIB'

    avatarURL = usingGuildUser ? userInfo.user.avatarURL() : userInfo.avatarURL()
    avatarURL = avatarURL.replace('.webp','?size=4096')

    username = usingGuildUser ? userInfo.user.username : userInfo.username

    discriminator = usingGuildUser ? userInfo.user.discriminator : userInfo.discriminator

    isBOT = usingGuildUser ? userInfo.user.bot : userInfo.bot
    isBOT = isBOT.toString()

    status = usingGuildUser ? userInfo.presence ? userInfo.presence.status : 'None' : 'Unknown'

    embed = (embed
        .setColor('#00FF00')
        .setAuthor('USER INFO')
        .setTitle(`Username: ${username}#${discriminator}`)
        .addField('USER ID',userID,true)
        .addField('isBOT',isBOT,true)
        .addField('Status',status,true)
        .addField('Joined Discord',joinedDiscord,true)
        .addField('Activity',userActivity,true)
        .addField('Avatar URL',avatarURL,true)
        .setThumbnail(avatarURL)
        .setFooter(`Requested by ${msg.author.username}#${msg.author.discriminator}`)
        .setTimestamp()
    )

    msg.channel.send({embeds:[embed]})
}

module.exports = {
    name:'userinfo',
    execute:info
}