import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';


// GET: 全ての投稿を取得 (Read)
export async function GET() {
    try {
        const posts = await prisma.post.findMany();
        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
}

// POST: 新しい投稿を作成 (Create)
export async function POST(req: Request) {
    try {
        const { title, content } = await req.json();
        if (!title) {
            return NextResponse.json({ error: 'Title is required' }, { status: 400 });
        }

        const newPost = await prisma.post.create({
            data: { title, content },
        });

        return NextResponse.json(newPost, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
    }
}

// PUT: 投稿を更新 (Update)
export async function PUT(req: Request) {
    try {
        const { id, title, content } = await req.json();

        if (!id || !title) {
            return NextResponse.json({ error: 'ID and Title are required' }, { status: 400 });
        }

        const updatedPost = await prisma.post.update({
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

        await prisma.post.delete({
            where: { id },
        });

        return NextResponse.json({ message: 'Post deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
    }
}
