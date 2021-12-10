module.exports = {
    name: 'lock',
    description: "lock channel",
    execute(message, args, Discord){
        const role = guild.roles.find("name", "Member");

        message.channel.overwritePermissions(role,{ 'SEND_MESSAGES': false })
    }
}