module.exports = {
    name:'enablestatus',
    execute(msg,varstore,config,bot,db,statusOn,customstatus){
        if(msg.author.id !== config.owner){
            msg.channel.send({embeds:[varstore.embednopermission]})
            return
        }
        if(customstatus.length == 0){
            embed = varstore.embed
            .setDescription("There's no status to enable :x:")
            .setColor('#FF0000')
            msg.channel.send({embeds:[embed]})
            return
        }
        if(statusOn == true){
            embed = varstore.embed
            embed = embed
            .setDescription('It\'s already on :x:')
            .setColor('#FF0000')
            msg.channel.send({embeds:[embed]})
            return
        }
        statusOn = true
        msg.channel.send({embeds:[varstore.embed.setDescription('Succesfully enabled custom status!')]})
        db.collection(bot.user.id).doc('statuson').set(
            {
                statusOn:statusOn
            }
        )
        thisToReturn = {
            type:'enablestatus',
            statusOn:statusOn
        }
        return thisToReturn
    }
}