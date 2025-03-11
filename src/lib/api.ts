interface Product {
  pid: string;
  name: string;
  pricing: {
    INR: {
      monthly: string;
    };
  };
  product_url: string;
  description: string;
}

type ProductData = Product[][];

export const handleMenuClick = async (
  destination: string,
  clientId: number,
  serviceId: number,
) => {
  try {
    const API_URL = "/api/proxy"; // Next.js API route to avoid CORS issues

    const params = new URLSearchParams();
    // params.append("username", process.env.CLIENTID || "");
    // params.append("password", process.env.PASSWORD || "");
    params.append("action", "CreateSsoToken");
    params.append("destination", destination);
    params.append("responsetype", "json");
    params.append("client_id", clientId.toString());
    params.append("service_id", serviceId.toString());

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });

    // Read response as text (before JSON parsing)
    const responseText = await response.text();
    console.log("🔍 API Response (Raw):", responseText);

    // Attempt to parse JSON
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (jsonError) {
      console.error("❌ Invalid JSON Response:", jsonError);
      alert("Unexpected API response format. Check console for details.");
      return;
    }

    console.log("✅ Parsed API Response:", data);

    if (data?.result === "success" && data.redirect_url) {
      window.location.href = data.redirect_url; // Redirect to WHM client area
    } else {
      alert("SSO Token creation failed or no redirect URL found.");
    }
  } catch (error) {
    console.error("🔥 Error in handleMenuClick:", error);
    alert("An error occurred. Please try again.");
  }
};

export async function fetchProducts(): Promise<ProductData> {
  try {
    const API_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/proxy`;

    const params = new URLSearchParams();
    params.append("action", "GetProducts");

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
      cache: "no-store", // Ensures fresh data in SSR
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    const responseText = await response.text(); // Read response as text
    console.log("API Response (Raw):", responseText);

    let data;
    try {
      data = JSON.parse(responseText); // Attempt to parse JSON
    } catch (jsonError) {
      console.error("Invalid JSON Response:", jsonError);
      throw new Error("Invalid JSON response from API.");
    }

    if (data?.result === "success") {
      const productArray = Object.values(data.products) as Product[][];
      console.log("Transformed Products Data:", productArray);
      return productArray;
    } else {
      console.error("Failed to fetch products:", data);
      throw new Error("Failed to fetch products.");
    }
  } catch (error) {
    console.error("Error in fetchProducts:", error);
    throw error;
  }
};

