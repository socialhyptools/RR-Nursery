import Link from "next/link";
import type { Metadata } from "next";
import {
  Home, Building2, Waves, Layers, TreeDeciduous,
  Lightbulb, ChevronLeft, Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Landscape Designing & Architecture | RR Nursery",
  description:
    "Professional landscape designing and architecture services by RR Nursery — custom garden plans, 2D/3D renders, hardscaping, irrigation, and full project management.",
};

const process = [
  { step: "01", title: "Site Analysis & Consultation",  desc: "We visit your property to assess soil quality, sunlight exposure, drainage, existing vegetation, and your lifestyle needs. This forms the foundation of every design decision." },
  { step: "02", title: "Concept Design",                desc: "Our architects draft initial concept sketches covering zones — lawn, garden beds, pathways, water features, and utility areas — aligned with your vision and budget." },
  { step: "03", title: "2D & 3D Rendering",             desc: "We produce detailed 2D CAD plans and photorealistic 3D renders so you can walk through your future garden before a single spade hits the ground." },
  { step: "04", title: "Material & Plant Selection",    desc: "We help you select hardscape materials, plant species suited to your climate and soil, and irrigation components that save water long-term." },
  { step: "05", title: "Installation & Project Mgmt",  desc: "Our experienced crew executes the plan with precision. Your dedicated project manager oversees every phase, keeps you updated, and ensures quality at every step." },
  { step: "06", title: "Handover & Aftercare",          desc: "Once complete, we walk you through your new landscape and provide a seasonal care guide. Optional maintenance packages keep your garden thriving year-round." },
];

const offerings = [
  {
    icon: Home,          title: "Residential Landscape Design",
    desc: "From compact urban courtyards to sprawling estate gardens — we design outdoor spaces that complement your home's architecture and suit how you live.",
    tags: ["Front & back gardens", "Courtyard design", "Pool surrounds", "Rooftop gardens"],
  },
  {
    icon: Building2,     title: "Commercial Landscape Architecture",
    desc: "We design and manage landscaping for offices, retail parks, hospitality venues, and residential developments that create lasting first impressions.",
    tags: ["Office & corporate", "Hotels & resorts", "Retail & public spaces", "Housing developments"],
  },
  {
    icon: Waves,         title: "Water Features & Ponds",
    desc: "Streams, cascades, koi ponds, and decorative fountains — designed to integrate seamlessly into the landscape and built to last.",
    tags: ["Koi & fish ponds", "Waterfall features", "Fountain design", "Pondless streams"],
  },
  {
    icon: Layers,        title: "Hardscaping & Structures",
    desc: "Pergolas, retaining walls, paved patios, and garden paths designed as functional extensions of your living space.",
    tags: ["Patios & decks", "Retaining walls", "Pergolas & gazebos", "Steps & paths"],
  },
  {
    icon: TreeDeciduous, title: "Planting Design",
    desc: "Strategic planting plans that layer colour, texture, and height throughout the seasons — using species suited to your exact soil and climate conditions.",
    tags: ["Seasonal colour", "Native plantings", "Hedging & screening", "Specimen trees"],
  },
  {
    icon: Lightbulb,     title: "Outdoor Lighting Design",
    desc: "Landscape lighting plans that extend the beauty of your garden into the evening, enhance security, and highlight key features.",
    tags: ["Feature & accent lighting", "Pathway lights", "Solar solutions", "Smart lighting systems"],
  },
];

const faqs = [
  { q: "How long does the design process take?",    a: "A typical residential project takes 2–4 weeks from initial consultation to final plan delivery. Complex or large-scale projects may take longer. We agree on a timeline upfront." },
  { q: "What is included in the design fee?",       a: "The design fee covers site visit, concept sketches, final 2D plan, and one revision round. 3D renders and full project management are available as add-ons or included in our premium packages." },
  { q: "Do you manage the installation as well?",   a: "Yes. We offer full turnkey services where we handle both design and installation. You can also take just the design plan and use your own contractor — we are flexible." },
  { q: "Can you work within a tight budget?",       a: "Absolutely. We design to the budget you set. We will be transparent about what is achievable and help you prioritise so you get the most impact for your spend." },
  { q: "Do you offer maintenance after installation?", a: "Yes — we offer optional monthly and seasonal maintenance contracts to keep your landscape looking its best long after installation." },
];

const trustStats = [
  { value: "200+", label: "Projects Completed" },
  { value: "20+",  label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "5★",   label: "Average Rating" },
];

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
            <p className="text-forest-300 font-medium uppercase tracking-wide text-sm mb-3">RR Nursery</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Landscape Designing <br />
              <span className="text-forest-300">&amp; Architecture</span>
            </h1>
            <p className="text-forest-100 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              We transform empty or neglected outdoor spaces into thoughtfully designed landscapes — combining horticultural science with architectural creativity to deliver results that endure.
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

      {/* Services offered */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="section-heading">What We Design</h2>
          <p className="section-subheading">
            A full spectrum of landscape design and architecture services for residential and commercial clients.
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
      </section>

      {/* Process */}
      <section id="process" className="bg-forest-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Design Process</h2>
            <p className="text-forest-300 max-w-2xl mx-auto text-lg">
              A structured, collaborative process that keeps you informed and involved at every stage.
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
          <h2 className="section-heading">Common Questions</h2>
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
          <p className="text-forest-200 text-lg mb-8 max-w-xl mx-auto">
            Book a free site consultation and let our landscape architects bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary bg-white text-forest-800 hover:bg-forest-50 px-8 py-4 text-base">
              Book Free Consultation
            </Link>
            <Link href="/services/nursery" className="btn-outline border-white text-white hover:bg-white hover:text-forest-800 px-8 py-4 text-base">
              View Nursery Shop
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
