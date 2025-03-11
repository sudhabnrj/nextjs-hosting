import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const API_URL = "https://whm.cloudcanvas.in/includes/api.php";

  try {
    // Read form data from request
    const body = await req.formData();
    const params = new URLSearchParams();

    // Securely append credentials from environment variables
    const username = process.env.CLIENTID || "";
    const password = process.env.PASSWORD || "";

    if (!username || !password) {
      console.error("Missing API credentials!");
      return NextResponse.json(
        { error: "Missing API credentials." },
        { status: 500 },
      );
    }

    params.append("username", username);
    params.append("password", password);

    // Append other form-data fields
    body.forEach((value, key) => {
      params.append(key, value.toString());
    });

    // console.log("Sending Secure API Request:", params.toString());

    // Send request
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });


    const responseText = await response.text();
    // console.log("🔍 API Response:", responseText);

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (jsonError) {
      console.error("Invalid JSON from API:", jsonError);
      return NextResponse.json(
        { error: "Invalid JSON response from API", details: responseText },
        { status: 500 },
      );
    }

    // console.log("Parsed API Response:", data);
    // console.log("✅ API Response:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: String(error) },
      { status: 500 },
    );
  }
}
