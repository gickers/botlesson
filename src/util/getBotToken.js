//You can ignore this
import dotenv from "dotenv";

/**
 * Returns value of your BOT_TOKEN environment variable or shuts down with process.exit(1)
 * Loads .env files into process.env first.
 * @returns {string} bot token from environment variable
 */
function getBotTokenOrQuit() {
    dotenv.config();
    if (!process.env.BOT_TOKEN) {
        console.error(
            "No BOT_TOKEN env var!  Get one from BotFather and save it in .env file.  https://t.me/botfather"
        );
        process.exit(1);
    }
    return process.env.BOT_TOKEN;
}

export { getBotTokenOrQuit };
