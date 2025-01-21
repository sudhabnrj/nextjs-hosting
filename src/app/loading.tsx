import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center bg-gray-100 w-screen h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      <p className="ml-4 text-xl font-semibold text-gray-700">Loading...</p>
    </div>
  );
}
