import { NextResponse } from 'next/server';

export async function GET() {
  const memUsage = process.memoryUsage();

  return NextResponse.json({
    status: 'healthy',
    memory: {
      heapUsedMB: Math.round(memUsage.heapUsed / 1024 / 1024 * 10) / 10,
      heapTotalMB: Math.round(memUsage.heapTotal / 1024 / 1024 * 10) / 10,
      rssMB: Math.round(memUsage.rss / 1024 / 1024 * 10) / 10,
    },
    version: process.env.APP_VERSION || 'unknown',
    timestamp: Date.now(),
    uptime: process.uptime(),
    readme: 'Why are you here?'
  });
}
