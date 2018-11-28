const Discord = require("discord.js");
const RichEmbed = require("discord.js");
const { Client, Util } = require('discord.js');
const client = new Discord.Client();
const prefix = "#";
 
const devs = ["257804689268146177"]
 
const adminprefix = "System";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**- # تـم تـحويـل إلـى وضعيـهة ، Online . :lollipop: ${argresult}**`)
  } else
    if (message.content === (adminprefix + "Percie")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**- # تـم تـحويـل إلـى وضعيـهة ، WATCHING . :lollipop: ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`** - # تـم تـحويـل إلـى وضعيـهة ، LISTENING . :lollipop: ${argresult}**`)
  } else    
    if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}**`)
  return message.reply("**- # تـم تحويـل أسـم الـبوت ألـى .. :lollipop:**");
  } else
    if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : - # تـم تحويـل آلصـورة إلـى .. :lollipop:`);
        } else    
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/Mrx-Dev");
      message.channel.sendMessage(`** - # تـم تـحويـل إلـى وضعيـهة ، Streaming . :lollipop:  ${argresult}**`)
  }
    if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`:warning:️ ** restarting by ${message.author.username}**`);
        console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(` Bot restarting...Maaaz `);
        console.log("===============================================\n\n");
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`Bot Successfully Restarted`);
    }
 
  });
client.login(process.env.BOT_TOKEN);



////////////////////////////////////////////////////////////////////////////

//     قسم الأكواد الإدارية

////////////////////////////////////////////////////////////////////////////






