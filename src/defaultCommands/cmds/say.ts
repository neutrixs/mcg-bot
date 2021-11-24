import { MessageOptions } from 'discord.js'
import { eachCommand } from "../../types/commandTypes";

const say:eachCommand['execute'] = function(options){
    const { msg, prefix } = options
    const cleanContent = msg.content.substr(prefix.length+4)

    /**
     * matching escaped character:
     * https://stackoverflow.com/a/6525975
     * 
     * good luck
     */

    const textInsideQuote = /^"([^"\\]*(?:\\.[^"\\]*)*)"/
    const matched = cleanContent.match(textInsideQuote)

    /**
     * If you want to specify any option, 
     * you must put your text inside quote
     * (to prevent errors, etc. i might change this later)
     */

    if(!matched){
        msg.channel.send(cleanContent)
        return
    }

    const finalText = matched[1]

    const optionsOnly = cleanContent.replace(textInsideQuote, '')

    const shouldClearMessage = /(\s|^)-C(\s|$)/.test(optionsOnly)

    if(shouldClearMessage){
        msg.delete()
    }

    const matchImageRegex = /(\s|^)-I (https?\:\/\/[^\s]+)(\s|$)/

    const imageURLExists = optionsOnly.match(matchImageRegex)

    const imageURL = imageURLExists ? [imageURLExists[2]] : null

    msg.channel.send({
        content:finalText,
        files: imageURL         // no null checking inside array? really? discord.js? 🙄
    }).catch(error=>{
        console.log(error)
    })
}

const helpSay:MessageOptions = {
    embeds:[
        {
            title:'Say Command'
        }
    ]
}

export {
    say,
    helpSay
}