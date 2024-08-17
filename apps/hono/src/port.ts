/**
 * Port configuration.
 *
 * The port number for the server is determined by the `HONO_API_PORT` environment variable.
 * If the environment variable is not set, the default port 8787 is used.
 */
export const PORT = process.env.HONO_API_PORT
  ? Number(process.env.HONO_API_PORT)
  : 8787;
