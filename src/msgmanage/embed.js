module.exports = {
    name:"embed",
    description:"embed something",
    execute(msg,varstore,args,config){
        let embed = varstore.embed;
        let content = msg.content.substr(config.PREFIX.length+5);

        //remove whitespace
        content = content.replace(/\s\s+/g,' ');

        //-C for clear, --member to tag member, -I for images, -T for title, --thumbnail for thumbnail, -P for plaintext, --color for color, --url to add to title.
        if(msg.channel.type == 'dm'){
            msg.channel.send(varstore.embednodm)
            return
        }
        if(!msg.member.hasPermission('MANAGE_MESSAGES')){
            msg.channel.send(varstore.embednopermission)
            return
        }
        if(!args[1]){
            msg.channel.send(embed
                .setDescription(`Please specify something! see \`${config.PREFIX}help embed\` for more info.`)  
                .setColor('#FF0000')  
            )
            return
        }

        if(content.includes(' -C')){
            msg.delete();
            content = content.replace(' -C','');
        }

        let tagmember = '';
        if(content.includes(' --member')){
            tagmember = '<@&668875812182687744> ';
            content = content.replace(' --member','');
        }

        let sendtochannel = msg.channel.id;
        if(content.substr(0,3).includes(' <#')) {
            sendtochannel = content.split(' <#');
            sendtochannel = sendtochannel[1].split('>');
            sendtochannel = sendtochannel[0];
            content = content.replace(' <#'+sendtochannel+'>','');
        }

        let img = [];
        if(content.includes(' -I ')){
            img = content.split(' -I ');
            img = img[1].split(' ');
            embed = embed.setImage(img[0]);
            content = content.replace(' -I '+img[0],'');
        }

        if(content.includes(' -T ')){
            let title;
            title = content.split(' -T ');
            title = title[1].split('"');
            title = title[1];
            embed = embed.setTitle(title);
            content = content.replace(' -T "'+title+'"','');
        }

        if(content.includes(' --thumbnail ')){
            let thumbnail
            thumbnail = content.split(' --thumbnail ');
            thumbnail = thumbnail[1].split(' ');
            embed = embed.setThumbnail(thumbnail[0])
            content = content.replace(' --thumbnail '+thumbnail[0],'');
        }

        let plaintext = '';
        if(content.includes(' -P ')){
            plaintext = content.split(' -P ');
            plaintext = plaintext[1].split('"');
            plaintext = plaintext[1];
            content = content.replace(' -P "'+plaintext+'"','');
        }

        if(content.includes(' --color ')){
            let color;
            color = content.split(' --color ');
            color = color[1].split(' ');
            color = color[0];
            embed = embed.setColor(color);
            content = content.replace(' --color '+color,'');
        }

        if(content.includes(' --url ')){
            let url;
            url = content.split(' --url ');
            url = url[1].split(' ');
            url = url[0]
            embed = embed.setURL(url);
            content = content.replace(' --url '+url, '');
        }

        //turn into embed
        embed = embed.setDescription(content);

        //send message
        if(msg.guild.channels.cache.get(sendtochannel) == undefined){
            msg.channel.send(embed
                .setDescription('Invalid channel!')
                .setColor('#FF0000')    
            )
            return
        }
        msg.guild.channels.cache.get(sendtochannel).send(`${tagmember} ${plaintext}`,{embed:embed})
        .catch(e=>{
            msg.channel.send(varstore.embederror
                .setDescription(`\`\`\`${e}\`\`\``)
                .setColor('#FF0000')
            )
        })
    }
}