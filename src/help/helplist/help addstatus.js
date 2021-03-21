module.exports = {
    name:'helpaddstatus',
    execute(msg,embed,config){
        embed = embed
        .setDescription(`**Format**: \`${config.PREFIX}addstatus statusNameHere -T {type}\``)
        .addField(
            'Type:',
            '•WATCHING\n•LISTENING\n•PLAYING',
            false
        )
        .addField(
            'Info:',
            'If you added more than 1, each will be played for 10 seconds(in a loop)',
            false
        )
        .addField(
            'Example:',
            `\`${config.PREFIX}addstatus with members -T PLAYING\``
        )
        .setFooter('Permission required: BOT OWNER')

        msg.channel.send(embed)
    }
}