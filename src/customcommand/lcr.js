module.exports = {
    name:"lcr",
    execute(msg,varstore,customcommand){
        var listcommand = ''

        if(msg.channel.type == 'DM'){
            msg.channel.send({embeds:[varstore.embednodm]})
            return
        }

        for(var i=0;i<customcommand.Data.length;i++){
            if(customcommand.Data[i].guild == msg.guild.id){
                listcommand+=`\`${i}\`: \``+customcommand.Data[i].command+'`\n'
            }
        }

        if(listcommand == ''){
            embed = varstore.embed
                .setDescription('There is no custom reaction in this server!')    
            msg.channel.send({embeds:[embed]})
            return
        }

        embed = varstore.embed
        .setTitle('List of custom reaction in this server:')
        .setDescription(listcommand)
        msg.channel.send({embeds:[embed]})
    }
}