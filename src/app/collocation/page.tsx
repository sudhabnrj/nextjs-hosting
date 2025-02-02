import { fetchPageData } from '@/lib/fetchPageData';
import React from 'react'

export default async function Collocation({params } : { params: { slug: string } }) {

    const page = await fetchPageData(params.slug);
          
    if (!page || Object.keys(page).length === 0) {
          console.error("Error: Page data not found or is empty");
          return <p>Error: Page data not found</p>;
    }
    console.log("page", page);

    return (
        <div>Collocation Page: {page?.title?.rendered}</div>
    )
}
