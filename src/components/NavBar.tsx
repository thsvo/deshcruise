"use client"

import { useCallback, useEffect, useState, useMemo } from "react";
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
  
  // Highly optimized scroll handler with IntersectionObserver instead of scroll events
  useEffect(() => {
    // Create sentinel element for scroll detection
    const sentinel = document.createElement('div');
    sentinel.style.position = 'absolute';
    sentinel.style.top = '0';
    sentinel.style.height = '1px';
    sentinel.style.width = '1px';
    sentinel.style.pointerEvents = 'none';
document.body.appendChild(sentinel);
    
    // Use IntersectionObserver instead of scroll events
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Use requestAnimationFrame to batch visual updates
        requestAnimationFrame(() => {
          setIsScrolled(!entry.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: '-50px 0px 0px 0px' }
    );
    
    observer.observe(sentinel);
    
    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, []);

  // Memoize class strings to prevent recalculations on each render
  const containerClasses = useMemo(() => 
    `bg-black w-screen flex justify-center sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`
  , [isScrolled]);
  
  const navClasses = useMemo(() => 
    `sm:flex ${lg_screen_width} ${default_screen_width} bg-navbar/20 text-white h-[98px] ${isScrolled ? 'mt-[10px]' : 'mt-[48px]'} rounded-4xl flex-row justify-between overflow-hidden hidden`
  , [lg_screen_width, default_screen_width, isScrolled]);

  // Memoize link classes to prevent string concatenation on each render
  const getLinkClass = useCallback((path: string) => 
    `hover:text-carrot-500 transition-colors ${pathname === path ? 'text-carrot-500' : ''}`
  , [pathname]);

  return (
    <div className={containerClasses}>
      <nav className={navClasses}>
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
            <Link href="/" className={getLinkClass('/')}>
              Home
            </Link>
          </li>
          <li className="pr-8">
            <Link href="/blog" className={getLinkClass('/blog')}>
              Blog
            </Link>
          </li>
          <li className="text-base">
            <Link href="/pricing" className={getLinkClass('/pricing')}>
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
