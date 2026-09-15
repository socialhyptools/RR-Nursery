import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Sprout, GraduationCap, Truck, Recycle, Package,
  Shovel, Flower2, Droplets, Wrench, Scissors, ShoppingBag,
  Check, Calendar, Users, UserCheck, MapPin, Star, Images,
  Leaf, TreeDeciduous, Sun,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Best Plant Nursery in Thoothukudi | Landscaping Company in Thoothukudi — RR Nursery",
  description:
    "RR Nursery and Landscaping — the best plant nursery in Thoothukudi and a top landscaping company in South Tamil Nadu. Wholesale plants, gardening plants, garden landscaping services, and more.",
  keywords: [
    "best plant nursery in Thoothukudi",
    "landscaping company in Thoothukudi",
    "wholesale plants in Thoothukudi",
    "gardening plants in Thoothukudi",
    "garden landscaping services Thoothukudi",
    "plant nursery near me",
    "landscape design South Tamil Nadu",
  ],
  alternates: { canonical: "https://www.rrnursery.in" },
};

const whyUs = [
  { icon: Calendar,     title: "20+ Years of Local Experience", desc: "We know which plants grow best in local soil and heat — over two decades of trusted service in South Tamil Nadu." },
  { icon: Shovel,       title: "Full Outdoor Services",         desc: "We handle soil work, plant choice, stone paths, and water systems — everything your outdoor space needs." },
  { icon: GraduationCap, title: "Trained Plant Experts",        desc: "Our team helps you pick the right soil, water schedules, and plant food for every variety we stock." },
  { icon: Recycle,      title: "Organic Growing Methods",       desc: "We use organic plant food, drip lines, and safe soil boosters — good for your garden and the environment." },
  { icon: Package,      title: "Bulk and Retail Sales",         desc: "We sell to home owners, builders, and group projects — wholesale plants and retail pots available." },
];

const services = [
  { icon: Shovel,      title: "Yard Planning",          desc: "We design soft grass zones and hard stone paths before work starts — a complete outdoor layout for your property." },
  { icon: Sprout,      title: "Lawn Setup",             desc: "We lay fresh green turf like Mexican grass and Bermuda grass to give your yard a clean, lasting green look." },
  { icon: Wrench,      title: "Stone Work & Paths",     desc: "We install path stones, rock gardens, and outer seating spots that add structure and style to any outdoor space." },
  { icon: Droplets,    title: "Water Elements",         desc: "We build simple fountains and decorative pebble areas that bring a calm, natural feel to your garden." },
  { icon: Scissors,    title: "Drip Water Systems",     desc: "We install pipe setups that save water while feeding plants — ideal for Tamil Nadu's dry months." },
  { icon: Leaf,        title: "Garden Care Plans",      desc: "We offer regular grass trimming, plant cuts, and soil care to keep your garden green and healthy year-round." },
];

const plantCollections = [
  { icon: Flower2,       title: "Flowering Plants",          desc: "Hibiscus, Jasmine, Ixora, and bright seasonal blooms for your garden, balcony, or entry." },
  { icon: Sun,           title: "Air-Clearing Indoor Plants", desc: "Snake plants, Money plants, Areca palms, and Peace lilies — clean your indoor air naturally." },
  { icon: Leaf,          title: "Fruit & Food Plants",        desc: "Mango, Guava, Lemon, Curry leaf, and fresh kitchen herbs — grow your own food at home." },
  { icon: TreeDeciduous, title: "Shade & Street Trees",       desc: "Neem, Pungam, and tall palms for shade and wind shelter in yards, roads, and open grounds." },
];

const aboutPoints = [
  "Certified horticulture professionals on staff",
  "Sustainable and organic growing methods",
  "Trusted by thousands of customers in South Tamil Nadu",
  "Wholesale plant supply for landscaping companies",
];

const stats = [
  { icon: Calendar,  value: "20+",  label: "Years Experience", bg: "bg-forest-700" },
  { icon: Sprout,    value: "500+", label: "Plant Varieties",  bg: "bg-earth-600" },
  { icon: Users,     value: "5K+",  label: "Happy Customers",  bg: "bg-earth-600" },
  { icon: UserCheck, value: "12",   label: "Expert Staff",     bg: "bg-forest-700" },
];

