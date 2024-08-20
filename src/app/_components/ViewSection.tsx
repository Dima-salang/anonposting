"use client";

import useSWR from 'swr';
import {fetcher} from "@/app/data/fetcher/fetcher";
import { Post } from '../types';
import Loading from '../loading';

export default function ViewSection() {

    const {data, error, isLoading} = useSWR('/data/post', fetcher);
    console.log(data);
    
    if (error) {
        console.error(error);
        return <div>Failed to load</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>Posts</h1>
            <div className='grid grid-rows-* auto-rows-auto gap-y-3'>
                {data.map((post: Post) => (
                    <div key={post.id} className="bg-slate-700 rounded-xl p-10">
                        <p>{post.postcontent}</p>
                    </div>
                    
                ))}
            </div>
        </div>
    )
}