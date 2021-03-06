const { owners } = require("../config");

module.exports = (client, message) => {
    if (message.author.bot) return;

    const args = message.content.split(/ +/g);
    const command = args.shift().slice(client.prefix.length).toLowerCase();
    const cmd = client.commands.get(command) || client.aliases.get(command);

    if (!message.content.toLowerCase().startsWith(client.prefix)) return;

    if (!cmd) return;
    if (message.channel.type === 'dm') return;
    if (!message.guild.me.permissions.has(["SEND_MESSAGES"])) return;

    if (cmd.requirements.ownerOnly && !owners.includes(message.author.id)) 
        return message.reply("only the bot owner can use this command!");

    if (cmd.requirements.userPerms && !message.member.permissions.has(cmd.requirements.userPerms))
        return message.reply(`you must have the following permissions: ${missingPerms(message.member, cmd.requirements.userPerms)}`);
    
    if (cmd.requirements.clientPerms && !message.guild.me.permissions.has(cmd.requirements.clientPerms))
        return message.reply(`I am missing the followinng permissions: ${missingPerms(message.guild.me, cmd.requirements.clientPerms)}`);
    
    cmd.run(client, message, args);
}

const missingPerms = (member, perms) => {
    const missingPerms = member.permissions.missing(perms)
        .map(str => `\`${str.replace(/_/g, '').toLowerCase().replace(/\b(\w)/g, char => char.toUpperCase())}\``);
    
    return missingPerms.length > 1 ?
        `${missingPerms.slice(0, -1).join(", ")} and ${missingPerms.slice(-1)[0]}` :
        missingPerms[0];
}