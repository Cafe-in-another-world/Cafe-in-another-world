const { readdirSync} = require('fs');
const { join } = require('path');
const filePath = join(__dirname, "..", "events");

module.exports.run = (client) => {
    const eventsFiles = readdirSync(filePath);
    for (const eventFile of eventsFiles) {
        const event = require(`${filePath}/${eventFile}`);
        const eventName = eventFile.split(".").shift();
        client.on(eventName, event.bind(null, client));
    }

    console.log(`Loaded ${eventsFiles.length} events!`);
}