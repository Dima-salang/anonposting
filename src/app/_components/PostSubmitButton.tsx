"use client";

import { useFormStatus } from "react-dom";

export default function PostSubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending} className="block w-full mt-2 py-4 px-10 bg-slate-900 bg-slateborder-orange-500 rounded-xl outline outline-0 hover:outline-1 hover: outline-orange-500">
            {pending ? 'Posting...' : 'Post'}
        </button>
    )
}