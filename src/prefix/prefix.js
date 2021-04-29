module.exports = {
    name:"prefix",
    description:"see prefix, or set prefix",
    execute(msg,bot,varstore,args,config,customprefix,db){
        embed = varstore.embed
        if(!args[1]){
            embed = embed
            .setDescription(`**PREFIX**: \`${config.PREFIX}\``)
            msg.channel.send(embed)
        }
        if(args[1]){
            if(msg.channel.type == 'dm'){
                msg.channel.send(varstore.embednodm)
                return
            }
            if(args[2]){
                embed = varstore.embederror
                .setDescription('Do not use space!')
                msg.channel.send(embed)
            }
            else{
                if(!msg.member.hasPermission('MANAGE_GUILD')){
                    msg.channel.send(varstore.embednopermission)
                }
                else{
                    customprefix[msg.guild.id] = args[1]
                    db.collection(bot.user.id).doc('customprefix').set(
                        {
                            prefixdata:customprefix
                        }
                    )
                    embed = embed
                    .setDescription(`PREFIX of this server has been changed to: \`${customprefix[msg.guild.id]}\``)

                    msg.channel.send(embed)
                }
            }
        }
    }
}