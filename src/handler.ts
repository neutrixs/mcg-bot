import { Client, Message } from "discord.js"
import { commandsType, eachCommandParamOptions } from "./types/commandTypes"
import config from '../config.js'

export default class Handler {
    private commands:commandsType
    private prefix:string
    private client:Client

    public constructor(client: Client){
        this.client = client
        this.commands = []
        this.prefix = config.prefix

        client.on('ready',readyData=>{
            console.log(`Logged in as ${readyData.user.username}#${readyData.user.discriminator}`)
        })

        client.on('messageCreate',this.msgCreateHandler.bind(this))
    }

    public addCommands(commandsList:commandsType){
        this.commands = [...this.commands, ...commandsList]
    }

    public setPrefix(prefix:string){
        this.prefix = prefix
    }

    private msgCreateHandler(msg:Message){
        const content = msg.content
        const contentNoPrefix = msg.content.substr(this.prefix.length)
        const paramOptions:eachCommandParamOptions = {
            client:this.client,
            msg:msg
        }

        let isContinue:boolean = false
        const next = function(){
            isContinue = true
        }.bind(this)
        
        for(const command of this.commands){
            const isMatched = (command.noPrefixMatch ? content : contentNoPrefix).match(command.test)
            if(!isMatched) continue

            command.execute(paramOptions,next)

            if(isContinue){
                isContinue = false
                continue
            }

            break
        }
    }
}