module.exports = {
    name:'helpaddreactionroles',
    execute(msg,embed,config) {
        embed = embed
        .setDescription(`**Format**: \`${config.PREFIX}addreactionroles messageID emoji=roles, emoji1=roles2\` and etc etc etc\n`+
        'Maximum of 10 reactions allowed to avoid any errors')
        .addField(
            'messageID',
            'ID of the message that you want',
            false
        )
        .addField(
            'emoji',
            'type the emoji or type the emoji ID',
            false
        )
        .addField(
            'roles',
            'tag the roles or type the roles ID',
            false
        )
        .addField(
            'Example',
            `${config.PREFIX}addreactionroles 123456789012345678 :flushed:=@roles1, :joy:=@roles2`
        )
        .setFooter('Permission required: MANAGE_MESSAGES')
        msg.channel.send({embeds:[embed]})
    }
}