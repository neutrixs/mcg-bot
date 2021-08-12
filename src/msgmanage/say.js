module.exports = {
    name:"say",
    description:"say something idk",
    execute(msg,varstore,args,config,Permissions){
        let sendthis = msg.content.substr(config.PREFIX.length+3);
        //remove whitespace
        sendthis = sendthis.replace(/\s\s+/g, ' ');

        if(msg.channel.type == 'DM'){
            msg.channel.send({embeds:[varstore.embednodm]})
            return
        }
        if(!msg.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)){
            msg.channel.send({embeds:[varstore.embednopermission]})
            return
        }
        if(!args[1]) {
            embed = varstore.embednodm
                .setDescription(`Please specify something! see \`${config.PREFIX}help say\` for more info.`)    
            msg.channel.send({embeds:[embed]})
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
            embed = varstore.embed
                .setDescription('Invalid channel!')
                .setColor('#FF0000')    
            msg.channel.send({embeds:[embed]})
            return;
        }

        msg.guild.channels.cache.get(sendtochannel).send({content:sendthis,files:img})
        .catch(e=>{
            embed = varstore.embederror
                .setDescription(`\`\`\`${e}\`\`\``)
                .setColor('#FF0000') 
            msg.channel.send({embeds:[embed]})
        })
    }
}