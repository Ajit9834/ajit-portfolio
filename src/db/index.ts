import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const globalForDb = globalThis as typeof globalThis & {
  __arenaNextJsPostgresqlPool?: Pool;
  __arenaNextJsDb?: ReturnType<typeof drizzle>;
};

// Lazy initialization - only create connection when actually used
export function getDb() {
  const databaseUrl = process.env.DATABASE_URL;
  
  // Return null if no database URL is configured
  if (!databaseUrl) {
    return null;
  }

  // Return cached instance if exists
  if (globalForDb.__arenaNextJsDb) {
    return globalForDb.__arenaNextJsDb;
  }

  // Create new pool and db instance
  const pool = new Pool({
    connectionString: databaseUrl,
  });

  if (process.env.NODE_ENV !== "production") {
    globalForDb.__arenaNextJsPostgresqlPool = pool;
  }

  const db = drizzle(pool);
  globalForDb.__arenaNextJsDb = db;

  return db;
}

// Export a db instance for backward compatibility, but it might be null
export const db = getDb();
export const pool = globalForDb.__arenaNextJsPostgresqlPool ?? null;
