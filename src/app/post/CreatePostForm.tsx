import { db } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function CreateTodoForm() {

  const addPost = async (formData: FormData) => {
    'use server'
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    await db.post.create({
      data: {
        title: title,
        content: content,
      },
    });
    revalidatePath('/')
  }

  return (
    <form action={addPost}>
      <div className=" items-center justify-center space-y-3">
        <input
          required
          placeholder="Title を入力"
          type="text"
          className="max-w-sm bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2 cursor-not-allowed"
          defaultValue=""
          name='title'
        />
        <input
          required
          placeholder="Content を入力"
          type="text"
          className="max-w-sm bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2 cursor-not-allowed"
          defaultValue=""
          name='content'
        />
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
        >
          追加
        </button>
      </div>
    </form>
  );
};
