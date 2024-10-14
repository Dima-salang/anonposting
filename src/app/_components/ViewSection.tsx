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
    <div className="min-h-screen flex flex-col items-center py-10">
      {data.map((post: Post) => (
        <div
          key={post.id}
          className="bg-dracula-background border border-dracula-selection max-w-5xl w-full p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mb-6"
        >
          <div className="whitespace-pre-wrap text-dracula-foreground text-lg leading-relaxed mb-3">
            {post.post_content}
          </div>
          <div className="text-right text-sm text-dracula-comment italic">
            {new Date(post.timestamp).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
}
