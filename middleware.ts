import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import authConfig from "./auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
  generalProtectedRoutes,
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req): any => {
  const { nextUrl } = req;
  const isLoggidIn = !!req.auth;
  console.log(isLoggidIn);

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isGeneralProtectedRoute = generalProtectedRoutes.includes(
    nextUrl.pathname
  );

  if (isGeneralProtectedRoute) {
    console.log("inside dummy");
    if (!isLoggidIn) {
      return Response.redirect(new URL("/auth/login", nextUrl));
    }
    return null;
  }

  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggidIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  if (!isLoggidIn && !isPublicRoute) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }

  // The important observation here is, by default every route is protected, unless until we specify the route in the public routes. So when I cureated the dummy route it is protected since it is not added inside the publicRoutes in the routes.ts

  return null;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
