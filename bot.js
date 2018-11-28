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





