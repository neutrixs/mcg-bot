module.exports = {
    name:"handler",
    description:"command handler. i don't want to make the main file very messy",
    execute(msg,cmdlist,varstore,bot){
        const config = require('../botconfig.js');
        let args;
        args = msg.content.replace(/\s\s+/g, ' ');
        args = args.substr(config.PREFIX.length).split(' ');
        let singlecmd = msg.content.substr(config.PREFIX.length);

        switch(singlecmd){
            case 'ping':
                cmdlist.get('ping').execute(msg)
            break;
            case 'speedtest':
                cmdlist.get('speedtest').execute(msg,varstore)
            break;
            case 'credit':
                cmdlist.get('credit').execute(msg,varstore,config)
            break;
            case 'yomama':
            case 'ym':
                cmdlist.get('ym').execute(msg)
            break;
            case 'joke':
                cmdlist.get('joke').execute(msg)
            break;
            case 'apod':
                cmdlist.get('nasaapod').execute(msg)
            break;
            case 'tmptime':
                cmdlist.get('tmptime').execute(msg,varstore,bot)
            break;
        }
        
        switch(args[0]){
            case 'help':
                cmdlist.get('help').execute(msg,varstore,args,config,cmdlist)
            break;



            case 'del':
                cmdlist.get('del').execute(msg,varstore,args,config)
            break;
            case 'say':
                cmdlist.get('say').execute(msg,varstore,args,config)
            break;
            case 'embed':
                cmdlist.get('embed').execute(msg,varstore,args,config)
            break;
            case 'ann':
                cmdlist.get('ann').execute(msg,varstore,args,config)
            break;
            case 'file':
                cmdlist.get('file').execute(msg,varstore,args)
            break;
            case 'insult':
                cmdlist.get('insult').execute(msg,config)
            break;
            case 'pin':
                cmdlist.get('pin').execute(msg,varstore,args,config)
            break;
            case 'tmpstats':
                cmdlist.get('tmpstats').execute(msg,varstore,args,config,bot)
            break;
            case 'traffic':
                cmdlist.get('tmptraffic').execute(msg,varstore,args,bot)
            break;
        }


    }
}