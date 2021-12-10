module.exports = {
    name: 'help',
    description: "help cmd",
    execute(message, args, Discord){
        if(message.member.roles.cache.has('918525473158467624')){
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#da2f1b')
            .setTitle('Frash Community Help Commands!')
            .addFields(
                {name: '1', value: '!help (show you help cmd)'},
                {name: '2', value: '!clear (clear the chat)'},
                {name: '3', value: '!ban (ban user)'},
                {name: '4', value: '!kick (kick user)'},
                {name: '5', value: '!rules (show you the rules of the server)'},
                {name: '6', value: '!console (clear the console of the bot)'},
                {name: '7', value: 'more commands soon!'}
            
            )
            message.channel.send({embeds: [newEmbed]});
            }  else{
                message.channel.send('**Unknow Command!**');
        }
    }
}