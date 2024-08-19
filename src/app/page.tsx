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
          <div className="col-start-2 col-end-2 block sticky top-0">
            <PostSection />
          </div>
          <div className='col-start-2 col-end-2'>
              <ViewSection />
          </div>
      </>
    );
}