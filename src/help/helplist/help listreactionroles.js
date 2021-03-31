module.exports = {
    name:'helplistreactionroles',
    execute(msg,embed){
        embed = embed
        .setTitle('Shows this server\'s reaction roles')
        .setFooter('Permission required: MANAGE_MESSAGES')

        msg.channel.send(embed)
    }
}