module.exports = {
    name:"del",
    description:"delete message",
    execute(msg,varstore,args,config,Permissions){
        if(msg.channel.type == 'DM'){
            msg.channel.send({embeds:[varstore.embednodm]});
            return;
        }
        if(!msg.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)){
            msg.channel.send({embeds:[varstore.embednopermission]})
            return;
        }
        if(!args[1]) {
            embed = varstore.embed
                .setDescription(`Please specify an amount!\nMax amount: 5000\n\ntype \`${config.PREFIX}help del\` for more info.`)
                .setColor('#FF0000')    
            msg.channel.send({embeds:[embed]})
            return;
        }
        if(isNaN(args[1]) == true){
            embed = varstore.embed
                .setDescription('Please specify a number! not something else')
                .setColor('#FF0000')    
            msg.channel.send({embeds:[embed]})
            return;
        }
        if(parseInt(args[1]) < 0) {
            embed = varstore.embed
                .setDescription('Gabisa mines......')
                .setColor('#FF0000')
            msg.channel.send({embeds:[embed]})
            return;
        }
        if(parseInt(args[1]) > 5000) {
            embed = varstore.embed
                .setDescription('Max 5000......')
                .setColor('#FF0000')
            msg.channel.send({embeds:[embed]})
            return;
        }
        if(parseInt(args[1]) < 100){
            msg.channel.bulkDelete(parseInt(args[1])+1)
            return;
        }

        //delete multiple times(cause api limit)
        let times,remain;
        times = Math.floor(parseInt(args[1])/100);
        remain = (parseInt(args[1])%100)+1;
        function multipledelete(){
            setTimeout(function(){
                msg.channel.bulkDelete(100);
                times--;
                if(times == 0) return;
                multipledelete();
            },7000)
        }
        multipledelete()
        if(remain>0){
            msg.channel.bulkDelete(remain);
        }
    }
}