import { trpcServer } from "@hono/trpc-server";
import { cors } from "hono/cors";
import { Hono } from "hono/tiny";

import { appRouter } from "@giverve/api";

// Create a new Hono application instance
const app = new Hono();

/**
 * Middleware to handle CORS (Cross-Origin Resource Sharing).
 *
 * This middleware is used to enable CORS for all routes matching "/trpc/*".
 * By default, it allows requests from all origins. For more specific CORS configurations,
 * you can customize the options as needed.
 *
 * @see https://hono.dev/docs/middleware/builtin/cors
 */
app.use("/api/trpc/*", cors());

/**
 * Middleware to handle tRPC API requests.
 *
 * This middleware sets up the tRPC server with the provided router and endpoint.
 * Requests to routes matching "/trpc/*" will be handled by the tRPC server.
 *
 * - `router`: Specifies the tRPC router instance to handle requests.
 * - `endpoint`: Defines the base endpoint for tRPC requests.
 *
 * @see https://www.npmjs.com/package/@hono/trpc-server
 */
app.use(
  "/api/trpc/*",
  trpcServer({
    router: appRouter,
    endpoint: "/api/trpc",
  }),
);

export default app;
