module.exports = {
    execute(bot,db){
        async function getData(){
            let cc;
            let customprefix;
            let ccload = await db.collection(bot.user.id).doc('cc').get()
            let prefixload = await db.collection(bot.user.id).doc('customprefix').get()
            if(ccload._fieldsProto == undefined){
                var template = {
                    ccdata: '{"Data":[]}'
                }
                await db.collection(bot.user.id).doc('cc').set(template)
                cc = template.ccdata
            }
            else{
                cc = ccload._fieldsProto.ccdata.stringValue
            }

            if(prefixload._fieldsProto == undefined){
                var template = {
                    prefixdata: '{}'
                }
                await db.collection(bot.user.id).doc('customprefix').set(template)
                customprefix = template.prefixdata
            }
            else{
                customprefix = prefixload._fieldsProto.prefixdata.stringValue
            }

            thisToReturn = {
                cc:cc,
                customprefix:customprefix
            }
            return thisToReturn
        }
        return getData()
    }
}