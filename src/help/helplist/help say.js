module.exports = {
    name:"helpsay",
    description:"",
    execute(msg,embed,config){
        embed = embed
        .setDescription(
            `**Format**: \`${config.PREFIX}say [#channelname] your message here [option]\`\n\n`+
            `[] = Optional\n\n`
        )
        .addField(
            'Options:',
            '`-C`: Clear your message\n'+
            '`-I imagelinkhere`: Add an image',
            false
        )
        .setFooter(
            'Permission required:\nMANAGE_MESSAGES'
        )
        msg.channel.send({embeds:[embed]})
    }
}