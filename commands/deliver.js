const { MessageEmbed  } = require('discord.js'); 
const fs = require('fs');


module.exports.run = (client, message, args) => {
    let order = client.channels.cache.find(channel => channel.name.toLowerCase() === args[1])
    if (args[0] !== undefined) return order.send(new MessageEmbed()
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
    .setDescription(args[0])
    .addField("Your Order information\nOrder", args[2],false)
    .addField("Order ID", args[3],false)
    .addField("Predicted Wait time", `${args[4]}+ mins`,false)
    .addField("Orders in the Queue", args[5],false)
    .addField("Ordered From",args[6],false)
    .setColor(0xffd1dc)
);


    return message.channel.send(new MessageEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
        .setDescription(':deliver (@name#0000) (channel) (order) (order id) (time) (in queue) (from) (url)')
        .setColor(0xffd1dc)
    );
}

module.exports.help = {
   name: "deliver",
   description: "ordering your needs"
}

module.exports.requirements = {
   userPerms: [],
   clientPerms: [],
   ownerOnly: false
}