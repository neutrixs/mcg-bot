module.exports = {
    name:"pin",
    description:"pin a message in a channel",
    execute(msg,varstore,args,config,Permissions){
        if(msg.channel.type == 'DM'){
            msg.channel.send({embeds:[varstore.embednodm]})
            return
        }
        if(!msg.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)){
            msg.channel.send({embeds:[varstore.embednopermission]})
            return
        }
        if(!args[1]){
            embed = varstore.embed
                .setDescription(`Please specify something! see \`${config.PREFIX}help pin\` for more info.`)
                .setColor('#FF0000')
            msg.channel.send({embeds:[embed]})
            return
        }
        if(isNaN(args[1]) == true){
            embed = varstore.embederror
                .setDescription('Message ID must be a number!')
            msg.channel.send({embeds:[embed]})
        }
        msg.channel.messages.fetch(args[1]).then(msg=>{
            msg.pin().catch(e=>{
                embed = varstore.embederror
                    .setDescription(`\`\`\`${e}\`\`\``)
                msg.channel.send({embeds:[embed]})
            })
        })
        .catch(e=>{
            embed = varstore.embederror
                .setDescription(`\`\`\`${e}\`\`\``)
            msg.channel.send({embeds:[embed]})
        })
        msg.delete();
    }
}