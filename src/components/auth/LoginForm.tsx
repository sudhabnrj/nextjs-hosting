"use client";
import React, { useState } from "react";
import Button from "../ui/Button";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Checkbox from "../ui/Checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleVisiblePassword = () => {
    setVisiblePassword((toggle) => !toggle);
  };
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      // console.log("Login Response:", data);

      if (!res.ok) {
        setError(data.error);
        setLoading(false);
        return;
      }

      if (data.token) {
        login(data.token, data.userId);
        console.log("Stored Token:", data.token, "UserId:", data.userId); // Debugging
        router.push("/dashboard");
      } else {
        setError("Login failed, no token received.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex w-full flex-col gap-y-6">
      {error && (
        <div className="alert alert-error w-full rounded-lg p-4 text-base">
          {error}
        </div>
      )}
      <div className="relative">
        <label
          htmlFor="username"
          className={`${email ? "mt-0 -translate-y-10 rounded-sm bg-white px-2" : "-translate-y-1-2 -mt-2 bg-transparent px-0"} absolute left-3 top-1/2 block text-sm font-medium text-gray-700 transition-all`}
        >
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          id="email"
          name="email"
          value={email}
          className="mt-1 w-full rounded-md border border-[#79747E] px-3 py-3 transition-colors duration-300 focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
        />
      </div>
      <div className="relative">
        <label
          htmlFor="username"
          className={`${password ? "mt-0 -translate-y-10 rounded-sm bg-white px-2" : "-translate-y-1-2 -mt-2 bg-transparent px-0"} absolute left-3 top-1/2 block text-sm font-medium text-gray-700 transition-all`}
        >
          Password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type={!visiblePassword ? "password" : "text"}
          id="password"
          name="password"
          value={password}
          className="mt-1 w-full rounded-md border border-[#79747E] px-3 py-3 transition-colors duration-300 focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
        />
        <span
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={handleVisiblePassword}
        >
          {visiblePassword ? (
            <IoMdEye className="h-6 w-6" />
          ) : (
            <IoMdEyeOff className="h-6 w-6" />
          )}
        </span>
      </div>
      <div className="relative">
        <div className="flex items-center justify-between">
          <Checkbox id={"rememberMe"} label={"Remember me"} />
          <Link
            href="#"
            className="ml-2 bg-custom-gradient bg-clip-text font-dmSans text-sm font-semibold text-transparent group-hover:underline"
          >
            Forgot Password
          </Link>
        </div>
      </div>
      <div className="relative">
        <Button type="submit" className="btn-primary w-full">
          {loading ? "Loading..." : "Login"}
        </Button>
      </div>
      <div className="font-sm group mt-2 text-center font-dmSans text-sm text-secondary">
        <p>
          Don’t have an account?
          <Link
            href="#"
            className="ml-2 bg-custom-gradient bg-clip-text font-dmSans font-semibold text-transparent group-hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
