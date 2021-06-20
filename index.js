const Discord = require('discord.js');
const bot = new Discord.Client();
const token = require("./token.json")


bot.on("ready", async () =>{
    bot.user.setStatus("online");
    bot.user.setActivity("abonne toi");
})



bot.login(process.env.token);