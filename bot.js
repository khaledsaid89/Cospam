const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("598589461915369472")
setInterval(function() {
channel.send(`khaled is invilde`);
}, 30)
})

client.login(process.env.BOT_TOKEN);