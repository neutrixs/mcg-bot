module.exports = {
    name:"tmp",
    description:"whatever you want",
    execute(msg,varstore,config){
        msg.channel.send(
            varstore.embed
            .setTitle('List of TMP Commands:')
            .setDescription(
                `\`${config.PREFIX}tmpstats\`\n`+
                `\`${config.PREFIX}tmptime\`\n`+
                `\`${config.PREFIX}traffic\`\n`
            )
        )
    }
}