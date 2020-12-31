module.exports = {
    name:"credit",
    description:"owner credit",
    execute(msg,varstore,config){
        let embed = varstore.embed;

        embed = embed
        .setTitle(`BOT Owner: ${config.ownername}`)
        .setColor([0,255,0])
        .setAuthor('Credit');
        msg.channel.send(embed)
    }
}