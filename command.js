import { REST, Routes, SlashCommandBuilder } from "discord.js";
import { dotenv } from "dotenv";
dotenv.config();

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "shorten",
    description: "Shortens a URL",
    options: [
      {
        name: "url",
        type: 3, // STRING
        description: "The URL to shorten",
        required: true,
      },
    ],
  },
];

const clientId = process.env.DISCORD_CLIENT_ID;
const guildId = process.env.DISCORD_GUILD_ID;

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
    body: [],
  });

  console.log("Successfully cleared application (/) commands.");

  await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
    body: commands,
  });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}
