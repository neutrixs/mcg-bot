module.exports = {
    name:'deletereactionroles',
    execute(msg,args,varstore,config,bot,db,reactionRoles,Permissions){
        let invalidFormat = varstore.embederror.setDescription(`Invalid format! see \`${config.PREFIX}help deletereactionroles\` for more info`)
        if(msg.channel.type == 'DM'){
            msg.channel.send({embeds:[varstore.embednodm]})
            return
        }
        
        if(!msg.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)){
            msg.channel.send({embeds:[varstore.embednopermission]})
            return
        }
        if(!args[1]){
            msg.channel.send({embeds:[invalidFormat]})
            return
        }
        if(isNaN(args[1])){
            msg.channel.send({embeds:[invalidFormat]})
            return
        }
        args[1] = parseInt(args[1])

        if(args[1]<0 || args[1]>=Object.keys(reactionRoles).length){
            msg.channel.send({embeds:[varstore.embederror.setDescription('Invalid ID!')]})
            return
        }

        removeThis = Object.keys(reactionRoles)[args[1]]
        removeThis = reactionRoles[removeThis]
        if(removeThis[0].guildID !== msg.guild.id){
            msg.channel.send({embeds:[varstore.embederror.setDescription('Invalid ID!')]})
            return
        }

        delete reactionRoles[Object.keys(reactionRoles)[args[1]]]
        db.collection(bot.user.id).doc('reactionroles').set(
            {
                reactionRoles: reactionRoles
            }
        )
        
        msg.delete()
        msg.channel.send({embeds:[varstore.embed.setDescription('Deleted!')]}).then(msg => {
            msg.delete({timeout:2000})
        })

        channel = msg.guild.channels.cache.find(c=>c.id == removeThis[0].channelID)
        if(channel == undefined) return
        message = channel.messages.cache.find(m=>m.id == removeThis[0].messageID)
        if(message == undefined) return

        message.reactions.removeAll()
    }
}