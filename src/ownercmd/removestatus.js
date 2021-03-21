module.exports = {
    name:'removestatus',
    execute(msg,args,varstore,config,bot,db,customstatus){
        if(msg.author.id !== config.owner){
            msg.channel.send(varstore.embednopermission)
            return
        }
        if(!args[1]){
            msg.channel.send(varstore.embederror.setDescription(`invalid format! see ${config.PREFIX}help removestatus for more info`))
            return
        }
        if(isNaN(args[1]) == true){
            msg.channel.send(varstore.embederror.setDescription('ID must be a number!'))
            return
        }
        args[1] = parseInt(args[1])
        if(!customstatus[args[1]]){
            msg.channel.send(varstore.embederror.setDescription('Invalid ID!'))
            return
        }
        msg.channel.send(varstore.embed.setDescription('Removed!\n'+`\`\`\`${JSON.stringify(customstatus[args[1]],null,'\t')}\`\`\``))
        customstatus.splice(args[1],1)

        db.collection(bot.user.id).doc('status').set(
            {
                status:JSON.stringify(customstatus)
            }
        )
        if(clearInterval !== null){
            clearInterval(statusinterval)
        }
        thisToReturn = {
            type:'status',
            data:customstatus
        }
        return thisToReturn
    }
}