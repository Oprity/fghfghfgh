module.exports = {
    name: 'ban',
    description: "This command ban a member!",
    execute(message, args){
        if(message.member.roles.cache.has('918525473158467624')){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("**User has been banned**");
        }else{
            message.channel.send(`**You coudn't ban that member!**`);
    }
}
    }
}