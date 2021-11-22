import { commandsType } from '../types/commandTypes'
import say from './cmds/say.js'

const defaultCommands:commandsType = [
    {
        name:'say',
        description:'makes the bot says something',
        on: 'messageCreate',
        test: /^say /,
        execute: say
    }
]

export default defaultCommands