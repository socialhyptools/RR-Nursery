import Link from "next/link";
import type { Metadata } from "next";
import {
  Sprout, GraduationCap, Truck, Recycle,
  Shovel, Flower2, Droplets, Wrench, Scissors, ShoppingBag,
  Check, Calendar, Users, UserCheck, MapPin, Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "RR Nursery and Landscaping Thoothukudi | Nursery & Landscaping Services in South Tamil Nadu",
  description:
    "RR Nursery and Landscaping — Thoothukudi's trusted plant nursery and landscape design company. Premium plants, expert landscaping, pots & accessories, hardscape, and garden maintenance across South Tamil Nadu.",
  keywords: [
    "nursery and landscaping services in Thoothukudi",
    "plant nursery near me",
    "landscape design South Tamil Nadu",
    "nursery farm Thoothukudi",
    "garden plants Tirunelveli",
  ],
  alternates: { canonical: "https://www.rrnursery.in" },
};

const features = [
  { icon: Sprout,        title: "500+ Plant Varieties",     desc: "Indoor plants, outdoor plants, ornamental plants, and rare species — all quality-checked." },
  { icon: GraduationCap, title: "Expert Advice",            desc: "Our certified horticulturists are on-site daily to help you choose the right plants." },
  { icon: Truck,         title: "Delivery Across South TN", desc: "We deliver plants and garden materials to Thoothukudi, Tirunelveli, Nagercoil & beyond." },
  { icon: Recycle,       title: "Sustainable Practices",    desc: "Eco-friendly growing, organic fertilisers, and responsible sourcing for a healthier planet." },
];

const services = [
  { icon: Shovel,      title: "Landscape Design & Architecture", desc: "Custom garden plans, 2D/3D renders, site analysis, and full project management across South Tamil Nadu." },
  { icon: Flower2,     title: "Plants & Nursery Farm",           desc: "Browse 500+ varieties of ornamental plants, indoor plants, trees, herbs, and seasonal flowers." },
  { icon: ShoppingBag, title: "Pots & Accessories",              desc: "Premium pots, planters, garden tools, organic soil, fertilisers, and all gardening accessories." },
  { icon: Wrench,      title: "Hardscape",                       desc: "Patios, retaining walls, stone pathways, pergolas, and structural garden elements built to last." },
  { icon: Scissors,    title: "Garden Maintenance",              desc: "Regular pruning, trimming, lawn care, and seasonal upkeep to keep your garden always looking its best." },
  { icon: Droplets,    title: "Irrigation Systems",              desc: "Water-efficient drip irrigation and sprinkler systems designed for Tamil Nadu's climate." },
];

const aboutPoints = [
  "Certified horticulture professionals on staff",
  "Sustainable and organic growing methods",
  "Trusted by thousands of customers in South Tamil Nadu",
  "Wholesale plant supply for landscaping companies",
];

const stats = [
  { icon: Calendar,  value: "20+",  label: "Years Experience",  bg: "bg-forest-700" },
  { icon: Sprout,    value: "500+", label: "Plant Varieties",   bg: "bg-earth-600" },
  { icon: Users,     value: "5K+",  label: "Happy Customers",   bg: "bg-earth-600" },
  { icon: UserCheck, value: "12",   label: "Expert Staff",      bg: "bg-forest-700" },
];

const testimonials = [
  { name: "Murugan M., Thoothukudi", text: "Excellent plants and affordable prices. The team is very knowledgeable and the quality is outstanding!", rating: 5 },
  { name: "Priya S., Tirunelveli",   text: "RR Nursery transformed our garden completely. Professional landscape design and great plant selection!", rating: 5 },
  { name: "Anita K., Nagercoil",     text: "Best plant nursery near me in South Tamil Nadu. Great ornamental plants, pots, and accessories. Highly recommend!", rating: 5 },
];

