import { db } from '@/lib/prisma';
import { NextResponse } from 'next/server';


// GETリクエスト: 投稿データを取得
export default async function GET() {
    const posts = await db.post.findMany();
    console.log(posts[0].title);
    return posts;
    // return NextResponse.json(posts);
}

// POSTリクエスト: 新しい投稿を作成
export async function POST(req: Request) {
    const body = await req.json();
    const newPost = await db.post.create({
        data: {
            title: body.title,
            content: body.content,
        },
    });
    return NextResponse.json(newPost, { status: 201 });
}

// PUT: 投稿を更新 (Update)
export async function PUT(req: Request) {
    try {
        const { id, title, content } = await req.json();

        if (!id || !title) {
            return NextResponse.json({ error: 'ID and Title are required' }, { status: 400 });
        }

        const updatedPost = await db.post.update({
            where: { id },
            data: { title, content },
        });

        return NextResponse.json(updatedPost);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
    }
}

// DELETE: 投稿を削除 (Delete)
export async function DELETE(req: Request) {
    try {
        const { id } = await req.json();

        if (!id) {
            return NextResponse.json({ error: 'ID is required' }, { status: 400 });
        }

        await db.post.delete({
            where: { id },
        });

        return NextResponse.json({ message: 'Post deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
    }
}
