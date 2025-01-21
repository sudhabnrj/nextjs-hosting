"use client";
import React from "react";

import { SignOut } from "@/components/auth/signout-button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import ProfileCircleIcon from "../ui/ProfileCircleIcon";

export default function AccountButton() {
  const { data: session } = useSession();
  return (
    <>
      {!session?.user ? (
        <Link
          className="group btn-secondary hover:opacity-85  flex justify-center items-center gap-x-2"
          href="/auth/signin"
        >
          <ProfileCircleIcon />
          Sign In
        </Link>
      ) : (
        <div className="flex gap-x-4">
          <Image
            className="rounded-full"
            width={30}
            height={30}
            src={session?.user?.image ?? "https://i.pravatar.cc/300"}
            alt="avatar"
          />
          <SignOut />
        </div>
      )}
    </>
  );
}
