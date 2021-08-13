module.exports = {
    name:"fun",
    description:"",
    execute(msg,varstore,config){
        let embed = varstore.embed;

        embed = embed
        .addField(
            'List of fun Commands',
            `\`${config.PREFIX}yomama\` - yomama jokes\n`+
            `\`${config.PREFIX}joke\` - Random joke\n`+
            `\`${config.PREFIX}apod\` - Astronomy Picture of the Day\n`+
            `\`${config.PREFIX}insult\` - Insult someone <:mflush:815790736498753547>`
        )
        msg.channel.send({embeds:[embed]})
    }
    
}