// middleware.js
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    const { pathname } = req.nextUrl;

    // السماح بالوصول للصفحات العامة
    const publicPaths = ["/login", "/register"];
    if (publicPaths.some(path => pathname.startsWith(path))) {
        if (token) {
            // لو المستخدم مسجل دخول، أي حد يدخل login/register نوديه لل dashboard
            return NextResponse.redirect(new URL("/dashboard", req.url));
        }
        return NextResponse.next();
    }

    // حماية باقي الصفحات
    if (!token) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}

export const config = {
    // الصفحات المحمية
    matcher: ["/dashboard/:path*"],
};
