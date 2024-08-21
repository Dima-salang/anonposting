import { Suspense } from "react";
import PostSection from "./_components/PostSection"
import ViewSection from "./_components/ViewSection"
import Loading from "./loading";

export const metadata = {
    title: "AnonPosting",
    description: "Website for anonymous posting for fun.",
}

export default function Home() {
    return (
      <>
          
          <div className='col-span-9 h-full max-h-screen overflow-auto'>
              <ViewSection />
          </div>
          <div className="col-span-3 max-h-screen h-svh">
            <PostSection />
          </div>
      </>
    );
}