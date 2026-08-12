import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | RR Nursery",
  description:
    "RR Nursery offers professional landscape designing & architecture and a full-service nursery plant shop. Explore our two specialisations.",
};

export default function ServicesHubPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-800 to-forest-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-forest-300 font-medium uppercase tracking-wide text-sm mb-3">
            What We Do
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-5">Our Services</h1>
          <p className="text-forest-100 text-lg max-w-2xl mx-auto">
            Two distinct specialisations — one shared passion for nature. Choose the service that fits your needs.
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
            <span className="text-6xl mb-6 block">🏡</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
              Landscape Designing &amp; Architecture
            </h2>
            <p className="text-forest-200 leading-relaxed mb-8 flex-1">
              Custom garden blueprints, site analysis, 2D/3D plans, hardscaping, and full project management — turning your outdoor space into a masterpiece.
            </p>
            <ul className="space-y-2 text-sm text-forest-300 mb-8">
              {[
                "Custom landscape plans",
                "2D & 3D design rendering",
                "Hardscaping & water features",
                "Project management end-to-end",
              ].map((pt) => (
                <li key={pt} className="flex items-center gap-2">
                  <span className="text-forest-400">✓</span> {pt}
                </li>
              ))}
            </ul>
            <div className="inline-flex items-center gap-2 bg-white text-forest-800 font-semibold px-6 py-3 rounded-xl w-fit group-hover:bg-forest-50 transition-colors">
              Explore Service
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

          {/* Card 2 — Nursery */}
          <Link
            href="/services/nursery"
            className="group relative overflow-hidden bg-earth-600 text-white rounded-3xl p-10 flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <span className="text-6xl mb-6 block">🌱</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
              Nursery Farm &amp; Plant Shop
            </h2>
            <p className="text-earth-100 leading-relaxed mb-8 flex-1">
              Visit our nursery farm and offline plant shop for 500+ varieties of indoor and outdoor plants, expert advice, and same-day local delivery.
            </p>
            <ul className="space-y-2 text-sm text-earth-200 mb-8">
              {[
                "500+ plant varieties in stock",
                "Indoor & outdoor plants",
                "Organic fertilisers & soil",
                "Local delivery available",
              ].map((pt) => (
                <li key={pt} className="flex items-center gap-2">
                  <span className="text-earth-300">✓</span> {pt}
                </li>
              ))}
            </ul>
            <div className="inline-flex items-center gap-2 bg-white text-earth-700 font-semibold px-6 py-3 rounded-xl w-fit group-hover:bg-earth-50 transition-colors">
              Visit Our Shop
              <span className="group-hover:translate-x-1 transition-transform">→</span>
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
          <p className="text-gray-600 mb-6">
            Our team is happy to guide you. Book a free no-obligation consultation today.
          </p>
          <Link href="/contact" className="btn-primary px-8 py-4 text-base">
            Get a Free Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
