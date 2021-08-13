module.exports = {
    name:"helpacr",
    execute(msg,embed,config){
        embed = embed
        .setDescription(
            `**Format:** \`${config.PREFIX}acr "commandname" "response" [embed]\`\n`+
            `[] = Optional`
        )
        .addField(
            'Wanna add embed?',
            'see [this guide](https://discordjs.guide/popular-topics/embeds.html#using-an-embed-object) for more info',
            false
        )
        .addField(
            'Example',
            `\`${config.PREFIX}acr ".banana" ":banana:" {"description":"banana","color":16776960}\``
        )
        .setFooter(
            `Permission required:\nMANAGE_MESSAGES`
        )
        msg.channel.send({embeds:[embed]})
    }
}