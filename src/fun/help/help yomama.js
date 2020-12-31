module.exports = {
    name:"helpyomama",
    description:"",
    execute(msg,embed){
        embed = embed
        .setTitle('Shows random yomama jokes')
        msg.channel.send(embed)
    }
}