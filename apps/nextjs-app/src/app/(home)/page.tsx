import { createAsyncCaller } from "@giverve/api";

import Hello from "./_components/hello";

export default async function Home() {
  const caller = await createAsyncCaller();
  const { greeting } = await caller.post.hello({
    text: "world",
  });

  return (
    <main>
      <div>
        <h1>Fetch Server Side</h1>
        {JSON.stringify(greeting)}
      </div>

      <div>
        <h1>Fetch Client Side</h1>
        <Hello />
      </div>
    </main>
  );
}
