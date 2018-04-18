const Discord = require ('discord.js');
const cli0ent = new Discord.Cliet();

client on('ready', () => {
console.log(I' am ready!');
});

client.on('massage', massage => {
if (massage.content === 'ping') {
massage.reply('pong');
}
});

//THISS MUST BE THIS WAY
client.login(procces.env.BOT_TOKEN);
