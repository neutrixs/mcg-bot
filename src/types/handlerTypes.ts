import {Client, Message, ClientEvents} from 'discord.js'

interface eachCommandParamOptions {
    client: Client
    msg: Message
}

interface eachCommand{
    name:string
    description:string
    test: RegExp
    on: keyof ClientEvents
    execute: (options: eachCommandParamOptions) => any
}

type commands = eachCommand[]

export {
    commands as commandsType
}