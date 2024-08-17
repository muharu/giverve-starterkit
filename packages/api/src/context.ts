export const createContext = async () => {
  const session = await getSession();
  const ctx = {
    session,
  };

  return ctx;
};

export async function getSession() {
  // mocking user session
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    userId: "1",
    username: "test",
  };
}

export type Context = typeof createContext;
