const Discord = require("discord.js");
const RichEmbed = require("discord.js");
const { Client, Util } = require('discord.js');
const client = new Discord.Client();
const prefix = "#";
 
const devs = ["257804689268146177"]
 
const adminprefix = "Sy-";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
    if (message.content === (adminprefix + "Percie")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else    
    if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done :>`)
  return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
  } else
    if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else    
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/Mrx-Dev");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
    if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`:warning:️ ** restarting by ${message.author.username}**`);
        console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`⚠️ Bot restarting... ⚠️`);
        console.log("===============================================\n\n");
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`Bot Successfully Restarted`);
    }
 
  });
client.login(process.env.BOT_TOKEN);



//كود اعطاء رتبه اول ما يدخل
client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "3Rb");
   member.addRole (role);
  
})



//كود يعلمك كم بوت في السيرفر
client.on('message', message => { if(!message.channel.guild) return; if(message.content.startsWith(prefix + 'allbots')) { if (message.author.bot) return; let i = 1; const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`); const embed = new Discord.RichEmbed() .setDescription(`**${message.guild.members.filter(m=>m.user.bot).size} Bots In ${message.guild.name}** ${botssize.join('\n')}`) .setFooter(client.user.username, client.user.avatarURL) .setTimestamp(); message.channel.send(embed) } })



//كود الافتار
client.on('message', message => {
    if (message.content.startsWith("#avatar")) {
        if (message.author.bot) return
        var mentionned = message.mentions.users.first();
    var omar;
      if(mentionned){
          var omar = mentionned;
      } else {
          var omar = message.author;
         
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor('Avatar Link :')
        .setTitle('Click Here')
        .setURL(`${omar.avatarURL}`)
        .setImage(`${omar.avatarURL}`)
        .setFooter('BayBot',client.user.avatarURL)
      message.channel.sendEmbed(embed);
    }
});



//كود ملومات السيرفر
client.on('message', async function (message)  {
if(message.content.startsWith(prefix+"server")) {
const vlevel = ['None', 'Low (Must have verified email)', 'Medium (Must be register for 5 mineuts)', 'High (Need to wait 10 minutes)', 'Very High (Need verified phone on account)']
const members = await message.guild.members.filter(m=> m.presence.status === 'online').size + message.guild.members.filter(m=> m.presence.status === 'idle').size + message.guild.members.filter(m=> m.presence.status === 'dnd').size  
message.channel.send(new discord.RichEmbed() 
.setAuthor(`${message.guild.name} [Server Icon URL]`, message.guild.iconURL)
.setURL(message.guild.iconURL)
.addField('🆔 ايدي السيرفر', message.guild.id, true)
.addField('👑 اونر السيرفر', message.guild.owner, true)
.addField('🗺 منطقة', message.guild.region, true)
.addField(`👥 الاعضاء [${message.guild.memberCount}]`, `${members} online` ,true)
.addField(`💬 القنوات`, `**${message.guild.channels.filter(c => c.type === 'category').size}** الاقسام | **${message.guild.channels.filter(c=> c.type === 'text').size}**روم كتابي | **${message.guild.channels.filter(c=> c.type === 'voice').size}** روم صوتي` ,true)
.addField(`💠 مستوى التحقق`, vlevel[message.guild.verificationLevel] ,true)
.addField(`👔 الرتب`, message.guild.roles.size ,true)
.addField(`📆 تم انشأوها`, message.guild.createdAt ,true)
)
}
})


















client.on('message', msg => {

    if (msg.content == '#join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('white_check_mark'));
     }
    }
}
});









































































































































































//كود الرد
client.on('message', msg => {
if(msg.content === 'سلام عليكم ') {
msg.reply('**وعليكمم السلام**');
}
});

//كود الرد
client.on('message', msg => {
if(msg.content === 'هلا') {
msg.reply('**هلاااا**');
}
});

//كود الرد
client.on('message', msg => {
if(msg.content === ' . ') {
msg.reply('**. . .**');
}
});

//كود الرد
client.on('message', msg => {
if(msg.content === ' . ') {
msg.reply('**. . .**');
}
});

//كود الرد
client.on('message', msg => {
if(msg.content === ' . ') {
msg.reply('**. . .**');
}
});

//كود الرد
client.on('message', msg => {
if(msg.content === ' . ') {
msg.reply('**. . .**');
}
});

//كود الرد
client.on('message', msg => {
if(msg.content === ' . ') {
msg.reply('**. . .**');
}
});

//كود الرد
client.on('message', msg => {
if(msg.content === ' . ') {
msg.reply('**. . .**');
}
});

//كود الرد
client.on('message', msg => {
if(msg.content === ' . ') {
msg.reply('**. . .**');
}
});

//كود الرد
client.on('message', msg => {
if(msg.content === ' . ') {
msg.reply('**. . .**');
}
});

//كود الرد
client.on('message', msg => {
if(msg.content === ' . ') {
msg.reply('**. . .**');
}
});

//كود الرد
client.on('message', msg => {
if(msg.content === ' . ') {
msg.reply('**. . .**');
}
});

//كود الرد
client.on('message', msg => {
if(msg.content === ' . ') {
msg.reply('**. . .**');
}
});

//كود الرد
client.on('message', msg => {
if(msg.content === ' . ') {
msg.reply('**. . .**');
}
});

//كود الرد
client.on('message', msg => {
if(msg.content === ' . ') {
msg.reply('**. . .**');
}
});

//كود الرد
client.on('message', msg => {
if(msg.content === ' . ') {
msg.reply('**. . .**');
}
});

//كود الرد
client.on('message', msg => {
if(msg.content === ' . ') {
msg.reply('**. . .**');
}
});

//كود الرد
client.on('message', msg => {
if(msg.content === ' . ') {
msg.reply('**. . .**');
}
});

//كود الرد
client.on('message', msg => {
if(msg.content === ' . ') {
msg.reply('**. . .**');
}
});
