import {Client, Message} from 'discord.js'

interface eachCommandParamOptions {
    client: Client
    msg: Message
}

interface eachCommand{
    name:string
    description:string
    test: RegExp
    execute: (options: eachCommandParamOptions) => any
}

type commands = eachCommand[]

export {
    commands as commandsType
}