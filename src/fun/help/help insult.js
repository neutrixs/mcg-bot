module.exports = {
    name:"helpinsult",
    description:"",
    execute(msg,embed,config){
        embed = embed
        .setDescription(
            `**Format**: \`${config.PREFIX}insult [someone]\`\n`+
            `[] = Optional`
        )
        msg.channel.send({embeds:[embed]})
    }
}