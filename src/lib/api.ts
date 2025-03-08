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
      console.error("❌ Invalid JSON Response:", responseText);
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
