module.exports = {
    execute(bot,db){
        let datareturn = '';
        async function getData(){
            data = await db.collection(bot.user.id).doc('cc').get()
            if(data._fieldsProto == undefined){
                var template = {
                    ccdata: '{"Data":[]}'
                }
                await db.collection(bot.user.id).doc('cc').set(template)
                return template.ccdata
                //after the database was created. you have to restart the bot again(i'm too lazy to fix that)
            }
            else{
                datareturn = data._fieldsProto.ccdata.stringValue
                return datareturn
            }
        }
        return getData()
    }
}