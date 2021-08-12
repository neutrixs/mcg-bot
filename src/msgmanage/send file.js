module.exports = {
    name:"file",
    description:"send a file or an image",
    execute(msg,varstore,args,Permissions){
        if(msg.channel.type == 'DM'){
            msg.channel.send({embeds:[varstore.embednodm]})
            return
        }
        if(!msg.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)){
            msg.channel.send({embeds:[varstore.embednopermission]})
            return
        }

        msg.channel.send({files:[args[1]]})
        .catch(e=>{
            embed = varstore.embederror
                .setDescription(`\`\`\`${e}\`\`\``)
                .setColor('#FF0000')
            msg.channel.send({embeds:[embed]})
        })
    }
}