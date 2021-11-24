import { commandsType } from '../types/commandTypes'
import {say, helpSay} from './cmds/say.js'
import {help} from './cmds/help.js'

const defaultCommands:commandsType = [
    {
        name:'say',
        description:'makes the bot says something',
        on: 'messageCreate',
        test: /^say /,
        helpCategory: 'Managing messages',
        helpMessage: helpSay,
        execute: say
    },
    {
        name:'help',
        description:'come on it\'s obvious',
        on: 'messageCreate',
        test: /^(help|h)/,
        execute:help
    }
]

export default defaultCommands