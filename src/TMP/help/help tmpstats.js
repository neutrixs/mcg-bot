module.exports = {
    name:"helptmpstats",
    description:"",
    execute(msg,embed){
        embed = embed
        .setTitle('Shows TMP server status')
        msg.channel.send({embeds:[embed]})
    }
}