////////////////////////////////////////////////////////////////////////////
//كود يعلك كم بوت في سيرفرك
client.on('message', message => { if(!message.channel.guild) return; if(message.content.startsWith(prefix + 'allbots')) { if (message.author.bot) return; let i = 1; const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`); const embed = new Discord.RichEmbed() .setDescription(`**${message.guild.members.filter(m=>m.user.bot).size} Bots In ${message.guild.name}** ${botssize.join('\n')}`) .setFooter(client.user.username, client.user.avatarURL) .setTimestamp(); message.channel.send(embed) } })

//كود يعلمك كم بوت في سيرفر
client.on('message', message => { if(!message.channel.guild) return; if(message.content.startsWith(prefix + 'البوتات')) { if (message.author.bot) return; let i = 1; const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`); const embed = new Discord.RichEmbed() .setDescription(`**${message.guild.members.filter(m=>m.user.bot).size} Bots In ${message.guild.name}** ${botssize.join('\n')}`) .setFooter(client.user.username, client.user.avatarURL) .setTimestamp(); message.channel.send(embed) } })

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود الباند
client.on('message', message => {
  var prefix = "#";
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**:couple: , مـنـشـن شـخـص**");
  if(!reason) return message.reply ("**:name_badge:  , اكـتـب سـبـب الـبـانـد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

//كود فك الباند عن الكل
client.on('message', message => {
  if (message.content.startWith(prefix + "unban-all")){
if(!message.channel.guild) return;
message.guild.members.forEach( member => {
   
   member.unban()
})
}
});

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود الكيك
client.on('message', message => {
  const prefix = "#";
    if (message.author.kick) return;
    if (!message.content.startsWith(prefix)) return;
   
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
   
    let args = message.content.split(" ").slice(1);
   
    if (command == "kick") {
                 if(!message.channel.guild) return;
           
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
    let user = message.mentions.users.first();
    let reason = message.content.split(" ").slice(2).join(" ");
   
    if (message.mentions.users.size < 1) return message.reply("**:couple: , مـنـشـن شـخـص**");
    if(!reason) return message.reply ("**:name_badge:  , اكـتـب سـبـب الـطـرد**");
    if (!message.guild.member(user)
    .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
   
    message.guild.member(user).kick(7, user);
   
    const banembed = new Discord.RichEmbed()
    .setAuthor('Kicked !', user.displayAvatarURL)
    .setColor("RANDOM")
    .setTimestamp()
    .addField("User:",  `[ + ${user.tag} + ]`)
    .addField("By:", `[  + ${message.author.tag} +  ]`)
    .addField("Reason:", `[ + ${reason} +  ]`)
    client.channels.get("492583022982463500").send({embed : banembed})
  }
  });

  
////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود مسح الشات ( الكلير ) نفس سبيد بوت
client.on('message', message => {
  var prefix = "#";
 if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
      msg = parseInt();

    message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
    message.channel.sendMessage("", {embed: {
      title: "`` Chat Deleted ``",
      color: 0x06DF00,
      footer: {

      }
    }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});

//كود مسح الشات ( الكلير ) نفس سبيد بوت
client.on('message', message => {
  var prefix = "#";
 if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'مسح')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
      msg = parseInt();

    message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
    message.channel.sendMessage("", {embed: {
      title: "`` Chat Deleted ``",
      color: 0x06DF00,
      footer: {

      }
    }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود فتح وتقفيل الشات
client.on('message', message => {
 
  if (message.content === "#mc") {
                      if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: false

         }).then(() => {
             message.reply("تم تقفيل الشات ✅ ")
         });
           }
if (message.content === "#unmc") {
  if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: true

         }).then(() => {
             message.reply("تم فتح الشات✅")
         });
           }



});

//كود فتح وتقفيل الشات
client.on('message', message => {
 
  if (message.content === "#افتح") {
                      if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: false

         }).then(() => {
             message.reply("تم تقفيل الشات ✅ ")
         });
           }
if (message.content === "#قفل") {
  if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: true

         }).then(() => {
             message.reply("تم فتح الشات✅")
         });
           }



});

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود الحذف الروم او الشات
client.on("message", (message) => { 
  if (message.content.startsWith('#del')) { // الامر والبريفكس
      if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

      let args = message.content.split(' ').slice(1); 
      let channel = message.client.channels.find('name', args.join(' ')); 
      if (!channel) return message.reply('**لا يـوجـد اي روم بـهـذا الاسـم**').catch(console.error);
      channel.delete() 
  }
});

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود لانشاء روم صوتي
client.on('message', message => {
  if (message.content.startsWith(prefix+"#أنشاء روم صوتي")) {
      var args = message.content.split(" ").slice(1);
      var argrst = args.join(' ');
                  message.guild.createChannel(`${argrst}`,'voice')
           
          }
  });

//كود لانشاء روم صوتي
  client.on('message', message => {
    if (message.content.startsWith(prefix+"voice Room")) {
        var args = message.content.split(" ").slice(1);
        var argrst = args.join(' ');
                    message.guild.createChannel(`${argrst}`,'voice')
             
            }
    });

////////////////////////////////////////////////////////////////////////////




































////////////////////////////////////////////////////////////////////////////

//كود اعطاء رتب الاعضاء
client.on ("guildMemberAdd", member => {
  
  var role = member.guild.roles.find ("name", "3Rb");
  member.addRole (role);
 
})

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود يدخل البوت الروم الصوتي
client.on('message', msg => {

  if (msg.content == '#join') {
      if (msg.member.voiceChannel) {

   if (msg.member.voiceChannel.joinable) {
       msg.member.voiceChannel.join().then(msg.react('white_check_mark'));
   }
  }
}
});

//كود يدخل البوت الروم الصوتي
client.on('message', msg => {

  if (msg.content == '#تعال') {
      if (msg.member.voiceChannel) {

   if (msg.member.voiceChannel.joinable) {
       msg.member.voiceChannel.join().then(msg.react('white_check_mark'));
   }
  }
}
});

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

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

//كود الافتار
client.on('message', message => {
  if (message.content.startsWith("#صوره")) {
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

////////////////////////////////////////////////////////////////////////////

//كود البينق
client.on('message' , message => {
  var prefix = "#";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
 });

 //كود البينق
client.on('message' , message => {
  var prefix = "#";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "السرعه")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
 });

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود معلومات السيرفر
client.on('message', function(msg) {
  const prefix = '#'
  if(msg.content.startsWith (prefix  + 'server')) {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .setTitle(`Showing Details Of  **${msg.guild.name}*`)
    .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
    .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
    .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
    .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
    .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
    .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
    .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
    .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
    .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});
//كود معلومات السيرفر
client.on('message', function(msg) {
  const prefix = '#'
  if(msg.content.startsWith (prefix  + 'سيرفر')) {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .setTitle(`Showing Details Of  **${msg.guild.name}*`)
    .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
    .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
    .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
    .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
    .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
    .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
    .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
    .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
    .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود معلومات الشخص
client.on('message', message => {
  var prefix = "#"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}
 
let d = z.createdAt;          
let n = d.toLocaleString();  
let x;                      
let y;                        
 
if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    
 
.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            
 
.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)
 
message.channel.send({embed});
  if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);
 
}
 
});


//كود معلومات الشخص
client.on('message', message => {
  var prefix = "#"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'هوية')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}
 
let d = z.createdAt;          
let n = d.toLocaleString();  
let x;                      
let y;                        
 
if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    
 
.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            
 
.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)
 
message.channel.send({embed});
  if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);
 
}
 
});

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//برودكاست + للكل + مع منشن + غير مطور
client.on("message", message => {
 
  if (message.content.startsWith(prefix + "obc")) {
               if (!message.member.hasPermission("ADMINISTRATOR"))  return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' ');
message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {//حقوق دايموند كودز
m.send(`${argresult}\n ${m}`);
})
message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`);
message.delete();
};    
});

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود التيكت
client.on('message', message => {
  var prefix = "#"
  
 if (message.content.toLowerCase().startsWith(prefix + `new`)) {
     const reason = message.content.split(" ").slice(1).join(" ");
     if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`\`Support Team\` **لا توجد رتبة بأسم**`);
     if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`**لديك تذكرة مفتوحة بالفعل**`);
     message.guild.createChannel(`ticket`, "text").then(c => {
         let role = message.guild.roles.find("name", "Support Team");
         let role2 = message.guild.roles.find("name", "@everyone");
         c.overwritePermissions(role, {
             SEND_MESSAGES: true,
             READ_MESSAGES: true
         });
         c.overwritePermissions(role2, {
             SEND_MESSAGES: false,
             READ_MESSAGES: false
         });
         c.overwritePermissions(message.author, {
             SEND_MESSAGES: true,
             READ_MESSAGES: true
         });
         message.channel.send(`**:white_check_mark: تـم انـشـاء الـتـذكـرة**`);
         const embed = new Discord.RichEmbed()
         .setColor(0xCF40FA)
         .addField(`${message.author.username} **مـرحـبـا بـك**`, `**
 يـرجـى مـحـاولـة شـرح سـبـب فـتـح هـذه الـتـذكـرة بـأكـبـر قـدر مـمـكـن مـن الـتـفـاصـيـل. سـيـكـون فـريـق الـدعـم هـنـا قـريـبـاً لـمـسـاعـدتـك**`)
         .setTimestamp();
         c.send({ embed: embed });
     }).catch(console.error);
 }
 if (message.content.toLowerCase().startsWith(prefix + `close`)) {
     if (!message.channel.name.startsWith(`ticket`)) return message.channel.send(`لا يمكنك استخدام أمر الإغلاق خارج قناة التذاكر`);
  
     message.channel.send(`**confirm : هـل انـت مـتـأكـد مـن اغـلاق الـتـذكـرة ؟ اذا انـت مـتـأكـد اكـتـب**`)
     .then((m) => {
       message.channel.awaitMessages(response => response.content === 'confirm', {
         max: 1,
         time: 10000,
         errors: ['time'],
       })
       .then((collected) => {
           message.channel.delete();
         })
         .catch(() => {
           m.edit('**انـتـهـي وقـت أغـلاق الـتـذكـرة**').then(m2 => {
               m2.delete();
           }, 3000);
         });
     });
 }
  
 });

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//القيف اوي
client.on('message',async message => {
  const moment = require('moment');
const ms = require('ms')
  var prefix = '#' //بريفكس البوت
var time = moment().format('Do MMMM YYYY , hh:mm');
var room;
var title;
var duration;
var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}

var filter = m => m.author.id === message.author.id;
if(message.content.startsWith(prefix + "gstart")) { // الامر

  if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
  message.channel.send(`:eight_pointed_black_star:| **ارسل اسم الروم**`).then(msg => {
    message.channel.awaitMessages(filter, {
      max: 1,
      time: 20000,
      errors: ['time']
    }).then(collected => {
      let room = message.guild.channels.find('name' , collected.first().content);
      if(!room) return message.channel.send(':heavy_multiplication_x:| **لم استطيع ايجاد الروم :(**');
      room = collected.first().content;
      collected.first().delete();
      msg.edit(':eight_pointed_black_star:| **الوقت للقيف اواي**').then(msg => {
        message.channel.awaitMessages(filter, {
          max: 1,
          time: 20000,
          errors: ['time']
        }).then(collected => {
          if(!collected.first().content.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('**البوت لا يدعم هذا الوقت**');
          duration = collected.first().content
          collected.first().delete();
          msg.edit(':eight_pointed_black_star:| **يتم الارسال الى الروم الان **').then(msg => {
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 20000,
              errors: ['time']
            }).then(collected => {
              title = collected.first().content;
              collected.first().delete();
              msg.delete();
              message.delete();
              try {
                let giveEmbed = new Discord.RichEmbed()
                .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration} \n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                .setFooter(message.author.username, message.author.avatarURL);
                message.guild.channels.find("name" , room).send(' :heavy_check_mark: **Last Code** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                   let re = m.react('🎉');
                   setTimeout(() => {
                     let users = m.reactions.get("🎉").users
                     let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                     let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                     let endEmbed = new Discord.RichEmbed()
                     .setAuthor(message.author.username, message.author.avatarURL)
                     .setTitle(title)
                     .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
                     .setTimestamp()
                   m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
                  message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
              }, ms(duration));
          });
              } catch(e) {
              message.channel.send(`:heavy_multiplication_x:| **ليس لدي برمشن المطلوب**`);
                console.log(e);
              }
            });
          });
        });
      });
    });
  });
}
});

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود تغير الاسم
client.on("message",  message => {
  var prefix = "#";
  let args = message.content.split(' ').slice(1);
if(message.content.startsWith(prefix + 'nic')) {
 if (!message.member.hasPermission("MANAGE_NICKNAMES")) {
     message.channel.send("**ضــع الاســم**")
 } else {
     if (!message.guild.member(client.user).hasPermission('MANAGE_NICKNAMES')) return message.reply(' ❌البوت ما عنده خاصية MANAGE_NICKNAMES.').catch(console.error);
     let changenick = message.mentions.users.first();
     let username = args.slice(1).join(' ')
     if (username.length < 1) return message.reply('**ضــع الاســم**').catch(console.error);
     if (message.mentions.users.size < 1) return message.author.send('You must mention a user to change their nickname. ❌').catch(console.error);
     message.guild.member(changenick.id).setNickname(username);
     message.channel.send("تـم تـغـيـيـر الاسـم الـى " + changenick + "")
 }
}});

