const discord = require('discord.js');
const bot = new discord.Client();
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

bot.on('ready',()=>{
    loadfirebase = require('./firebaseloader.js').execute(bot,db)
    .then(a=>{
        customcommand = JSON.parse(a);
    })
    console.log('works!')
    cmdlist.get('setstatus').execute(bot,config) //set bot's status
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
        a = cmdlist.get('handler').execute(msg,cmdlist, varstore,bot,db,customcommand);
        if(a !== undefined){
            if(a.type == 'acr'){
                customcommand = a.data
            }
        }
    } catch(error){
        console.log(error)
    }
})

bot.login(config.token);