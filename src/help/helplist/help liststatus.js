module.exports = {
    name:'helpliststatus',
    execute(msg,embed){
        embed = embed
        .setTitle('Shows a list this bot\'s custom status')
        .setFooter('Permission required: BOT OWNER')

        msg.channel.send(embed)
    }
}