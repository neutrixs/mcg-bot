module.exports = {
    name:"helpreact",
    execute(msg,embed,config){
        embed = embed
        .setDescription(
            `**Format**: \`${config.PREFIX}react messageID insertemojihere\`\n\n`+
            `This also remove any backslash, so you can do it with animated emoji(if you don't have nitro)`
        )
        .setFooter(`Permission required: MANAGE_MESSAGES`)
        msg.channel.send({embeds:[embed]})
    }
}