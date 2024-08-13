import { trpcServer } from "@hono/trpc-server";
import { Hono } from "hono";

import { appRouter } from "@giverve/api";

const app = new Hono();

app.use(
  "/api/trpc/*",
  trpcServer({
    router: appRouter,
    endpoint: "/api/trpc",
  }),
);

export default app;
