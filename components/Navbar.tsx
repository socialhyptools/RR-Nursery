"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const serviceDropLinks = [
  { href: "/services/landscape-design", label: "Landscape Design", dot: "bg-forest-400" },
  { href: "/services/nursery",           label: "Plant Nursery",    dot: "bg-earth-400" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isServices = pathname.startsWith("/services");

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="RR Nursery and Landscaping"
              width={150}
              height={50}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Home */}
            <Link
              href="/"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === "/" ? "bg-forest-50 text-forest-700" : "text-gray-600 hover:text-forest-700 hover:bg-forest-50"
              }`}
            >
              Home
            </Link>

            {/* Services dropdown */}
            <div className="relative group">
              <Link
                href="/services"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center gap-1 ${
                  isServices ? "bg-forest-50 text-forest-700" : "text-gray-600 hover:text-forest-700 hover:bg-forest-50"
                }`}
              >
                Services
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </Link>

              {/* Dropdown panel */}
              <div className="absolute top-full left-0 pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-150 z-50">
                <div className="bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden min-w-52">
                  <Link
                    href="/services"
                    className="block px-4 py-2.5 text-xs font-semibold text-gray-400 uppercase tracking-wide bg-gray-50 hover:bg-forest-50 hover:text-forest-700 transition-colors"
                  >
                    All Services
                  </Link>
                  {serviceDropLinks.map((sl) => (
                    <Link
                      key={sl.href}
                      href={sl.href}
                      className={`flex items-center gap-2.5 px-4 py-3 text-sm transition-colors hover:bg-forest-50 hover:text-forest-700 border-t border-gray-50 ${
                        pathname === sl.href ? "text-forest-700 bg-forest-50" : "text-gray-700"
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full shrink-0 ${sl.dot}`} />
                      {sl.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Rest of nav links */}
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
            {/* Home */}
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === "/" ? "bg-forest-50 text-forest-700" : "text-gray-600 hover:text-forest-700 hover:bg-forest-50"
              }`}
            >
              Home
            </Link>

            {/* Services group */}
            <div>
              <Link
                href="/services"
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === "/services" ? "bg-forest-50 text-forest-700" : "text-gray-600 hover:text-forest-700 hover:bg-forest-50"
                }`}
              >
                Services
              </Link>
              <div className="ml-4 mt-1 pl-3 border-l-2 border-forest-100 space-y-1">
                {serviceDropLinks.map((sl) => (
                  <Link
                    key={sl.href}
                    href={sl.href}
                    onClick={() => setOpen(false)}
                    className={`block px-3 py-1.5 rounded-md text-sm transition-colors ${
                      pathname === sl.href ? "text-forest-700 font-medium" : "text-gray-500 hover:text-forest-700"
                    }`}
                  >
                    {sl.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Other links */}
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
