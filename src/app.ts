import { Client, Events, GatewayIntentBits } from "discord.js";
import 'dotenv/config'

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions
    ]
});

client.on(Events.ClientReady, async () => {
    console.log(`Conectado como ${client.user?.username}`);
})

const ruy = "336749008414310400"
const maguan = "408104341384462337"
const sierra = "392526788179394564"
const isra = "352579930791346186"
const carlos = "355777329919819776"

client.on(Events.MessageCreate, async (msg) => {
    if (msg.author.bot) return
    if (!msg.content.startsWith("--")) return

    const args = msg.content.slice(2).trim()

    switch (args) {
        case "flex":
            msg.react("🔥")
            // Evaluar quien es el usuario que envio el mensaje para etiquetar a los demas
            if (msg.author.id === carlos) return msg.channel.send({ content: `Clash??? <@${ruy}> <@${maguan}> <@${sierra}> <@${isra}>`, files: ['https://media.giphy.com/media/EE185t7OeMbTy/giphy.gif'] })
            if (msg.author.id === ruy) return msg.channel.send({ content: `Clash?? <@${carlos}> <@${maguan}> <@${sierra}> <@${isra}>`, files: ['https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXdlZHV1cDNpbHo4eHk1eXBsOHU5M2p2dmF3bHhxa2V5YjcxZnIxZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/r8qaw0TZvreU0/giphy.gif'] })
            if (msg.author.id === maguan) return msg.channel.send(`Flex?? <@${ruy}> <@${carlos}> <@${sierra}> <@${isra}>`)
            if (msg.author.id === sierra) return msg.channel.send(`🔥??? <@${ruy}> <@${maguan}> <@${carlos}> <@${isra}>`)
            if (msg.author.id === isra) return msg.channel.send(`Coito??? <@${ruy}> <@${maguan}> <@${sierra}> <@${carlos}>`)
            break
        case "clash":
            msg.react("🔥")
            // Evaluar quien es el usuario que envio el mensaje para etiquetar a los demas
            if (msg.author.id === carlos) return msg.channel.send({ content: `Clash??? <@${ruy}> <@${maguan}> <@${sierra}> <@${isra}>`, files: ['https://media.giphy.com/media/EE185t7OeMbTy/giphy.gif'] })
            if (msg.author.id === ruy) return msg.channel.send({ content: `Clash?? <@${carlos}> <@${maguan}> <@${sierra}> <@${isra}>`, files: ['https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXdlZHV1cDNpbHo4eHk1eXBsOHU5M2p2dmF3bHhxa2V5YjcxZnIxZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/r8qaw0TZvreU0/giphy.gif'] })
            if (msg.author.id === maguan) return msg.channel.send(`Clash?? <@${ruy}> <@${carlos}> <@${sierra}> <@${isra}>`)
            if (msg.author.id === sierra) return msg.channel.send(`Clash🔥??? <@${ruy}> <@${maguan}> <@${carlos}> <@${isra}>`)
            if (msg.author.id === isra) return msg.channel.send(`Clash??? <@${ruy}> <@${maguan}> <@${sierra}> <@${carlos}>`)
            break
        default:
            msg.channel.send("No configure este comando")
            break
    }
})

client.login(process.env.SECRET_KEY)