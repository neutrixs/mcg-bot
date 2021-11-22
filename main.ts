import { Client, Intents, Permissions } from 'discord.js'
import Handler from './src/handler.js'
import firebaseLoader from './src/firebaseLoader.js'

/**
 * if i don't specify the file extension, it won't work after compiled (but this works perfectly in ts)
 */

import config from './config.js'

const intentsAll = Object.values(Intents.FLAGS).reduce((acc, p) => acc | p, 0)

const bot = new Client({
    intents: [intentsAll],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
})

const handler = new Handler(bot)
const database = new firebaseLoader(bot)

bot.login(config.token)