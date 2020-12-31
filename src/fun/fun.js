module.exports = {
    name:"fun",
    description:"",
    execute(msg,varstore,config){
        let embed = varstore.embed;

        embed = embed
        .setTitle('List of fun Commands:')
        .setDescription(
            `\`${config.PREFIX}yomama\`\n`+
            `\`${config.PREFIX}joke\`\n`+
            `\`${config.PREFIX}apod\`\n`+
            `\`${config.PREFIX}insult\`\n`
        )
        msg.channel.send(embed)
    }
    
}