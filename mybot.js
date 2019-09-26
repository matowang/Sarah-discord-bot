const client = require("./lib/discord-client.js");

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", (message) => {
    if (message.author.bot) return;
    console.log("i hear u");
    if (Math.random() < .5) {
        message.channel.send("uwu");
        console.log("uwu")
    }
    else {
        message.channel.send("owo");
        console.log("owo")
    }
});