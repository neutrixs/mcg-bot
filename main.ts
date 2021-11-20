import { Client, Intents, Permissions } from 'discord.js'

/**
 * if i don't specify the file extension, it won't work after compiled (but this works perfectly in ts)
 */

import config from './config.js'

const intentsAll = Object.values(Intents.FLAGS).reduce((acc, p) => acc | p, 0)

const bot = new Client({
    intents: [intentsAll],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
})

bot.on('ready',client=>{
    console.log(`Logged in as ${client.user.username}#${client.user.discriminator}`)
})


bot.login(config.token)