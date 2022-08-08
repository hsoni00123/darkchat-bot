var XMLHttpRequest = require('xhr2');
const Discord = require("discord.js");
const myChannelId = '998674986170593283'
const { Client, Intents, WebhookClient, MessageEmbed, webhook,   } = require("discord.js");
const client = new Client({
intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
const Myhook = 'https://discord.com/api/webhooks/1005515547254984784/t5xwvZqHfoYWpKl0-RAokEuaYP3fM_rDOT5QkoGu3Ssp5HOS9tXJpeqs2KA-2yd0mPd7'
const TOKEN = "OTQyMzQ0NjI3MjkyMzY4OTI2.GLHk6T.tcDTHBIVHoj13mxBp7Sph5tNC-T8fUzqRL0caU"



client.on("ready", () => {
  console.log("Are you ready kids, cause I am if you know what i mean");
});

client.on("messageCreate", (message) => {
  if(message.channel.id === myChannelId) {
  if (message.author.bot) return;
  if (message.content.startsWith("")) {
    message.delete(message);
    message.channel.send(message.content);
      console.log("-------------------------------------------------------------------------")
    console.log(message.author.tag + " " + "sent message" + " " + "---" + " " + message.content + " " + "---" + " " + "in darkchat") 
    console.log("-------------------------------------------------------------------------")

    const embed = new MessageEmbed()
	.setTitle('Darkchat - log')
  .setDescription((message.author.tag) + 'sent' + '```' + (message.content) + '```' + "in darkchat" )
	.setColor('#0099ff');
    


  const request = new XMLHttpRequest();
  request.open("POST", Myhook);
  request.setRequestHeader('Content-type', 'application/json');
  const params = {
    username: "NewMoon DarkWeb",
    avatar_url: "https://cdn.discordapp.com/attachments/998675140042817567/1006267341484593352/newmoon.png",
    title: "??? BY COPY-HOOK",
    content: "```" + message.author.tag + " " + "sent message" + " " + "--->"+ " " + '"' + message.content +"```"
  }
  request.send(JSON.stringify(params));

    }
  }
});

client.login(TOKEN)



