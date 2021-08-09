module.exports = {
    name:"tmp",
    description:"whatever you want",
    execute(msg,varstore,config){
        let embed = varstore.embed
            .addField(
                'List of TMP Commands:',
                `\`${config.PREFIX}tmpstats\` - TruckersMP server status\n`+
                `\`${config.PREFIX}tmptime\` - TruckersMP in-game time\n`+
                `\`${config.PREFIX}traffic\` - Truckersmp traffic`,
                false
            )
        msg.channel.send({embeds:[embed]})
    }
}