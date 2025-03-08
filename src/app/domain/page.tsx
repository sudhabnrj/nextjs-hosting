import { fetchPageData } from "@/lib/fetchPageData";
import React from "react";

export default async function DomainPage() {
  const page = await fetchPageData("domain");

  if (!page || Object.keys(page).length === 0) {
    console.error("Error: Page data not found or is empty");
    return <p>Error: Page data not found</p>;
  }
  return <div>Dedicated Hosting Page</div>;
}
