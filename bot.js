const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '#'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.login(process.env.BOT_TOKEN);
//كود الحاله
const devs = ["257804689268146177"];
const adminprefix = ["#"];
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developer.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setgame')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});



//كود اعطاء رتبه اول ما يدخل
client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "3Rb");
   member.addRole (role);
  
})






