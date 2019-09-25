const Discord = require("discord.js");
const client = new Discord.Client();

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
client.login(process.env.DISCORD_BOT_TOKEN);