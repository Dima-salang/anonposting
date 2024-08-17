import { getPosts } from "../data/actions";

export default async function ViewSection() {
    const posts = await getPosts();

    return (
        <div>
            <h1>Posts</h1>
            <div>
                {posts.map((post) => (
                    <p key={post.id}>{post.postcontent}</p>
                ))}
            </div>
        </div>
    )
}