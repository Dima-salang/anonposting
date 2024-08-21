"use client";

import useSWR from 'swr';
import {fetcher} from "@/app/data/fetcher/fetcher";
import { Post } from '../types';
import Loading from '../loading';

export default function ViewSection() {

    const {data, error, isLoading} = useSWR('/data/post', fetcher);
    
    if (error) {
        console.error(error);
        return <div>Failed to load</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="h-screen">
            <div className='grid grid-rows-* gap-y-5'>
                {data.map((post: Post) => (
                    <div key={post.id} className="bg-slate-700 rounded-xl p-10">
                        <div className='whitespace-pre-wrap'>{post.postcontent}</div>
                    </div>
                    
                ))}
            </div>
        </div>
    )
}