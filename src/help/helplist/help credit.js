module.exports = {
    name:"helpcredit",
    description:"",
    execute(msg,embed){
        embed = embed
        .setTitle('Shows Credit of this bot')
        msg.channel.send(embed)
    }
}