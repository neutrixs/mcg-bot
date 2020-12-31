module.exports = {
    name:"pin",
    description:"pin a message in a channel",
    execute(msg,varstore,args,config){
        if(msg.channel.type == 'dm'){
            msg.channel.send(varstore.embednodm)
            return
        }
        if(!msg.member.hasPermission('MANAGE_MESSAGES')){
            msg.channel.send(varstore.embednopermission)
            return
        }
        if(!args[1]){
            msg.channel.send(
                varstore.embed
                .setDescription(`Please specify something! see \`${config.PREFIX}help pin\` for more info.`)
                .setColor('#FF0000')
            )
            return
        }
        if(isNaN(args[1]) == true){
            msg.channel.send(
                varstore.embederror
                .setDescription('Message ID must be a number!')
            )
        }
        msg.channel.messages.fetch(args[1]).then(msg=>{
            msg.pin().catch(e=>{
                msg.channel.send(
                    varstore.embederror
                    .setDescription(`\`\`\`${e}\`\`\``)
                )
            })
        })
        .catch(e=>{
            msg.channel.send(
                varstore.embederror
                .setDescription(`\`\`\`${e}\`\`\``)
            )
        })
    }
}