"use client"
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

export function ConfirmButton() {
    const router = useRouter();

    const confirmClick = (e: FormEvent) => {
        e.preventDefault();
        router.push('/survey/confirm');  // "/"ページへ遷移
    };

    return (
        <button onClick={confirmClick} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
            確認画面へ
        </button>
    );

}