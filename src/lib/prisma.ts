// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

// グローバル変数を利用して、Prismaクライアントをキャッシュ
declare global {
    var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

// 開発環境ではグローバル変数に保存
if (process.env.NODE_ENV !== 'production') {
    global.prisma = prisma;
}

export default prisma;
