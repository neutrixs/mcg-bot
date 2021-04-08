module.exports = {
    'name':'addreactionroles',
    execute(msg,args,varstore,config,bot,db,reactionRoles){
        let invalidFormat = varstore.embederror.setDescription(`Invalid format! see \`${config.PREFIX}help addreactionroles\` for more info`)
        let dataForLater = []
        if(msg.channel.type == 'dm'){
            msg.channel.send(varstore.embednodm)
            return
        }
        
        if(!msg.member.hasPermission('MANAGE_MESSAGES')){
            msg.channel.send(varstore.embednopermission)
            return
        }
        if(msg.content.startsWith(`<@!${bot.user.id}>`)){
            embed = varstore.embed
            .setDescription('Please use prefix instead! this is to prevent any errors')
            .setColor('#FF0000')
            msg.channel.send(embed)
            return
        }
        if(!args[2]){
            msg.channel.send(invalidFormat)
            return
        }
        if(isNaN(args[1])){
            msg.channel.send(invalidFormat)
            return
        }
        

        async function fetchnSend(){
            try{
                fetchThis = await msg.channel.messages.fetch(args[1])
            }
            catch(e){
                msg.channel.send(varstore.embederror.setDescription('```'+e+'```'))
                return
            }

            let actualContent = msg.content
            .replace(config.PREFIX+'addreactionroles'+' ','')
            .replace(args[1]+' ','');
            actualContent = actualContent.replace(/\s+/g, '').split(',')
            reactionsList = Object.fromEntries(fetchThis.reactions.cache)

            if(JSON.stringify(reactionsList) !== '{}'){
                fetchThis.reactions.removeAll()
            }
            if(actualContent.length > 10){
                msg.channel.send(embederror.setDescription('Maximum of 10 reactions are allowed to prevent errors!'))
                return
            }

            for(i=0; i<actualContent.length; i++){
                emoji = (actualContent[i].split('='))[0]
                role = (actualContent[i].split('='))[1]

                if(emoji.includes(':')){
                    emoji = (emoji.split(':'))[2].replace('>','')
                }
                if(role.includes('<@&')){
                    role = role.replace('<@&','').replace('>','')
                }

                emojires = bot.emojis.cache.find(e=>e.id == emoji)
                roleres = msg.guild.roles.cache.find(r=>r.id == role)

                if(emojires == undefined){
                    emojicheck = require('./emoji_check').execute(emoji)
                    if(emojicheck){
                        emojires = emoji
                    }
                    else{
                        msg.channel.send(varstore.embederror.setDescription(`Invalid emoji at ${i+1}`))
                        fetchThis.reactions.removeAll()
                        return
                    }
                }
                if(roleres == undefined){
                    msg.channel.send(varstore.embederror.setDescription(`Invalid role at ${i+1}`))
                    fetchThis.reactions.removeAll()
                    return
                }
                try{
                    fetchThis.react(emojires)
                }
                catch(e){
                    msg.channel.send(varstore.embederror.setDescription('```'+e+'```'))
                    return
                }

                if(!emojires.id){
                    emojires = {
                        name:emojires
                    }
                }
                dataForLater = dataForLater.concat(
                    {
                        emojiID:emojires.id,
                        emojiName:emojires.name,
                        rolesID:roleres.id,
                        guildID:msg.guild.id,
                        channelID:msg.channel.id,
                        messageID:fetchThis.id
                    }
                )
            }
            reactionRoles[fetchThis.id] = dataForLater

            db.collection(bot.user.id).doc('reactionroles').set(
                {
                    reactionRoles:JSON.stringify(reactionRoles)
                }
            )
            msg.delete()
            msg.channel.send(varstore.embed.setDescription('Added!')).then(msg => {
                msg.delete({timeout:2000})
            })
        }
        fetchnSend()
    }
}