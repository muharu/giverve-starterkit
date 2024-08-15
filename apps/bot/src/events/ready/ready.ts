import type { ExtendedClient } from "../../shard";

export default async (client: ExtendedClient) => {
  console.log(`${client.user?.tag} is online!`);

  if (client.cluster) {
    try {
      const guildCounts = await client.cluster.broadcastEval(
        (c) => c.guilds.cache.size,
      );
      const totalGuilds = guildCounts.reduce((sum, count) => sum + count, 0);
      console.log(`${totalGuilds} total guilds`);
    } catch (error) {
      console.error("Error fetching guild count:", error);
    }
  }
};
