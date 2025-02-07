import React from "react";

export default function Loading() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-100">
      <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-blue-500"></div>
      <p className="ml-4 text-xl font-semibold text-gray-700">Loading...</p>
    </div>
  );
}
