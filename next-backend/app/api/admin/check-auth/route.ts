import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const isAuthenticated = req.cookies.get('admin_auth')?.value === 'true';
    return NextResponse.json({ authenticated: isAuthenticated });
}
