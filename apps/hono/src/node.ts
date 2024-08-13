import { serve } from "@hono/node-server";

import { PORT } from "./port";
import app from "./root";

serve({
  fetch: app.fetch,
  port: PORT,
});

console.log(`Server running on NodeJS Runtime at port: ${PORT}`);
