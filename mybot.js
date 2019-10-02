const client = require("./lib/discord-client.js");
const config = require("./config.json");

let eGirlModeOn = false;

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", (msg) => {
    if (msg.author.bot) return;
    console.log("i hear u");

    if (msg.content.startsWith(config.prefix)) {
        const command = msg.content.subStr(config.prefix.length);
        switch (command.toLowerCase()) {
            case "toggle egirlmode":
                eGirlModeOn = !eGirlModeOn;
                if (!eGirlModeOn)
                    msg.channel.send(":anguished:");
                break;
            default:
                msg.channel.send("Nani ><");
        }
    }

    flirt(msg);
});

const flirt = (msg) => {
    if (!eGirlModeOn) return;

    if (Math.random() < .5) {
        msg.channel.send("uwu");
        console.log("uwu")
    }
    else {
        msg.channel.send("owo");
        console.log("owo")
    }
}