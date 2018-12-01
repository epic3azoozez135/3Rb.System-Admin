const Discord = require("discord.js");
const RichEmbed = require("discord.js");
const { Client, Util } = require('discord.js');
const client = new Discord.Client();
const prefix = "#";
 
const devs = ["257804689268146177"]
 
const adminprefix = "#";
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
     message.channel.send('تـم حـظـر بـسـبـب الـنـشـر  <@' + message.author.id + '>')
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
               title: 'بـسـبـب الـنـشـر ' + member.displayName + ' تـم حـظـر',
               color: 490101,
               }
             });
         }
       )
     }
 });

//كود يبند الوهمي الاقل من اسبوع
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

//كود ميوت وا ان ميون
client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "#mute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يـوجـد لـديـك بـرمـشـن 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('**يـجـب عـلـيـك مـنـشـنـت شـخـص اولاً**').catch(console.error);
    
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', '#mute')
      .addField('الأستعمال:', '#unmute')
      .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يـوجـد لـدي بـرمـشـن Manage Roles **').catch(console.error);
   
    if (message.guild.member(user).roles.has(muteRole.id)) {
  return message.reply("**:white_check_mark: .. تـم اعـطـاء الـعـضـو مـيـوت**").catch(console.error);
  } else {
      message.guild.member(user).addRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. تـم اعـطـاء الـعـضـو مـيـوت كـتـابـي**").catch(console.error);
  });
    }
  
  };
  
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

//كود الحذف الروم او الشات
client.on("message", (message) => { // Last Code
    if (message.content.startsWith('#del')) { // الامر والبريفكس
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions "); 
 
        let args = message.content.split(' ').slice(1); // Last Code
        let channel = message.client.channels.find('name', args.join(' ')); // Last Code
        if (!channel) return message.reply('**لا يـوجـد اي روم بـهـذا الاسـم**').catch(console.error);
        channel.delete() // Last Code
    }
});

////////////////////////////////////////////////////////////////////////////














client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.get("518077303260184597");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        });
    });
});
 
 
 
client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.get("518149669377802264");
    if (!channel) {
        console.log("!the channel id it's not correct");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('-');
    var guild;
    while (!guild)
        guild = client.guilds.get("518077303260184597");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
 channel.send(`تم دعوته بواسطة  ${Invite.inviter} `) ;        
 }
            dat[Inv] = Invite.uses;
       
       });
    });
});


























////////////////////////////////////////////////////////////////////////////

//كود اعطاء رتب الاعضاء
client.on ("guildMemberAdd", member => {
  
  var role = member.guild.roles.find ("name", "Sw");
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
})
client.on('ready', () => {
    client.channels.get("518152672084230145").join();
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



////////////////////////////////////////////////////////////////////////////

//كود معلومات السيرفر


////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود معلومات الشخص
client.on('message', message => {
         
 
  if (message.content.startsWith(prefix + "id")) {
   
   if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);
 
       message.guild.fetchInvites().then(invs => {
let member = client.guilds.get(message.guild.id).members.get(message.author.id);
let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
var moment = require('moment');
var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
var heg;
if(men) {
heg = men
} else {
heg = message.author
}
var mentionned = message.mentions.members.first();
var h;
if(mentionned) {
h = mentionned
} else {
h = message.member
}
moment.locale('ar-TN');
var id = new  Discord.RichEmbed()
 
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true)
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)
.addField(` :لقد قمت بدعوة `, ` ${inviteCount} `)
 
 
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);
})
}
 
 
 
});

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//برودكاست + للكل + مع منشن + غير مطور
client.on("message", message => {
 
  if (message.content.startsWith(prefix + "bc")) {
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

//برودكاست + للكل + مع منشن + مطور
client.on('message', message => {
    var prefix = "#";
    
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'mbc') {
        if (!args[1]) {
    message.channel.send("**f!bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .addField('» السيرفر :', `${message.guild.name}`)
                .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
                .addField(' » الرسالة : ', args)
                .setColor('#ff0000')
                // m.send(`[${m}]`);
                m.send(`${m}`,{embed: bc});
            });
        }
        } else {
            return;
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

//قسم اكواد البوت

////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////

//يقول كم البوت شغال


////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//


////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود البوت يشكر من يدخله السيرفر
client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شـكـراً لـك لإضـافـه الـبـوت الـى سـيـرفـرك:heart:**`)
      guild.owner.send(embed)
});

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود يسوي الوان


////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود يعلك كم بوت في سيرفرك
client.on('message', message => { if(!message.channel.guild) return; if(message.content.startsWith(prefix + 'allbots')) { if (message.author.bot) return; let i = 1; const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`); const embed = new Discord.RichEmbed() .setDescription(`**${message.guild.members.filter(m=>m.user.bot).size} Bots In ${message.guild.name}** ${botssize.join('\n')}`) .setFooter(client.user.username, client.user.avatarURL) .setTimestamp(); message.channel.send(embed) } })

////////////////////////////////////////////////////////////////////////////



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

//قسم أكواد الالعاب وا الخ . .

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود اسئلة لعبة فورت نايت


////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////

//كود حجرة ورقة مقص


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

//القيف اوي


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

//كود التقديم على السبورت
client.on('message', async message => {
    var command = message.content.toLowerCase().split(" ")[0];
    var prefix = '#';// Alpha Codes
    var name = '';// Alpha Codes
    var age = '';// Alpha Codes
    var fromwhere = '';// Alpha Codes
    var fa2dh = '';// Alpha Codes
    var filter = m => m.author.id === message.author.id;// Alpha Codes
    var subChannel = message.guild.channels.find(c => c.name === 'support-join');// Alpha Codes
   
    if(command == prefix + 'join-support') {// Alpha Codes
        if(message.author.bot) return;
        if(message.channel.type === 'dm') return;
 
        var modRole = message.guild.roles.find(r => r.name === '✲ SUPPORT');// Alpha Codes
       
        if(message.guild.member(message.author).roles.has(modRole.id)) return message.channel.send(':x: | معك الرتبة');// Alpha Codes
        if(!subChannel) return message.channel.send(':x: | يجب ان يتوفر روم اسمه `support-join`');// Alpha Codes
       
        message.channel.send(':timer: | **اكتب اسمك الحقيقي الان من فضلك**').then(msgS => {
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                name = collected.first().content;
                collected.first().delete();
                msgS.edit(':timer: | **من فضلك اكتب عمرك الان**').then(msgS => {
                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                        age = collected.first().content;
                        collected.first().delete();
                        msgS.edit(':timer: | **من فضلك اكتب من اي بلد انت**').then(msgS => {
                            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                fromwhere = collected.first().content;
                                collected.first().delete();
                                msgS.edit(':timer: | **من فضلك اكتب سبب تقديمك على الرتبة والمهارات اللتي لديك لتقديمها**').then(msgS => {
                                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                        fa2dh = collected.first().content;
                                        collected.first().delete();
                                       
                                        let embedS = new Discord.RichEmbed()
                                        .setAuthor(message.author.tag, message.author.avatarURL)
                                        .setThumbnail(message.author.avatarURL)
                                        .setDescription('**\n:no_entry: هل انت متأكد انك تريد التقديم؟**')
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
                                            });// Alpha Codes
                                            dontSend.on('collect', r => {
                                                msgS.delete();
                                                message.channel.send(':x: | تم الغاء تقديمك');// Alpha Codes
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

