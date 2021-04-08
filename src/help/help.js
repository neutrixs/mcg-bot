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
            .addField(
                'Information',
                `\`${config.PREFIX}help\` - List of commands\n`+
                `\`${config.PREFIX}userinfo\` - get information of a user`,
                false
            )
            .addField(
                'Managing messages',
                `\`${config.PREFIX}ann\` - Create an announcement\n`+
                `\`${config.PREFIX}del\` - Delete message(s)\n`+
                `\`${config.PREFIX}embed\` - Create an embed\n`+
                `\`${config.PREFIX}pin\` - Pin a message\n`+
                `\`${config.PREFIX}react\` - React a message\n`+
                `\`${config.PREFIX}say\` - Make bot say something\n`+
                `\`${config.PREFIX}file\` - Send a file/image using link\n`+
                `\`${config.PREFIX}addreactionroles\` - Add reaction roles\n`+
                `\`${config.PREFIX}deletereactionroles\` - Remove reaction roles\n`+
                `\`${config.PREFIX}listreactionroles\` - View list of reaction roles`,
                false
            )
            .addField(
                'Prefix',
                `\`${config.PREFIX}prefix\` - See this bot's prefix / server prefix. or set this server's prefix\n`,
                false
            )
            .addField(
                'TMP',
                `\`${config.PREFIX}tmp\` - TMP related commands`,
                true
            )
            .addField(
                'Fun',
                `\`${config.PREFIX}fun\` - Some fun commands`,
                true
            )
            .addField(
                'Custom commands',
                `\`${config.PREFIX}acr\` - Add a custom reaction to this server\n`+
                `\`${config.PREFIX}dcr\` - Delete a custom reaction in this server\n`+
                `\`${config.PREFIX}lcr\` - View list of custom reactions in this server`,
                false
            )
            .addField(
                'Other',
                `\`${config.PREFIX}credit\` - Shows this bot's credit\n`+
                `\`${config.PREFIX}speedtest\` - Test this bot's internet speed`,
                false
            )
            .addField(
                'Owner commands',
                `\`${config.PREFIX}addstatus\` - Add a(or multiple) custom status\n`+
                `\`${config.PREFIX}removestatus\` - Delete a custom status\n`+
                `\`${config.PREFIX}liststatus\` - View list of custom status\n`+
                `\`${config.PREFIX}enablestatus\` - Enable custom status\n`+
                `\`${config.PREFIX}disablestatus\` - Disable custom status`
            )

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
                case 'userinfo':
                case 'ui':
                    cmdlist.get('helpuserinfo').execute(msg,embed,config)
                break;
                case 'prefix':
                    cmdlist.get('helpprefix').execute(msg,embed,config)
                break


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

                case 'acr':
                    cmdlist.get('helpacr').execute(msg,embed,config)
                break;
                case 'dcr':
                    cmdlist.get('helpdcr').execute(msg,embed,config)
                break;
                case 'lcr':
                    cmdlist.get('helplcr').execute(msg,embed)
                break;

                case 'addstatus':
                    cmdlist.get('helpaddstatus').execute(msg,embed,config)
                break
                case 'removestatus':
                    cmdlist.get('helpremovestatus').execute(msg,embed,config)
                break
                case 'liststatus':
                    cmdlist.get('helpliststatus').execute(msg,embed)
                break
                case 'enablestatus':
                    cmdlist.get('helpenablestatus').execute(msg,embed)
                break
                case 'disablestatus':
                    cmdlist.get('helpdisablestatus').execute(msg,embed)
                break

                case 'addreactionroles':
                    cmdlist.get('helpaddreactionroles').execute(msg,embed,config)
                break
                case 'deletereactionroles':
                    cmdlist.get('helpdeletereactionroles').execute(msg,embed,config)
                break
                case 'listreactionroles':
                    cmdlist.get('helplistreactionroles').execute(msg,embed)
                break
            }
        }
    }
}