import Link from "next/link";
import type { Metadata } from "next";
import {
  Shovel, Store, Check, Phone, ArrowRight,
  Flower2, ShoppingBag, Wrench, Scissors, Droplets,
  ClipboardList, Ruler, Truck, HeartHandshake,
  TreePine, Leaf,
} from "lucide-react";

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

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "500+", label: "Plant Varieties" },
  { value: "5K+", label: "Happy Clients" },
  { value: "100+", label: "Projects Done" },
];

const landscapeServices = [
  { icon: Ruler,         title: "Site Analysis & Design", desc: "Detailed survey, soil study, and bespoke 2D/3D landscape blueprint for your space." },
  { icon: Shovel,        title: "Hardscape Construction",  desc: "Patios, retaining walls, pathways, pergolas, and stone features built to last." },
  { icon: Droplets,      title: "Water Features",          desc: "Ponds, fountains, and water-smart irrigation tailored for Tamil Nadu's climate." },
  { icon: ClipboardList, title: "Project Management",      desc: "End-to-end supervision from design to handover — on time, within budget." },
];

const nurseryServices = [
  { icon: Flower2,     title: "Ornamental Plants",      desc: "500+ varieties of flowering, foliage, indoor, and rare exotic species." },
  { icon: TreePine,    title: "Trees & Shrubs",          desc: "Shade trees, fruit trees, hedging shrubs, and avenue plants for every need." },
  { icon: ShoppingBag, title: "Pots & Accessories",     desc: "Designer pots, planters, garden tools, organic soil, and fertilisers." },
  { icon: Truck,       title: "Wholesale & Delivery",    desc: "Bulk nursery plant supply with delivery across South Tamil Nadu." },
];

const process = [
  { step: "01", title: "Consultation",    desc: "Free on-site or virtual consultation to understand your vision and assess your space." },
  { step: "02", title: "Design & Quote",  desc: "We prepare a detailed landscape plan or plant selection with a transparent cost breakdown." },
  { step: "03", title: "Execution",       desc: "Our expert team brings the plan to life — quality materials, skilled craftsmen, on schedule." },
  { step: "04", title: "Handover & Care", desc: "We walk you through the completed project and offer maintenance packages to keep it thriving." },
];

