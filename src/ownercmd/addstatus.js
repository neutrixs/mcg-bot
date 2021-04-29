module.exports = {
    name:"addstatus",
    execute(msg,varstore,config,bot,db,customstatus){
        if(msg.author.id !== config.owner){
            msg.channel.send(varstore.embednopermission)
            return
        }
        let splitted = msg.content.substr(config.PREFIX.length+10).split(' -T ')
        if(!splitted[1]){
            msg.channel.send(varstore.embederror.setDescription(`invalid format! see \`${config.PREFIX}help addstatus\` for more info`))
            return
        }
        if(splitted[1].toUpperCase() == 'WATCHING' || splitted[1].toUpperCase() == 'PLAYING' || splitted[1].toUpperCase() == 'LISTENING'){
            customstatus = customstatus.concat(
                {
                    name:splitted[0],
                    type:splitted[1].toUpperCase()
                }
            )
            db.collection(bot.user.id).doc('status').set(
                {
                    status:customstatus
                }
            )
            msg.channel.send(varstore.embed.setDescription('Added!\n'+`\`\`\`${JSON.stringify(customstatus[customstatus.length-1],null,'\t')}\`\`\``))
            if(clearInterval !== null){
                clearInterval(statusinterval)
            }
            thisToReturn = {
                type:'status',
                data:customstatus
            }
            return thisToReturn
        }
        else{
            msg.channel.send(varstore.embederror.setDescription(`invalid format! see \`${config.PREFIX}help addstatus\` for more info`))
            return
        }

    }
}