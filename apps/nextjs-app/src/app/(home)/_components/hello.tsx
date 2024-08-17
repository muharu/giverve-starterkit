"use client";

import { trpc } from "~/lib/trpc";

export default function Hello() {
  const { data, isLoading } = trpc.post.hello.useQuery({
    text: "Udin",
  });

  if (isLoading) return <div>Loading...</div>;

  return <div>{JSON.stringify(data)}</div>;
}
