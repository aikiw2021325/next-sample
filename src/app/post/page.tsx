
import { CreateTodoForm } from "@/app/post/CreatePostForm";
import { PostList } from '@/app/post/PostsList';

export default function Home() {

  return <div className='container mx-auto'>
    <h1 className="text-center text-3xl font-bold mb-3">Posts APP</h1>
    <div className="mb-3">
      <CreateTodoForm />
    </div>
    <PostList></PostList>
  </div >
}
