module.exports = {
    name:"helpacr",
    execute(msg,embed,config){
        embed = embed
        .setDescription(
            `**Format:** \`${config.PREFIX}acr "commandname" "response" [embed]\`\n`+
            `[] = Optional`
        )
        .setFooter(
            `Permission required:\nMANAGE_MESSAGES`
        )
        msg.channel.send(embed)
    }
}