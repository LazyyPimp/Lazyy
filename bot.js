const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log('Bot: Hosting ' + `${client.users.size}` + ' users, in ' + `${client.channels.size}` + ' channels of ' + `${client.guilds.size}` + ' guilds.');
    client.user.setStatus('idle')
    client.user.setPresence({
        game: {
            name: 'black people stealing shoes',
            type: "Watching",
            url: "https://discordapp.com/"
        }
    });
});


client.on('message', message => {
  if (message.channel.id === "617772883212500992") {
    message.react('☑')
      .then(() => {
        message.react('🚫')
      });
  }
});

client.on('message', message => {
    if (message.content === 'no') {
        // Create the attachment using Attachment
        const attachment = new Attachment('https://images-ext-2.discordapp.net/external/-AzJYduTJukWsXKFUefd3u3C0HifsWuF1GZI7AqSsQY/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/531917249418625044/544a0c609ae87e1a1de7060e0085d82b.png');
        // Send the attachment in the message channel
        message.channel.send(attachment);
    }
});


client.on('message', message => {
  if (message.content === '_avatar') {
    message.reply(message.author.avatarURL);
  }
});

 
client.on("message", async message => {
    const prefix = "_";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
         if (cmd === "ping") {
        // Send a message
        const msg = await message.channel.send(`🏓 Pinging....`);

        // Edit the message
        msg.edit(`🏓 Pong!\nLatency is ${Math.floor(msg.createdTimestap - message.createdTimestap)}ms\nAPI Latency is ${Math.round(client.ping)}ms`);
    }
	
	if (cmd === "say") {
        // Check if you can delete the message
        if (message.deletable) message.delete();

        if (args.length < 0) return message.reply(`Nothing to say?`).then(m => m.delete(5000));
        
        // Role color
        const roleColor = message.guild.me.highestRole.hexColor;

        // If the first argument is embed, send an embed,
        // otherwise, send a normal message
        if (args[0].toLowerCase() === "embed") {
            const embed = new RichEmbed()
                .setDescription(args.slice(1).join(" "))
                .setColor(roleColor === "#000000" ? "#ffffff" :  roleColorv)
                .setTimestamp()
                .setImage(client.user.displayAvatarURL)
                .setAuthor(message.author.username, message.author.displayAvatarURL);

            message.channel.send(embed);
        } else {
            message.channel.send(args.join(" "));
        }
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN)
