
import { CreateTodoForm } from "@/components/CreatePostForm";
import { PostList } from '@/components/PostsList';

export default function Home() {

  return <div className='container mx-auto'>
    <h1 className="text-center text-3xl font-bold mb-3">Posts APP</h1>
    <div className="mb-3">
      <CreateTodoForm />
    </div>
    <PostList></PostList>
  </div >
}
