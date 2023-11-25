import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 

// Import statements are not needed in JavaScript
// Remove the NextResponse and NextRequest imports

export function middleware(request) {
    const path = request.nextUrl.pathname;
  
    const isPublicPath = path === '/login';
  
    const token = request.cookies.get('token')?.value || ''; 
  
 
  
    if (isPublicPath && token) {
      return NextResponse.redirect(new URL('/admin', request.nextUrl));
    }
    if (!isPublicPath && !token) {
      return NextResponse.redirect(new URL('/login', request.nextUrl));
    }
  }
  
  // See "Matching Paths" below to learn more
  export const config = {
    matcher: [
      '/admin',
      '/login',
      '/api/users/getdata'
    ],
  };
  