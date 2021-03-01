module.exports = {
    name:"crsend",
    execute(msg,customcommand){
        for(const data of customcommand.Data){
            if(msg.guild == data.guild){
                if(msg.content == data.command){
                    msg.channel.send(data.response.msg,{embed:data.response.embed})
                }
            }
        }
    }
}