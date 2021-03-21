module.exports = {
    name:'helpenablestatus',
    execute(msg,embed){
        embed = embed
        .setTitle("Enable bot's custom status")
        .setFooter('Permission required: BOT OWNER')

        msg.channel.send(embed)
    }
}