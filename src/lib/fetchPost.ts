export const fetchPost = async (post: string) => {
  const fields = "date,id,title,acf,link,meta,modified,parent,slug";
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/${post}?_fields=${fields}`,
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
    return data;
  } catch (error) {
    console.error("Error fetching page:", error);
    return null;
  }
};
