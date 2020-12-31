module.exports = {
    name:"say",
    description:"say something idk",
    execute(msg,varstore,args,config){
        let sendthis = msg.content.substr(config.PREFIX.length+3);
        //remove whitespace
        sendthis = sendthis.replace(/\s\s+/g, ' ');

        if(msg.channel.type == 'dm'){
            msg.channel.send(varstore.embednodm)
            return
        }
        if(!msg.member.hasPermission('MANAGE_MESSAGES')){
            msg.channel.send(varstore.embednopermission)
            return
        }
        if(!args[1]) {
            msg.channel.send(varstore.embednodm
                .setDescription(`Please specify something! see \`${config.PREFIX}help say\` for more info.`)    
            )
            return
        }

        //option
        if(sendthis.includes(' -C')){
            msg.delete();
            sendthis = sendthis.replace(' -C','');
        }

        let sendtochannel = msg.channel.id;
        if(sendthis.substr(0,3).includes(' <#')){
            sendtochannel = sendthis.split(' <#');
            sendtochannel = sendtochannel[1].split('>');
            sendtochannel = sendtochannel[0];
            sendthis = sendthis.replace(' <#'+sendtochannel+'>','');
        }

        let img = [];
        if(sendthis.includes(' -I ')){
            img = sendthis.split(' -I ');
            img = img[1].split(' ');
            img = img[0];
            sendthis = sendthis.replace(' -I '+img, '');
            img = [img];
        }

        if(msg.guild.channels.cache.get(sendtochannel) == undefined){
            msg.channel.send(varstore.embed
                .setDescription('Invalid channel!')
                .setColor('#FF0000')    
            )
            return;
        }

        msg.guild.channels.cache.get(sendtochannel).send(sendthis,{files:img})
        .catch(e=>{
            msg.channel.send(varstore.embederror
                .setDescription(`\`\`\`${e}\`\`\``)
                .setColor('#FF0000') 
            )
        })
    }
}