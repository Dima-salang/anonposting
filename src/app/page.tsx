// Home Page Layout
import { Suspense } from "react";
import PostSection from "./_components/PostSection";
import ViewSection from "./_components/ViewSection";
import Loading from "./loading";
import "./globals.css";

export const metadata = {
  title: "AnonPosting",
  description: "Website for anonymous posting for fun.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow mx-5 my-4 grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-9 h-full overflow-auto rounded-lg shadow-lg p-5">
          <ViewSection />
        </div>
        <div className="col-span-12 md:col-span-3 h-full">
          <PostSection />
        </div>
      </div>
    </div>
  );
}

