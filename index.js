var XMLHttpRequest = require('xhr2');
const Discord = require("discord.js");
const { EmbedBuilder } = require('discord.js');
const myChannelId = '956501065744908318'
const { Client, Intents, WebhookClient, MessageEmbed, webhook,   } = require("discord.js");
const client = new Client({
intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
const Myhook = 'https://discord.com/api/webhooks/1006286640920141857/TCVjMTg6FKibFYaMW1qe7ZjcXC0_QhaA7Zz6s_Jz_dPrV4dWcXq_0zL1Y8LjMTTe0fVf'
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
	.setTitle('NewMoon DarkWeb')
  .setDescription((message.author.tag) + 'sent' + '```' + (message.content) + '```' + "in darkchat" )
	.setColor('#0099ff');
    


  const request = new XMLHttpRequest();
  request.open("POST", Myhook);
  request.setRequestHeader('Content-type', 'application/json');
  const params = {
    username: "NewMoon DarkWeb",
    avatar_url: "https://cdn.discordapp.com/attachments/998675140042817567/1006267341484593352/newmoon.png",
    title: "??? BY COPY-HOOK",
    content: "```"+ "Message sent By" + "-" + message.author.tag + " " + " " + message.content + "```"
   
  }
  const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

channel.send({ embeds: [exampleEmbed] });
  
  request.send(JSON.stringify(params));

    }
  }
});

client.login(TOKEN)

