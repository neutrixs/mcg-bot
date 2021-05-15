const discord = require('discord.js');
const bot = new discord.Client({partials:['MESSAGE','REACTION']});
const config = require('./botconfig');
let cmdlist = new discord.Collection();

//command loader
let cmdload = require('./commandloader').execute(cmdlist)
cmdlist = cmdload

//firebase
const admin = require("firebase-admin");
const serviceAccount = require("./accountkey.json"); //PATH TO FIREBASE SECRET KEY
admin.initializeApp({
credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore()
customcommand = {};
customprefix = {};
customstatus = []
statusOn = null
statusinterval = null
reactionRoles = {};

bot.on('ready',()=>{
    loadfirebase = require('./firebaseloader.js').execute(bot,db)
    .then(a=>{
        //if you still have the old format with string
        if(typeof a.cc == 'string'){
            customcommand = JSON.parse(a.cc);
        }
        else{
            customcommand = a.cc
        }
        if(typeof a.customprefix == 'string'){
            customprefix = JSON.parse(a.customprefix)
        }
        else{
            customprefix = a.customprefix
        }
        if(typeof a.status == 'string'){
            customstatus = JSON.parse(a.status)
        }
        else{
            customstatus = a.status
        }
        if(typeof a.reactionRoles == 'string'){
            reactionRoles = JSON.parse(a.reactionRoles)
        }
        else{
            reactionRoles = a.reactionRoles
        }

        statusOn = a.statusOn
        if(customstatus.length == 0) statusOn = false;
        if(statusOn){
            cmdlist.get('setstatus').execute(bot,customstatus)
        }
        console.log('database ready!')
    })
    console.log('works!')
})
bot.on('message',msg=>{
    //storing variable
    let varstore = {
        user: msg.author.id,
        embed: new discord.MessageEmbed().setColor('#00FFFF'),
        embednopermission: new discord.MessageEmbed().setDescription('You do not have permission to do this!').setColor('#FF0000'),
        embednodm: new discord.MessageEmbed().setDescription('Cannot do this inside DM!').setColor('#FF0000'),
        embederror: new discord.MessageEmbed().setTitle('Error!').setColor('#FF0000'),
    }
    if(msg.author.bot) return;
    try{
        returned = cmdlist.get('handler').execute(msg,cmdlist, varstore,bot,db,customcommand,customprefix,customstatus,reactionRoles);
        if(returned !== undefined){
            switch(returned.type){
                case 'status':
                    customstatus = returned.data
                    statusinterval = null
                    if(statusOn){
                        cmdlist.get('setstatus').execute(bot,customstatus)
                    }
                break
                case 'enablestatus':
                    statusOn = returned.statusOn
                    cmdlist.get('setstatus').execute(bot,customstatus)
                break
                case 'disablestatus':
                    statusOn = returned.statusOn
                break
            }
        }
    } catch(error){
        console.log(error)
    }
})
bot.on('messageReactionAdd',(msg,user)=>{
    if(JSON.stringify(reactionRoles)!=='{}'){ //save some resources dude
        cmdlist.get('reactionAddRemove').execute(msg,bot,user,reactionRoles,true)
    }
})
bot.on('messageReactionRemove',(msg,user)=>{
    if(JSON.stringify(reactionRoles)!=='{}'){
        cmdlist.get('reactionAddRemove').execute(msg,bot,user,reactionRoles,false)
    }
})

bot.login(config.token);