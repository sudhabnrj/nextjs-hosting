"use client";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import Button from "../ui/Button";

export function SignInButton() {
  const { data: session } = useSession();
  console.log(session);

  if (session?.user) {
    return <p>{session?.user?.name}</p>;
  } else {
    return (
      <Button
        className={"bg-[#333] text-white px-5 py-2 rounded-md"}
        onClick={() => signIn("github")}
      >
        Sign in with Github
      </Button>
    );
  }
}
