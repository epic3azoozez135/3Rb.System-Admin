const Discord = require("discord.js");
const RichEmbed = require("discord.js");
const { Client, Util } = require('discord.js');
const client = new Discord.Client();
const prefix = "#";
 
const devs = ["ايديك يا سوم"]
 
const adminprefix = "البري فركس رستر";
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

//قسم الأكواد الإدارية

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

//كود اسئلة لعبة فورت نايت
const pubg = [
  'Fortnite | ما هو اقوي سلاح برائيك ؟',
  'Fortnite | ما هي افضل منطقة تنزل بها برايك ؟',
  'Fortnite | كم عدد فوزاتك ؟',
  'Fortnite | كم هو عدد اكثر قتلات لك ؟ ',
  'Fortnite | كم عدد اصدقائك ؟ ',
  'Fortnite | كم عدد سكناتك ؟ ',
  'Fortnite | من هو افضل لاعب اجنبي حسب رايك ؟ ',
  'Fortnite | من هو افضل لاعب عربي حسب رايك ؟ ',
  'Fortnite | ما هو افضل طور حسب رايك ؟ ',
  'Fortnite | هل انت محترف ام نوب ؟ ',
  'Fortnite | ما هما افضل سلاحين مع بعض حسب رايك ؟ ',


]
client.on('message', message => {
    if (message.author.bot) return;
if (message.content.startsWith('#فورتي')) {
  if(!message.channel.guild) return message.reply('** This command only for servers **');
var client= new Discord.RichEmbed()
.setTitle("لعبه اسئله فورت نايت")
.setColor('#FFA500')
.setDescription(`${pubg[Math.floor(Math.random() * pubg.length)]}`)
.setImage("https://cdn.discordapp.com/attachments/497081825492074496/500662255004942346/images.jpg")
               .setTimestamp()

message.channel.sendEmbed(client);
message.react("??")
}
});

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود الصراحة
const Sra7a = [
  'صراحه  |  صوتك حلوة؟',
  'صراحه  |  التقيت الناس مع وجوهين؟',
  'صراحه  |  شيء وكنت تحقق اللسان؟',
  'صراحه  |  أنا شخص ضعيف عندما؟',
  'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
  'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
  'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
  'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
  'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
  'صراحه  |  أشجع شيء حلو في حياتك؟',
  'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
  'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
  'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
  'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
  'صراحه  |  نظرة و يفسد الصداقة؟',
  'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
  'صراحه  |  شخص معك بالحلوه والمُره؟',
  'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
  'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
  'صراحه  |  وش تتمنى الناس تعرف عليك؟',
  'صراحه  |  ابيع المجرة عشان؟',
  'صراحه  |  أحيانا احس ان الناس ، كمل؟',
  'صراحه  |  مع مين ودك تنام اليوم؟',
  'صراحه  |  صدفة العمر الحلوة هي اني؟',
  'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
  'صراحه  |  صفة تحبها في نفسك؟',
  'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
  'صراحه  |  تصلي صلواتك الخمس كلها؟',
  'صراحه  |  ‏تجامل أحد على راحتك؟',
  'صراحه  |  اشجع شيء سويتة بحياتك؟',
  'صراحه  |  وش ناوي تسوي اليوم؟',
  'صراحه  |  وش شعورك لما تشوف المطر؟',
  'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
  'صراحه  |  ما اكثر شي ندمن عليه؟',
  'صراحه  |  اي الدول تتمنى ان تزورها؟',
  'صراحه  |  متى اخر مره بكيت؟',
  'صراحه  |  تقيم حظك ؟ من عشره؟',
  'صراحه  |  هل تعتقد ان حظك سيئ؟',
  'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
  'صراحه  |  كلمة تود سماعها كل يوم؟',
  'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
  'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
  'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
  'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
  '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
  'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
  '‏صراحه | هل تحب عائلتك ام تكرههم؟',
  '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
  '‏صراحه  |  هل خجلت من نفسك من قبل؟',
  '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
  '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
  '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
   '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
  '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
  '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
  'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
  '‏صراحه  |  ما هو عمرك الحقيقي؟',
  '‏صراحه  |  ما اكثر شي ندمن عليه؟',
  'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
client.on('message', message => {
if (message.content.startsWith('#صراحة')) {
  if(!message.channel.guild) return message.reply('** This command only for servers **');
var client= new Discord.RichEmbed()
.setTitle("لعبة صراحة ..")
.setColor('RANDOM')
.setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
.setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
               .setTimestamp()

message.channel.sendEmbed(client);
message.react("??")
}
});

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود لعبة لو خيروك
const secre = [
  "**لو خيروك بين العيش وحدك في جزيرة كبيرة منعزلة مع أكبر درجات الرفاهية وبين العيش في مكان قديم ولكن مع أصدقائك المقربين**.",
  "**لو خيروك بين فقدان ذاكرتك والعيش مع أصدقائك وأقربائك أو بقاء ذاكرتك ولكن العيش وحيد**.",
  "**للو خيروك بين تناول الخضار والفاكهة طوال حياتك أو تناول اللحوم**.",
  "**لو خيروك بين رؤية الأشباح فقط أو سماع صوتها فقط**.",
  "**لو خيروك بين القدرة على سماع أفكار الناس أو القدرة على العودة في الزمن للخلف**.",
  "**لو خيروك بين القدرة على الاختفاء أو القدرة على الطيران**.",
  "**لو خيروك بين أن تعيش 5 دقائق في الماضي أو أن تعيشها في المستقبل**.",
  "**لو خيروك بين 5 ملايين دولار أو 5 ملايين لحظة سعادة حقيقيةا**.",
  "**لو خيروك بين الاعتذار عن خطأ اقترفته أو أن يقدم لك شخص أخطأ في حقق اعتذار**.",
  "**لو خيروك بين الحقد أو المسامحة**.",
  "**لو خيروك بين إنقاذ نفسك أو إنقاذ شخص وقد يعرضك ذلك للأذى**.",
  "**لو خيروك بين أن تعيش في القرن الرابع عشر أو القرن الحالي**.",
  "**لو خيروك بين امتلاك سرعة الفهد أو دهاء الثعلب**.",
  "**لو خيروك بين أن تحصل على درجة كاملة في كامل اختباراتك القادمة والسابقة أو أن تسافر إلى بلد تحبه**.",
  "**لو خيروك بين العيش بجانب الجبال والحدائق والأشجار أو العيش بجانب البحر**.",
  "**لو خيروك بين تحقيق 3 أمنيات (لا تتعلق بأشخاص) أو اختيار 3 أشخاص للعيش معهم طوال حياتك**.",
  "**لو خيروك بين النوم في غابة مظلمة أو على ظهر سفينة في يوم عاصف**.",
  "**لو خيروك بين المال أو الجمال**.",
  "**لو خيروك بين المال أو الذكاء**.",
  "**لو خيروك بين المال أو الصحة**.",
  "**لو خيروك بين الجمال أو الذكاء**.",
  "**لو خيروك بين الذكاء أو الصحة**.",
  "**لو خيروك بين إرسال رسالة صوتية لأمك مدة دقيقة كاملة لا تحتوي إلا على صراخك وخوفك، أو كسر بيضة نيئة على رأسك**.",
]
 
 
 client.on('message', message => {
   if (message.content.startsWith("#خيروك")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
 
   .setThumbnail(message.author.avatarURL)
 .addField('لعبه لو خيروك' ,
  `${secre[Math.floor(Math.random() * secre.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود لعبة عقاب
const Za7f = [
  "**صورة وجهك او رجلك او خشمك او يدك**.",
  "**اصدر اي صوت يطلبه منك الاعبين**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
  "**قول نكتة اذا و ��ازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
  "**ذي المرة لك لا تعيدها**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**صور اي شيء يطلبه منك الاعبين**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**سو مشهد تمثيلي عن مصرية بتولد**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**ذي المرة لك لا تعيدها**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
  "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
  "**اتصل على امك و قول لها انك تحبها :heart:**.",
  "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
  "**قل لواحد ماتعرفه عطني كف**.",
  "**منشن الجميع وقل انا اكرهكم**.",
  "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
  "**روح المطبخ و اكسر صحن او كوب**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت ا��كف**.",
  "**قول لاي بنت موجود في الروم كلمة حلوه**.",
  "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
  "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
  "**قول قصيدة **.",
  "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**اول واحد تشوفه عطه كف**.",
  "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
  "**تاخذ عقابين**.",
  "**قول اسم امك افتخر بأسم امك**.",
  "**ار��ي اي شيء قدامك على اي احد موجود او على نفسك**.",
  "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
  "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
  "**تتصل على الوالده  و تقول لها خطفت شخص**.",
  "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
  "**����تصل على الوالده  و تقول لها  احب وحده**.",
    "**تتصل على شرطي تقول له عندكم مطافي**.",
    "**خلاص سامحتك**.",
    "** تصيح في الشارع انا  مجنوون**.",
    "** تروح عند شخص تقول له احبك**.",

]

client.on('message', message => {
 if (message.content.startsWith(prefix + "#عقاب")) {
              if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
 .setThumbnail(message.author.avatarURL)
.addField('Plus Bot' ,
`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
message.channel.sendEmbed(embed);
console.log('[38ab] Send By: ' + message.author.username)
  }
});

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود لعبة اسرع كتابة
const speed = [
  {
          "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298994078810127/a90c6b270eb8bb2e.png",
      "answers": ["البرازيل"]
  },
  {
          "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298996385677312/93b0c6f963ca78cc.png",
      "answers": ["السعودية"]
  },
  {
          "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298996130086934/341960d3e3e1daad.png",
      "answers": ["القسطنطينية"]
  },
  {
          "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298998172450816/5c70f0d2a02f741a.png",
      "answers": ["النهاية"]
  },
  {
          "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298999799971860/00c3e44857da1d4f.png",
      "answers": ["امازون"]
  },
  {
          "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299000026595338/56ca5f3803361aaf.png",
      "answers": ["جافاسكربت"]
  },
  {
          "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299000676581382/426f82fc46406cf9.png",
      "answers": ["سهله مو صعبه"]
  },
  {
          "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299005474996255/7ec6030fe3423458.png",
      "answers": ["طبق رطب مرق بقر"]
  },
  {
          "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299005458087936/fd790725b7496d35.png",
      "answers": ["متجر"]
        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330177894645780/7a11f3f73c1df90d.png",
      "answers": ["شجرة الأوغيري"]
        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330188162301952/a5d4f8c72362aa3f.png",
      "answers": ["عش العصفور"]
        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330194587713554/c5b6b7bad08671a9.png",
      "answers": ["قم بكتابة"]
        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330199838982152/1e05423a0b91fdaa.png",
      "answers": ["كانيكي"]
        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330207711690762/39a6a460c6211b5d.png",
      "answers": ["ليوبليانا"]
        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330217971089418/e5e323d8e8ce00ad.png",
      "answers": ["هواوي"]
        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330224316940329/7872c68940fd6f08.png",
      "answers": ["ياخرا"]
        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330229140652032/2419fe025b8b35f2.png",
      "answers": ["يوم الخميس"]
        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330238330241044/DO_YOU_KNOW_THE_WAY.png",
      "answers": ["DO YOU KNOW THE WAY"]
        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330246840483842/23dc3a67e7bedc9e.png",
      "answers": ["الأرض"]
        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330256256827414/9f90c0fcbfc60a0d.png",
      "answers": ["البوابة"]
        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330261663285259/0e41e6dcefc80cd3.png",
      "answers": ["الجمل ابو راسين"]
        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330264901287946/6459ace62733c477.png",
      "answers": ["الحوت الأزرقء"]
        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330272920797226/de084748fdbe524b.png",
      "answers": ["القارب المكسور"]
        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330281372057622/bcae99355befcd06.png",
      "answers": ["المدرسة"]
        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330289769054230/c030902a9d21637c.png",
      "answers": ["اليابان"]
        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330298585481218/2ca3d0f29283cced.png",
      "answers": ["بلايستايشن"]
        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330311558725632/6dc92ab82d3df0e4.png",
      "answers": ["جزر القمر"]
        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330312842182657/f50f4fab4b6559c0.png",
      "answers": ["حشيش"]
        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/429932988625584139/3333333.png",
      "answers": ["سوبراشي"]
        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/429932994351071233/3333333.png",
      "answers": ["قوتشي"]
        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933002399940609/3333333.png",
      "answers": ["ايفون"]
        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933012164149249/3333333.png",
      "answers": ["تيستا لاغوسا"]

        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933033009840129/3333333.png",
      "answers": ["بسكوت ابو ولد"]
        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933041033674753/3333333.png",
      "answers": ["تكأكأتم"]
        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933050139246592/3333333.png",
      "answers": ["الجملة المفيدة"]
        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933059278635028/204ba71fbee91a03.png",
      "answers": ["الأوسكار"]
        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040573269901332/3333333.png",
      "answers": ["كنت امشي وأمشي"]

        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040585357754368/3333333.png",
      "answers": ["لااااق بوتء"]

        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040593595629568/3333333.png",
      "answers": ["ابو ناصر سرى ليله"]

        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040602235895810/fghfghfgh.png",
      "answers": ["عدد اللي برمجوني 2"]

        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040608825147412/hhhhyyrf87654.png",
      "answers": ["Dark_Neet"]

        },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040611819749387/354d9e28fd1264f5.png",
      "answers": ["بابا سنفور متعاطي"]

            },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040619331878922/4b24f4792476c04f.png",
      "answers": ["ميرندا حمضيات يلد"]

            },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040624603987968/5ff29b1066a3b9c7.png",
      "answers": ["هل الدمع من عينه"]

            },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040631885299722/77f33951be682d8f.png",
      "answers": ["طارت الطياره طارت"]

            },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040640928219136/29c240679c04c148.png",
      "answers": ["أنا فوق راسي ريشه"]

            },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040652542246912/bbcb4aa9853bf1d2.png",
      "answers": ["فريق النجمة"]

            },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040659437813780/69df1a1ea78bf05c.png",
      "answers": ["خالد عبدالرحمن"]

            },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040666895024128/8bc7742b95673c38.png",
      "answers": ["حبيت مره من قلبي"]

            },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040674067546113/9d1a9eee36622271.png",
      "answers": ["كرستيانو يزق"]

            },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040682913333248/f19a97c10ac739e1.png",
      "answers": ["أنت قمر يا قمر"]

            },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040692140539904/0a25039aa164a42b.png",
      "answers": ["انا اجمل مخلوق"]

            },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040699317256192/da72e3e3fe6bfceb.png",
      "answers": ["دونت تاتش"]

            },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040706464350218/d6339ed123a20afe.png",
      "answers": ["توم وجيري"]

            },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040714588454912/965f8266e9501b35.png",
      "answers": ["دباب اربع كفرات"]

            },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040721601331211/ae8cf2598c441e76.png",
      "answers": ["القرش الأسودد"]

            },
  {
 
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040729637748747/bf76692d54e6a0dd.png",
      "answers": ["ددسن موديل 85"]

  },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040736835043341/e66ff909a6330b13.png",
      "answers": ["الحارثيء"]

  },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040746503176194/351af3b19fc53323.png",
      "answers": ["عزازي مسرع"]

  },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040751557181440/6777776666.png",
      "answers": ["جاكي شاان"]

  },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040758108684289/2613844efcb8b05b.png",
      "answers": ["دارك نت"]

  },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040765671014401/c89aa167715a85b9.png",
      "answers": ["فانتاستيك"]

  },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040772818239489/01d73182b48785e1.png",
      "answers": ["زباله متنقلة"]

  },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040778467835924/9dff572a5bf1b602.png",
      "answers": ["اكس بوكس يلد"]

      },
  {
          "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040783228370964/91ebb70e0dd936be.png",
      "answers": ["بكسل يالوصخخ"]
  }
];
client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
  points: 0,
};
if(!message.guild) return;
  let id = message.author.id,prefix="#";
  if (spee[id] && (new Date).getTime() - spee[id] < 15*1000) {
      let r = (new Date).getTime() - spee[id];
      r = 15*1000 - r;
  }
  if ( message.content == prefix+'اسرع كتابة'){
     
      try{
}catch(e){

}

  if(!message.channel.guild) return message.reply('**:no_entry: , هـذا الأمـر لـلـسـيـرفـرات فـقـط**').then(m => m.delete(3000));


const item = speed[Math.floor(Math.random() * speed.length)];
const filter = response => {  
  return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**:loudspeaker: , لـقـد بـدأت الـلعـبـة الان !**').then(msg => {

const embed = new Discord.RichEmbed()
.setColor("RANDOM")
   .setAuthor(`**:timer: , الان لديك , 15 , ثـانـيـة فـقـط لـكـتابـة هـذه الـكـلـمـة**`)
        .setImage(`${item.type}`)
.setFooter(`${message.author.tag}`, message.author.avatarURL)


       
msg.channel.send(embed).then(() => {
      message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
      .then((collected) => {
                const sh = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription('**:tada: , جـيـد , لـقـد حـصـلت عـلـى نـقـطـة**')
.addField('#mypoints أكـتـب', 'لـرؤيـة نـقـاطـك' , true)
.setFooter(message.author.username, message.author.avatarURL)
message.channel.sendEmbed(sh);
          let won = collected.first().author;
          points[won.id].points++;
        })
        .catch(collected => {
          message.channel.send(`**:timer: , انـتـهـئ الـوقـت , ولـم يـقـم احـد بـتـفـكـيـك الـكـلـمـة**`);
        })
        fs.writeFile("./points.json", JSON.stringify(points), (err) => {
  if (err) console.error(err)
        })
      })
  })
  spee[id] = (new Date).getTime()
}
});

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

//كود بي انفايت
client.on('guildMemberAdd', member => { //LAST CODES -HONRAR-
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const stewart = member.guild.channels.find("name", "3rb");
     stewart.send(`<@${member.user.id}> تمت الدعوه من <@${inviter.id}>`);
   //  stewart.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  });
})

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





