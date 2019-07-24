const Discord = require("discord.js"); 
const bot = new Discord.Client(); 
const tokenfile = require("./token.json")
const botconfig = require("./botconfig.json");
const version = require("./package.json")

bot.on('ready')