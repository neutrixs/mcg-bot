module.exports = {
    name:"crsend",
    execute(msg,customcommand){
        for(const data of customcommand.Data){
            if(msg.guild == data.guild){
                if(msg.content == data.command){
                    if(data.response.embed == 'NULL_VALUE'){
                        data.response.embed = null
                    }
                    let responseEmbed = data.response.embed ? [data.response.embed] : null
                    if(!data.response.msg) data.response.msg = null
                    msg.channel.send({content:data.response.msg,embeds:responseEmbed})
                }
            }
        }
    }
}