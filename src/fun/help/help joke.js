module.exports = {
    name:"helpjoke",
    description:"",
    execute(msg,embed){
        embed = embed
        .setTitle('Shows random joke from http://www.official-joke-api.appspot.com/')
        msg.channel.send(embed)
    }
}