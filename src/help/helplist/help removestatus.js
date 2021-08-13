module.exports = {
    name:'helpremovestatus',
    execute(msg,embed,config){
        embed = embed
        .setDescription(`**Format**: \`${config.PREFIX}removestatus {statusID}\``)
        .addField(
            'statusID:',
            `run \`${config.PREFIX}liststatus\``,
            false
        )
        .addField(
            'Example:',
            `\`${config.PREFIX}removestatus 3\``
        )
        .setFooter('Permission required: BOT OWNER')

        msg.channel.send({embeds:[embed]})
    }
}