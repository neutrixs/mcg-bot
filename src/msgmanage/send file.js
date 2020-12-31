module.exports = {
    name:"file",
    description:"send a file or an image",
    execute(msg,varstore,args){
        if(msg.channel.type == 'dm'){
            msg.channel.send(varstore.embednodm)
            return
        }
        if(!msg.member.hasPermission('MANAGE_MESSAGES')){
            msg.channel.send(varstore.embednodm)
            return
        }

        msg.channel.send('',{files:[args[1]]})
        .catch(e=>{
            msg.channel.send(
                varstore.embederror
                .setDescription(`\`\`\`${e}\`\`\``)
                .setColor('#FF0000')
            )
        })
    }
}