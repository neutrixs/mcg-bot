module.exports = {
    name:"helpann",
    description:"",
    execute(msg,embed,config){
        embed = embed
        .setDescription(
            `**Format**: \`${config.PREFIX}ann [#channelname] your message here [options]\`\n\n`+
            `[] = Optional`
        )
        .addField(
            'Options',
            '`-C`: Clear your message\n'+
            '`-T "your title"`: Add a title followed by double quote\n'+
            '`-P "your text"`: Add a plain text followed by double quote\n'+
            '`-I imagelink`: Add an image inside embed\n'+
            '`--color #696969`: Set embed color with hex\n'+
            '`--member`: Tag ETS2MCG Member role',
            false
        )
        .addField(
            'Inserting Hyperlink',
            'Format: `[text](https://example.com)`',
            false
        )
        .setFooter(
            `Permission required:\nMANAGE_MESSAGES`
        )
        msg.channel.send(embed)
    }
}