module.exports = {
    name:"helplcr",
    execute(msg,embed){
        msg.channel.send(
            embed.setTitle('Shows list of custom reaction in this server')
        )
    }
}