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
  .setAuthor(`تـم إعطـآئـه بـآند.`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**أسـم الـذي تـم تـبـنـيـده:**",  '**{ ' + `${user.tag}` + ' }**')
  .addField("**أسـم الـذي بـنـده:**", '**{ ' + `${message.author.tag}` + ' }**')
  .addField("**سـبـب الـبـانـده :**", '**{ ' + `${reason}` + ' }**')
  message.channel.send({
    embed : banembed
  })
}
});

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
  message.channel.send({
    embed : banembed
  })
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
var prefix = "#";
       if(message.content === prefix + "cl") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__تـم الأن أقـفـال الـشـات مـؤقـت__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تـم الأن أقـفـال الـشـات مـؤقـت__ :white_check_mark:**")
              });
                }

    if(message.content === prefix + "op") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__تـم فـتـح الـشـات وشـكـرا لـكـم__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تـم فـتـح الـشـات وشـكـرا لـكـم__:white_check_mark:**")
              });
    }
       
});

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود الحذف الروم او الشات
client.on("message", (message) => { // Last Code
    if (message.content.startsWith('#del')) { // الامر والبريفكس
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions "); 
 
        let args = message.content.split(' ').slice(1); // Last Code
        let channel = message.client.channels.find('name', args.join(' ')); // Last Code
        if (!channel) return message.reply('**لا يوجد اي روم بهذا الاسم**').catch(console.error);
        channel.delete() // Last Code
    }
});

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود لانشاء روم صوتي
  client.on('message', message => {
    if (message.content.startsWith(prefix+"voice-Room")) {
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


////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود معلومات الشخص

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

//كود الريبورت او التبليغ على احد
client.on('message', function(message) {
    if(message.content.startsWith(prefix + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ لقوبات")
message.channel.send(Rembed)
message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});

////////////////////////////////////////////////////////////////////////////














































////////////////////////////////////////////////////////////////////////////

//كود اسئلة لعبة فورت نايت


////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود الصراحة


////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود لعبة لو خيروك


////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود لعبة عقاب


////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود لعبة اسرع كتابة


////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود التقديم

////////////////////////////////////////////////////////////////////////////

















////////////////////////////////////////////////////////////////////////////

//قسم اكواد البوت

////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////

//يقول كم البوت شغال


////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود يشكر صاحب الاونر على دخوله السيرفر


////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود البوت يشكر من يدخله السيرفر
client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
      guild.owner.send(embed)
});

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود البوت يكتب بدال عنك


////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود يعلك كم بوت في سيرفرك
client.on('message', message => { if(!message.channel.guild) return; if(message.content.startsWith(prefix + 'allbots')) { if (message.author.bot) return; let i = 1; const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`); const embed = new Discord.RichEmbed() .setDescription(`**${message.guild.members.filter(m=>m.user.bot).size} Bots In ${message.guild.name}** ${botssize.join('\n')}`) .setFooter(client.user.username, client.user.avatarURL) .setTimestamp(); message.channel.send(embed) } })

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