const testimonials = [
  { name: "Murugan M., Thoothukudi", text: "Excellent plants and affordable prices. The team is very knowledgeable and the quality is outstanding!", rating: 5 },
  { name: "Priya S., Tirunelveli",   text: "RR Nursery transformed our garden completely. Professional landscape design and great plant selection!", rating: 5 },
  { name: "Anita K., Nagercoil",     text: "Best plant nursery near me in South Tamil Nadu. Great ornamental plants, pots, and accessories. Highly recommend!", rating: 5 },
];

const serviceAreas = [
  { city: "Thoothukudi",  desc: "Our home city — full nursery, hardscape & landscaping" },
  { city: "Tirunelveli",  desc: "Landscape design & plant delivery available" },
  { city: "Nagercoil",    desc: "Ornamental plants & garden design services" },
  { city: "Kanyakumari",  desc: "Coastal garden specialists & plant supply" },
  { city: "Virudhunagar", desc: "Wholesale plant supply & landscaping" },
  { city: "Kovilpatti",   desc: "Nursery plants & garden consultations" },
];

const faqs = [
  {
    q: "What services does RR Nursery and Landscaping offer?",
    a: "We sell plants, supply bulk orders, and design full outdoor yards. We also lay grass lawns, install drip pipes, build stone paths and water features, and care for existing gardens across South Tamil Nadu.",
  },
  {
    q: "How do I choose the right plants for my home in Thoothukudi?",
    a: "Look at how much sun and space your spot gets. Our staff will show you strong local plants that grow well in hot weather — from indoor air-clearing plants to flowering shrubs and fruit trees.",
  },
  {
    q: "Do you supply wholesale plants for commercial sites?",
    a: "Yes, we supply bulk plant orders to builders, companies, and property managers across South Tamil Nadu. We offer fair wholesale prices and safe truck delivery on schedule.",
  },
  {
    q: "What steps are in your garden landscaping services?",
    a: "We clean your site, test the soil, add plant food, lay grass, build paths, install water pipes, and plant shrubs. Every project gets a clear plan and timeline before work begins.",
  },
  {
    q: "How can I keep my lawn healthy during hot months?",
    a: "Water your plants early in the morning. Put dry leaf mulch over topsoil to hold moisture. You can also install drip pipes to save water — we can set these up as part of our garden service.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const localKeywords = [
  "Best Plant Nursery in Thoothukudi",
  "Landscaping Company in Thoothukudi",
  "Wholesale Plants in Thoothukudi",
  "Gardening Plants in Thoothukudi",
  "Garden Landscaping Services Thoothukudi",
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700 text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div>
              <p className="text-forest-300 font-medium mb-4 tracking-wide uppercase text-sm">
                Thoothukudi, Tamil Nadu
              </p>
              <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                Best Plant Nursery &amp; <br />
                <span className="text-forest-300">Landscaping Company in Thoothukudi</span>
              </h1>
              <p className="text-forest-100 text-lg leading-relaxed mb-4">
                Your Trusted Partner for Plants and Outdoor Spaces. A green space at home or around your office adds natural warmth, fresh air, and real value to your land.
              </p>
              <p className="text-forest-200 text-base leading-relaxed mb-10">
                At RR Nursery and Landscaping, we provide healthy plants and complete garden services built for local weather. We help you pick small pots for your room or design big gardens for large properties.
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
            {/* Right: nursery photo */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="/gallery/nursery-shop-1.jpg"
                  alt="RR Nursery and Landscaping — Best plant nursery in Thoothukudi"
                  width={600}
                  height={450}
                  className="w-full h-80 object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest-900/80 to-transparent p-4">
                  <p className="text-white text-sm font-medium">RR Nursery &amp; Landscaping, Thoothukudi</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-3 text-center">
                <div className="text-forest-700 font-bold text-xl">20+</div>
                <div className="text-gray-600 text-xs">Years of Trust</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us strip */}
      <section className="bg-forest-50 border-y border-forest-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-10">
            <h2 className="section-heading">Why Choose RR Nursery and Landscaping?</h2>
            <p className="section-subheading">A good garden needs rich soil and the right plants. You also need workers who know local weather. We bring over 20 years of work to every yard.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {whyUs.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-5 border border-forest-100 hover:border-forest-300 hover:shadow-md transition-all duration-300 text-center">
                <div className="w-11 h-11 rounded-xl bg-forest-50 flex items-center justify-center mx-auto mb-3">
                  <f.icon className="w-5 h-5 text-forest-700" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{f.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale Plants section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-forest-600 font-medium uppercase tracking-wide text-sm mb-3">Bulk Orders Welcome</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-5">
              Wholesale Plants in Thoothukudi
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Finding good plants in large counts can be hard. We provide a steady supply of <strong>Wholesale Plants in Thoothukudi</strong>. We help builders, plant shops, and commercial site managers get strong plants on time.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our bulk branch supplies strong plants at direct nursery rates. We grow native shade trees, boundary hedges, ground grass, and flowering shrubs. Every bulk order passes checks for plant size and root health — keeping plants alive after you move them to your site.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Native shade trees and boundary hedges",
                "Ground grass and flowering shrubs",
                "Size and root health checks on every bulk order",
                "On-time truck delivery to your build site",
              ].map((pt) => (
                <li key={pt} className="flex items-center gap-3 text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-forest-100 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-forest-700" strokeWidth={3} />
                  </div>
                  {pt}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary">Get a Bulk Quote</Link>
          </div>

          {/* Services table */}
          <div className="bg-forest-50 border border-forest-100 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 bg-forest-700 text-white">
              <h3 className="font-semibold">Work with Our Gardening Team</h3>
              <p className="text-forest-200 text-sm mt-1">Small pot setups to big land projects</p>
            </div>
            <div className="divide-y divide-forest-100">
              {[
                { type: "Plant Sales",       details: "Indoor plants, flowering shrubs, fruit trees",  best: "Home owners, flat owners" },
                { type: "Wholesale Supply",  details: "Bulk saplings, hedge shrubs, grass turf",       best: "Builders, plant shops" },
                { type: "Yard Execution",    details: "Grass laying, paths, drip lines",               best: "Villas, offices, factories" },
                { type: "Garden Care",       details: "Monthly lawn trims, plant food, pruning",       best: "Gated homes, business parks" },
              ].map((row) => (
                <div key={row.type} className="grid grid-cols-3 px-6 py-4 text-sm">
                  <p className="font-semibold text-gray-900">{row.type}</p>
                  <p className="text-gray-600">{row.details}</p>
                  <p className="text-forest-700 font-medium">{row.best}</p>
                </div>
              ))}
            </div>
            <div className="px-6 py-3 bg-forest-50 border-t border-forest-100">
              <div className="grid grid-cols-3 text-xs font-semibold text-forest-600 uppercase tracking-wide">
                <span>Service</span><span>Details</span><span>Best For</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gardening Plants section */}
      <section className="bg-earth-50 border-y border-earth-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-earth-600 font-medium uppercase tracking-wide text-sm mb-3">500+ Varieties in Stock</p>
            <h2 className="section-heading">Gardening Plants in Thoothukudi</h2>
            <p className="section-subheading">
              A great home garden begins with strong plants. Our plant yard stocks many <strong>Gardening Plants in Thoothukudi</strong> — place them on balconies, roof spaces, yards, or inside rooms.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {plantCollections.map((p) => (
              <div key={p.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-earth-300 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-earth-50 flex items-center justify-center mb-4 group-hover:bg-earth-100 transition-colors">
                  <p.icon className="w-6 h-6 text-earth-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-earth-600 transition-colors">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 text-sm mb-6">
            Our staff gives easy care tips with every order — water schedules, plant food, and trimming guides included.
          </p>
          <div className="text-center">
            <Link href="/services/nursery" className="btn-primary">Visit Our Plant Nursery</Link>
          </div>
        </div>
      </section>

      {/* Garden Landscaping Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="section-heading">Garden Landscaping Services Thoothukudi</h2>
          <p className="section-subheading">
            A neat garden takes good planning and clean setup. Our <strong>Garden Landscaping Services in Thoothukudi</strong> change plain dirt into clear, useful green layouts for homes and offices.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-forest-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-forest-50 flex items-center justify-center group-hover:bg-forest-100 transition-colors shrink-0">
                  <s.icon className="w-5 h-5 text-forest-700" />
                </div>
                <span className="text-forest-400 font-display font-bold text-2xl">0{i + 1}</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-forest-700 transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/services/landscape-design" className="btn-primary">
            View Landscape Design Services
          </Link>
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-forest-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-forest-300 font-medium uppercase tracking-wide text-sm mb-3">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-5">20+ Years of Nurturing Nature in South Tamil Nadu</h2>
              <p className="text-forest-200 leading-relaxed mb-6">
                RR Nursery and Landscaping has grown from a small family-run plant shop in Thoothukudi into South Tamil Nadu&apos;s most trusted full-service nursery and landscaping company. We combine deep horticultural expertise with genuine passion for the environment.
              </p>
              <ul className="space-y-3 mb-8">
                {aboutPoints.map((pt) => (
                  <li key={pt} className="flex items-center gap-3 text-forest-200">
                    <div className="w-5 h-5 rounded-full bg-forest-700 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-forest-300" strokeWidth={3} />
                    </div>
                    {pt}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn-outline border-white text-white hover:bg-white hover:text-forest-800">
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
      <section className="bg-forest-50 border-y border-forest-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Serving All of South Tamil Nadu</h2>
            <p className="section-subheading">
              Looking for <strong>nursery and landscaping services near you</strong>? We serve customers across South Tamil Nadu — from Thoothukudi to Kanyakumari.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceAreas.map((area) => (
              <div key={area.city} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-forest-100 hover:border-forest-300 transition-colors">
                <MapPin className="w-5 h-5 text-forest-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">{area.city}</p>
                  <p className="text-gray-500 text-sm">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Don&apos;t see your city?{" "}
            <Link href="/contact" className="text-forest-600 hover:text-forest-700 underline">
              Contact us
            </Link>{" "}
            — we may still be able to serve you.
          </p>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-10">
          <h2 className="section-heading">Our Nursery in Photos</h2>
          <p className="section-subheading">
            Take a look inside RR Nursery and Landscaping — plants, landscaping projects, and more from our Thoothukudi nursery.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            { src: "/gallery/nursery-shop-1.jpg", alt: "RR Nursery shop front, Thoothukudi" },
            { src: "/gallery/gallery-2.jpg",      alt: "Plants at RR Nursery" },
            { src: "/gallery/gallery-3.jpg",      alt: "Landscaping work by RR Nursery" },
            { src: "/gallery/gallery-4.jpg",      alt: "Garden plants nursery Thoothukudi" },
            { src: "/gallery/gallery-5.jpg",      alt: "Ornamental plants RR Nursery" },
            { src: "/gallery/gallery-6.jpg",      alt: "Nursery farm Thoothukudi" },
            { src: "/gallery/gallery-7.jpg",      alt: "Garden design South Tamil Nadu" },
            { src: "/gallery/gallery-8.jpg",      alt: "Plant collection RR Nursery" },
          ].map((img, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl aspect-square bg-forest-50 group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/gallery" className="btn-outline inline-flex items-center gap-2">
            <Images className="w-4 h-4" />
            View Full Gallery
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-earth-50 border-y border-earth-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="section-subheading">Everything you need to know about our nursery and landscaping services.</p>
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
        </div>
      </section>

      {/* SEO keyword block */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <div className="flex flex-wrap justify-center gap-3">
          {localKeywords.map((kw) => (
            <span key={kw} className="bg-forest-50 border border-forest-100 text-forest-700 text-sm px-4 py-1.5 rounded-full">{kw}</span>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-forest-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-forest-200 text-lg mb-8 max-w-xl mx-auto">
            Contact RR Nursery and Landscaping today for a free consultation — the best plant nursery and landscaping company in Thoothukudi, serving all of South Tamil Nadu.
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
