const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const prefix = '!'

console.clear();

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.client) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord);
    } else if (command == 'rules'){
        client.commands.get('rules').execute(message, args, Discord);
    } else if (command == 'kick'){
        client.commands.get('kick').execute(message, args, Discord);
    } else if (command == 'ban'){
        client.commands.get('ban').execute(message, args, Discord);
    } else if (command == 'clear'){
        client.commands.get('clear').execute(message, args, Discord); 
    } else if (command == 'console'){
        client.commands.get('console').execute(message, args, Discord);    
    } else if (command == 'mute'){
        client.commands.get('mute').execute(message, args, Discord);   
    } else if (command == 'unmute'){
        client.commands.get('unmute').execute(message, args, Discord);   
    } else if (command = 'play'){
        client.commands.get('play').execute(message, args, Discord);   
    }  else if (command = 'leave'){
        client.commands.get('leave').execute(message, args, Discord);   
    }  else if (command = 'lock'){
        client.commands.get('lock').execute(message, args, Discord);  
    }   else if (command = 'unlock'){
        client.commands.get('unlock').execute(message, args, Discord);  
    }
});

client.on('ready', () => {
    client.user.setActivity('Frash Community', { type: 'PLAYING' });
    console.log(`Logged On ${client.user.tag}`);
    client.user.setStatus('dnd');
});

const token = 'OTAxMzkwNDA5MjA3NTM3Njk1.YXPLPA.buj-xtMy-U0X7qPGn1VRGda2o34'

client.login(token);