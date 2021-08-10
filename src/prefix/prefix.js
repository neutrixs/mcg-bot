module.exports = {
    name:"prefix",
    description:"see prefix, or set prefix",
    execute(msg,bot,varstore,args,config,customprefix,db,Permissions){
        embed = varstore.embed
        if(!args[1]){
            embed = embed
            .setDescription(`**PREFIX**: \`${config.PREFIX}\``)
            msg.channel.send({embeds:[embed]})
        }
        if(args[1]){
            if(msg.channel.type == 'DM'){
                msg.channel.send({embeds:[varstore.embednodm]})
                return
            }
            if(args[2]){
                embed = varstore.embederror
                .setDescription('Do not use space!')
                msg.channel.send({embeds:[embed]})
            }
            else{
                if(!msg.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)){
                    msg.channel.send({embeds:[varstore.embednopermission]})
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

                    msg.channel.send({embeds:[embed]})
                }
            }
        }
    }
}