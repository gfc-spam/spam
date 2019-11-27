const Discord = require('discord.js');
const client = new Discord.Client();
console.log("⪧ SPAMMER ⪦");

client.login(process.env.TOKEN);

client.on("ready", () => {
let channel =     client.channels.get("646730428530556938")
setInterval(function() {
channel.send("| Loading Credits for gaming factor... | ...جارِ تحميل الكريديتس لجيمينج فاكتور |");
}, 30)
})

client.on("message", async message => {
    const prefix = "-";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member.roles.has("647529309464166451")) return;

    

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    client.channels.get("649287923916734464").send("*"+message.member.username+"* | ` "+cmd+" ` | ` "+args.join(" ")+" ` .")

    if (cmd === "ping") {
        const msg = await message.channel.send(`🏓 Pinging....`);
        msg.edit(`🏓 Pong!\nYour ping is : ${Math.round(client.ping)}ms`);
    }

    if (cmd === "say") {
            message.channel.send(args.join(" "));
            
    }
    if (cmd === "spsay") {
        if (args[0].toLowerCase() === process.env.INDEX ) {
            message.channel.send(args.slice(1).join(" "));
        }
            
    }
    if (cmd === "scsay") {
        if (message.deletable) message.delete();
            message.channel.send(args.join(" "));
            
    }
    if (cmd === "spscsay") {
        if (message.deletable) message.delete();
        if (args[0].toLowerCase() === process.env.INDEX ) {
            message.channel.send(args.slice(1).join(" "));
        }
        
    }
});
