module.exports = {
    name:"helpuserinfo",
    execute(msg,embed,config){

        embed = embed
        .setDescription(`**Format:** \`${config.PREFIX}ui [Player ID/Tag the player]\`\n**[]** = Optional`)
        msg.channel.send(embed)
    }
}