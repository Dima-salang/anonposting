'use client'

export const revalidate = 10

export default function PostSection() {

    const FormAction = async (formData: FormData) => {
        const post = formData.get("post")
        console.log(`${post}`)
    }

    return (
        <div>
            <form action={FormAction}>
                <input type="text" name="post"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}