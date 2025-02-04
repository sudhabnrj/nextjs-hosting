export const fetchPageData = async (slug: string) => {
  const fields =
    "author,date,id,title,content,excerpt,acf,link,meta,modified,parent,slug, yoast_head_json";
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/pages?slug=${slug}&_fields=${fields}`
      //   {
      //     next: { revalidate: 60 },
      //   }
      // {
      //   cache: "no-store",
      // }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch page data: ${response.statusText}`);
    }

    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error("Error fetching page:", error);
    return null;
  }
};