////////////////////////////////////////////////////////////////////////////




















































////////////////////////////////////////////////////////////////////////////

//كود اي احد ينشر يتبند
client.on('message', message => {
  if (message.content.includes('discord.gg')){
                      if(!message.channel.guild) return message.reply ('')
                  if (!message.member.hasPermissions(['MANAGE_MESSAGES'])){
     message.channel.send('ban <@' + message.author.id + '>')
     message.delete()
     }
  }
        if (message.content.startsWith("ban")) {
           if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply();
           var member= message.mentions.members.first();
           member.ban().then((member) => {
               message.channel.sendMessage("", {embed: {
               author: {
               },
               title: 'بسبب النشر ' + member.displayName + ' تم حظر',
               color: 490101,
               }
             });
         }
       )
     }
 });

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود اقل من شهر يتبند
const moment = require("moment")
client.on("guildMemberAdd", m => {
    if (datediff(parseDate(moment(m.user.createdTimestamp).format('l')), parseDate(moment().format('l'))) < 30) {
        m.ban();
    };
    function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0]-1, mdy[1]);
    };
   
    function datediff(first, second) {
        return Math.round((second-first)/(1000*60*60*24));
    };
});

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود التقديم على الاداره
client.on('message', async message => {
  var command = message.content.toLowerCase().split(" ")[0];
  var prefix = '#';
  var name = '';
  var age = '';
  var fromwhere = '';
  var fa2dh = '';
  var filter = m => m.author.id === message.author.id;
  var subChannel = message.guild.channels.find(c => c.name === 'support-join');
 
  if(command == prefix + 'join-support') {
      if(message.author.bot) return;
      if(message.channel.type === 'dm') return;

      var modRole = message.guild.roles.find(r => r.name === '✲ SUPPORT');
     
      if(message.guild.member(message.author).roles.has(modRole.id)) return message.channel.send(':x: | معك الرتبة');
      if(!subChannel) return message.channel.send(':x: | يجب ان يتوفر روم اسمه `support-join`');
     
      message.channel.send(':timer: | **اكـتـب اسـمـك الـحـقـيـقـي الان مـن فـضـلـك**').then(msgS => {
          message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
              name = collected.first().content;
              collected.first().delete();
              msgS.edit(':timer: | **مـن فـضـلـك اكـتـب عـمـرك الان**').then(msgS => {
                  message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                      age = collected.first().content;
                      collected.first().delete();
                      msgS.edit(':timer: | **مـن فـضـلـك اكـتـب مـن اي بـلـد انـت**').then(msgS => {
                          message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                              fromwhere = collected.first().content;
                              collected.first().delete();
                              msgS.edit(':timer: | **مـن فـضـلـك اكـتـب سـبـب تـقـديـمـك عـلـى الـرتـبـة والـمـهـارات الـلـتـي لديـك لـتـقـديـمـهـا**').then(msgS => {
                                  message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                      fa2dh = collected.first().content;
                                      collected.first().delete();
                                     
                                      let embedS = new Discord.RichEmbed()
                                      .setAuthor(message.author.tag, message.author.avatarURL)
                                      .setThumbnail(message.author.avatarURL)
                                      .setDescription('**:no_entry: هـل انـت مـتـأكـد انـك تـريـد الـتـقـديـم؟**')
                                      .setColor('GREEN')
                                      .addField('الاسم', name, true)
                                      .addField('العمر', age, true)
                                      .addField('من وين', fromwhere, true)
                                      .addField('المهارات وسبب التقديم على الرتبة', fa2dh, true)
                                      .setTimestamp()
                                      .setFooter(message.guild.name, message.guild.iconURL)
                                     
                                      msgS.delete();
                                      message.channel.send(embedS).then(msgS => {
                                          msgS.react('✅').then(() => msgS.react('❎'))
                                         
                                          let yesSure = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                                          let no = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                                         
                                          let yesSend = msgS.createReactionCollector(yesSure);
                                          let dontSend = msgS.createReactionCollector(no);
                                         
                                          yesSend.on('collect', r => {
                                              msgS.delete();
                                              message.channel.send(':white_check_mark: | تم تقديم طلبك بنجاح انتظر النتيجة في روم support-accept').then(msg => msg.delete(5000));
                                             
                                              let subMsg = new Discord.RichEmbed()
                                              .setAuthor(message.author.tag, message.author.avatarURL)
                                              .setColor('GREEN')
                                              .setThumbnail(message.author.avatarURL)
                                              .addField('الاسم', name)
                                              .addField('العمر', age)
                                              .addField('من وين', fromwhere)
                                              .addField('لماذا يريد التقديم', fa2dh)
                                              .addField('حسابه', message.author)
                                              .addField('ايدي حسابه', message.author.id, true)
                                             
                                              subChannel.send(subMsg).then(msgS => {
                                                  msgS.react('✅').then(() => msgS.react('❎'))
                                                 
                                                  let accept = (reaction, user) => reaction.emoji.name === '✅'  && user.id === 'ايدي الي يقبل الطلب'
                                                  let noAccept = (reaction, user) => reaction.emoji.name === '❎' && user.id === 'ايدي الي يقبل الطلب'
                                                 
                                                  let acceptRe = msgS.createReactionCollector(accept);
                                                  let noAcceptRe = msgS.createReactionCollector(noAccept);
                                                 
                                                  acceptRe.on('collect', r => {
                                                      msgS.delete();
                                                      message.author.send(`:white_check_mark: | تم قبولك اداري بسيرفر **${message.guild.name}**`);
                                                      message.guild.member(message.author).addRole(modRole.id);
                                                      message.guild.channels.find(r => r.name === 'support-accept').send(`:white_check_mark: | تم قبولك [ <@${message.author.id}> ]`);
                                                  }).catch();
                                                  noAcceptRe.on('collect', r => {
                                                      msgS.delete();
                                                      message.author.send(`:x: | تم رفضك بسيرفر **${message.guild.name}**`);
                                                      message.guild.channels.find(r => r.name === 'support-accept').send(`:x: | تم رفضك [ <@${message.author.id}> ]`);
                                                  }).catch();
                                              })
                                          });
                                          dontSend.on('collect', r => {
                                              msgS.delete();
                                              message.channel.send(':x: | تم الغاء تقديمك');
                                          });
                                      })
                                  })
                              })
                          })
                      })
                  })
              })
          })
      })
  }
});

