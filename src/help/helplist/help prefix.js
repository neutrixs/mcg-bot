module.exports = {
    name:"helpprefix",
    execute(msg,embed,config){
        embed = embed
        .addField(
            'See prefix',
            `Format: \`${config.PREFIX}prefix\`\n`+
            `Required permission: None`,
            false
        )
        .addField(
            'Set server prefix',
            `Format: \`${config.PREFIX}prefix NewPrefixHere\`\n`+
            `Required permission: \`MANAGE_GUILD\``,
            false
        )
        msg.channel.send({embeds:[embed]})
    }
}