module.exports = {
    name:"ann",
    description:"send an announcement",
    execute(msg,varstore,args,config,Permissions){
        let embed = varstore.embed;
        let content = msg.content.substr(config.PREFIX.length+3);

        //remove whitespace
        content = content.replace(/\s\s+/g,' ');

        //filter
        if(msg.channel.type == 'DM'){
            msg.channel.send({embeds:[varstore.embednodm]})
            return
        }
        if(!msg.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)){
            msg.channel.send({embeds:[varstore.embednopermission]})
            return
        }
        if(!args[1]){
            embed = embed
                .setDescription(`Please specify something! see \`${config.PREFIX}help ann\` for more info.`)
                .setColor('#FF0000')  
            msg.channel.send({embeds:[embed]})
            return
        }

        //announce template
        embed = embed
        .setColor('#FFFF00')
        .setAuthor('Announcement', 'https://media.discordapp.net/attachments/743403732334805022/874880258170576906/Circle.png?width=473&height=473')
        .setThumbnail('https://media.discordapp.net/attachments/743403732334805022/874880258170576906/Circle.png?width=473&height=473')
        .setTimestamp()
        .setFooter(`Announced by ${msg.member.nickname}`, msg.author.avatarURL());

        //option
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
            embed = varstore.embederror
                .setDescription('Invalid channel!')
                .setColor('#FF0000')
            msg.channel.send({embeds:[embed]})
            return
        }
        msg.guild.channels.cache.get(sendtochannel).send({content:`${tagmember} ${plaintext}`,embeds:[embed]})
        .catch(e=>{
            embed = varstore.embederror
                .setDescription(`\`\`\`${e}\`\`\``)
                .setColor('#FF0000')
            msg.channel.send({embeds:[embed]})
        })
    }
}