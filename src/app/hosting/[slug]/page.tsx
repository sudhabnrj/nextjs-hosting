import { fetchPageData } from '@/lib/fetchPageData';
import { notFound } from 'next/navigation';

export default async function HostingPages({ params}: {params: Promise<{ slug: string }>}) {
    const slug = (await params).slug

    // ✅ Remove 'await' from params.slug
    const page = await fetchPageData(slug);

    if (!page) {
        console.error("Error: Page data not found");
        return notFound(); // ✅ Return Next.js 404 page if no data
    }

    console.log("Page data", page)

    return (
        <div>
            <h1 className="text-3xl font-bold">{page?.title?.rendered}</h1>
        </div>
    );
}
