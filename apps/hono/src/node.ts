import { serve } from "@hono/node-server";

import { PORT } from "./port";
import app from "./root";

/**
 *  Server setup for Hono Node.js runtime
 *
 * Uses the `@hono/node-server` package to listen for incoming HTTP requests on the specified port.
 * - `fetch`: A reference to the Hono application’s fetch handler.
 * - `port`: The port number on which the server will listen for incoming requests.
 *
 * Logs the port number to the console once the server is running.
 */

serve({
  fetch: app.fetch,
  port: PORT,
});

console.log(`Server is running on Node.js runtime at port: ${PORT}`);
