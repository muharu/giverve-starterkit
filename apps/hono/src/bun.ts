import { PORT } from "./port";
import app from "./root";

if (typeof Bun !== "undefined" && process.versions.bun) {
  Bun.serve({
    fetch: app.fetch,
    port: PORT,
  });

  console.log(`Server running on Bun Runtime at port ${PORT}`);
} else {
  console.log("Bun is not enabled");
}
