import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    version: process.env.APP_VERSION || 'unknown',
    timestamp: new Date().toISOString(),
  });
}
