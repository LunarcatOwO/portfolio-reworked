// Portfolio Of LunarcatOwO
// Copyright (C) 2025  LunarcatOwO

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0d0d0d',
          padding: '60px 80px',
          position: 'relative',
        }}
      >
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(39,39,42,0.5) 0%, transparent 50%, rgba(39,39,42,0.3) 100%)',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
            position: 'relative',
          }}
        >
          {/* Portfolio label */}
          <p
            style={{
              color: '#71717a',
              fontSize: '14px',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              margin: '0 0 16px 0',
            }}
          >
            Portfolio
          </p>

          {/* Main logo */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              lineHeight: 0.9,
            }}
          >
            <span
              style={{
                fontSize: '140px',
                fontWeight: 'bold',
                color: '#f472b6',
                letterSpacing: '-0.02em',
              }}
            >
              LUNARCAT
            </span>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '16px',
              }}
            >
              <span
                style={{
                  fontSize: '140px',
                  fontWeight: 'bold',
                  color: 'white',
                  letterSpacing: '-0.02em',
                }}
              >
                OwO
              </span>
              <span
                style={{
                  fontSize: '24px',
                  color: '#52525b',
                  letterSpacing: '0.1em',
                }}
              >
                .space
              </span>
            </div>
          </div>
        </div>

        {/* Bottom section - tagline area */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          {/* UI elements row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px',
            }}
          >
            {/* Triangle */}
            <svg width="16" height="16" viewBox="0 0 12 12" fill="#f472b6">
              <polygon points="6,0 12,12 0,12" />
            </svg>

            {/* Checkbox and text */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    border: '1px solid #52525b',
                  }}
                />
                <span
                  style={{
                    color: '#71717a',
                    fontSize: '12px',
                    letterSpacing: '0.15em',
                  }}
                >
                  JUST DOING THINGS
                </span>
              </div>
              {/* Decorative squares */}
              <div
                style={{
                  display: 'flex',
                  gap: '4px',
                }}
              >
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#3f3f46',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Tagline */}
          <p
            style={{
              color: '#a1a1aa',
              fontSize: '20px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            Code & Create / Build & Deploy
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
