import {use} from "react"
    export default function Posts({fetchPost}){
    let post = use(fetchPost)
    console.log(post)
    return (
        <div className="card">
            <h2>ALL posts are here</h2>
            <p>length : {post.length} </p>
        </div>
    )
}