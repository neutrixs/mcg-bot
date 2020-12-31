module.exports = {
    name:"help",
    description:"list of help cmd",
    execute(msg,varstore,args,config,cmdlist){
        let embed = varstore.embed;
        if(!args[1]){
            embed = embed
            .setAuthor('Command List')
            .setTitle('List of Commands:')
            .setFooter(`${config.PREFIX}help command name`)
            .setDescription(
                `\`${config.PREFIX}del\`\n`+
                `\`${config.PREFIX}say\`\n`+
                `\`${config.PREFIX}embed\`\n`+
                `\`${config.PREFIX}ann\`\n`+
                `\`${config.PREFIX}file\`\n`+
                `\`${config.PREFIX}credit\`\n`+
                `\`${config.PREFIX}speedtest\`\n`+
                `\`${config.PREFIX}fun\`\n`+
                `\`${config.PREFIX}pin\`\n`+
                `\`${config.PREFIX}tmp\`\n`
            );
            msg.channel.send(embed)
        }
        else{
            switch(args[1]){
                case 'del':
                    cmdlist.get('helpdel').execute(msg,embed,config)
                break;
                case 'fun':
                    cmdlist.get('fun').execute(msg,varstore,config)
                break;
                case 'tmp':
                    cmdlist.get('tmp').execute(msg,varstore,config)
                break;
            }
        }
    }
}