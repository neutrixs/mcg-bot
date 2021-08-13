module.exports = {
    name:'helpdisablestatus',
    execute(msg,embed){
        embed = embed
        .setTitle("Disable bot\'s custom status")
        .setFooter('Permission required: BOT OWNER')

        msg.channel.send({embeds:[embed]})
    }
}