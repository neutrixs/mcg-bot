module.exports = {
    name:"helpdcr",
    execute(msg,embed,config){
        embed = embed
        .setDescription(
            `**Format:** \`${config.PREFIX}dcr "custom reaction ID"\`\n`+
            `Note: Custom reaction ID can be viewed using \`${config.PREFIX}lcr\``
        )
        .setFooter(
            `Permission required:\nMANAGE_MESSAGES`
        )
        msg.channel.send({embeds:[embed]})
    }
}