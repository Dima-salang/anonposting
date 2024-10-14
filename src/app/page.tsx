// Home Page Layout
import { Suspense } from "react";
import PostSection from "./_components/PostSection";
import ViewSection from "./_components/ViewSection";
import Loading from "./loading";

export const metadata = {
  title: "AnonPosting",
  description: "Website for anonymous posting for fun.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-grow mx-5 my-4 grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* View Section */}
        <div className="col-span-12 md:col-span-9 h-full overflow-auto bg-stone-800 rounded-lg shadow-lg p-5">
          <ViewSection />
        </div>

        {/* Post Section */}
        <div className="col-span-12 md:col-span-3 h-full">
          <PostSection />
        </div>
      </div>
    </div>
  );
}
