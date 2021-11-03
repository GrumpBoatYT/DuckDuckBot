const express = require("express")

const app = express()

const Database = require("@replit/database")

const db = new Database()

const config = require(`./config.json`)

const activities_list = 

 [

 "duckduckgo.com",

 "DuckDuckGo",

 "Quack!",

 "Quacking in the 90s",

 "The Quacker",

 "Quack forever",

 "Never Gonna Stop Saying Quack",

 "Never Gonna Stop Quacking",

 "Quacc",

 "Nice quack",

 "Duck Coveri",

 "Duck Astley",

 "Never Gonna Stop",

 "Duck is the best",

 "Nice browser",

 "Duck = cool",

 "Henlo, im a duck.",

 "Duck Games",

 "Duckposting",

 "r/duck",

 "Nice duck",

 "with my bro",

 'with some ducks'

 ]

app.get("/", (req, res) => {

  res.send("qUaCk")

})

app.listen(3000, () => {

  console.log("Ready!")

})

let Discord = require("discord.js")

let client = new Discord.Client()

const DIG = require("discord-image-generation")

const canvacord = require("canvacord")

const prefix = `${config.prefix}`

const ccown = "860920489257205801"

const ccbirbown = "883919914388308010"

const random = require("something-random-on-discord").Random

const disbut = require('discord-buttons')

let token = `${process.env.cctoken}`

const Topgg = require("@top-gg/sdk")

client.on("ready", () => {

  db.get(`client-uptime-since`)

  db.set(`client-uptime-since`, Math.floor(Date.now()/1000))

 setInterval(() => 

 {

 const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);

 client.user.setActivity(activities_list[index], { type: 'STREAMING', url: "https://www.youtube.com/watch?v=frZHtnn1nA0" });

 }, 3000);

})

client.on("guildMemberAdd", member => {

 if(member.guild.id === '902482018175184896') {

 client.channels.cache.get('902482280193347614').send(`Quack quack! New member: ${member.user.tag}`)

 }

})

