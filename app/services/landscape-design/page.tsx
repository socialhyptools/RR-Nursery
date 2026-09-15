import Link from "next/link";
import type { Metadata } from "next";
import {
  Home, Building2, Waves, Layers, TreeDeciduous,
  Lightbulb, ChevronLeft, Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Top Landscape Architects in Tamil Nadu | RR Nursery Thoothukudi",
  description:
    "RR Nursery — top landscape architects in Tamil Nadu. Professional landscape design for residential gardens, commercial grounds, water features & hardscaping across South Tamil Nadu — Thoothukudi, Tirunelveli, Nagercoil, Madurai.",
  keywords: [
    "landscape architects in Tamil Nadu",
    "top landscape architects Tamil Nadu",
    "landscape design companies near me",
    "garden designers near me",
    "landscape service near me",
    "landscape design South Tamil Nadu",
    "landscape architects Thoothukudi",
  ],
  alternates: { canonical: "https://www.rrnursery.in/services/landscape-design" },
  openGraph: {
    title: "Top Landscape Architects in Tamil Nadu | RR Nursery",
    description: "Expert landscape designing & architecture services across South Tamil Nadu. Residential garden setup, commercial grounds, water features, hardscaping & more.",
    type: "website",
  },
};

const whyChoose = [
  { title: "Local Knowledge", desc: "We know South Tamil Nadu's soil types, rainfall patterns, and plant varieties — ensuring every garden we design thrives long after handover." },
  { title: "Complete Service Packages", desc: "Full projects handled from site visit to final handover. One team, one point of contact, zero stress for you." },
  { title: "Clear and Honest Pricing", desc: "Get a full cost breakdown before work begins. No hidden charges, no surprises — just transparent, upfront pricing." },
  { title: "Skilled Installation Team", desc: "Our in-house crew handles both construction and planting. Trained, experienced, and focused on quality at every step." },
  { title: "Direct Access to Local Plants", desc: "We run our own nursery farm in Thoothukudi — giving you better-quality plants at better prices than anyone else." },
];

const process = [
  { step: "01", title: "Site Visit & Soil Testing",    desc: "We visit your property to assess land, test soil quality, study drainage patterns, check sunlight exposure, and understand your goals and budget." },
  { step: "02", title: "Initial Layout Sketches",      desc: "Our architects draft concept sketches covering all zones — lawn, garden beds, pathways, water features, and utility areas — aligned with your vision." },
  { step: "03", title: "3D Layout Models",             desc: "We produce photorealistic 3D layout models so you can fully visualise your future garden and request adjustments before any construction begins." },
  { step: "04", title: "Plant & Material Selection",   desc: "We help you choose hardscape materials, plant species suited to Tamil Nadu's climate and soil, and water-efficient irrigation components." },
  { step: "05", title: "Construction Work",            desc: "Our experienced crew executes the plan with precision. A dedicated project manager oversees every phase and keeps you informed throughout." },
  { step: "06", title: "Handover & Care Tips",         desc: "Once complete, we walk you through your new landscape and provide a full seasonal care guide. Optional maintenance packages available." },
];

const offerings = [
  {
    icon: Home,          title: "Residential Garden Setup",
    desc: "From compact urban courtyards to sprawling estate gardens in Thoothukudi — we design outdoor spaces that complement your home's architecture and how you live.",
    tags: ["Front & back yards", "Courtyard design", "Pool surroundings", "Rooftop gardens"],
  },
  {
    icon: Building2,     title: "Commercial Outdoor Grounds",
    desc: "We design and manage landscaping for corporate offices, hotels, shopping complexes, and housing estates across South Tamil Nadu that create lasting first impressions.",
    tags: ["Corporate offices", "Hotels & resorts", "Shopping complexes", "Housing estates"],
  },
  {
    icon: Waves,         title: "Custom Water Features",
    desc: "Fish ponds, koi ponds, stone waterfalls, garden fountains, and stream features — designed to integrate seamlessly and built to last in Tamil Nadu's climate.",
    tags: ["Fish & koi ponds", "Stone waterfalls", "Garden fountains", "Stream features"],
  },
  {
    icon: Layers,        title: "Hardscaping and Yard Structures",
    desc: "Patios, retaining walls, pergolas, and walkways — designed as functional, beautiful extensions of your outdoor living space.",
    tags: ["Patios & decks", "Retaining walls", "Pergolas & gazebos", "Walkways & steps"],
  },
  {
    icon: TreeDeciduous, title: "Custom Plant Layouts",
    desc: "Strategic planting plans using seasonal flowers, native plants, privacy hedges, and shade trees suited to South Tamil Nadu's exact soil and climate conditions.",
    tags: ["Seasonal flowers", "Native plants", "Privacy hedges", "Shade trees"],
  },
  {
    icon: Lightbulb,     title: "Outdoor Lighting Systems",
    desc: "Spotlights, path lights, solar fixtures, and smart lighting — extending the beauty of your garden into the evening while enhancing security.",
    tags: ["Spotlights & accents", "Path lights", "Solar fixtures", "Smart lighting"],
  },
];

