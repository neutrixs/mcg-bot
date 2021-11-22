import { MessageEmbedOptions } from 'discord.js'

interface eachCustomCommand {
    command:string
    guild:string
    response:{
        msg:string
        embed: MessageEmbedOptions
    }
}

interface customCommandWithData {
    ccdata : {
        Data: eachCustomCommand[]
    }
}

type customCommand = customCommandWithData | null

interface customPrefixTypeWithData {
    prefixdata: {[key:string]:string}
}

type customPrefixType = customPrefixTypeWithData | null

interface eachReactionRoles {
    channelID:string
    emojiName:string
    emojiID?:string
    guildID:string
    messageID:string
    rolesID:string
}

interface reactionRolesTypeWithData {
    reactionRoles:{[key:string]:eachReactionRoles[]}
}

type reactionRolesType = reactionRolesTypeWithData | null

interface eachStatus {
    name:string
    type:'PLAYING'|'LISTENING'|'WATCHING'
}

interface statusTypeWithData {
    status:eachStatus[]
}

type statusType = statusTypeWithData | null

export {
    customCommand,
    customPrefixType,
    reactionRolesType,
    statusType
}