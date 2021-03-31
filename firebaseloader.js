module.exports = {
    execute(bot,db){
        async function getData(){
            let cc;
            let customprefix;
            let status;
            let statusOn;
            let reactionRoles;
            let ccload = await db.collection(bot.user.id).doc('cc').get()
            let prefixload = await db.collection(bot.user.id).doc('customprefix').get()
            let statusload = await db.collection(bot.user.id).doc('status').get()
            let statusOnLoad = await db.collection(bot.user.id).doc('statuson').get()
            let reactionRolesLoad = await db.collection(bot.user.id).doc('reactionroles').get()
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

            if(statusload._fieldsProto == undefined){
                var template = {
                    status: '[]'
                }
                await db.collection(bot.user.id).doc('status').set(template)
                status = template.status
            }
            else{
                status = statusload._fieldsProto.status.stringValue
            }

            if(statusOnLoad._fieldsProto == undefined){
                var template = {
                    statusOn: false
                }
                await db.collection(bot.user.id).doc('statuson').set(template)
            }
            else{
                statusOn = statusOnLoad._fieldsProto.statusOn.booleanValue
            }
            if(reactionRolesLoad._fieldsProto == undefined){
                var template = {
                    reactionRoles: '{}'
                }
                await db.collection(bot.user.id).doc('reactionroles').set(template)
                reactionRoles = template.reactionRoles
            }
            else{
                reactionRoles = reactionRolesLoad._fieldsProto.reactionRoles.stringValue
            }

            thisToReturn = {
                cc:cc,
                customprefix:customprefix,
                status:status,
                statusOn:statusOn,
                reactionRoles:reactionRoles
            }
            return thisToReturn
        }
        return getData()
    }
}