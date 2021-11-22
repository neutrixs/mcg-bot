import { eachCommand } from "../../types/commandTypes";

const say:eachCommand['execute'] = function(options){
    const { msg, prefix } = options
    const contentExcludePrefix = msg.content.substr(prefix.length)

    /**
     * matching escaped character:
     * https://stackoverflow.com/a/6525975
     * 
     * good luck
     */

    const parts = /^say\s("([^"\\]*(?:\\.[^"\\]*)*)")((\s-C)?(\s-I\s(https?\:\/\/[^\s]+\.[^\s]+))?){0,2}$/

    console.log(contentExcludePrefix.match(parts))
}

export default say