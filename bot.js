const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '#'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
    client.user.setGame(`3Rb.`,"http://twitch.tv/xmas")
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

//كود اعطاء رتبه اول ما يدخل
client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "3Rb");
   member.addRole (role);
  
})

//كود يعلمك كم بوت في السيرفر
client.on('message', message => { if(!message.channel.guild) return; if(message.content.startsWith(prefix + 'allbots')) { if (message.author.bot) return; let i = 1; const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`); const embed = new Discord.RichEmbed() .setDescription(`**${message.guild.members.filter(m=>m.user.bot).size} Bots In ${message.guild.name}** ${botssize.join('\n')}`) .setFooter(client.user.username, client.user.avatarURL) .setTimestamp(); message.channel.send(embed) } })




//كود الافتار
client.on('message', message => {
    if (message.content.startsWith("!!avatar")) {
if(!message.channel.guild) return;
        var mentionned = message.mentions.users.first();
    var client;
      if(mentionned){
          var client = mentionned; } else {
          var client = message.author;
      }
        const embed = new Discord.RichEmbed()
                           .addField('by:', "<@" + message.author.id + ">")
        .setColor(000000)
        .setImage(`${client.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});





//كود القيف اوي
       client.on('message',async message => {
          var room;
          var title;
          var duration;
          var gMembers;
          var filter = m => m.author.id === message.author.id;
          if(message.content.startsWith(prefix + "giveaway")) {
            if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
            message.channel.send(`:eight_pointed_black_star:| **من فضلك اكتب اسم الروم**`).then(msgg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                let room = message.guild.channels.find('name', collected.first().content);
                if(!room) return message.channel.send(':heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**');
                room = collected.first().content;
                collected.first().delete();
                msgg.edit(':eight_pointed_black_star:| **اكتب مدة القيف اواي بالدقائق , مثال : 60**').then(msg => {
                  message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                  }).then(collected => {
                    if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
                    duration = collected.first().content * 60000;
                    collected.first().delete();
                    msgg.edit(':eight_pointed_black_star:| **واخيرا اكتب على ماذا تريد القيف اواي**').then(msg => {
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 20000,
                        errors: ['time']
                      }).then(collected => {
                        title = collected.first().content;
                        collected.first().delete();
                        try {
                          let giveEmbed = new Discord.RichEmbed()
                          .setAuthor(message.guild.name, message.guild.iconURL)
                          .setTitle(title)
                          .setDescription(`المدة : ${duration / 60000} دقائق`)
                          .setFooter(message.author.username, message.author.avatarURL);
                          message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                             let re = m.react('🎉');
                             setTimeout(() => {
                               let users = m.reactions.get("🎉").users;
                               let list = users.array().filter(u => u.id !== m.author.id);
                               let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                                 if(users.size === 1) gFilter = '**لم يتم التحديد**';
                               let endEmbed = new Discord.RichEmbed()
                               .setAuthor(message.author.username, message.author.avatarURL)
                               .setTitle(title)
                               .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)
                               .setFooter(message.guild.name, message.guild.iconURL);
                               m.edit(endEmbed);
                             },duration);
                           });
                          msgg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);
                        } catch(e) {
                          msgg.edit(`:heavy_multiplication_x:| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**`);
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
