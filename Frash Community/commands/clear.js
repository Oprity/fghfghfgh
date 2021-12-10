module.exports = {
    name: 'clear',
    description: "clear msg",
    async execute(message, args, Discord){
        if(message.member.roles.cache.has('918525473158467624')){
            if(!args[0]) return message.reply("**Please Enter The Amount Of The Message You Want To Clear!**");
            if(isNaN(args[0])) return message.reply("**You Must Delete At Least One Message!*");

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
                message.channel.send('**Chat Cleared!**');
            });
        }
    }
}