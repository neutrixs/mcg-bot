module.exports = {
    name:"joke",
    execute(msg){
        const http = require('http');
        http.get('http://www.official-joke-api.appspot.com/random_joke',r=>{
            let data;
            r.on('data',chunk=>{
                data = chunk;
            })
            r.on('end',()=>{
                data = JSON.parse(data);
                msg.channel.send(data.setup)
                setTimeout(function(){
                    msg.channel.send(data.punchline)
                },2500)
            })
        })
    }
}