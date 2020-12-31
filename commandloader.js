module.exports = {
    name:"cmdload",
    execute(cmdlist){
        const fs = require('fs');

        const dirlist = [
            './src/',
            './src/msgmanage/',
            './src/ownercmd/',
            './src/other/',
            './src/fun/',
            './src/fun/help/',
            './src/TMP/',
            './scr/TMP/help/',
            './src/help/',
            './src/help/helplist/'
        ]

        for(const dir of dirlist){
            let loaddir = fs.readdirSync(dir).filter(f=>f.endsWith('.js'));
            for(const file of loaddir){
                const command = require(`${dir}${file}`);
                cmdlist.set(command.name,command)
            }
        }
        return cmdlist;
    }
}