"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
import Loading from "../loading";

export default function DashboardPage() {
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/login"); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, router]);

  const handleLogout = async () => {
    logout(); // Remove session from localStorage
    router.replace("/login"); // Redirect to login page
  };

  if (!isAuthenticated) {
    return <Loading />;
  }

  return (
    <div className="mx-auto w-full py-[100px]">
      <h1>Welcome to the Dashboard</h1>
      <button
        onClick={handleLogout}
        className="rounded bg-red-500 px-4 py-2 text-white"
      >
        Logout
      </button>
    </div>
  );
}
