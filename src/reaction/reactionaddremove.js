module.exports = {
    name:'reactionAddRemove',
    execute(msg,bot,user,reactionRoles,added){

        if(user.id == bot.user.id) return;
        if(reactionRoles[msg.message.id]){
            data = reactionRoles[msg.message.id]

            thisUser = msg.message.guild.members.cache.find(u=>u.id==user.id)

            for(i=0;i<data.length;i++){
                if(msg._emoji.id == null){
                    if(data[i].emojiName == msg._emoji.name){
                        if(added) thisUser.roles.add(data[i].rolesID)
                        else thisUser.roles.remove(data[i].rolesID)
                    }
                }
                else{
                    if(data[i].emojiID == msg._emoji.id){
                        if(added) thisUser.roles.add(data[i].rolesID)
                        else thisUser.roles.remove(data[i].rolesID)
                    }
                }
            }
        }
    }
}