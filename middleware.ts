import { NextResponse, type NextRequest } from "next/server";

// const auth = useAppSelector((state) => state.auth);
export function middleware(req: NextRequest) {
    
  const protectedRoutes = ["/profile","/cart", "/checkout"];
  const isAuthenticated = true


  if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
