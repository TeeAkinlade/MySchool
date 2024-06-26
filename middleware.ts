// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// // Define which routes to protect
// const isProtectedRoute = createRouteMatcher(["/", "/credits(.*)"]);

// export default clerkMiddleware((auth, req) => {
//   if (isProtectedRoute(req)) {
//     auth().protect();
//   }
// });
// export const config = {
//   matcher: ["/((?!.*\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

// const isOnboardingRoute = createRouteMatcher(["/onboarding"])
// const isPublicRoute = createRouteMatcher(["/public-route-example"])

export default clerkMiddleware((auth, req: NextRequest) => {
    const { userId, sessionClaims, redirectToSignIn } = auth();

    console.log("USERID == ", userId)

    // For users visiting /onboarding, don't try to redirect
    // if (userId && isOnboardingRoute(req)) {
    //   return NextResponse.next();
    // }

    // If the user isn't signed in and the route is private, redirect to sign-in
    // if (!userId && !isPublicRoute(req))
    //   return redirectToSignIn({ returnBackUrl: req.url });

    // Catch users who do not have `onboardingComplete: true` in their publicMetadata
    // Redirect them to the /onboading route to complete onboarding
    // if (userId && !sessionClaims?.metadata?.onboardingComplete) {
    //   const onboardingUrl = new URL("/onboarding", req.url);
    //   return NextResponse.redirect(onboardingUrl);
    // }

    // If the user is logged in and the route is protected, let them view.
    // if (userId && !isPublicRoute(req)) return NextResponse.next();
  }
);

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};