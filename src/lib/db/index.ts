import { neon } from '@neondatabase/serverless';
import { drizzle as drizzleNeon } from 'drizzle-orm/neon-http';
import { drizzle as drizzlePostgres } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const connectionString = process.env.DATABASE_URL!;

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set');
}

// Support both local development and Vercel serverless
export const db = connectionString.includes('localhost') || connectionString.includes('127.0.0.1')
  ? drizzlePostgres(postgres(connectionString), { schema })
  : drizzleNeon(neon(connectionString), { schema });

