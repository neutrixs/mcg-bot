module.exports = {
    name:'helpdeletereactionroles',
    execute(msg,embed,config){
        embed = embed
        .setDescription(`**Format**: \`${config.PREFIX}deletereactionroles ID\``)
        .addField(
            'ID',
            `type \`${config.PREFIX}listreactionroles\` to get the list and ID of it`
        )
        .setFooter('Permission required: MANAGE_MESSAGES')
        msg.channel.send({embeds:[embed]})
    }
}