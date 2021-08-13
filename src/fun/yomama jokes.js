module.exports = {
    name:"ym",
    execute(msg){
        const https = require('https');
        https.get('https://api.yomomma.info',r=>{
            let data;
            r.on('data',chunk=>{
                data = chunk;
            })
            r.on('end',()=>{
                data = JSON.parse(data);
                msg.channel.send({content:data.joke})
            })
        })
    }
}