////////////////////////////////////////////////////////////////////////////

















////////////////////////////////////////////////////////////////////////////

//قسم اكواد البوت

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//يقول كم البوت شغال
client.on('message', message => {
  var prefix = "#" // البريفكس
       if (message.author.bot) return;
  if (message.content.startsWith(prefix + "uptime")) { // الامر
      let uptime = client.uptime;
   
      let days = 0;
      let hours = 0;
      let minutes = 0;
      let seconds = 0;
      let notCompleted = true;
   
      while (notCompleted) {
   
          if (uptime >= 8.64e+7) {
   
              days++;
              uptime -= 8.64e+7;
   
          } else if (uptime >= 3.6e+6) {
   
              hours++;
              uptime -= 3.6e+6;
   
          } else if (uptime >= 60000) {
   
              minutes++;
              uptime -= 60000;
   
          } else if (uptime >= 1000) {
              seconds++;
              uptime -= 1000;
   
          }
   
          if (uptime < 1000)  notCompleted = false;
   
      }
   
      message.channel.send(" +${days} days, ${hours} hrs, ${minutes} , ${seconds} sec+ ");
   
  }
  });

//يقول كم البوت شغال
client.on('message', message => {
  var prefix = "#" // البريفكس
       if (message.author.bot) return;
  if (message.content.startsWith(prefix + "شغال")) { // الامر
      let uptime = client.uptime;
   
      let days = 0;
      let hours = 0;
      let minutes = 0;
      let seconds = 0;
      let notCompleted = true;
   
      while (notCompleted) {
   
          if (uptime >= 8.64e+7) {
   
              days++;
              uptime -= 8.64e+7;
   
          } else if (uptime >= 3.6e+6) {
   
              hours++;
              uptime -= 3.6e+6;
   
          } else if (uptime >= 60000) {
   
              minutes++;
              uptime -= 60000;
   
          } else if (uptime >= 1000) {
              seconds++;
              uptime -= 1000;
   
          }
   
          if (uptime < 1000)  notCompleted = false;
   
      }
   
      message.channel.send(" +${days} days, ${hours} hrs, ${minutes} , ${seconds} sec+ ");
   
  }
  });

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود يشكر صاحب الاونر على دخوله السيرفر
client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شـكـراً لـك لإضـافـه الـبـوت الـى سـيـرفـرك**`)
      guild.owner.send(embed)
});

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
  if (true) {
if (message.content === '#invite') {
      message.author.send('  رابط بوتك  |  تفضل ربط البوت     ').catch(e => console.log(e.stack));
 
    }
   }
  });
 
 
client.on('message', message => {
     if (message.content === "#invite") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")
     
     
     
  message.channel.sendEmbed(embed);
    }
});

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود البوت يكتب بدال عنك
client.on('message', async msg => {
  client.snek = require('snekfetch');
var p = "#"
if(msg.content.startsWith(p + "أكتب")) {
let args = msg.content.split(' ').slice(1).join(' ');
if(!args) return args.missing(msg, 'لم يتم اضافة اي كلام', this.help);
msg.channel.startTyping();
const searchMessage = await msg.channel.send('Painting...');
const { body } = await client.snek.get(`https://nekobot.xyz/api/imagegen?type=clyde&text=${encodeURIComponent(args)}`);
msg.channel.send({file: { attachment:body.message, name: 'clyde.png'}}).then(()=> { searchMessage.delete(); msg.channel.stopTyping(); });
};
});

