//dekuBot
const Discord = require('discord.js');
const bot = new Discord.Client();
i = 0;

const token = "";
const PREFIX = 'd!';

bot.on('ready', () => {
    console.log('This bot is online!');
    bot.user.setActivity('Dreaming of being a hero!\nType \"d!help\" for commands!');
});

bot.on('message', msg => {
    if (msg.content[0] == 'd' && msg.content[1] == '!') {
        let args = msg.content.substring(PREFIX.length).split(" ");
        switch (args[0]) {
            case 'help':
                msg.reply('!hello - Say hello!' +
                    '\n!ping - Get a test message.' +
                    '\n!smashme - SMMAAAAAAASH!' +
                    '\n!dice - Roll a die! Enter a number after the command to set the highest number the die will roll.');
                break;
            case 'hello':
                msg.reply("https://ih1.redbubble.net/image.601904638.1717/raf,750x1000,075,t,FFFFFF:97ab1c12de.u2.jpg");
                break;
            case 'ping':
                msg.reply('pong!');
                break;
            case 'smashme':
                i = Math.trunc((Math.random() * 8) + 1);
                if (i == 1) {
                    msg.reply("https://i.pinimg.com/originals/84/d3/55/84d355875889dd57c7b7cc0f16f1fad0.jpg");
                }
                if (i == 2) {
                    msg.reply("https://i.redd.it/355tidgugwj41.jpg");
                }
                if (i == 3) {
                    msg.reply("https://i.pinimg.com/originals/61/d5/8a/61d58a9a66be3d5ed4409e5e9739c83b.jpg");
                }
                if (i == 4) {
                    msg.reply("https://images7.memedroid.com/images/UPLOADED373/5de58022901e9.jpeg");
                }
                if (i == 5) {
                    msg.reply("https://i.kym-cdn.com/photos/images/facebook/001/272/054/577.jpg");
                }
                if (i == 6) {
                    msg.reply("https://i.pinimg.com/originals/4e/e9/73/4ee97338ceb82180ec5340d25702cd13.jpg");
                }
                if (i == 7) {
                    msg.reply("https://i.kym-cdn.com/photos/images/original/001/644/956/220.jpg");
                }
                if (i == 8) {
                    msg.reply("https://i.pinimg.com/originals/99/5c/44/995c44778c8571fbc1309fd52d762faa.jpg");
                }
                break;
            case 'dice':
                number = args[1];
                if (isNaN(number)) {
                    msg.reply("Sorry, that isn't a number!");
                } else {
                    msg.reply(Math.floor((Math.random() * number) + 1));
                }
                break;
            case 'git':
                msg.reply('https://github.com/GenericNPC/dekuBot');
                break;
        }
    }
});

bot.login(token);