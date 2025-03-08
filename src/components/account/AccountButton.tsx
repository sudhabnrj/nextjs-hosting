"use client";
import Link from "next/link";
import ProfileCircleIcon from "../ui/ProfileCircleIcon";

interface AccountButtonProps {
  className: string;
}

export default function AccountButton({ className }: AccountButtonProps) {
  return (
    <Link
      className={`${className} btn-secondary group flex items-center justify-center gap-x-2 hover:opacity-85`}
      href="/login"
    >
      <ProfileCircleIcon width={20} height={20} className="" />
      Sign In
    </Link>
  );
}
