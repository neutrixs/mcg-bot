module.exports = {
    name:'disablestatus',
    execute(msg,varstore,config,bot,db,statusOn){
        if(msg.author.id !== config.owner){
            msg.channel.send(varstore.embednopermission)
            return
        }
        if(statusOn == false){
            embed = varstore.embed
            embed = embed
            .setDescription('It\'s already off :x:')
            .setColor('#FF0000')
            msg.channel.send(embed)
            return
        }
        statusOn = false
        msg.channel.send(varstore.embed.setDescription('Succesfully disabled custom status!'))
        db.collection(bot.user.id).doc('statuson').set(
            {
                statusOn:statusOn
            }
        )
        clearInterval(statusinterval)
        bot.user.setActivity('',{type:''})

        thisToReturn = {
            type:'disablestatus',
            statusOn:statusOn
        }
        return thisToReturn
    }
}