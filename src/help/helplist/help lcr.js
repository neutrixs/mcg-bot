module.exports = {
    name:"helplcr",
    execute(msg,embed){
        embed = embed.setTitle('Shows list of custom reaction in this server')
        msg.channel.send({embeds:[embed]})
    }
}