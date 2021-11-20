import { Client, Message } from "discord.js"
import { commandsType } from "./types/handlerTypes"

export default class Handler {
    private commands:commandsType

    public constructor(client: Client){
        this.commands = []

        client.on('ready',readyData=>{
            console.log(`Logged in as ${readyData.user.username}#${readyData.user.discriminator}`)
        })

        client.on('messageCreate',this.msgCreateHandler)
    }

    public addCommands(commandsList:commandsType){
        this.commands = [...this.commands, ...commandsList]
    }

    private msgCreateHandler(msg:Message){
        console.log(msg.content)
    }
}