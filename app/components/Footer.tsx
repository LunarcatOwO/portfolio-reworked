// Portfolio Of LunarcatOwO
// Copyright (C) 2026  LunarcatOwO

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

'use client';

import { siteConfig } from '../data';

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-sm text-zinc-400 space-y-4">
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <span role="img" aria-label="heart">❤️</span>
            <span>by</span>
            <span className="text-pink-400 font-semibold">LunarcatOwO</span>
            <span>using</span>
            <span className="text-white font-semibold">Next.js</span>
          </div>
          <p className="text-center">
            This project is{' '}
            <a 
              href="https://github.com/LunarcatOwO/portfolio-endfield" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors underline"
            >
              open source
            </a>
            {' '}© {new Date().getFullYear()} {siteConfig.name}. Licensed Under GPL-3.0.
          </p>
        </div>
      </div>
    </footer>
  );
}
