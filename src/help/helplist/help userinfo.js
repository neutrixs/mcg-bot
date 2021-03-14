module.exports = {
    name:"helpuserinfo",
    execute(msg,embed,config){

        embed = embed
        .setDescription(`**Format:** \`${config.PREFIX}ui [User ID/Tag the user]\`\n**[]** = Optional`)
        msg.channel.send(embed)
    }
}