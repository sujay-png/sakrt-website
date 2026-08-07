import type { APIRoute } from 'astro';

// Force Astro to run this on the server dynamically (SSR)
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const { fullName, phoneNumber, companyName, businessEmail, itemQuantity, message, recipients } = body;

        // Process your payload (e.g., call Twilio, Meta WhatsApp API, etc.)
        console.log("Received inquiry for:", recipients);

        return new Response(
            JSON.stringify({ success: true, message: "Inquiry sent successfully" }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ success: false, error: "Failed to process request" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
};