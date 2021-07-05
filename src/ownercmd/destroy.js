module.exports = {
    name:'destroy',
    execute(bot,msg,config){
        if(msg.author.id !== config.owner) return
        bot.destroy()
    }
}