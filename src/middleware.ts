import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import Cookies from "universal-cookie";
export async function middleware(request: NextRequest) {
	// let cookie = request.cookies.get("token");
	const cookies = new Cookies(request.cookies, { path: "/" });
	// console.log(cookies.cookies);


	const cookie = cookies.get("token");
	console.log(cookie, ">><<<");
	if (!cookie) {
		return NextResponse.redirect(new URL("/signin", request.url));
	}
}

export const config = {
	matcher: "/ranking",
};
