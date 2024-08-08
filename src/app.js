import { Client, Events, GatewayIntentBits, Partials } from "discord.js";
import 'dotenv/config'

let contadorEsLoMismo = 0;
const ruy = "336749008414310400"
const maguan = "408104341384462337"
const sierra = "392526788179394564"
const isra = "352579930791346186"
const carlos = "355777329919819776"
const carlitos = "395333989080104963"
const zuker = "524308819455639565"
let messagesToCheck = new Map();
const flexers = [ruy, maguan, sierra, isra, carlos, carlitos, zuker]


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions
    ],
    partials: [Partials.Message, Partials.Reaction, Partials.User]
});

client.on(Events.ClientReady, async () => {
    console.log(`Conectado como ${client.user?.username}`);
})


client.on(Events.MessageCreate, async (msg) => {
    if (msg.author.bot) return
    if (!msg.content.startsWith(".")) return
    const args = msg.content.slice(1).trim()

    switch (args) {
        case "flecs":
            messagesToCheck.set(msg.id , `${msg.author.id}-${msg.content}`)
            msg.react("🔥")
            contadorEsLoMismo++
            // Evaluar quien es el usuario que envio el mensaje para etiquetar a los demas
            if (msg.author.id === zuker) msg.channel.send({ content: `flecs??? <@${ruy}> <@${maguan}> <@${sierra}> <@${isra}> <@${carlos}>`, files: ['./G2Esports.gif'] })
            if (msg.author.id === carlitos) msg.channel.send({ content: `flecs??? <@${ruy}> <@${maguan}> <@${sierra}> <@${isra}> <@${carlos}>`, files: ['./Carlitos.gif'] })
            if (msg.author.id === ruy)  msg.channel.send({ content: `Fleeeecs?? <@${carlos}> <@${maguan}> <@${sierra}> <@${isra}>`, files: ['./cool-fun.gif'] })
            if (msg.author.id === carlos) msg.channel.send({ content: `Flecss??? <@${ruy}> <@${maguan}> <@${sierra}> <@${isra}>`, files: ['./siu.gif',] })
            if (msg.author.id === maguan) msg.channel.send({ conten: `Flecs???? <@${ruy}> <@${carlos}> <@${sierra}> <@${isra}>`, files: ['./maguan.gif'] })
            if (msg.author.id === sierra) msg.channel.send({ content: `🔥??? <@${ruy}> <@${maguan}> <@${carlos}> <@${isra}>`, files: ['./sexo.jpg'] })
            if (msg.author.id === isra) msg.channel.send({ content: `Coito??? <@${ruy}> <@${maguan}> <@${sierra}> <@${carlos}>`, files: ['./isra.png'] })
            if (contadorEsLoMismo === 5) {
                contadorEsLoMismo = 0
                return msg.channel.send({ content: `Es que es lo mismo we Es que es lo mismo wey, es exactamente, es una construcción intersubjetiva a la que le adjudicas un valor intrínseco y la persigues, o sea el hecho de que la gente se forme para tocar una piedra wey es lo mismo a que la gente se forme a tomarse una foto con un espejo, es lo mismo` })
            }

            break;

        case "flex":
            messagesToCheck.set(msg.id , `${msg.author.id}-${msg.content}`)
            msg.react("🔥")
            contadorEsLoMismo++
            // Evaluar quien es el usuario que envio el mensaje para etiquetar a los demas
            if (msg.author.id === carlitos) return msg.channel.send({ content: `flecs??? <@${ruy}> <@${maguan}> <@${sierra}> <@${isra}> <@${carlos}>`, files: ['./Carlitos.gif'] })
            if (msg.author.id === carlos) return msg.channel.send({ content: `Sexo???? <@${ruy}> <@${maguan}> <@${sierra}> <@${isra}>`, files: ['https://media.giphy.com/media/EE185t7OeMbTy/giphy.gif'] })
            if (msg.author.id === ruy) return msg.channel.send({ content: `Flex<@${carlos}> <@${maguan}> <@${sierra}> <@${isra}>`, files: ['https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXdlZHV1cDNpbHo4eHk1eXBsOHU5M2p2dmF3bHhxa2V5YjcxZnIxZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/r8qaw0TZvreU0/giphy.gif'] })
            if (msg.author.id === maguan) return msg.channel.send(`Flex?? <@${ruy}> <@${carlos}> <@${sierra}> <@${isra}>`)
            if (msg.author.id === sierra) return msg.channel.send({ content: `🔥??? <@${ruy}> <@${maguan}> <@${carlos}> <@${isra}>`, files: ['./sexo.jpg'] })
            if (msg.author.id === isra) return msg.channel.send(`Coito??? <@${ruy}> <@${maguan}> <@${sierra}> <@${carlos}>`)
            if (contadorEsLoMismo === 5) {
                contadorEsLoMismo = 0
                return msg.channel.send({ content: `Es que es lo mismo we Es que es lo mismo wey, es exactamente, es una construcción intersubjetiva a la que le adjudicas un valor intrínseco y la persigues, o sea el hecho de que la gente se forme para tocar una piedra wey es lo mismo a que la gente se forme a tomarse una foto con un espejo, es lo mismo` })
            }
            break;

        case "clash":
            messagesToCheck.set(msg.id , `${msg.author.id}-${msg.content}`)
            msg.react("🔥")
            contadorEsLoMismo++
            // Evaluar quien es el usuario que envio el mensaje para etiquetar a los demas
            if (msg.author.id === carlitos) return msg.channel.send({ content: `flecs??? <@${ruy}> <@${maguan}> <@${sierra}> <@${isra}> <@${carlos}>`, files: ['./Carlitos.gif'] })
            if (msg.author.id === carlitos) return msg.channel.send({ content: `Clash??? <@${ruy}> <@${maguan}> <@${sierra}> <@${isra}>`, files: ['https://media.giphy.com/media/EE185t7OeMbTy/giphy.gif'] })
            if (msg.author.id === carlos) return msg.channel.send({ content: `Clash??? <@${ruy}> <@${maguan}> <@${sierra}> <@${isra}>`, files: ['https://media.giphy.com/media/EE185t7OeMbTy/giphy.gif'] })
            if (msg.author.id === ruy) return msg.channel.send({ content: `Clash?? <@${carlos}> <@${maguan}> <@${sierra}> <@${isra}>`, files: ['https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXdlZHV1cDNpbHo4eHk1eXBsOHU5M2p2dmF3bHhxa2V5YjcxZnIxZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/r8qaw0TZvreU0/giphy.gif'] })
            if (msg.author.id === maguan) return msg.channel.send(`Clash?? <@${ruy}> <@${carlos}> <@${sierra}> <@${isra}>`)
            if (msg.author.id === sierra) return msg.channel.send(`Clash🔥??? <@${ruy}> <@${maguan}> <@${carlos}> <@${isra}>`)
            if (msg.author.id === isra) return msg.channel.send(`Clash??? <@${ruy}> <@${maguan}> <@${sierra}> <@${carlos}>`)
            if (contadorEsLoMismo === 5) {
                contadorEsLoMismo = 0
                return msg.channel.send({ content: `Es que es lo mismo we Es que es lo mismo wey, es exactamente, es una construcción intersubjetiva a la que le adjudicas un valor intrínseco y la persigues, o sea el hecho de que la gente se forme para tocar una piedra wey es lo mismo a que la gente se forme a tomarse una foto con un espejo, es lo mismo` })
            }
            break;
        case "hq":
            messagesToCheck.set(msg.id , `${msg.author.id}-${msg.content}`)
            msg.react("🇭")
            msg.react("🇶")
            contadorEsLoMismo++
            msg.channel.send({ content: "Age???", files: ['./age-of-empires.gif'] })
            break;
        default:
            msg.channel.send(`No tengo configurado para responder este mensaje: <@${msg.author.id}> ${args}`)
            break;
    }
})

