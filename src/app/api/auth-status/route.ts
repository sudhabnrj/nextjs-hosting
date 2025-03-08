import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies(); // Don't use await
  const session = cookieStore.get("session");

  if (!session) {
    return NextResponse.json({ isAuthenticated: false }, { status: 200 });
  }

  return NextResponse.json(
    { isAuthenticated: true, user: JSON.parse(session.value) },
    { status: 200 },
  );
}
