module.exports = {
    name: 'lock',
    description: "lock channel",
    execute(message, args, Discord){
        const role = message.guild.roles.cache.find(role => role.name === 'Member') 
    message.channel.updateOverwrite(role2,{ 'SEND_MESSAGES': true}) 
    message.channel.send("Successfully locked **${message.channel.name}**")
    }
}