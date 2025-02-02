import { fetchPageData } from '@/lib/fetchPageData';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function VpsHostingPage({params } : { params: Promise<{slug: string}> }) {
  const slug = (await params).slug
  const page = await fetchPageData(slug);
      
  if (!page) {
      console.error("Error: Page data not found");
      return notFound(); // ✅ Return Next.js 404 page if no data
  }

  // console.log("page", page);

  return (
    <div>Dedicated Hosting Page: {page?.title?.rendered}</div>
  )
}
