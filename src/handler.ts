import { Client, Message } from "discord.js"
import { commandsType } from "./types/handlerTypes"
import config from '../config.js'

export default class Handler {
    private commands:commandsType
    private prefix:string

    public constructor(client: Client){
        this.commands = []
        this.prefix = config.prefix

        client.on('ready',readyData=>{
            console.log(`Logged in as ${readyData.user.username}#${readyData.user.discriminator}`)
        })

        client.on('messageCreate',this.msgCreateHandler)
    }

    public addCommands(commandsList:commandsType){
        this.commands = [...this.commands, ...commandsList]
    }

    public setPrefix(prefix:string){
        this.prefix = prefix
    }

    private msgCreateHandler(msg:Message){
        console.log(msg.content)
    }
}