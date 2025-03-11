import { NextResponse } from 'next/server';

export async function GET() {
    const url = 'https://whm.cloudcanvas.in/includes/api.php';
    const username = process.env.CLIENTID || "";
    const password = process.env.PASSWORD || "";
    const formData = new URLSearchParams({
        username: username,
        password: password,
        action: 'GetProducts',
        responsetype: 'json',
    });

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Failed to fetch products:", error);
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}
