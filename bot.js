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
	
	
	
	if(cmd === "report"){

let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = args.slice(1).join(' ');
    let reports = message.guild.channels.find('name', "reports");

    if (!target) return message.reply('please specify a member to report!');
    if (!reason) return message.reply('please specify a reason for this report!');
    if (!reports) return message.reply(`please create a channel called reports to log the reports!`);

    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(target.user.avatarURL)
        .addField('Reported Member', `${target.user.username} with an ID: ${target.user.id}`)
        .addField('Reported By', `${message.author.username} with an ID: ${message.author.id}`)
        .addField('Reported Time', message.createdAt)
        .addField('Reported In', message.channel)
        .addField('Reported Reason', reason)
        .setFooter('Reported user imformation', target.user.displayAvatarURL);

    message.channel.send(`${target} was reported by ${message.author} for ${reason}`).then(msg => msg.delete(2000));
    reports.send(embed);

};

	
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
