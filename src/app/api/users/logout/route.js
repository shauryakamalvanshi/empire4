import { NextResponse } from "next/server"

export async function GET(){
    try {
        const response=NextResponse.json(
            {
                message:"Logout successful",
                success:true,
            }
        )
        response.cookies.set("token", "", {
            httpOnly: false,
            expires: new Date(0),
            secure: true, // Set to true if your site is served over HTTPS
            domain: "empiretechnology.vercel.app", // Set the correct domain
            path: "/", // Set the correct path
            SameSite: "None", // Set to 'None' if your logout involves cross-origin requests
        });
      return response;
      
        
    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}
