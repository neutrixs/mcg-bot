module.exports = {
    name:"nasaapod",
    execute(msg){
        const https = require('https');
        https.get('https://api.nasa.gov/planetary/apod?api_key=xKSRixFlGc0oT2CDVcTJb9TaVHQEG8fc2wgsVseV',r=>{
            let data;
            r.on('data',chunk=>{
                data = chunk;
            })
            r.on('end',()=>{
                data = JSON.parse(data);
                if(data.msg){
                    msg.chanel.send(data.msg)
                    return
                }
                if(data.url.includes('youtube.com/embed')){
                    data.url = data.url.replace('youtube.com/embed','youtu.be')
                }
                msg.channel.send(`${data.explanation}\n${data.url?data.url:''}`,{files:data.hdurl?[data.hdurl]:[]})
            })
        })
    }
}