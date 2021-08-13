module.exports = {
    name:"dcr",
    execute(msg,config,varstore,bot,db,customcommand,Permissions){
        var invalidIDNumber = varstore.embed
            .setDescription('Invalid ID Number!')
            .setColor('#FF0000')

        if(msg.channel.type == 'DM'){
            msg.channel.send({embeds:[varstore.embednodm]})
            return
        }
        if(!msg.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
            msg.channel.send({embeds:[varstore.embednopermission]})
            return
        }

        content = msg.content.substr(config.PREFIX.length+4)

        if(isNaN(content)){
            embed = varstore.embed
                .setDescription('custom reaction ID must be a number!')
                .setColor('#FF0000')
            msg.channel.send({embeds:[embed]})
            return
        }

        if(customcommand.Data[content]){
            if(customcommand.Data[content].guild == msg.guild.id){
                msg.channel.send({embeds:[varstore.embed.setDescription('Removed!').setColor('#00FFFF')]})
                customcommand.Data.splice(content,1)

                db.collection(bot.user.id).doc('cc').set(
                    {
                        ccdata:customcommand
                    }
                )
            }
            else{
                msg.channel.send({embeds:[invalidIDNumber]})
            }
        }
        else{
            msg.channel.send({embeds:[invalidIDNumber]})
        }
    }
}