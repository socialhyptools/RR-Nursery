import Link from "next/link";
import type { Metadata } from "next";
import { Shovel, Store, Check, Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | RR Nursery and Landscaping Thoothukudi — Landscape Design & Nursery Tamil Nadu",
  description:
    "RR Nursery and Landscaping, Thoothukudi — professional landscape designing & architecture and nursery plant shop. Serving South Tamil Nadu with premium plants, hardscape, pots, and garden maintenance.",
  keywords: [
    "nursery and landscaping services Thoothukudi",
    "landscape design South Tamil Nadu",
    "plant nursery near me",
    "garden services Thoothukudi",
  ],
  alternates: { canonical: "https://www.rrnursery.in/services" },
};

const landscapePoints = [
  "Custom landscape plans for residential & commercial",
  "2D & 3D design rendering",
  "Hardscaping — patios, retaining walls, paths",
  "Full project management end-to-end",
];

const nurseryPoints = [
  "500+ plant varieties — ornamental, indoor, outdoor",
  "Wholesale nursery plants for landscaping projects",
  "Pots, accessories & organic fertilisers",
  "Delivery across South Tamil Nadu",
];

export default function ServicesHubPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-800 to-forest-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-forest-300 font-medium uppercase tracking-wide text-sm mb-3">
            Thoothukudi, Tamil Nadu
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-5">Our Services</h1>
          <p className="text-forest-100 text-lg max-w-2xl mx-auto">
            Two distinct specialisations — one shared passion for nature. RR Nursery and Landscaping serves all of South Tamil Nadu with premium plants and professional landscape design.
          </p>
        </div>
      </section>

      {/* Two service cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Card 1 — Landscape */}
          <Link
            href="/services/landscape-design"
            className="group relative overflow-hidden bg-forest-800 text-white rounded-3xl p-10 flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-forest-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-forest-600 transition-colors">
              <Shovel className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
              Landscape Designing &amp; Architecture
            </h2>
            <p className="text-forest-200 leading-relaxed mb-8 flex-1">
              Professional landscape architects in Thoothukudi — custom garden blueprints, site analysis, 2D/3D plans, hardscaping, water features, and full project management for residential and commercial clients across South Tamil Nadu.
            </p>
            <ul className="space-y-2 text-sm text-forest-300 mb-8">
              {landscapePoints.map((pt) => (
                <li key={pt} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-forest-400 shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
            <div className="inline-flex items-center gap-2 bg-white text-forest-800 font-semibold px-6 py-3 rounded-xl w-fit group-hover:bg-forest-50 transition-colors">
              Explore Landscape Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 2 — Nursery */}
          <Link
            href="/services/nursery"
            className="group relative overflow-hidden bg-earth-600 text-white rounded-3xl p-10 flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-earth-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-earth-800 transition-colors">
              <Store className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
              Nursery Farm &amp; Plant Shop
            </h2>
            <p className="text-earth-100 leading-relaxed mb-8 flex-1">
              Your local plant nursery in Thoothukudi. Visit our nursery farm for 500+ varieties of ornamental plants, indoor plants, trees, herbs, pots &amp; accessories — with wholesale supply available for landscaping contractors across South Tamil Nadu.
            </p>
            <ul className="space-y-2 text-sm text-earth-200 mb-8">
              {nurseryPoints.map((pt) => (
                <li key={pt} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-earth-300 shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
            <div className="inline-flex items-center gap-2 bg-white text-earth-700 font-semibold px-6 py-3 rounded-xl w-fit group-hover:bg-earth-50 transition-colors">
              Visit Our Plant Shop
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-forest-50 border-t border-forest-100 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">
            Not sure which service you need?
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Our team in Thoothukudi is happy to guide you. Book a free no-obligation consultation — we serve Thoothukudi, Tirunelveli, Nagercoil, Kanyakumari, and all of South Tamil Nadu.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary px-8 py-4 text-base">
              Get a Free Quote
            </Link>
            <a href="tel:+918124050535" className="btn-outline px-8 py-4 text-base flex items-center gap-2">
              <Phone className="w-4 h-4" /> +91 81240 50535
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
