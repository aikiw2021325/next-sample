

export default function PostList(props) {

    return <div>
        <ul>
            {props.posts.map((post) => (
                <li key={post.id} className="mb-4">
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <p className="text-gray-700">{post.content}</p>
                    <span className="text-sm text-gray-500">
                        {new Date(post.createdAt).toLocaleDateString()}
                    </span>
                </li>
            ))}
        </ul>
    </div>
}