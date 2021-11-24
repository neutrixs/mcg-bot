import {eachCommand} from '../../types/commandTypes'

const help:eachCommand['execute'] = function(options){
    const { msg, listCommands, prefix } = options

    const h = /^h(\s|$)/
    const isUsingH = h.test(msg.content.substr(prefix.length))

    const args = msg.content.substr(prefix.length+(isUsingH?1:4)).replace(/^\s+/,'').split(/\s+/)

    const searchedCommand = listCommands.find(cmd => cmd.name === args[0])

    if(!searchedCommand) return

    if(searchedCommand.helpMessage){
        msg.channel.send(searchedCommand.helpMessage)
    }
}

export {
    help
}