client.on("message", async message => {

//Checking for Bots

if(message.author.bot) return;

//Help Main

if(message.content.toLowerCase() === prefix+"help") {

  let cchelp = new Discord.MessageEmbed()

  .setTitle(`${client.user.username} Plugins Commands`)

  .setDescription("Prefix : `"+prefix+"`")

  .addFields(

  { name: "Image generation", value: "<:reply:897664633853313065> help img" },

  { name: "Fun", value: "<:reply:897664633853313065> help fun"},

  { name: "Economy", value: "<:reply:897664633853313065> help economy"},

  { name: "Other", value: "<:reply:897664633853313065> help other"})

  .setColor("#ba6913")

  .setThumbnail("https://media.discordapp.net/attachments/870204194500517918/902040024063819836/duckduckgo.jpeg?width=418&height=418")

  message.channel.send(cchelp)

}

//Help Other

if(message.content.toLowerCase().startsWith(prefix+`help other`)) {

  let helpcc = new Discord.MessageEmbed()

  .setTitle(`Other ${client.user.username} Commands`)

  .setDescription("Prefix `"+prefix+"`")

  .addFields(

  { name: "ping", value: "<:reply:897664633853313065>  Pong! :ping_pong:"},

  { name: "stats", value: "<:reply:897664633853313065> See the bot's stats"}, 

  { name: "invite", value: "<:reply:897664633853313065> Invite me to your server"},

  { name: "whois", value: "<:reply:897664633853313065> Show someone's information"}

  )

  .setThumbnail("https://media.discordapp.net/attachments/870204194500517918/902040024063819836/duckduckgo.jpeg?width=418&height=418")

  .setColor("#ba6913")

  message.channel.send(helpcc)

}

//Help Fun

if(message.content.toLowerCase().startsWith(prefix+"help fun")) {

  let helpfun = new Discord.MessageEmbed()

  .setTitle(client.user.username+" Fun Commands")   

  .setColor("#ba6913")

  .setDescription("Prefix : `"+prefix+"`")

  .addFields(

  { name: "rps", value: "<:reply:897664633853313065> Play rock paper scissors with me!"},

  { name: "meme", value: "<:reply:897664633853313065> Get a random meme"}

  )

  .setThumbnail("https://media.discordapp.net/attachments/870204194500517918/902040024063819836/duckduckgo.jpeg?width=418&height=418")

  message.channel.send(helpfun)

}

//Invite

if(message.content.toLowerCase().startsWith(prefix+`invite`)) {

  let invite = new Discord.MessageEmbed()

  .setAuthor(message.author.tag, message.author.displayAvatarURL())

  .setTitle(`Invite me`)

  .setDescription(`[Click here](${process.env.inviteLink}) to invite me to your server! :duck:`)

  .setThumbnail("https://media.discordapp.net/attachments/870204194500517918/902040024063819836/duckduckgo.jpeg?width=418&height=418")

  .setColor(`RED`)

  message.channel.send(invite)

}

//Ping

if(message.content.toLowerCase().startsWith(prefix+"ping")) {

  message.channel.send("Pong :ping_pong:! Latency : `"+client.ws.ping+"ms`")

}

//Ping but Quack

if(message.content.toLowerCase().startsWith(prefix+"quack")) {

  message.channel.send("Quack :duck:! Latency : `"+client.ws.ping+"ms`")

}

//Help Image generation

if(message.content.toLowerCase().startsWith(prefix+"help img")) {

  let helpimg = new Discord.MessageEmbed()

  .setTitle("DuckDuckGo Image Generation Commands")

  .setDescription("Prefix : `"+prefix+"`")

  .addFields(

  { name: "gay", value: "<:reply:897664633853313065> Make your friend Gay!" },

  { name: "triggered", value: "<:reply:897664633853313065> Trigger someone!"})

  .setThumbnail("https://media.discordapp.net/attachments/870204194500517918/902040024063819836/duckduckgo.jpeg?width=418&height=418")

  .setColor("#ba6913")

  message.channel.send(helpimg)

}

//Help Economy

if(message.content.toLowerCase().startsWith(prefix+"help economy")) {

  let helpeco = new Discord.MessageEmbed()

  .setTitle("DuckDuckGo Economy Commands")

  .setDescription("Prefix `"+prefix+"`")

  .setColor("#ba6913")

  .addFields(

  { name: "daily", value: "<:reply:897664633853313065> Claim a kit every day"},

  { name: "deposit", value: "<:reply:897664633853313065> Deposit your money to your bank"},

  { name: "withdraw", value: "<:reply:897664633853313065> Withdraw your money from your bank to your wallet."},

  { name: "work", value: "<:reply:897664633853313065> Work for money"},

  { name: "balance", value: "<:reply:897664633853313065> Show your money and bank"})

  .setThumbnail("https://media.discordapp.net/attachments/870204194500517918/902040024063819836/duckduckgo.jpeg?width=418&height=418")

  message.channel.send(helpeco)

}

//Gay

if (message.content.toLowerCase().startsWith(prefix+'gay')) {

 let mengay = message.mentions.users.first()

 if(!mengay) return message.channel.send("Mention someone!")

 else{

 let avatar = mengay.displayAvatarURL({ dynamic: false, format: 'png' });

 // Make the image

 let img = await new DIG.Gay().getImage(avatar)

 // Add the image as an attachement

 let attach = new Discord.MessageAttachment(img, "Gay.png");;

 message.channel.send(attach)

 }

}

//Triggered

if (message.content.toLowerCase().startsWith(prefix+"triggered") || message.content.toLowerCase().startsWith(prefix+'trigger')) {

  let triggerboi = message.mentions.users.first()

  if(!triggerboi) message.channel.send("Mention someone to trigger!")

  else{

    let avatar = triggerboi.displayAvatarURL({

    dynamic: false,

    format: "png"

  });

 

  let m = await message.channel.send("Generating ...")

  let image = await canvacord.Canvas.trigger(avatar);

  let attachment = new Discord.MessageAttachment(image, "triggered.gif");

  m.delete({ timeout : 3000});

  return message.channel.send(attachment);

  }}

//Say

if(message.content.toLowerCase().startsWith("&say")) {

  if(message.member.id === ccown || message.member.id === ccbirbown) {

    message.delete()

    const whattosay = message.content.slice("".length).trim().split(/ +/);

    whattosay.shift().toLowerCase().split(" ")[0]

    message.channel.send(whattosay.join(" "))

    }else{

      console.log(`${message.author.tag}(${message.author.id}) tried to be a sussy amogus and used &say`)

    }

  }

//Balance

if(message.content.toLowerCase().startsWith(prefix+`bal`) || message.content.toLowerCase().startsWith(prefix+`balance`)) {

  let whobal = message.mentions.users.first()

  if(!whobal) {

  let balance = await db.get(`money_${message.author.id}`)

  let bank = await db.get(`bank_${message.author.id}`)

  if(bank === null) bank = 0

  if(balance === null) balance = 0

  let balEmbed = new Discord.MessageEmbed()

  .setAuthor(message.author.tag, message.author.displayAvatarURL())

  .setTitle(`Your Balance`)

  .setDescription(`**__Wallet:__** ${balance}\n**__Bank:__** ${bank}`)

  .setColor(`#ba6913`)

  .setThumbnail("https://media.discordapp.net/attachments/870204194500517918/902040024063819836/duckduckgo.jpeg?width=418&height=418")

  message.channel.send(balEmbed)

  }else{

    let hmmbal = await db.get(`money_${whobal.id}`)

    let hmmbank = await db.get(`bank_${whobal.id}`)

    if(hmmbal === null) hmmbal = 0

    if(hmmbank === null) hmmbank = 0

    let bembed = new Discord.MessageEmbed()

    .setAuthor(whobal.tag, whobal.displayAvatarURL())

    .setTitle(`${whobal.username}'s Balance`)

    .setDescription(`**__Wallet:__** ${hmmbal}\n**__Bank:__** ${hmmbank}`)

    .setColor("#ba6913")

    .setThumbnail(`https://media.discordapp.net/attachments/870204194500517918/902040024063819836/duckduckgo.jpeg?width=418&height=418`)

    message.channel.send(bembed)

  }

}

//Daily

if(message.content.toLowerCase().startsWith(prefix+"daily")) {

 const check = await db.get(`dailyCheck_${message.author.id}`)

 const timeout = 86400000;

 if(check !== null && timeout - (Date.now() - check) > 0) {

const ms = require("pretty-ms")

const timeLeft = ms(timeout - (Date.now() - check))

message.channel.send(`You already claimed your daily. Please come back after ${timeLeft} to claim next daily!`)

 } else {

 let r = [363, 295, 282, 524, 423, 135, 100, 421, 302, 392, 312, 284, 464, 472, 182, 189, 190, 193, 196, 380, 241, 245, 209, 320]

 let reward = r[Math.floor(Math.random() * r.length)]

 let currentBalance = await db.get(`money_${message.author.id}`)

 message.channel.send(`You just claimed your daily and earn ${reward}!`)

 await db.set(`money_${message.author.id}`, currentBalance + reward )

 await db.set(`dailyCheck_${message.author.id}`, Date.now())

 }

}

//Rps

if(message.content.toLowerCase() === prefix+"rps") {

  let a = [":x: Please provide a choice! Example : `&rps paper`", ':x: Please provide a choice! Example : `&rps rock`', ":x: Please provide a choice! Example : `&rps scissors`"]

  message.channel.send(a[Math.floor(Math.random() * a.length)])

}

if(message.content.toLowerCase() === prefix+"rps rock") {

  let a = new Discord.MessageEmbed()

  .setColor("GREEN")

  .setTitle("Rock paper scissors")

  .setDescription("You : :rock:\nMe : :rock:\nIt's a tie :duck:!")

  let b = new Discord.MessageEmbed()

  .setColor("RED")

  .setTitle("Rock paper scissors")

  .setDescription("You : :rock:\nMe : :newspaper:\nI win :duck:!")

  let c = new Discord.MessageEmbed()

  .setColor("GREEN")

  .setTitle("Rock paper scissors")

  .setDescription("You :rock:\nMe : :scissors:\nYou win :duck:!")

  let d = [a, b, c]

  message.channel.send(d[Math.floor(Math.random() * d.length)])

}

if(message.content.toLowerCase() === prefix+"rps paper") {

  let a = new Discord.MessageEmbed()

  .setColor("GREEN")

  .setTitle("Rock paper scissors")

  .setDescription("You : :newspaper:\nMe : :newspaper:\nIt's a tie :duck:!")

  let b = new Discord.MessageEmbed()

  .setColor("RED")

  .setTitle("Rock paper scissors")

  .setDescription("You : :newspaper:\nMe : :scissors:\nI win :duck:!")

  let c = new Discord.MessageEmbed()

  .setColor("GREEN")

  .setTitle("Rock paper scissors")

  .setDescription("You :newspaper:\nMe : :rock:\nYou win :duck:!")

  let d = [a, b, c]

  message.channel.send(d[Math.floor(Math.random() * d.length)])

}

if(message.content.toLowerCase() === prefix+"rps scissors") {

  let a = new Discord.MessageEmbed()

  .setColor("GREEN")

  .setTitle("Rock paper scissors")

  .setDescription("You : :scissors:\nMe : :scissors:\nIt's a tie :duck:!")

  let b = new Discord.MessageEmbed()

  .setColor("RED")

  .setTitle("Rock paper scissors")

  .setDescription("You : :scissors:\nMe : :rock:\nI win :duck:!")

  let c = new Discord.MessageEmbed()

  .setColor("GREEN")

  .setTitle("Rock paper scissors")

  .setDescription("You :scissors:\nMe : :newspaper:\nYou win :duck:!")

  let d = [a, b, c]

  message.channel.send(d[Math.floor(Math.random() * d.length)])

}

//Meme

if(message.content.toLowerCase().startsWith(prefix+'meme')) {

let data = await random.getMeme()

 message.channel.send(data)

}

if(message.content.toLowerCase().startsWith(prefix+"rps") && message.content.toLowerCase() !== prefix+"rps"&& message.content.toLowerCase() !== prefix+"rps rock" && message.content.toLowerCase() !== prefix+"rps paper" && message.content.toLowerCase() !== prefix+"rps scissors") {

  let a = ["rock", "paper", "scissors"]

  let sus = new Discord.MessageEmbed()

  .setTitle("Please provide actual choice")

  .setColor("RED")

  .addFields(

  { name: "Example", value: `<:reply:897664633853313065> ${prefix}rps ${a[Math.floor(Math.random() * a.length)]}` })

  .setTimestamp()

  message.channel.send(sus)

}

if(message.content.toLowerCase() === "ratio" && message.guild.id === "860923295650414593") {

  message.react("⬇️")

}

//Uptime

if(message.content.toLowerCase().startsWith(prefix+"stat")||message.content.toLowerCase().startsWith(prefix+"info")) {

  let tickTime = await db.get(`client-uptime-since`)

  let days = Math.floor(client.uptime / 86400000);

  let hours = Math.floor(client.uptime / 3600000) % 24;

  let minutes = Math.floor(client.uptime / 60000) % 60;

  let seconds = Math.floor(client.uptime / 1000) % 60;

  let uptime = new Discord.MessageEmbed()

  .setTitle(`${client.user.username}'s Informations`)

  .addFields(

    { name: `:clock1: Uptime`, value: `${days}d, ${hours}h, ${minutes}m, ${seconds}s`, inline: true },

    { name: `:calendar_spiral: Up Since`, value: `<t:${tickTime}:F>\n(<t:${tickTime}:R>)`, inline: true },

    { name: `:computer: Developer Count`, value: `2 Developers`},

    { name: `:homes: Server Count`, value: `${client.guilds.cache.size} servers`, inline: true},

    { name: `:globe_with_meridians: Latency`, value: `${client.ws.ping} ms`, inline: true}

  )

  .setColor("#ba6913")

  .setThumbnail("https://media.discordapp.net/attachments/870204194500517918/902040024063819836/duckduckgo.jpeg?width=418&height=418")

  .setTimestamp()

  message.channel.send(uptime)

  }

if(message.content.toLowerCase() === "<@!896962887149572117>" || message.content.toLowerCase() === "<@!896962887149572117> prefix" || message.content.toLowerCase() === "<@!896962887149572117>prefix") {

  message.channel.send("My prefix : `"+prefix+"`")

}

//lol duckduckgo's lake

if(message.content === "&ducklake" && message.member.id === ccown) {

  message.delete()

  let mylake = new Discord.MessageEmbed()

  .setTitle("So this is my lake, join it!")

  .setColor("#edc709")

  .setDescription(process.env.ducklakeinviteLink)

  .setThumbnail("https://media.discordapp.net/attachments/870204194500517918/902040024063819836/duckduckgo.jpeg?width=418&height=418")

  message.channel.send(mylake)

}

if(message.content.toLowerCase().startsWith(prefix+"whois")) {

let user = message.mentions.users.first() || message.author

let member = message.mentions.members.first() || message.member

let c = ["#edc709", "BLUE", "RED", "GREEN"]

let e = new Discord.MessageEmbed()

.setColor(c[Math.floor(Math.random() * c.length)])

.setTimestamp()

.addFields({

name: "Joined this server at",

value: member.joinedAt

}, {

name: "Account created at",

value: user.createdAt

}, {

name: "Name and tag",

value: user.tag

}, {

name: "The user ID",

value: user.id

})

.setThumbnail(user.displayAvatarURL({ dynamic: true }))

message.channel.send(e);

}

if(message.channel.id === "902758886963032066" && message.content.toLowerCase() === "!accept") {

  message.delete()

  message.member.roles.add("902482929731657788")

}

if(message.channel.id === `902758886963032066` && message.content.toLowerCase() !== "!accept") {

  message.delete()

}

if(message.content.toLowerCase().startsWith(prefix+`search`)||message.content.toLowerCase().startsWith(prefix+` search`)) {

  const search = message.content.slice("".length).trim().split(/ +/)

  if (!search.length) message.channel.send(`${message.author}, Please provide me what to search!`)

  search.shift().toLowerCase().split(" ")[0]

  message.channel.send("https://duckduckgo.com/?q="+search.join("+")+"&t=ffab&ia=web")

}

if(message.content.toLowerCase().startsWith(prefix+"dep") || message.content.toLowerCase().startsWith(prefix+`deposit`)) {

  let wallet = await db.get(`money_${message.author.id}`)

  let bank = await db.get(`bank_${message.author.id}`)

  const args = message.content.split(' ').splice(1);

  if(!args[0]) return message.channel.send('Please include a Number of money to Deposit!');

  if(isNaN(args[0])) return message.channel.send('Please include a valid Number!')

  if (Math.floor(args[0]) <= 0) return message.channel.send(`${message.author}, You can't Deposit nothing or less than nothing!`)

  if (wallet < args[0]) {

    message.channel.send(`${message.author}, You can't deposit this much money!\nYou only have ${wallet} coins!`)

  } else {

    await db.set(`money_${message.author.id}`, wallet - Math.floor(args[0]))

    await db.set(`bank_${message.author.id}`, bank + Math.floor(args[0]))

    let embed = new Discord.MessageEmbed()

    .setAuthor(message.author.tag, message.author.displayAvatarURL())

    .setTitle(`Money Deposited!`)

    .setDescription(`${Math.floor(args[0])} coins deposited!\n__**Wallet:**__ ${wallet - Math.floor(args[0])}\n__**Bank:**__ ${bank + Math.floor(args[0])}`)

    .setColor(`GREEN`)

    .setTimestamp()

    message.channel.send(embed)

  }

}

if(message.content.toLowerCase() === prefix+"test") {

if(message.member.id === "860920489257205801"){

  let test = new Discord.MessageEmbed()

  .setTitle("test")

  .setDescription(":ok_hand:")

  .setColor("GREEN")

  message.channel.send(test)

}else{

  message.channel.send("Test what?")

}

}

if(message.content.toLowerCase().startsWith(prefix+"wd") || message.content.toLowerCase().startsWith(prefix+`withdraw`)) {

  let wallet = await db.get(`money_${message.author.id}`)

  let bank = await db.get(`bank_${message.author.id}`)

  const args = message.content.split(' ').splice(1);

  if(!args[0]) return message.channel.send('Please include a Number of money to Withdraw!');

  if(isNaN(args[0])) return message.channel.send('Please include a valid Number!')

  if (Math.floor(args[0]) <= 0) return message.channel.send(`${message.author}, You can't Withdraw nothing or less than nothing!`)

  if (bank < args[0]) {

    message.channel.send(`${message.author}, You can't withdraw this much money!\nYou only have ${bank} coins in your bank!`)

  } else {

    await db.set(`money_${message.author.id}`, wallet + Math.floor(args[0]))

    await db.set(`bank_${message.author.id}`, bank - Math.floor(args[0]))

    let embed = new Discord.MessageEmbed()

    .setAuthor(message.author.tag, message.author.displayAvatarURL())

    .setTitle(`Money Withdrawed!`)

    .setDescription(`${Math.floor(args[0])} coins withdrawed!\n__**Wallet:**__ ${wallet + Math.floor(args[0])}\n__**Bank:**__ ${bank - Math.floor(args[0])}`)

    .setColor(`GREEN`)

    .setTimestamp()

    message.channel.send(embed)

  }

}

if(message.content.toLowerCase().startsWith(prefix+"work")) {

 const check = await db.get(`workCheck_${message.author.id}`)

 const timeout = 3600000;

 if(check !== null && timeout - (Date.now() - check) > 0) {

const ms = require("pretty-ms")

const timeLeft = ms(timeout - (Date.now() - check))

let fail = new Discord.MessageEmbed()

.setTitle("You've already worked!")

.setColor("RED")

.setDescription(`You are very tired so you need to wait ${timeLeft} to work again!`)

.setTimestamp()

message.channel.send(fail)

 } else {

 let r = [304, 192, 941, 245, 712, 816, 245, 1000, 891, 385, 834, 103, 928, 135, 821, 352, 184, 145, 812, 315]

 let reward = r[Math.floor(Math.random() * r.length)]

 let recask = [

 "cleaned the world",

 "cooked a pie",

 "cooked a taco",

 "made a baguette",

 "cured someone",

 "killed some monsters",

 "defeated corona",

 "searched for memes on DuckDuckGo",

 "posted a meme",

 "helped amogus turns into a normal person",

 "maked Rick Astley can't rickroll anymore"

 ]

 let currentBalance = await db.get(`money_${message.author.id}`)

 let success = new Discord.MessageEmbed()

 .setTitle("Sucessfully worked!")

 .setColor("GREEN")

 .setDescription(`You ${recask[Math.floor(Math.random() * recask.length)]} and earn ⏣${reward}!`)

 .setTimestamp()

 message.channel.send(success)

 await db.set(`money_${message.author.id}`, currentBalance + reward )

 await db.set(`workCheck_${message.author.id}`, Date.now())

 }

}

if(message.content.toLowerCase().startsWith(prefix+"vote")){

  let vembed = new Discord.MessageEmbed()

  .setTitle("Vote DuckDuckGo")

  .setDescription(`[Click here](https://top.gg/bot/896962887149572117) to vote me!`)

  .setThumbnail('https://images-ext-2.discordapp.net/external/_wSjthdE-o2zo6eV1MKWuWnAFp5ium_1C2sqoR510cM/%3Fwidth%3D418%26height%3D418/https/media.discordapp.net/attachments/870204194500517918/902040024063819836/duckduckgo.jpeg?width=80&height=80')

  message.channel.send(vembed)

}

if(message.content.toLowerCase().startsWith(`${prefix}coinflip`)){

  let wallet = await db.get(`money_${message.author.id}`)

  const args = message.content.split(' ').splice(1);

  if(!args[0]) return message.channel.send('Please provide a number to flip the coin!');

  if(isNaN(args[0])) return message.channel.send('Please include a valid mumber!')

  if (Math.floor(args[0]) <= 0) return message.channel.send(`${message.author} You can't bet with nothing or less than nothing!`)

  if (wallet < 2) return message.channel.send(`${message.author} You need at least 2 coins to flip the coin!`)

  if (wallet < args[0]) {

    return message.channel.send(`${message.author} You only have ${wallet} coins!`)

  }else{

    let coin = ["Heads", 'Tails']

    let flip = [1, 2]

    let flipChance = flip[Math.floor(Math.random() * flip.length)]

    if(flipChance === 1) {

    message.channel.send(`You choose ${coin[Math.floor(Math.random() * coin.length)]} with ${args[0]} coins\nThe coin spins and you lost it!`)

    await db.set(`money_${message.author.id}`, wallet - args[0])

    if(flipChance === 2) {

    let ok = args[0] * 2

    message.channel.send(`You choose ${coin[Math.floor(Math.random() * coin.length)]} with ${args[0]} coins\nThe coin spins and you won ${ok} coins!`)

    await db.set(`money_${message.author.id}`, wallet + ok)

}

}

}

}

})

client.login(token)
