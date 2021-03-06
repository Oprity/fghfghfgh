module.exports = {
    name: 'mute',
    description: "This unmutes a member",
    execute(message, args) {
        const target = message.mentions.users.first();
        if (target) {
 
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Muted');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Member');
 
            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`**<@${memberTarget.user.id}> has been unmuted**`);
 
} else {
            message.channel.send('**Cant find that member!**');
        }
    }
}