export default async function fetchMenu(location: string) {
    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_MENU_API_URL}/menus/${location}`;
      console.log("Fetching menu from:", apiUrl);
  
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText} (${response.status})`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching menu:", error);
      return null;
    }
  }
  