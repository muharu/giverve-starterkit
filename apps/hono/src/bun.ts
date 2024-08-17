import { PORT } from "./port";
import app from "./root";

/**
 * Server setup for Hono Bun runtime
 *
 * Uses Bun’s native `Bun.serve` method to handle HTTP requests.
 * - `fetch`: A reference to the Hono application’s fetch handler.
 * - `port`: The port number on which the server will listen for incoming requests.
 *
 * Logs the port number to the console once the server is running.
 * If Bun is not available, a message indicating that Bun is not installed is logged.
 */
if (typeof Bun !== "undefined" && process.versions.bun) {
  Bun.serve({
    fetch: app.fetch,
    port: PORT,
  });

  console.log(`Server running on Bun Runtime at port ${PORT}`);
} else {
  console.log(
    "Bun runtime is not detected. Please ensure that Bun is installed on your system.",
  );
}
