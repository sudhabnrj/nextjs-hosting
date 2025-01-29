import { NextResponse } from "next/server";
import fetchMenu from "@/lib/fetchMenu";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ location: string }> }
) {
  try {
    const location = (await params).location; // Access the dynamic route parameter

    const data = await fetchMenu(location);

    if (!data) {
      return NextResponse.json(
        { error: "No menu found for the specified location." },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
