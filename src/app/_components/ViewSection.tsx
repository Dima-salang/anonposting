// ViewSection Component
"use client";
import useSWR from "swr";
import { fetcher } from "@/app/data/fetcher/fetcher";
import { Post } from "../types";
import Loading from "../loading";

export default function ViewSection() {
  const { data, error, isLoading } = useSWR("/data/post", fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <Loading />;

  return (
    <div className="grid grid-flow-row auto-rows-auto gap-y-5">
      {data.map((post: Post) => (
        <div
          key={post.id}
          className="bg-slate-700 rounded-xl p-5 shadow-lg hover:bg-slate-600 transition duration-300 ease-in-out"
        >
          <div className="whitespace-pre-wrap text-slate-200 leading-relaxed">
            {post.postcontent}
          </div>
        </div>
      ))}
    </div>
  );
}