const serviceAreas = [
  { city: "Thoothukudi", desc: "Our home city — full nursery, hardscape & landscaping" },
  { city: "Tirunelveli", desc: "Landscape design & plant delivery available" },
  { city: "Nagercoil",   desc: "Ornamental plants & garden design services" },
  { city: "Kanyakumari", desc: "Coastal garden specialists & plant supply" },
  { city: "Virudhunagar", desc: "Wholesale plant supply & landscaping" },
  { city: "Kovilpatti",  desc: "Nursery plants & garden consultations" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700 text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <p className="text-forest-300 font-medium mb-4 tracking-wide uppercase text-sm">
              Thoothukudi, Tamil Nadu
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
              Nursery &amp; Landscaping <br />
              <span className="text-forest-300">Services in Thoothukudi</span>
            </h1>
            <p className="text-forest-100 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              South Tamil Nadu&apos;s trusted destination for premium plants, professional landscape design, hardscape, garden maintenance, and everything you need to create the garden of your dreams.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="btn-primary bg-white text-forest-800 hover:bg-forest-50 shadow-lg">
                Explore Services
              </Link>
              <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-forest-800">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="bg-forest-50 border-y border-forest-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-forest-100 flex items-center justify-center shrink-0">
                  <f.icon className="w-5 h-5 text-forest-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="section-heading">Our Services</h2>
          <p className="section-subheading">
            From a single potted plant to a complete landscape overhaul — we cover everything across South Tamil Nadu.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-forest-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-forest-50 flex items-center justify-center mb-4 group-hover:bg-forest-100 transition-colors">
                <s.icon className="w-6 h-6 text-forest-700" />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-forest-700 transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-earth-50 border-y border-earth-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-forest-600 font-medium uppercase tracking-wide text-sm mb-3">Our Story</p>
              <h2 className="section-heading text-left">20+ Years of Nurturing Nature in South Tamil Nadu</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                RR Nursery and Landscaping has grown from a small family-run plant shop in Thoothukudi into South Tamil Nadu&apos;s most trusted full-service nursery and landscaping company. We combine deep horticultural expertise with genuine passion for the environment.
              </p>
              <ul className="space-y-3 mb-8">
                {aboutPoints.map((pt) => (
                  <li key={pt} className="flex items-center gap-3 text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-forest-100 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-forest-700" strokeWidth={3} />
                    </div>
                    {pt}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn-outline">
                Learn More About Us
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className={`${s.bg} rounded-2xl p-8 text-white text-center`}>
                  <s.icon className="w-6 h-6 mx-auto mb-2 opacity-70" />
                  <div className="text-4xl font-display font-bold">{s.value}</div>
                  <div className="text-sm mt-1 opacity-80">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="section-heading">What Our Customers Say</h2>
          <p className="section-subheading">Real reviews from customers across South Tamil Nadu.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-forest-50 rounded-2xl p-6 border border-forest-100">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
              <p className="font-semibold text-forest-800">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-forest-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Serving All of South Tamil Nadu
            </h2>
            <p className="text-forest-300 max-w-2xl mx-auto text-lg">
              Looking for <strong className="text-white">nursery and landscaping services near you</strong>? We serve customers across South Tamil Nadu — from Thoothukudi to Kanyakumari.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceAreas.map((area) => (
              <div key={area.city} className="flex items-start gap-3 bg-forest-800 rounded-xl p-4 border border-forest-700">
                <MapPin className="w-5 h-5 text-forest-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{area.city}</p>
                  <p className="text-forest-400 text-sm">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-forest-400 text-sm mt-8">
            Don&apos;t see your city?{" "}
            <Link href="/contact" className="text-forest-300 hover:text-white underline">
              Contact us
            </Link>{" "}
            — we may still be able to serve you.
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-forest-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-forest-200 text-lg mb-8 max-w-xl mx-auto">
            Contact RR Nursery and Landscaping today for a free consultation. Serving Thoothukudi and all of South Tamil Nadu.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary bg-white text-forest-800 hover:bg-forest-50 text-base px-8 py-4">
              Get Your Free Quote
            </Link>
            <a href="tel:+918124050535" className="btn-outline border-white text-white hover:bg-white hover:text-forest-800 text-base px-8 py-4">
              Call +91 81240 50535
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
