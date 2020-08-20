module.exports = {
    pages(arr, itemsPerPage, page = 1) {
        const maxPages = Math.ceil(arr.length / itemsPerPage);
        if (page < 1 || page > maxPages) return null;
        return arr.slice((page -1) * itemsPerPage, page * itemsPerPage);
    }
}

//const functions = require("../structures/function");

//    if (!args[0] || !args[1]) return message.reply("you must provide a keyword and page number!");
//const page = functions.pages(message.guild.members.cache.filter(m => m.user.username.toLowerCase().includes(args[0].toLowerCase())).map(m => m.user.tag), 10, args[1]);

//    if (!page) return message.reply("this page doesn't exist!");

// use this for page