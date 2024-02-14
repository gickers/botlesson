import { Telegraf } from "telegraf";
import { getBotTokenOrQuit } from "./util/getBotToken.js";

const botToken = getBotTokenOrQuit();

const bot = new Telegraf(botToken);

//You can change anything in this section----------v------------v-------------

bot.start((ctx) => ctx.reply("Hello!  Let's talk!  Try 'hello' or '/sing'"));
bot.help((ctx) => ctx.reply("Hmm i am not programmed to be helpful, yet!"));
bot.hears("hello", (ctx) => ctx.reply("Ok, I heard you say hello"));
bot.command("sing", (ctx) => ctx.reply("La la la!  I got your command."));

//You don't need to change anything below----------^------------^-------------
bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
