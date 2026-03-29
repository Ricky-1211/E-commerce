import { neon } from '@neondatabase/serverless';
import { drizzle as drizzleNeon } from 'drizzle-orm/neon-http';
import { drizzle as drizzlePostgres } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error('❌ CRITICAL: DATABASE_URL environment variable is not set. Database connection will fail.');
}

// Support both local development and Vercel serverless (Neon or Supabase)
function getDb() {
  const url = connectionString || '';
  const isLocal = url.includes('localhost') || url.includes('127.0.0.1');
  const isNeon = url.includes('neon.tech');

  if (isLocal) {
    return drizzlePostgres(postgres(url), { schema });
  } else if (isNeon) {
    return drizzleNeon(neon(url), { schema });
  } else {
    // Other cloud providers (Supabase, etc.) use standard Postgres driver
    return drizzlePostgres(postgres(url, { ssl: 'require' }), { schema });
  }
}

export const db = getDb();

