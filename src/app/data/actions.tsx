'use server';

import { sql } from '@vercel/postgres';
import { z } from "zod";
import { revalidatePath } from 'next/cache';

const postSchema = z.object({
  post: z.string().min(1),
});


const requiredPost = postSchema.required();


export async function createPost(formData: FormData) {
    const parsedData = requiredPost.safeParse({
        post: formData.get('post'),
    });

    if (!parsedData.success) {
        return { error: parsedData.error.flatten() };
    }

    const { post } = parsedData.data;


    await sql `
        INSERT INTO posts (postContent) VALUES (${post})
    `;


    revalidatePath('/data/post');

    return { success: true };

}