module.exports = {
    name:"helptmptraffic",
    description:"",
    execute(msg,embed,config){
        const https = require('https');
        https.get('https://api.truckyapp.com/v2/traffic/servers',r=>{
            let data = '';
            r.on('data',chunk=>{
                data+=chunk;
            })
            r.on('end',()=>{
                data = JSON.parse(data);
                let listserver = '';

                for(var i=0;i<data.response.length;i++){
                    let current = data.response[i];
                    listserver = listserver.concat(`${current.url}(${current.name}: ${current.game})\n`);
                }

                embed = embed
                .setDescription(
                    `**Format**: \`${config.PREFIX}traffic [game name] [server name]\`\n\n`+
                    `[] = Optional`
                )
                .addField('Game name:','ets2\nats',false)
                .addField('Server name:',listserver,false);

                msg.channel.send(embed)
            })
        })
    }
}