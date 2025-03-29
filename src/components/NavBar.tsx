"use client"

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavBar({
  lg_screen_width,
  default_screen_width,
}: {
  lg_screen_width: string;
  default_screen_width: string;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  // Memoize the scroll handler to prevent unnecessary re-renders
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 50);
  }, []);

  // Add scroll listener only on client side
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className={`bg-black w-screen flex justify-center sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <nav
        className={`sm:flex ${lg_screen_width} ${default_screen_width} bg-navbar/20 text-white h-[98px] ${isScrolled ? 'mt-[10px]' : 'mt-[48px]'} rounded-4xl flex-row justify-between overflow-hidden hidden`}
      >
        <div className="w-[300px] flex justify-start items-center">
          <Link href="/" className="ml-12">
            <div className="bg-carrot-500 w-20 self-center rounded-4xl p-2 flex justify-center items-center">
              <Image 
                src="/logo.svg" 
                alt="DashCruise Logo" 
                width={60} 
                height={60} 
                priority={true}
                fetchPriority="high"
              />
            </div>
          </Link>
        </div>
        <ul className="flex flex-row items-center text-sm font-semibold">
          <li className="pr-8">
            <Link href="/" className={`hover:text-carrot-500 transition-colors ${pathname === '/' ? 'text-carrot-500' : ''}`}>
              Home
            </Link>
          </li>
          <li className="pr-8">
            <Link href="/blog" className={`hover:text-carrot-500 transition-colors ${pathname === '/blog' ? 'text-carrot-500' : ''}`}>
              Blog
            </Link>
          </li>
          <li className="text-base">
            <Link href="/pricing" className={`hover:text-carrot-500 transition-colors ${pathname === '/pricing' ? 'text-carrot-500' : ''}`}>
              Pricing
            </Link>
          </li>
        </ul>
        <div className="w-[300px] flex justify-end items-center">
          <Link href="/pricing">
            <button className="bg-carrot-500 mr-12 rounded-4xl px-8 py-4 flex justify-center items-center hover:bg-carrot-600 transition-colors">
              See Pricing
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