client.on(Events.MessageReactionAdd, async (reaction, user) => {
    if(user.bot) return
    const [authorId, messageContent] = messagesToCheck.get(reaction.message.id).split("-")
    if(messagesToCheck.has(reaction.message.id) && reaction.emoji.name === "✅" && flexers.includes(authorId)){

        const reactionCount = reaction.count
        const channel = reaction.message.channel;
        const usersReactions = await reaction.message.reactions.cache.get("✅")?.users.fetch();
        const reactedUsers = usersReactions.map(user => user.id);


        if(reactionCount === 5){
            await channel.send(`Flecs completos ${reactedUsers.map(user => `<@${user}>`)}`.split(",").join(" "))
            return messagesToCheck.delete(reaction.message.id)
        }

         
         // Filtrar flexers que no han reaccionado
         const flexersFaltantes = flexers.filter(flexer => !reactedUsers.includes(flexer));

        await channel.send(`${reactionCount}/5 ${flexersFaltantes.map(flexer => `<@${flexer}>`)}`.split(",").join(" "))
    }
})

client.on(Events.MessageReactionRemove, async (reaction, user) => {
    if(user.bot) return
    const [authorId, messageContent] = messagesToCheck.get(reaction.message.id).split("-")
    if (messageContent && reaction.emoji.name === "✅") {
        if (flexers.includes(authorId)) {
            const channel = reaction.message.channel;
            await channel.send(`Este pendejo ya no quiere jugar <@${user.id}> madreenselo`);
        }
    }
})


client.login(process.env.SECRET_KEY)
