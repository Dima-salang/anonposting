'use server';

import { sql } from "@vercel/postgres";

export async function initDatabase() {
    await sql`CREATE TABLE IF NOT EXISTS posts (id serial primary key, post_content text, timestamp TIMESTAMP DEFAULT now())`;
}