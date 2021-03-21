module.exports = {
    name:'liststatus',
    execute(msg,varstore,customstatus,config){
        if(msg.author.id !== config.owner){
            msg.channel.send(varstore.embednopermission)
            return
        }
        if(customstatus.length == 0){
            msg.channel.send(varstore.embed.setTitle('There\'s no custom status!'))
            return
        }

        let embed = varstore.embed

        embed = embed
        .setTitle('Status list:')

        statuslist = ''

        for(i=0;i<customstatus.length;i++){
            embed = embed
            .addField(
                `${i.toString()}:`,
                `\`\`\`${JSON.stringify(customstatus[i],null,'\t')}\`\`\``,
                false
            )
        }
        msg.channel.send(embed)
    }
}