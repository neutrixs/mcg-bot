module.exports = {
    name:"helptmptime",
    description:"",
    execute(msg,embed){
        embed = embed
        .setTitle('Shows TruckersMP current in-game time')
        msg.channel.send({embeds:[embed]})
    }
}