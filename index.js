const Discord = require('discord.js');
const bot = new Discord.Client();
i = 0;

const token = "";
const PREFIX = '!';

bot.on('ready', () => {
    console.log('This bot is online!');
});



bot.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(" ");
    switch (args[0]) {
        case 'hello':
            msg.reply("https://ih1.redbubble.net/image.601904638.1717/raf,750x1000,075,t,FFFFFF:97ab1c12de.u2.jpg");
            break;
        case 'ping':
            msg.reply('pong!');
            break;
        case 'smashme':
            if (i == 0) {
                msg.reply("https://i.pinimg.com/originals/84/d3/55/84d355875889dd57c7b7cc0f16f1fad0.jpg");
            }
            if (i == 1) {
                msg.reply("https://i.redd.it/355tidgugwj41.jpg");
            }
            if (i == 2) {
                msg.reply("https://i.pinimg.com/originals/61/d5/8a/61d58a9a66be3d5ed4409e5e9739c83b.jpg");
            }
            if (i == 3) {
                msg.reply("https://images7.memedroid.com/images/UPLOADED373/5de58022901e9.jpeg");
            }
            if (i == 4) {
                msg.reply("https://i.kym-cdn.com/photos/images/facebook/001/272/054/577.jpg");
            }
            if (i == 5) {
                msg.reply("https://i.pinimg.com/originals/4e/e9/73/4ee97338ceb82180ec5340d25702cd13.jpg");
            }
            if (i == 6) {
                msg.reply("https://i.kym-cdn.com/photos/images/original/001/644/956/220.jpg");
            }
            if (i == 7) {
                msg.reply("https://i.pinimg.com/originals/99/5c/44/995c44778c8571fbc1309fd52d762faa.jpg");
            }
            if (i == 7) {
                i = 0;
            }
            i++;
            break;
        case 'dice':
            number = args[1];
            if (isNaN(number)) {
                msg.reply("Sorry, that isn't a number!");
            } else {
                msg.reply(Math.floor((Math.random() * number) + 1));
            }
    }
});

bot.login(token);