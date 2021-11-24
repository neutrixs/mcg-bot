import {Client, Message, ClientEvents, MessageOptions} from 'discord.js'

interface eachCommandParamOptions {
    client: Client
    msg: Message
    prefix: string
}

type next = () => void

interface eachCommand{
    name:string
    description:string
    test: RegExp
    on: keyof ClientEvents
    noPrefixMatch?: boolean
    helpCategory?: string
    helpMessage?: MessageOptions
    execute: (options: eachCommandParamOptions, next?:next) => any
}

type commands = eachCommand[]

export {
    commands as commandsType,
    eachCommandParamOptions,
    eachCommand
}