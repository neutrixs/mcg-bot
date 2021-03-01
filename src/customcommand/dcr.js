module.exports = {
    name:"dcr",
    execute(msg,config,varstore,bot,db,customcommand){
        var invalidIDNumber = varstore.embed
            .setDescription('Invalid ID Number!')
            .setColor('#FF0000')

        if(msg.channel.type == 'dm'){
            msg.channel.send(varstore.embednodm)
            return
        }
        if(!msg.member.hasPermission('MANAGE_MESSAGES')) {
            msg.channel.send(varstore.embednopermission)
            return
        }

        content = msg.content.substr(config.PREFIX.length+4)

        if(isNaN(content)){
            msg.channel.send(
                varstore.embed
                .setDescription('custom reaction ID must be a number!')
                .setColor('#FF0000')
            )
            return
        }

        if(customcommand.Data[content]){
            if(customcommand.Data[content].guild == msg.guild.id){
                customcommand.Data.splice(content,1)

                db.collection(bot.user.id).doc('cc').set(
                    {
                        ccdata:JSON.stringify(customcommand)
                    }
                )

                returnthis = {
                    type:"acr",
                    data:customcommand
                }
                return returnthis
            }
            else{
                msg.channel.send(invalidIDNumber)
            }
        }
        else{
            msg.channel.send(invalidIDNumber)
        }
    }
}