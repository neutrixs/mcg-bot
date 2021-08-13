module.exports = {
    name:"helppin",
    description:"",
    execute(msg,embed,config){
        embed = embed
        .setDescription(
            `**Format**: \`${config.PREFIX}pin messageID\``
        )
        .setFooter(
            'Permission required:\nMANAGE_MESSAGES'
        )
        msg.channel.send({embeds:[embed]})
    }
}