//كود البوت يكتب بدال عنك
client.on('message', async msg => {
  client.snek = require('snekfetch');
var p = "#"
if(msg.content.startsWith(p + "k")) {
let args = msg.content.split(' ').slice(1).join(' ');
if(!args) return args.missing(msg, 'لم يتم اضافة اي كلام', this.help);
msg.channel.startTyping();
const searchMessage = await msg.channel.send('Painting...');
const { body } = await client.snek.get(`https://nekobot.xyz/api/imagegen?type=clyde&text=${encodeURIComponent(args)}`);
msg.channel.send({file: { attachment:body.message, name: 'clyde.png'}}).then(()=> { searchMessage.delete(); msg.channel.stopTyping(); });
};
});

////////////////////////////////////////////////////////////////////////////






















////////////////////////////////////////////////////////////////////////////

//قسم اكواد السبه كامله اكثر من 300 سبه

////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'طيزك') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'طيز') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'الطيز') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'انت طيز') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'أنت طيز') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'انت طويز') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'أنت طويز') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'طيزك محنه') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'طيزك محنة') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'انت طيزك محنه') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'انت طيزك محنة') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'أنت طيزك محنة') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'أنت طيزك محنه') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'في طيزك شي') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'في طيزك محنه') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'في طيزك محنة') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'زرقه') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'زرقة') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'في طيزك الحلو') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'في طيزك الحلوه') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'في طيزك الحلوة') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'كس ام طيزك الجذابه') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'كس ام طيزك الجذابة') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'كس أم طيزك الجذابه') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'كس أم طيزك الجذابة') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'كس أم طيزك الجذأبة') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'كس أم طيزك الجذأبه') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'كس ام طيزك الجذابة') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'كس ام طيزك الجذابه') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'معاك طيز') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'معك طيز') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'طيزك كبرانه') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'طيزك كبرأنه') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'طيزك كبرانة') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'طيزك كبرأنة') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'يا ابو طيز') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'يا أبو طيز') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});










//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'زبك') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'زب') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});
//كود السبه المنشن
client.on ('message', msg => {
  if (msg.content ===  'الزب') { 
    msg.reply('**:unamused:ممنوع السب يا خوي**').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});





