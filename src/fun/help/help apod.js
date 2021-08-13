module.exports = {
    name:"helpnasaapod",
    description:"",
    execute(msg,embed){
        embed = embed
        .setTitle('Send NASA\'s Astronomy Picture Of the Day')
        msg.channel.send({embeds:[embed]})
    }
}