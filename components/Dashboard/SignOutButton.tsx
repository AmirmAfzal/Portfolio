"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

const SignOutButton = () => {
  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={() => signOut({ callbackUrl: "/auth/signin" })}
    >
      Sign out
    </Button>
  );
};

export default SignOutButton;
