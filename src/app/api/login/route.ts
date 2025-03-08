import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const API_URL = "https://whm.cloudcanvas.in/includes/api.php";

  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { error: "Missing Email or Password" },
        { status: 400 },
      );
    }

    const response = await axios.post(
      API_URL,
      new URLSearchParams({
        username: String(process.env.CLIENTID || ""),
        password: String(process.env.PASSWORD || ""),
        action: "ValidateLogin",
        responsetype: "json",
        email: String(email),
        password2: String(password),
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    console.log("API Response:", response.data); // Debugging

    if (response.data.result !== "success") {
      return NextResponse.json(
        { error: "Invalid Credentials" },
        { status: 401 },
      );
    }

    const sessionToken = response.data.userid
      ? response.data.userid.toString()
      : null; // Replace with actual token if available

    console.log("Login user id new", sessionToken);

    return NextResponse.json(
      {
        message: "Login successful",
        token: sessionToken,
        userId: response.data.userid,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
