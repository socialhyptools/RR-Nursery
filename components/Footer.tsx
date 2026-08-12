import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Sprout } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-forest-600 rounded-lg flex items-center justify-center">
                <Sprout className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl">RR Nursery</span>
            </div>
            <p className="text-forest-300 text-sm leading-relaxed">
              Bringing nature closer to your home. Premium plants, expert advice, and landscaping services since 2005.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-forest-200 mb-4 uppercase tracking-wide text-xs">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-forest-300 hover:text-white text-sm transition-colors"
                  >
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
                <span>123 Garden Lane, Green Valley, CA 90210</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 shrink-0 text-forest-400" />
                <a href="tel:+11234567890" className="hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 shrink-0 text-forest-400" />
                <a href="mailto:info@rrnursery.com" className="hover:text-white transition-colors">
                  info@rrnursery.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 shrink-0 text-forest-400" />
                <span>Mon–Sat: 8 AM – 6 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-forest-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-forest-400">
          <p>© {new Date().getFullYear()} RR Nursery. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
