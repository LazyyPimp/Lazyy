const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log('Bot: Hosting ' + `${client.users.size}` + ' users, in ' + `${client.channels.size}` + ' channels of ' + `${client.guilds.size}` + ' guilds.');
    client.user.setStatus('idle')
    client.user.setPresence({
        game: {
            name: 'One tequila…. two tequila….. three tequila….. floor…..',
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
	
	
	if(cmd === "8ball") {
	//Just The arrays/list of available answers
var list = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Dont count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful'
];
//The randomizer    Math.floor = rounds to the nearest integers     Math.random = Generates random number between a number between 0 and 1      list.length = Grabs the length of the list 
var rand = Math.floor(Math.random() * list.length);
		
message.reply(list[rand])

}

	
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
	
	
	
	
	if(cmd === "ban) {const args = message.content.split(' ').slice(1); // All arguments behind the command name with the prefix
​
const user = message.mentions.users.first(); // returns the user object if an user mention exists
const banReason = args.slice(1).join(' '); // Reason of the ban (Everything behind the mention)
​
// Check if an user mention exists in this message
if (!user) {
try {
// Check if a valid userID has been entered instead of a Discord user mention
if (!message.guild.members.get(args.slice(0, 1).join(' '))) throw new Error('Couldn\' get a Discord user with this userID!');
// If the client (bot) can get a user with this userID, it overwrites the current user variable to the user object that the client fetched
user = message.guild.members.get(args.slice(0, 1).join(' '));
user = user.user;
} catch (error) {
return message.reply('Couldn\' get a Discord user with this userID!');
}
}
if (user === message.author) return message.channel.send('You can\'t ban yourself'); // Check if the user mention or the entered userID is the message author himsmelf
if (!reason) return message.reply('You forgot to enter a reason for this ban!'); // Check if a reason has been given by the message author
if (!message.guild.member(user).bannable) return message.reply('You can\'t ban this user because you the bot has not sufficient permissions!'); // Check if the user is bannable with the bot's permissions
​
await message.guild.ban(user) // Bans the user
​
const Discord = require('discord.js'); // We need Discord for our next RichEmbeds
const banConfirmationEmbed = new Discord.RichEmbed()
.setColor('RED')
.setDescription(`✅ ${user.tag} has been successfully banned!`);
message.channel.send({
embed: banConfirmationEmbed
}); // Sends a confirmation embed that the user has been successfully banned
​
​
const modlogChannelID = ''; // Discord channel ID where you want to have logged the details about the ban
if (modlogChannelID.length !== 0) {
if (!client.channels.get(modlogChannelID )) return undefined; // Check if the modlogChannelID is a real Discord server channel that really exists
​
const banConfirmationEmbedModlog = new Discord.RichEmbed()
.setAuthor(`Banned by **${msg.author.username}#${msg.author.discriminator}**`, msg.author.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.setColor('RED')
.setTimestamp()
.setDescription(`**Action**: Ban
**User**: ${user.username}#${user.discriminator} (${user.id})
**Reason**: ${reason}`);
client.channels.get(modlogChannelID).send({
embed: banConfirmationEmbedModlog
}); // Sends the RichEmbed in the modlogchannel
}
}

	
	  
	if(cmd === "poll") {
	
	if (!args) return message.reply("You must have something to vote for!")
if (!message.content.includes("?")) return message.reply("Include a ? in your vote!")
message.channel.send(`:ballot_box:  ${message.author.username} started a vote! React to my next message to vote on it. :ballot_box: `);
const pollTopic = await message.channel.send(message.content.slice(2));
await pollTopic.react(`✅`);
await pollTopic.react(`⛔`);
// Create a reaction collector
const filter = (reaction) => reaction.emoji.name === '✅';
const collector = pollTopic.createReactionCollector(filter, { time: 15000 });
collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
collector.on('end', collected => console.log(`Collected ${collected.size} items`));
	}
	
	if (cmd === "botinfo") {
	const embed = {
  "title": "My bot was made in late August, 2019",
  "description": "It is a moderation and fun bot!",
  "url": "https://discordapp.com",
  "color": 16500163,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
    "text": "Lazyy"
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/avatars/556652490733387786/9c840961e0f5a5da91a0bd7b782ab1f9.png?size=2048"
  },
  "image": {
    "url": "https://cdn.discordapp.com/avatars/556652490733387786/9c840961e0f5a5da91a0bd7b782ab1f9.png?size=2048"
  },
  "author": {
    "name": "Made by Lazyy#9825",
    "url": "https://discordapp.com",
    "icon_url": "https://cdn.discordapp.com/avatars/556652490733387786/9c840961e0f5a5da91a0bd7b782ab1f9.png?size=2048"
  },
  "fields": [
    {
      "name": "🤔",
      "value": "The bot is going to be upgrading throughout time."
    },
    {
      "name": "😱",
      "value": "see my friends streams at https://www.twitch.tv/piratiersonline"
    },
    {
      "name": "🙄",
      "value": "Join the server I am on https://discord.gg/3YfpZrG"
    },
    {
      "name": "🥴",
      "value": "Yeet",
      "inline": true
    },
    {
      "name": "🥴",
      "value": "Yote",
      "inline": true
    }
  ]
};
message.channel.send({embed});
	}
	
	
	if (cmd === "help") {
        const embed = new Discord.RichEmbed()
            .setAuthor("💬 Command List.")
	    .addField(" - 8ball", "8ball game")
	    .addField(" - serverinfo" , "Gives the current server info")
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
	
	if (cmd === "serverinfo") {
		function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };
    let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
	 const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("Name", message.guild.name, true)
        .addField("ID", message.guild.id, true)
        .addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
        .addField("Total | Humans | Bots", `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`, true)
        .addField("Verification Level", verifLevels[message.guild.verificationLevel], true)
        .addField("Channels", message.guild.channels.size, true)
        .addField("Roles", message.guild.roles.size, true)
        .addField("Creation Date", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
        .setThumbnail(message.guild.iconURL)
    message.channel.send({embed});
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

            message.channel.send({embed});
        } else {
            message.channel.send(args.join(" "));
        }
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN)
