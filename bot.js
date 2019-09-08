const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("620355504077537332")
setInterval(function() {
channel.send(`yes i can ye`);
}, 30)
})

client.login(process.env.BOT_TOKEN);