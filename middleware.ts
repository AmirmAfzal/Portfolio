import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const ADMIN_ROLES = ["ADMIN", "ROOT"];

export default withAuth(
  function middleware(req) {
    const role = req.nextauth.token?.role as string | undefined;
    if (!role || !ADMIN_ROLES.includes(role)) {
      return NextResponse.redirect(new URL("/auth/signin", req.url));
    }
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: "/auth/signin",
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*"],
};
