module.exports = {
    name:"acr",
    description:"add custom reaction",
    execute(msg,config,varstore,bot,db,customcommand){
        let invalidFormat = varstore.embed
        .setColor('#FF0000')
        .setDescription(`Invalid format! see \`${config.PREFIX}help acr\` for more info`)

        if(msg.channel.type == 'dm'){
            msg.channel.send(varstore.embednodm)
            return
        }
        if(!msg.member.hasPermission('MANAGE_MESSAGES')) {
            msg.channel.send(varstore.embednopermission)
            return
        }

        var content = msg.content.substr(config.PREFIX.length+4)
        if((content.split('"')).length < 5){
            msg.channel.send(invalidFormat)
            return
        }

        command = (content.split('"'))[1]
        response = (content.split('"'))[3]

        if(
            (content.split('"'))[4] !== '' &&
            ((content.split('"'))[4].replace(/\s\s+/g,'').replace(/\s+/,'')).substr(0,1) !== '{'
        ){
            msg.channel.send(invalidFormat)
            return
        }

        responseembed = null
        embedinput = content.replace(
            content.split('"')[0]+'"'+
            content.split('"')[1]+'"'+
            content.split('"')[2]+'"'+
            content.split('"')[3]+'"',
            ''
        )
        if(embedinput !== ''){
            try{
                JSON.parse(embedinput)
            }
            catch(e){
                msg.channel.send(varstore.embederror.setDescription(`\`\`\`${e}\`\`\``))
                return
            }
            responseembed = JSON.parse(embedinput)
        }

        //what you need: command, response, responseembed

        newcommand = {
            guild:msg.guild.id,
            command:command,
            response:{
                msg:response,
                embed:responseembed
            }
        }

        msg.channel.send(varstore.embed.setDescription('Added!').setColor('#00FFFF'))
        customcommand.Data = customcommand.Data.concat(newcommand)
        db.collection(bot.user.id).doc('cc').set(
            {
                ccdata:JSON.stringify(customcommand)
            }
        )

        returnthis = {
            type:"acr",
            data:customcommand
        }
        return returnthis
    }
}