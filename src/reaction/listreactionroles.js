module.exports = {
    name:'listreactionroles',
    execute(msg,varstore,reactionRoles,Permissions){
        if(msg.channel.type == 'dm'){
            msg.channel.send(varstore.embednodm)
            return
        }
        if(!msg.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)){
            msg.channel.send(varstore.embednopermission)
            return
        }
        embed = varstore.embed

        var i=0
        reactionRolesInCurrentServer = false
        for(var reaction in reactionRoles){
            reaction = reactionRoles[reaction]
            if(reaction[0].guildID == msg.guild.id){
                reactionRolesInCurrentServer = true
                embed = embed
                .addField(
                    i.toString()+':',
                    `[click here!](https://discord.com/channels/${reaction[0].guildID}/${reaction[0].channelID}/${reaction[0].messageID})`,
                    false
                )
            }
            i++
        }
        if(reactionRolesInCurrentServer){
            embed = embed.setTitle('List of reaction roles in this server:')
        }
        else{
            embed = embed.setTitle('There\'s no reaction roles in this server!')
        }
        msg.channel.send({embeds:[embed]})
    }
}