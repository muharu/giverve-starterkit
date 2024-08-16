import { createTRPCReact } from "@trpc/react-query";

import { AppRouter } from "@giverve/api";

export const trpc = createTRPCReact<AppRouter>();