export default function ServicesHubPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-forest-900 text-white">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-forest-700 rounded-full opacity-20 translate-x-40 -translate-y-24 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-earth-600 rounded-full opacity-20 -translate-x-20 translate-y-20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <span className="inline-block bg-forest-700 text-forest-300 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              Thoothukudi, Tamil Nadu
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight mb-6">
              Two Services.<br />
              <span className="text-forest-400">Endless Possibilities.</span>
            </h1>
            <p className="text-forest-200 text-lg leading-relaxed max-w-2xl mb-10">
              From the soil to the skyline — RR Nursery and Landscaping covers everything green. Expert landscape architecture and the finest plant nursery in South Tamil Nadu, under one roof.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services/landscape-design" className="group inline-flex items-center gap-2 bg-white text-forest-900 font-semibold px-6 py-3 rounded-xl hover:bg-forest-50 transition-colors shadow-lg">
                <Shovel className="w-4 h-4" /> Landscape Design
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services/nursery" className="group inline-flex items-center gap-2 bg-earth-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-earth-700 transition-colors shadow-lg">
                <Store className="w-4 h-4" /> Plant Nursery
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-forest-800 bg-forest-800/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-forest-700">
              {stats.map((s) => (
                <div key={s.label} className="text-center pl-6 first:pl-0">
                  <div className="text-3xl font-display font-bold text-white">{s.value}</div>
                  <div className="text-forest-400 text-xs uppercase tracking-wide mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Service 1: Landscape Design ─────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: content */}
          <div className="bg-forest-800 text-white px-8 sm:px-16 py-20 flex flex-col justify-center">
            <div className="w-16 h-16 bg-forest-700 rounded-2xl flex items-center justify-center mb-8">
              <Shovel className="w-8 h-8 text-forest-300" />
            </div>
            <p className="text-forest-400 text-xs font-semibold uppercase tracking-widest mb-3">Service 01</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Landscape Designing<br />&amp; Architecture
            </h2>
            <p className="text-forest-200 leading-relaxed mb-8 max-w-md">
              Our certified landscape architects transform outdoor spaces into stunning, functional environments — for homes, villas, offices, hotels, and commercial properties across South Tamil Nadu.
            </p>
            <ul className="space-y-3 mb-10">
              {["Residential & commercial landscape design", "2D/3D design rendering & virtual walkthroughs", "Hardscaping, water features & lighting", "End-to-end project management"].map((pt) => (
                <li key={pt} className="flex items-center gap-3 text-sm text-forest-200">
                  <span className="w-5 h-5 rounded-full bg-forest-600 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-forest-300" strokeWidth={3} />
                  </span>
                  {pt}
                </li>
              ))}
            </ul>
            <Link href="/services/landscape-design" className="group inline-flex items-center gap-2 bg-white text-forest-800 font-semibold px-7 py-3.5 rounded-xl w-fit hover:bg-forest-50 transition-colors">
              Explore Landscape Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right: sub-service grid */}
          <div className="bg-forest-50 px-8 sm:px-12 py-20 flex flex-col justify-center">
            <p className="text-forest-600 text-xs font-semibold uppercase tracking-widest mb-6">What&apos;s Included</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {landscapeServices.map((s) => (
                <div key={s.title} className="bg-white rounded-2xl p-5 border border-forest-100 hover:border-forest-300 hover:shadow-md transition-all group">
                  <div className="w-10 h-10 bg-forest-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-forest-200 transition-colors">
                    <s.icon className="w-5 h-5 text-forest-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{s.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Service 2: Nursery ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: sub-service grid */}
          <div className="bg-earth-50 px-8 sm:px-12 py-20 flex flex-col justify-center order-2 lg:order-1">
            <p className="text-earth-600 text-xs font-semibold uppercase tracking-widest mb-6">What&apos;s Available</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {nurseryServices.map((s) => (
                <div key={s.title} className="bg-white rounded-2xl p-5 border border-earth-100 hover:border-earth-300 hover:shadow-md transition-all group">
                  <div className="w-10 h-10 bg-earth-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-earth-200 transition-colors">
                    <s.icon className="w-5 h-5 text-earth-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{s.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: content */}
          <div className="bg-earth-600 text-white px-8 sm:px-16 py-20 flex flex-col justify-center order-1 lg:order-2">
            <div className="w-16 h-16 bg-earth-700 rounded-2xl flex items-center justify-center mb-8">
              <Store className="w-8 h-8 text-earth-300" />
            </div>
            <p className="text-earth-300 text-xs font-semibold uppercase tracking-widest mb-3">Service 02</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Nursery Farm<br />&amp; Plant Shop
            </h2>
            <p className="text-earth-100 leading-relaxed mb-8 max-w-md">
              Thoothukudi&apos;s largest plant selection — 500+ varieties of ornamental, indoor, and outdoor plants. We are both a retail nursery and a wholesale supplier for landscaping projects across South Tamil Nadu.
            </p>
            <ul className="space-y-3 mb-10">
              {["500+ ornamental, indoor & outdoor varieties", "Wholesale supply for landscapers & contractors", "Premium pots, soil, and garden accessories", "Delivery across South Tamil Nadu"].map((pt) => (
                <li key={pt} className="flex items-center gap-3 text-sm text-earth-100">
                  <span className="w-5 h-5 rounded-full bg-earth-700 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-earth-300" strokeWidth={3} />
                  </span>
                  {pt}
                </li>
              ))}
            </ul>
            <Link href="/services/nursery" className="group inline-flex items-center gap-2 bg-white text-earth-700 font-semibold px-7 py-3.5 rounded-xl w-fit hover:bg-earth-50 transition-colors">
              Visit Our Plant Shop
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Additional Services Strip ────────────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-display font-bold text-gray-900">More From RR Nursery</h2>
            <p className="text-gray-500 mt-2">Additional specialised services for complete garden care</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Scissors, title: "Garden Maintenance", desc: "Regular pruning, trimming, lawn care, and seasonal upkeep.", color: "bg-forest-50 border-forest-100 group-hover:border-forest-300" },
              { icon: Droplets, title: "Irrigation Systems", desc: "Drip and sprinkler systems designed for South Tamil Nadu's climate.", color: "bg-blue-50 border-blue-100 group-hover:border-blue-300" },
              { icon: Wrench,   title: "Hardscape Works",   desc: "Patios, walkways, fences, pergolas, and garden structures.", color: "bg-earth-50 border-earth-100 group-hover:border-earth-300" },
              { icon: Leaf,     title: "Organic Supplies",  desc: "Organic fertilisers, compost, and eco-friendly garden inputs.", color: "bg-green-50 border-green-100 group-hover:border-green-300" },
            ].map((s) => (
              <div key={s.title} className={`group bg-white rounded-2xl p-6 border transition-all hover:shadow-lg ${s.color}`}>
                <s.icon className="w-6 h-6 text-forest-700 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Work ─────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-forest-600 text-xs font-semibold uppercase tracking-widest mb-3">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">How We Work</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">A simple, transparent process — from first call to finished garden.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((p, i) => (
            <div key={p.step} className="relative">
              {/* Connector line */}
              {i < process.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-forest-100 z-0 -translate-y-0.5" style={{ width: "calc(100% - 2rem)", left: "calc(50% + 1.5rem)" }} />
              )}
              <div className="relative z-10 bg-white rounded-2xl p-6 border border-gray-100 hover:border-forest-200 hover:shadow-lg transition-all h-full">
                <div className="text-5xl font-display font-bold text-forest-100 mb-4 leading-none">{p.step}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Choose Us ───────────────────────────────────────────────── */}
      <section className="bg-forest-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-forest-400 text-xs font-semibold uppercase tracking-widest mb-4">Why RR Nursery</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                South Tamil Nadu&apos;s Most Trusted Garden Partner
              </h2>
              <p className="text-forest-300 leading-relaxed mb-8">
                For over 20 years, homeowners, hotels, offices, and landscaping contractors across Thoothukudi, Tirunelveli, Nagercoil, and Kanyakumari have trusted RR Nursery for quality, honesty, and expertise.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-forest-900 font-semibold px-7 py-3.5 rounded-xl hover:bg-forest-50 transition-colors">
                Book a Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: HeartHandshake, title: "Free Consultation",    desc: "No-obligation site visit and expert advice before you commit to anything." },
                { icon: Check,          title: "Transparent Pricing",  desc: "Detailed quotes with no hidden charges — what we quote is what you pay." },
                { icon: Leaf,           title: "Eco-Friendly Methods", desc: "Organic fertilisers, water-efficient irrigation, and sustainable planting." },
                { icon: Truck,          title: "Pan-South TN Delivery", desc: "Plants and garden materials delivered across South Tamil Nadu." },
              ].map((w) => (
                <div key={w.title} className="bg-forest-800 rounded-2xl p-5 border border-forest-700 hover:border-forest-500 transition-colors">
                  <div className="w-9 h-9 bg-forest-700 rounded-lg flex items-center justify-center mb-3">
                    <w.icon className="w-4 h-4 text-forest-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-1 text-sm">{w.title}</h3>
                  <p className="text-forest-400 text-xs leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
            Not sure which service fits your needs? Our team in Thoothukudi will guide you — completely free of charge.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Get a Free Quote
            </Link>
            <a href="tel:+918124050535" className="btn-outline text-base px-8 py-4 inline-flex items-center gap-2">
              <Phone className="w-4 h-4" /> +91 81240 50535
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-6">Serving Thoothukudi · Tirunelveli · Nagercoil · Kanyakumari · Virudhunagar · Kovilpatti</p>
        </div>
      </section>
    </>
  );
}
