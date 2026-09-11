import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <div className="bg-white rounded-lg px-2 py-1 inline-block">
                <Image
                  src="/logo.jpeg"
                  alt="RR Nursery and Landscaping — Thoothukudi"
                  width={180}
                  height={60}
                  className="h-14 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-forest-300 text-sm leading-relaxed">
              Thoothukudi&apos;s trusted nursery and landscaping company. Premium plants, expert landscape design, and garden services across South Tamil Nadu since 2005.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" aria-label="Facebook" className="text-xs bg-forest-700 hover:bg-forest-600 text-forest-200 hover:text-white px-3 py-2 rounded-lg transition-colors font-medium">
                Facebook
              </a>
              <a href="#" aria-label="Instagram" className="text-xs bg-forest-700 hover:bg-forest-600 text-forest-200 hover:text-white px-3 py-2 rounded-lg transition-colors font-medium">
                Instagram
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-forest-200 mb-4 uppercase tracking-wide text-xs">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/services/landscape-design", label: "Landscape Design" },
                { href: "/services/nursery", label: "Plant Nursery" },
                { href: "/about", label: "About Us" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-forest-300 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-forest-200 mb-4 uppercase tracking-wide text-xs">Contact Us</h3>
            <ul className="space-y-3 text-sm text-forest-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-forest-400" />
                <address className="not-italic">
                  12/582-6, Madhanager, Davis Puram,<br />
                  Thoothukudi, Tamil Nadu 628002
                </address>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 shrink-0 text-forest-400" />
                <a href="tel:+918124050535" className="hover:text-white transition-colors">
                  +91 81240 50535
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 shrink-0 text-forest-400" />
                <a href="mailto:info@rrnursery.in" className="hover:text-white transition-colors">
                  info@rrnursery.in
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 shrink-0 text-forest-400" />
                <span>Mon&ndash;Sat: 8 AM &ndash; 6 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-forest-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-forest-400">
          <p>&copy; {new Date().getFullYear()} RR Nursery and Landscaping, Thoothukudi. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
