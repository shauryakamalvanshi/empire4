import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json({
            message: "Logout successful",
            success: true,
        });

        response.cookies.set("token", "", {
            httpOnly: true,
            expires: new Date(0),
            domain: "empiretechnology.vercel.app", // Change this to your domain
            path: "/", // Change this to your path
            secure: process.env.NODE_ENV === "production", // Set to true if using HTTPS in production
            sameSite: "None", // Set to 'None' if you want to clear cookies across different subdomains
        });

        // Log to the server console for debugging
        console.log("Cookie cleared successfully");

        return response;
    } catch (error) {
        // Log any errors to the server console
        console.error("Error clearing cookie:", error.message);

        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
