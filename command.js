import { REST, Routes, SlashCommandBuilder } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const commands_1 = [
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
const commands_2 = [
  {
    name: "ask_gpt",
    description: "Replies to your Question!",
    options: [
      {
        name: "question",
        type: 3, // STRING
        description: "The Question to be answered",
        required: true,
      },
    ],
  },
];

const clientId1 = process.env.DISCORD_CLIENT_ID1;
const clientId2 = process.env.DISCORD_CLIENT_ID2;
const guildId = process.env.DISCORD_GUILD_ID;

const rest1 = new REST({ version: "10" }).setToken(
  process.env.DISCORD_TOKEN_BOT1
);

const rest2 = new REST({ version: "10" }).setToken(
  process.env.DISCORD_TOKEN_BOT2
);

try {
  console.log("Started refreshing application (/) commands.");

  await rest1.put(Routes.applicationGuildCommands(clientId1, guildId), {
    body: [],
  });

  console.log("Successfully cleared application (/) commands.");

  await rest1.put(Routes.applicationGuildCommands(clientId1, guildId), {
    body: commands_1,
  });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}

try {
  console.log("Started refreshing application (/) commands for askGPT.");

  await rest2.put(Routes.applicationGuildCommands(clientId2, guildId), {
    body: [],
  });

  console.log("Successfully cleared application (/) commands.");

  await rest2.put(Routes.applicationGuildCommands(clientId2, guildId), {
    body: commands_2,
  });

  console.log("Successfully reloaded application (/) commands for askGPT.");
} catch (error) {
  console.error(error);
}
