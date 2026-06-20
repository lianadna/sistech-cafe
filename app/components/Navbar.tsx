"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-20 items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#FF74B1] md:text-3xl">
          SISTECH CAFE
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-10 md:flex text-gray-900 font-medium">
        <Link href="/menu" className="hover:text-[#FF74B1] transition">Menu</Link>
        <Link href="/about-us" className="hover:text-[#FF74B1] transition">About Us</Link>
        <Link href="/promo" className="hover:text-[#FF74B1] transition">Promo</Link>
        <Link
            href="/login"
            className="rounded-xl bg-[#FF74B1] px-6 py-3 text-white transition hover:bg-[#e0659b]"
        >
            Login
        </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="text-3xl text-[#FF74B1] md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

        {/* Mobile Menu */}
        {isOpen && (
        <div className="border-t bg-white px-6 py-4 shadow-md md:hidden">
            <div className="flex flex-col gap-4 text-lg font-medium text-gray-900">
            <Link href="/menu" className="hover:text-[#FF74B1]" onClick={() => setIsOpen(false)}>Menu</Link>
            <Link href="/about-us" className="hover:text-[#FF74B1]" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link href="/promo" className="hover:text-[#FF74B1]" onClick={() => setIsOpen(false)}>Promo</Link>
            <Link
                href="/login"
                className="mt-2 rounded-xl bg-[#FF74B1] px-5 py-3 text-center text-white"
                onClick={() => setIsOpen(false)}
            >
                Login
            </Link>
            </div>
        </div>
        )}    
    </nav>
  );
}