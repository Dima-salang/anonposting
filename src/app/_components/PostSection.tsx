import { create } from "domain"
import { createPost } from "..//data/actions"



export default function PostSection() {


    return (
        <div>
            <form action={createPost}>
                <input type="text" name="post"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}