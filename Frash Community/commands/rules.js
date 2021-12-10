module.exports = {
    name: 'rules',
    description: "rules cmd",
    execute(message, args, Discord){
     if(message.member.roles.cache.has('918525473158467624')) {
         const newEmbed = new Discord.MessageEmbed()
        .setColor('#da2f1b')
        .setTitle('Frash Community قوانين سيرفر ')
        .setDescription('القوانين قابله  للتغير')
        .setImage('https://cdn.discordapp.com/attachments/918510680263508000/918533285309714492/38c9a94f81a6087c.png')
        .addFields(
            {name: '1', value: 'ممنوع السب'},
            {name: '2', value: 'ممنوع طلب رتبه'},
            {name: '3', value: 'ممنوع طلب الكريدت'},
            {name: '4', value: 'ممنوع تكلم فل جنس او السياسه'},
            {name: '5', value: 'ممنوع تكلم لغه غير العربيه'},
            {name: '6', value: 'ممنوع تمنشن الأداره'},
            {name: '7', value: 'ممنوع تناقش الأداره'},
            {name: '8', value: 'ممنوع السبام'},
            {name: '9', value: 'ممنوع نشر روابط'},
            {name: '10', value: 'ممنوع تنمر على اعضاء'},
            {name: '11', value: 'ممنوع تسوي انفايتات لسيرفرات ديسكورد داخل السيرفر'},
            {name: '12', value: 'يلي يخالف القوانين ويقول ماقريتها مالنا دخل'},
            {name: '13', value: 'ممنوع اشياء اباحيه او مخله للأدب'}
        )
        message.channel.send({embeds: [newEmbed]});
        }  else{
            message.channel.send('**Unknow Command!**');
        }
    }
}