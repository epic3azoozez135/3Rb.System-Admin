const Discord = require("discord.js");
const RichEmbed = require("discord.js");
const fs = require('fs')
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

//كود تبنيد بوتات النشر
client.on('message', message => {
    if(message.channel.type === 'dm') {
        var guildID = '518077303260184597'; // <=============== ايدي السيرفر حقك
        if(message.content.includes('discord.gg/')) {
            var member = client.guilds.find(g => g.id === guildID).members.find(m => m.id === message.author.id);
            member.ban({ reason: 'ADS In Private.' }).catch();
        }
    }
});



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

//كود كيك روم
client.on("message", message => {
    var prefix = "#";
    const command = message.content.split(" ")[0];
 
    if(command == prefix+"vkick"){
 
        if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return message.reply('you do not have permission to perform this action!');
        }
 
        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if(!message.mentions.users){
            message.reply("please mention the member")
            return;
        }
 
    if(!member.voiceChannel){
    message.reply("i can't include voice channel for member!")
    return;
    }
              message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log)
       
 
 
   
      });
     });
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

//كود الي ينشر ياكل ميوت
client.on('message', function(message) {
    if (!message.member.hasPermissions(['ADMINISTRATOR'])){
            let command = message.content.split(" ")[0];
        if(message.content.includes('discord.gg')){
        message.reply (' ')
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(message.guild.roles.find('name', 'Muted'));
    const embed500 = new Discord.RichEmbed()
      .setTitle(":x: | تمت معاقبتك")
            .addField(`**تـم اعـطـاء الـشـخـص مـيـوت صـوتـي وا كـتـابـي**`)
      .addField(`by`,`ALPHACODES`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} Server`)
     message.channel.send(embed500)
   
       
    }
    }
})

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

//كود سحب


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




client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const stewart = member.guild.channels.find("name", "3rb");
     stewart.send(`<@${member.user.id}> invite.By <@${inviter.id}>`);
   //  stewart.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  });
})

































////////////////////////////////////////////////////////////////////////////

//كود اعطاء رتب الاعضاء
client.on ("guildMemberAdd", member => {
  
  var role = member.guild.roles.find ("name", "3Rb.");
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

//كود يطلع البريمشنات
client.on('message', message => {
  var prefix ="#"; // البريفكس
if (message.content.startsWith(prefix + 'perms')) { // الامر
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: البرمشنات')
         .addField('البرمشنات التي لديك',perms)
                  message.channel.send({embed:zPeRms});
 
    }
});


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


//كريديت البوت



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

//كود يسويلك الرتب
client.on('message', message => {
    if (message.content === "_createroles") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);

                     message.guild.createRole({ name: "Owner", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Co-Owner", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Leader", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Co-Leader", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "King", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Qween", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "HighNiss", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Pros", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "VIP+", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "VIP", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Actve", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Members", color: "#ffffff", permissions: [] })
        

message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعه الرتب **')
}
});

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
  
     message.channel.send(`**حذف : هـل انـت مـتـأكـد مـن اغـلاق الـتـذكـرة ؟ اذا انـت مـتـأكـد اكـتـب**`)
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


////////////////////////////////////////////////////////////////////////////







