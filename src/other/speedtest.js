module.exports = {
    name:"speedtest",
    description:"test bot's internet speed",
    execute(msg,varstore){
        const FastSpeedtest = require('fast-speedtest-api');

        let speedtest = new FastSpeedtest({
            token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm", // required
            verbose: false, // default: false
            timeout: 10000, // default: 5000
            https: true, // default: true
            urlCount: 5, // default: 5
            bufferSize: 8, // default: 8
            unit: FastSpeedtest.UNITS.Mbps // default: Bps
        });

        let embed = varstore.embed;

        speedtest.getSpeed().then(s=>{
            embed = embed
            .setTitle(`${s} Mbps`)
            .setDescription(`or ${s/8} MBps`)
            .setAuthor('Speedtest', 'https://media.discordapp.net/attachments/757453567710855211/766274518515712080/20201015_192107.png?width=519&height=475')
            .setFooter('powered by Fast.com', 'https://media.discordapp.net/attachments/757453567710855211/766274518515712080/20201015_192107.png?width=519&height=475');

            //color based on speed
            if(s < 400) {embed = embed.setColor('#ff8000')}
            if(s >= 400 && s < 410) {embed=embed.setColor('#ffaa00')}
            if(s >= 410 && s < 420) {embed=embed.setColor('#ffd500')}
            if(s >= 420 && s < 430) {embed=embed.setColor('#ffff00')}
            if(s >= 430 && s < 440) {embed=embed.setColor('#d4ff00')}
            if(s >= 440 && s < 450) {embed=embed.setColor('#aaff00')}
            if(s >= 450 && s < 460) {embed=embed.setColor('#80ff00')}
            if(s >= 460 && s < 470) {embed=embed.setColor('#55ff00')}
            if(s >= 470 && s < 480) {embed=embed.setColor('#2bff00')}
            if(s >= 480 && s < 490) {embed=embed.setColor('#00ff00')}
            if(s >= 490 && s < 500) {embed=embed.setColor('#00ff2a')}
            if(s >= 500 && s < 510) {embed=embed.setColor('#00ff55')}
            if(s >= 510 && s < 520) {embed=embed.setColor('#00ff80')}
            if(s >= 520 && s < 530) {embed=embed.setColor('#00ffaa')}
            if(s >= 530 && s < 540) {embed=embed.setColor('#00ffd5')}
            if(s >= 540) {embed=embed.setColor('#00FFFF')}

            msg.channel.send({embeds:[embed]})
        }).catch(e=>{
            msg.channel.send({embeds:[varstore.embederror.setDescription(`\`\`\`${e}\`\`\``)]})
        })
    }
}