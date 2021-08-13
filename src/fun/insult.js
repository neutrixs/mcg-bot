module.exports = {
    name:"insult",
    execute(msg,config){
        let whoInsulted = msg.content.substr(config.PREFIX.length+6);
        const https = require('https');
        https.get('https://evilinsult.com/generate_insult.php?lang=en&type=json',r=>{
            let data;
            r.on('data',chunk=>{
                data = chunk
            })
            r.on('end',()=>{
                data = JSON.parse(data);
                let insult = data.insult;
                insult = insult
                .replace(/&quot;/g, "\"")
                .replace(/&gt;/g, '>')
                .replace(/&lt;/g, '<');

                msg.channel.send({content:`${whoInsulted} ${insult}`})
            })
        })
    }
}