import { db } from '@/lib/prisma';

export async function PostList() {
  const posts = await db.post.findMany();
  return <div>
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="mb-4 rounded-md bg-blue-200 shadow-md">
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