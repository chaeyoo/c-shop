import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
	let cookie = request.cookies.get("token");
	console.log(cookie, '>><<<');
    if (!cookie) {
        return NextResponse.redirect(new URL("/signin", request.url));
    }
}

export const config = {
	matcher: "/ranking",
};
