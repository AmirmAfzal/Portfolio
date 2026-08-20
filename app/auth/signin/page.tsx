import React, { Suspense } from "react";

import SignInForm from "@/components/Dashboard/SignInForm";

const SignInPage = () => {
  return (
    <div className="container mx-auto flex min-h-[70vh] items-center justify-center px-4 py-24">
      <div className="border-base-content/10 w-full max-w-sm rounded-3xl border p-8">
        <h1 className="text-primary text-2xl font-bold">Sign in</h1>
        <p className="text-base-content/60 mt-1 text-sm">
          Admin access to the devlog dashboard.
        </p>

        <Suspense fallback={null}>
          <SignInForm />
        </Suspense>
      </div>
    </div>
  );
};

export default SignInPage;
