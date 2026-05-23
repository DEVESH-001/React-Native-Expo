import { createClient } from "@libsql/client";

export const db = createClient({
  url: process.env.TURSO_DATABASE!, // !-> the value is not null
  authToken: process.env.TURSO_CREATE_TOKEN!,
});
