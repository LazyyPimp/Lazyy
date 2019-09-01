const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});


if(command === "prune") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("**ðŸ”’ Sorry, you can't do that.**");
        var messagesToDelete = args[1];
        if (!args[1]) return message.channel.send("âŒ Please include the amount of Message that you want to **Prune**!");
        if (args[1] > 99) return message.channel.send("âŒ I can't **Prune** more than `99` Messages.");
        message.channel.fetchMessages({limit: messagesToDelete})
        .then(messages => message.channel.bulkDelete(messages.size + 1))
        .catch(error => message.channel.send(`âŒ Sorry ${message.author}, Failed while **Prunning** because: *${error}*.`));
    };

    if(command == "kick") {
        message.delete()
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send("âŒ Please **@mention** your target!");
        let kReason = args.join(" ").slice(0);
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**ðŸ”’ Sorry, you can't do that.**");
        if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("âŒ Failed to **Kick**, need a higher than Roles.");
    
        let kickEmbed = new Discord.RichEmbed()
        .setDescription("**ðŸ‘¢ Kicked**")
        .setColor(0xFF0000)
        .addField("User", `${kUser}`)
        .addField("Moderator", `<@${message.author.id}>`)
        .addField("Reason", `**\`\`\`${kReason}\`\`\`**`);
    
        let adminlog = message.guild.channels.find(`name`, "mod-logs");
        if(!adminlog) return message.channel.send("âŒ Sorry, i need the Logging Channels with name **#mod-logs**.");
        message.guild.member(kUser).kick(kReason);
        adminlog.send(kickEmbed);

client.on("ready", function() {
    bot.user.setGame(`Hi, Im New Bot On Discord!`);
    console.log(`${bot.user.username} is Ready!`);

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
