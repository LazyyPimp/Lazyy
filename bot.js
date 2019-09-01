const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    // set a "now playing" message (optional)
    client.user.setActivity("Now Playing SOMETHING");
	
	// set the bot's online/idle/dnd/invisible status
	client.user.setStatus("online");
});
    
client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
