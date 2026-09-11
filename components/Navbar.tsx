"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.jpeg"
              alt="RR Nursery and Landscaping"
              width={150}
              height={50}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-forest-50 text-forest-700"
                    : "text-gray-600 hover:text-forest-700 hover:bg-forest-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="ml-3 btn-primary text-sm px-5 py-2">
              Get a Quote
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-forest-700 hover:bg-forest-50"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-forest-50 text-forest-700"
                    : "text-gray-600 hover:text-forest-700 hover:bg-forest-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block mt-2 btn-primary text-sm text-center"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
