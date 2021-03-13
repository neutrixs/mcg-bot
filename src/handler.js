module.exports = {
    name:"handler",
    description:"command handler. i don't want to make the main file very messy",
    execute(msg,cmdlist,varstore,bot,db,customcommand,customprefix){
        let config = require('../botconfig.js');

        //this is the only way that i can bypass the bug. which is, require botconfig doesn't rewrite prefix properties
        if(!config.PREFIXTEMP){
            config.PREFIXTEMP = config.PREFIX
        }
        else {
            config.PREFIX = config.PREFIXTEMP
        }

        let args;
        let singlecmd;
        let tagbot = `<@!${bot.user.id}>`
        args = msg.content.replace(/\s\s+/g, ' ');

        //check if the current guild has a custom prefix. if so, set the prefix to that
        if(msg.channel.type !== 'dm'){
            if(customprefix[msg.guild.id.toString()]){
                config.PREFIX = customprefix[msg.guild.id.toString()]
            }
        }

        if(msg.content.startsWith(config.PREFIX) || msg.content.startsWith(tagbot)){
            if(msg.content.startsWith(tagbot+' ')){
                temp = tagbot+' '
                args = args.substr(temp.length).split(' ')
                singlecmd = msg.content.substr(temp.length)
            }
            else if(msg.content.startsWith(tagbot)){
                temp = tagbot
                args = args.substr(temp.length).split(' ')
                singlecmd = msg.content.substr(temp.length)
            }
            else{
                args = args.substr(config.PREFIX.length).split(' ');
                singlecmd = msg.content.substr(config.PREFIX.length);
            }



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

                case 'fun':
                    cmdlist.get('fun').execute(msg,varstore,config)
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

                case 'tmp':
                    cmdlist.get('tmp').execute(msg,varstore,config)
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
                case 'delete':
                    cmdlist.get('del').execute(msg,varstore,args,config)
                break;
                case 'say':
                    cmdlist.get('say').execute(msg,varstore,args,config)
                break;
                case 'embed':
                    cmdlist.get('embed').execute(msg,varstore,args,config)
                break;
                case 'ann':
                case 'announce':
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
                case 'react':
                    cmdlist.get('react').execute(msg,varstore,args,config)
                break;
                case 'prefix':
                    cmdlist.get('prefix').execute(msg,bot,varstore,args,config,customprefix,db)
                break;


                case 'ui':
                case 'userinfo':
                    cmdlist.get('userinfo').execute(bot,msg,varstore,args)
                break;


                case 'acr':
                    updatecustomcmd = cmdlist.get('acr').execute(msg,config,varstore,bot,db,customcommand)
                return updatecustomcmd
                case 'dcr':
                    deletecustomcmd = cmdlist.get('dcr').execute(msg,config,varstore,bot,db,customcommand)
                return deletecustomcmd
                case 'lcr':
                    cmdlist.get('lcr').execute(msg,varstore,customcommand)
                break;

            }
            cmdlist.get('crsend').execute(msg,customcommand)
        }
        else{
            cmdlist.get('crsend').execute(msg,customcommand)
        }
    }
}