const {prefix} = require('./config');
const {Client , Collection} = require("discord.js");

const client = new Client({
    disableEveryone: true,
    disabledEvents: ['TYPING_sTART']
});

client.prefix = prefix;
client.commands = new Collection();
client.aliases = new Collection();

const commands = require("./structures/command");
commands.run(client);

const events = require("./structures/event");
events.run(client);

client.login(process.env.token);