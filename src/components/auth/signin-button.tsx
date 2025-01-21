"use client";

import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import Button from "../ui/Button";

export function SignInButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    // Optional: Display a loading state
    return <p>Loading...</p>;
  }

  if (session?.user) {
    return <p>{session.user.name}</p>;
  }

  return (
    <Button
      className={"bg-[#333] text-white px-5 py-2 rounded-md"}
      onClick={() => signIn("github")}
    >
      Sign in with Github
    </Button>
  );
}
