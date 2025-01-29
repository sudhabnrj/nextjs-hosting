export const fetchPageData = async (slug: string) => {
  try {
    const response = await fetch(
      `https://sudha.cloudcanvas.in/wp-json/wp/v2/pages?slug=${slug}`
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
    return data[0]; // Get the first item
  } catch (error) {
    console.error("Error fetching page:", error);
    return null;
  }
};
