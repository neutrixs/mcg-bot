module.exports = {
    name:"tmp",
    description:"whatever you want",
    execute(msg,varstore,config){
        msg.channel.send(
            varstore.embed
            .setDescription(`type \`${config.PREFIX}tmp\` to show list of TMP commands`)
        )
    }
}