import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";

import { authOptions } from "@/lib/auth/authOptions";
import SignOutButton from "@/components/Dashboard/SignOutButton";

const ADMIN_ROLES = ["ADMIN", "ROOT"];

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Defense in depth: middleware already gates /dashboard/*, but re-check
  // here server-side in case this layout is ever reached another way.
  const session = await getServerSession(authOptions);
  if (!session?.user || !ADMIN_ROLES.includes(session.user.role ?? "")) {
    redirect("/auth/signin");
  }

  return (
    <div className="container mx-auto flex flex-col gap-8 px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <Link href="/dashboard/notes" className="text-primary text-xl font-bold">
            Devlog Admin
          </Link>
          <p className="text-base-content/60 text-sm">
            Signed in as {session.user.email ?? session.user.name}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/notes" className="link text-sm">
            View public notes
          </Link>
          <SignOutButton />
        </div>
      </div>
      {children}
    </div>
  );
}
