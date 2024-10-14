import {sql} from '@vercel/postgres';


export async function GET() {
    const {rows: posts} = await sql `SELECT * FROM posts ORDER BY timestamp DESC`;
    return Response.json(posts);
}