import { create } from "domain"
import { createPost } from "..//data/actions"



export default function PostSection() {


    return (
        
        <form action={createPost}>
            <div className="grid grid-rows-6 gap-2 mb-6 h-screen">
                <div className="h-full row-span-5">
                    <textarea id="post" name="post" placeholder="What's up?" className="block h-full w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                </div>
                <div className="h-full row-span-1">
                    <button type="submit" className="block w-full mt-2 py-4 px-10 bg-slate-900 bg-slateborder-orange-500 rounded-xl outline outline-0 hover:outline-1 hover: outline-orange-500">Post</button>
                </div>
            </div>
        </form>
        
    )
}