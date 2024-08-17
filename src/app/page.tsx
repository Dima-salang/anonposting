import PostSection from "./_components/PostSection"
import ViewSection from "./_components/ViewSection"

export const metadata = {
    title: "AnonPosting",
    description: "Website for anonymous posting for fun.",
}

export default function Home() {
    return (
        <>
        <div>
            <PostSection />
        </div>
        <div>
            <ViewSection />
        </div>
        </>
    )
}