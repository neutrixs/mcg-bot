module.exports = {
    name:"nasaapod",
    execute(msg,config){
        const fetch = require('node-fetch')
        async function get(){
            res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${config.nasa_api_key}`)
            res = await res.json()
            if(res.msg){
                msg.channel.send({content:res.msg})
                return
            }
            if(res.url.includes('youtube.com/embed')){
                res.url = res.url.replace('youtube.com/embed','youtu.be')
            }
            try{
                msg.channel.send({content:`${res.explanation}\n${res.hdurl?res.hdurl:res.url}`})
            }
            catch(e){
                console.log(e)
            }
            
        }
        get()
    }
}