module.exports = {
    name:"helpdel",
    description:"",
    execute(msg,embed,config){
        embed = embed
        .setDescription(
            `to delete messages, type  \`${config.PREFIX}del {amount of message you want to delete}\`(without bracket)\n`+
            `Example: \`${config.PREFIX}del 69\`\n`+
            `Maximum amount of message deleted: 5000\n`+
            `Cannot delete message older than 14 days ago`
        )
        .setFooter('Permission required:\nMANAGE_MESSAGES');
        msg.channel.send(embed)
    }
}