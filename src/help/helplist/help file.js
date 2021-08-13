module.exports={
    name:"helpfile",
    description:"",
    execute(msg,embed,config){
        embed = embed
        .setDescription(
            `**Format**: \`${config.PREFIX}file imagelinkhere\``
        )
        .setFooter(
            `Permission required:\nMANAGE_MESSAGES`
        )
        msg.channel.send({embeds:[embed]})
    }
}