const faqs = [
  {
    q: "Why should I hire professional landscape architects instead of doing it myself?",
    a: "Professional landscape architects bring expertise in soil analysis, drainage planning, plant selection, and construction management. A well-designed landscape adds long-term value to your property and avoids costly mistakes from poor planning. We also source plants directly from our own nursery, keeping costs lower.",
  },
  {
    q: "How do I choose the right landscaping company in Tamil Nadu?",
    a: "Look for a company with local experience, an in-house team, and a portfolio of completed projects in the region. RR Nursery has 20+ years of experience in South Tamil Nadu, runs its own nursery farm, and handles design and construction under one roof — so you get consistent quality and accountability.",
  },
  {
    q: "How long does a typical landscaping project take?",
    a: "A residential garden project typically takes 2–6 weeks from consultation to completion, depending on scope and complexity. Large commercial projects may take longer. We agree on a clear, detailed timeline before work begins so you always know what to expect.",
  },
  {
    q: "Can landscaping be done within a limited budget?",
    a: "Yes. We offer flexible packages suited to different budgets. Our transparent pricing means you get a full cost breakdown before any work starts. We can also phase large projects to spread costs over time if needed — just let us know during the consultation.",
  },
  {
    q: "Who will maintain the garden after the construction is done?",
    a: "We offer optional monthly and seasonal maintenance contracts to keep your landscape looking its best year-round. We can also train your staff on basic garden care. Every project handover includes a full care guide tailored to your specific plants and landscape design.",
  },
];

const trustStats = [
  { value: "200+", label: "Projects Completed" },
  { value: "20+",  label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "5★",   label: "Average Rating" },
];

const serviceLocations = ["Thoothukudi", "Tirunelveli", "Nagercoil", "Madurai", "South Tamil Nadu"];

export default function LandscapeDesignPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-forest-300 text-sm hover:text-white transition-colors mb-6"
            >
              <ChevronLeft className="w-4 h-4" /> Back to Services
            </Link>
            <p className="text-forest-300 font-medium uppercase tracking-wide text-sm mb-3">RR Nursery — Thoothukudi, Tamil Nadu</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Top Landscape Architects <br />
              <span className="text-forest-300">in Tamil Nadu</span>
            </h1>
            <p className="text-forest-100 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              RR Nursery and Landscaping transforms empty plots and open spaces into well-designed green areas. We work with home buyers, office owners, and builders across South Tamil Nadu — Thoothukudi, Tirunelveli, Nagercoil, Madurai, and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary bg-white text-forest-800 hover:bg-forest-50">
                Get a Free Design Consultation
              </Link>
              <a href="#process" className="btn-outline border-white text-white hover:bg-white hover:text-forest-800">
                See Our Process
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-forest-50 border-y border-forest-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustStats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-display font-bold text-forest-700">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="section-heading">Why Choose RR Nursery?</h2>
          <p className="section-subheading">
            Finding the right landscape architect in Tamil Nadu matters. Here is why clients across South Tamil Nadu choose us.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChoose.map((w) => (
            <div key={w.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-forest-300 hover:shadow-md transition-all duration-300">
              <div className="w-9 h-9 rounded-lg bg-forest-50 border border-forest-100 flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-forest-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{w.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services offered */}
      <section className="bg-forest-50 border-y border-forest-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What We Design</h2>
            <p className="section-subheading">
              A full spectrum of landscape design and architecture services for residential and commercial clients across South Tamil Nadu.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((o) => (
              <div
                key={o.title}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-forest-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-forest-50 flex items-center justify-center mb-4 group-hover:bg-forest-100 transition-colors">
                  <o.icon className="w-6 h-6 text-forest-700" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-forest-700 transition-colors">
                  {o.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{o.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {o.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-forest-50 text-forest-700 px-2.5 py-1 rounded-full border border-forest-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-forest-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Design Process</h2>
            <p className="text-forest-300 max-w-2xl mx-auto text-lg">
              A structured, collaborative process that keeps you informed and involved at every stage — from Thoothukudi to anywhere in South Tamil Nadu.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p) => (
              <div key={p.step} className="bg-forest-800 rounded-2xl p-6 border border-forest-700">
                <div className="text-forest-400 font-display font-bold text-4xl mb-4">{p.step}</div>
                <h3 className="font-semibold text-white text-lg mb-2">{p.title}</h3>
                <p className="text-forest-300 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="section-heading">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="group bg-white border border-gray-100 rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center px-6 py-4 cursor-pointer font-medium text-gray-900 list-none hover:bg-forest-50 transition-colors">
                {faq.q}
                <span className="text-forest-600 text-lg transition-transform group-open:rotate-45 shrink-0 ml-4">+</span>
              </summary>
              <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Design Your Dream Garden?
          </h2>
          <p className="text-forest-200 text-lg mb-6 max-w-xl mx-auto">
            Book a free site consultation and let our landscape architects bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8 text-sm text-forest-300">
            <span className="mr-1">Serving:</span>
            {serviceLocations.map((loc) => (
              <span key={loc} className="bg-forest-700 px-3 py-1 rounded-full">{loc}</span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary bg-white text-forest-800 hover:bg-forest-50 px-8 py-4 text-base">
              Book Free Consultation
            </Link>
            <Link href="/services/nursery" className="btn-outline border-white text-white hover:bg-white hover:text-forest-800 px-8 py-4 text-base">
              Visit Our Plant Nursery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
