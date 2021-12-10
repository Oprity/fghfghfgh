module.exports = {
    name: 'console',
    description: "Clear Console",
    execute(message, args, Discord){
        if(message.member.roles.cache.has('918525473158467624')){
            console.clear();
            message.reply('**Console Cleared!**');
            console.log('Console Cleared!');

        } else{
            message.reply('**Unknow Command!**');
        }
    }
}