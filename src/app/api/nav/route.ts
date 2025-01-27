export default async function fetchMenu(location: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_MENU_API_URL}/menus/${location}`
    );
    if (!response.ok) {
      throw new Error(
        "No route was found matching the URL and request method."
      );
    }
    const data = await response.json();
    console.log("API Response:", data); // Log the response
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
