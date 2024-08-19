'use server';

import { sql } from '@vercel/postgres';
import { z } from "zod";
import { revalidatePath } from 'next/cache';

const FormSchema = z.object({
  post: z.string(),
});


export async function createPost(formData: FormData) {
    const {post} = FormSchema.parse({
        post: formData.get('post') as string,
    });

    console.log(post);

    await sql `
        INSERT INTO posts (postContent) VALUES (${post})
    `;

    revalidatePath('/');
}