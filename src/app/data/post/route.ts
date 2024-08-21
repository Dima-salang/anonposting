import {sql} from '@vercel/postgres';


export async function GET() {
    const {rows: posts} = await sql `SELECT * FROM posts`;
    return Response.json(posts);
}