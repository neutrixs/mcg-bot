module.exports = {
    name:"helpspeedtest",
    description:"",
    execute(msg,embed){
        embed = embed
        .setTitle('Test this bot\'s internet speed')
        msg.channel.send({embeds:[embed]})
    }
}