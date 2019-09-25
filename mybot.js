const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", (message) => {
    if (Math.random() < .5)
        message.channel.send("uwu");
    else
        message.channel.send("owo");
});

client.login(process.env.DISCORD_BOT_TOKEN);