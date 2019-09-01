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
  if (message.content === '_avatar') {
    message.reply(message.author.avatarURL);
  }
});


client.on('message', message => {
  if (message.content === '_invite') {
    message.reply("https://discord.gg/3YfpZrG");
  }
});



client.on('message', message => {
  if (message.content === '_owner') {
    message.reply("Lazyy#9825");
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
	
	if(cmd === "prune") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("**🔒 Sorry, you can't do that.**");
        var messagesToDelete = args[1];
        if (!args[1]) return message.channel.send("❌ Please include the amount of Message that you want to **Prune**!");
        if (args[1] > 99) return message.channel.send("❌ I can't **Prune** more than `99` Messages.");
        message.channel.fetchMessages({limit: messagesToDelete})
        .then(messages => message.channel.bulkDelete(messages.size + 1))
        .catch(error => message.channel.send(`❌ Sorry ${message.author}, Failed while **Prunning** because: *${error}*.`));
    };

	
	 if(cmd === "kick") {
        message.delete()
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send("❌ Please **@mention** your target!");
        let kReason = args.join(" ").slice(0);
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**🔒 Sorry, you can't do that.**");
        if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("❌ Failed to **Kick**, need a higher than Roles.");
    
        let kickEmbed = new Discord.RichEmbed()
        .setDescription("**👢 Kicked**")
        .setColor(0xFF0000)
        .addField("User", `${kUser}`)
        .addField("Moderator", `<@${message.author.id}>`)
        .addField("Reason", `**\`\`\`${kReason}\`\`\`**`);
    
        let adminlog = message.guild.channels.find(`name`, "mod-logs");
        if(!adminlog) return message.channel.send("❌ Sorry, i need the Logging Channels with name **#mod-logs**.");
        message.guild.member(kUser).kick(kReason);
        adminlog.send(kickEmbed);
    };
	
	
	if (cmd === "help") {
        const embed = new Discord.RichEmbed()
            .setAuthor("💬 Command List.")
            .addField(" - Owner" , "Lazyy#9825")
	    .addField(" - Invite" , "Invites you to my server")
	    .addField(" - avatar", "Show your Avatar.")
            .addField(" - ping", "Shows Ping.")
	    .addField(" - say", "Says whatever you tell it to")
            .addField(" - prune", "Prune up to `99` Messages.")
            .addField(" - kick", "Kick someone from your Server.")
            .setColor(0x00FFEE)
            .setFooter("Lazyy", client.user.displayAvatarURL);
            message.channel.send({embed})
    };


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
