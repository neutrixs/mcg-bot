module.exports = {
    name:"setstatus",
    execute(bot,customstatus){
        bot.user.setActivity(customstatus[0].name,{type: customstatus[0].type})
        if(customstatus.length > 1){
            nthStatus = 1
        }
        else{
            nthStatus = 0
        }
        statusinterval = setInterval(()=>{
            bot.user.setActivity(customstatus[nthStatus].name,{type: customstatus[nthStatus].type})
            nthStatus++
            if(nthStatus == customstatus.length){
                nthStatus = 0
            }
        },10000)
    }
}