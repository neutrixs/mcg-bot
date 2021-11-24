import { commandsType } from '../types/commandTypes'
import {say, helpSay} from './cmds/say.js'

const defaultCommands:commandsType = [
    {
        name:'say',
        description:'makes the bot says something',
        on: 'messageCreate',
        test: /^say /,
        helpCategory: 'Managing messages',
        helpMessage: helpSay,
        execute: say
    }
]

export default defaultCommands