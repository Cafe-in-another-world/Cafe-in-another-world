const { MessageEmbed  } = require('discord.js'); 
const fs = require('fs');


module.exports.run = (client, message, args) => {
    let order = client.channels.cache.find(channel => channel.name.toLowerCase() === 'orders')
    if (args[0] !== undefined) return [order.send(new MessageEmbed()
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
    .addField("Order list", args,false)
    .addField("Ordered From",`#${message.channel.name}`,false)
    .setColor(0xffd1dc)
), message.author.send(new MessageEmbed()
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
    .setDescription('Thank you for your order, however we are currently very busy, meaning your order may be delayed. We thank you for your patience while our staff work to meet your demand.')
    .setColor(0xffd1dc)
)];


    return message.channel.send(new MessageEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
        .setDescription('you must specified a food')
        .setColor(0xffd1dc)
    );
}

module.exports.help = {
   name: "order",
   description: "ordering your needs"
}

module.exports.requirements = {
   userPerms: [],
   clientPerms: [],
   ownerOnly: false
}