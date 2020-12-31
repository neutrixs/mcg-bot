module.exports = {
    name:"setstatus",
    description:"set bot status",
    execute(bot,config){
        function setstatus(){
            bot.user.setActivity(config.activity.status, {type: config.activity.type.toUpperCase()})
        }
        setstatus()
        statusinterval = setInterval(setstatus, 3600000)
    }
}