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
                `\`${config.PREFIX}tmp\`\n`+
                `\`${config.PREFIX}react\``
            );
            msg.channel.send(embed)
        }
        else{
            switch(args[1]){
                case 'del':
                    cmdlist.get('helpdel').execute(msg,embed,config)
                break;
                case 'say':
                    cmdlist.get('helpsay').execute(msg,embed,config)
                break;
                case 'embed':
                    cmdlist.get('helpembed').execute(msg,embed,config)
                break;
                case 'ann':
                    cmdlist.get('helpann').execute(msg,embed,config)
                break;
                case 'file':
                    cmdlist.get('helpfile').execute(msg,embed,config)
                break;
                case 'credit':
                    cmdlist.get('helpcredit').execute(msg,embed)
                break;
                case 'speedtest':
                    cmdlist.get('helpspeedtest').execute(msg,embed)
                break;
                case 'pin':
                    cmdlist.get('helppin').execute(msg,embed,config)
                break;
                case 'react':
                    cmdlist.get('helpreact').execute(msg,embed,config)
                break;


                case 'fun':
                    cmdlist.get('fun').execute(msg,varstore,config)
                break;
                case 'yomama':
                case 'ym':
                    cmdlist.get('helpyomama').execute(msg,embed)
                break;
                case 'joke':
                    cmdlist.get('helpjoke').execute(msg,embed)
                break;
                case 'apod':
                    cmdlist.get('helpnasaapod').execute(msg,embed)
                break;
                case 'insult':
                    cmdlist.get('helpinsult').execute(msg,embed,config)
                break;


                case 'tmp':
                    cmdlist.get('tmp').execute(msg,varstore,config)
                break;
                case 'tmpstats':
                    cmdlist.get('helptmpstats').execute(msg,embed)
                break;
                case 'tmptime':
                    cmdlist.get('helptmptime').execute(msg,embed)
                break;
                case 'traffic':
                    cmdlist.get('helptmptraffic').execute(msg,embed,config)
                break;
            }
        }
    }
}