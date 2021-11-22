import {Client, Message, ClientEvents} from 'discord.js'

interface eachCommandParamOptions {
    client: Client
    msg: Message
}

type next = () => void

interface eachCommand{
    name:string
    description:string
    test: RegExp
    on: keyof ClientEvents
    noPrefixMatch?: boolean
    execute: (options: eachCommandParamOptions, next?:next) => any
}

type commands = eachCommand[]

export {
    commands as commandsType,
    eachCommandParamOptions
}