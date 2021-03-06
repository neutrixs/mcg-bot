module.exports = {
    name:"react",
    description:"react a message. requires manage messages",
    execute(msg,varstore,args,config){
        var embed = varstore.embed;
        if(!args[1]){
            embed = embed
            .setDescription(`Please specify something! see \`${config.PREFIX}help react\` for more info.`)
            .setColor('#FF0000')
            msg.channel.send(embed)
            return
        }
        else if(args[1] && !args[2]){
            embed = embed
            .setDescription(`Please specify an emoji! see \`${config.PREFIX}help react\` for more info.`)
            .setColor('#FF0000')
            msg.channel.send(embed)
            return
        }
        else if(isNaN(args[1]) == true){
            embed = embed
            .setDescription(`Message ID must be a number!`)
            .setColor('#FF0000')
            msg.channel.send(embed)
            return
        }
        args[2] = args[2].replace(/[\\]/g,'')
        msg.channel.messages.fetch(args[1]).then(msg=>{
            msg.react(args[2]).catch(e=>{
                msg.channel.send(
                    varstore.embederror
                    .setDescription(`\`\`\`${e}\`\`\``)
                )
            })
        })
        msg.delete()
    }
}