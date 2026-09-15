import Link from "next/link";
import type { Metadata } from "next";
import {
  Flower2, TreeDeciduous, Flower, TreePine, Leaf, FlaskConical,
  GraduationCap, ShieldCheck, Truck, Recycle,
  MapPin, Clock, Phone, Star, ChevronLeft, Package,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Plant Nursery in Thoothukudi | Wholesale Nursery Plants South Tamil Nadu",
  description:
    "RR Nursery — South Tamil Nadu's trusted plant nursery in Thoothukudi. Buy wholesale nursery plants, ornamental plants, indoor plants & garden supplies. Expert advice & local delivery. Open Mon–Sat at Davis Puram.",
  keywords: [
    "wholesale nursery plants in Thoothukudi",
    "plant nursery near me",
    "ornamental plants nursery in Thoothukudi",
    "plant nursery suppliers in Thoothukudi",
    "plant nursery wholesale in Thoothukudi",
    "plant nursery Thoothukudi",
    "nursery farm Thoothukudi",
  ],
  alternates: { canonical: "https://www.rrnursery.in/services/nursery" },
  openGraph: {
    title: "Plant Nursery in Thoothukudi | RR Nursery Tamil Nadu",
    description: "Shop 500+ varieties of ornamental plants, wholesale nursery plants & garden supplies at RR Nursery in Thoothukudi. Expert advice & local delivery across South Tamil Nadu.",
    type: "website",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GardenStore",
  name: "RR Nursery and Landscaping",
  alternateName: "RR Nursery",
  image: "",
  url: "https://www.rrnursery.in/services/nursery",
  telephone: "+91-8124050535",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12/582-6, Madhanager, Davis Puram",
    addressLocality: "Thoothukudi",
    addressRegion: "Tamil Nadu",
    postalCode: "628002",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 8.7642, longitude: 78.1348 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "08:00", closes: "18:00" },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "150" },
  areaServed: [
    { "@type": "City", name: "Thoothukudi" },
    { "@type": "City", name: "Tirunelveli" },
    { "@type": "City", name: "Nagercoil" },
    { "@type": "City", name: "Kanyakumari" },
    { "@type": "City", name: "Virudhunagar" },
    { "@type": "City", name: "Kovilpatti" },
  ],
  sameAs: ["https://share.google/RtqNLLT7ObGJfD5z8"],
};

const categories = [
  {
    icon: Flower2,
    title: "Indoor Plants",
    desc: "Brighten your rooms and clean indoor air with low-maintenance houseplants — from succulents to statement tropical varieties suited to Tamil Nadu's climate.",
    items: ["Succulents & cacti", "Monstera & tropicals", "Snake plants & ZZs", "Peace lilies", "Pothos & philodendrons"],
  },
  {
    icon: TreeDeciduous,
    title: "Outdoor Garden Plants",
    desc: "Build a colourful yard with hardy varieties built for local heat. We stock seasonal favourites and year-round evergreens for every garden size.",
    items: ["Flowering annuals & perennials", "Ornamental grasses", "Native & drought-tolerant", "Ground covers", "Climbing plants & vines"],
  },
  {
    icon: Flower,
    title: "Ornamental Plants",
    desc: "Add style to your front entry or porch with our ornamental plants nursery in Thoothukudi. Selection updated seasonally so there is always something in bloom.",
    items: ["Roses & bougainvillea", "Jasmine & hibiscus", "Seasonal bedding plants", "Orchids & anthuriums", "Frangipani & lavender"],
  },
  {
    icon: TreePine,
    title: "Trees and Hedging Shrubs",
    desc: "Plant large stock for privacy, shade, or backyard fruit. We stock container-grown and bare-root varieties ideal for Tamil Nadu's soil conditions.",
    items: ["Fruit & citrus trees", "Ornamental trees", "Hedging shrubs", "Bamboo varieties", "Topiary & shaped plants"],
  },
  {
    icon: Leaf,
    title: "Fresh Herbs and Veggies",
    desc: "Grow your own clean food at home with quick starter pots. Our edible plant range is perfect for kitchen gardens and raised beds.",
    items: ["Herb collections", "Vegetable seedlings", "Chilli & tomato plants", "Berry plants", "Microgreens kits"],
  },
  {
    icon: FlaskConical,
    title: "Dirt, Mixes, and Tools",
    desc: "Keep your pots healthy with proper soil media and garden tools. We stock organic potting mixes, fertilisers, pest control, and premium pots.",
    items: ["Organic potting soil", "Compost & manure", "Liquid & granular fertilisers", "Pots & planters", "Garden tools & accessories"],
  },
];

const whyUs = [
  { icon: GraduationCap, title: "Expert Advice On-Site",       desc: "Our plant helpers are ready every day. They help you pick the right items and give clear care tips tailored to your space." },
  { icon: ShieldCheck,   title: "Guaranteed Plant Health",     desc: "We inspect every pot for strong roots and clean leaves. You get healthy stock every time — plants that grow well in local weather." },
  { icon: Package,       title: "Wholesale and Retail Options", desc: "We serve everyday home gardeners and business buyers alike. Get great rates on plant nursery wholesale in Thoothukudi." },
  { icon: Recycle,       title: "Safe and Green Practices",    desc: "We use natural soil media and eco-friendly helpers. Our products are safe for your family, pets, and the environment." },
  { icon: Truck,         title: "Local Delivery Service",      desc: "We deliver heavy pots and large trees straight to your door across Thoothukudi and surrounding areas in South Tamil Nadu." },
];

const trustStats = [
  { value: "500+",      label: "Plant Varieties" },
  { value: "4.9 ★",    label: "Google Rating" },
  { value: "150+",      label: "Local Reviews" },
  { value: "Wholesale", label: "Bulk Orders Available" },
];

const wholesaleClients = [
  "Gated housing communities and apartments",
  "Office yards, hotels, and local halls",
  "Factory grounds and industrial lawns",
  "Public paths and park projects",
];

const contactDetails = [
  { icon: MapPin, label: "Address",       lines: ["Davis Puram, Thoothukudi", "Tamil Nadu, India"] },
  { icon: Clock,  label: "Opening Hours", lines: ["Mon – Sat: 8:00 AM – 6:00 PM", "Sunday: Closed"] },
  { icon: Phone,  label: "Phone",         lines: ["+91 81240 50535"] },
  { icon: Truck,  label: "Delivery Area", lines: ["Thoothukudi · Tirunelveli · Nagercoil", "Kanyakumari · Virudhunagar · Kovilpatti"] },
];

const reviews = [
  { name: "Anita K., Thoothukudi", text: "Best plant nursery in Thoothukudi! Huge selection of ornamental plants and the staff are so knowledgeable." },
  { name: "James T., Tirunelveli", text: "Bought plants for landscaping — all thriving three months later. Great wholesale prices too!" },
];

const faqs = [
  {
    q: "Where can I buy wholesale nursery plants in Thoothukudi?",
    a: "Visit RR Nursery at Davis Puram, Thoothukudi. We supply bulk flowering plants, lawn grass, shrubs, and shade trees for large property projects at wholesale prices. Contact us for a custom quote on bulk orders.",
  },
  {
    q: "How do I find the best plant nursery near me in Thoothukudi?",
    a: "Visit our main site at Davis Puram. We offer 500+ plant varieties, healthy roots, rich soil mixes, and daily care help for home buyers and commercial buyers. Skip the general search — come directly to us.",
  },
  {
    q: "What ornamental plants grow best in local weather?",
    a: "Hibiscus, Bougainvillea, Jasmine, and Frangipani handle South Tamil Nadu's sunshine very well. Our staff helps you choose the best ornamental plants for your outdoor space and maintenance level.",
  },
  {
    q: "Do plant nursery suppliers in Thoothukudi deliver to my home?",
    a: "Yes. RR Nursery delivers right to your door across the region. We safely haul small pots, mature trees, and heavy bulk soil bags to Thoothukudi, Tirunelveli, Nagercoil, and surrounding areas.",
  },
  {
    q: "Can beginners get quick plant care advice at the shop?",
    a: "Yes. Every plant comes with simple care steps for water, soil, and light. Our team answers your daily care questions directly at the shop — no appointment needed. Just visit us at Davis Puram.",
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
  "Plant nursery near me",
  "Ornamental plants Thoothukudi",
  "Wholesale nursery plants Tamil Nadu",
  "Plant nursery wholesale",
  "Plant nursery suppliers South Tamil Nadu",
];

export default function NurseryShopPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-earth-700 via-earth-600 to-forest-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/services" className="inline-flex items-center gap-1 text-earth-200 text-sm hover:text-white transition-colors mb-6">
              <ChevronLeft className="w-4 h-4" /> Back to Services
            </Link>
            <p className="text-earth-200 font-medium uppercase tracking-wide text-sm mb-3">RR Nursery — Davis Puram, Thoothukudi</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              South Tamil Nadu&apos;s Trusted <br />
              <span className="text-earth-200">Plant Nursery in Thoothukudi</span>
            </h1>
            <p className="text-earth-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Welcome to RR Nursery, your local spot for fresh plants and garden supplies. We carry over 500 plant varieties — indoor greens, flowering shrubs, shade trees, and garden soil. Need bulk items for large grounds? We offer wholesale nursery plants in Thoothukudi for large property projects.
            </p>
            <div className="flex flex-wrap gap-3 text-sm mb-10">
              {[
                { icon: MapPin, text: "Davis Puram, Thoothukudi, TN 628002" },
                { icon: Clock,  text: "Mon–Sat 8 AM – 6 PM" },
                { icon: Phone,  text: "+91 81240 50535" },
              ].map(({ icon: Icon, text }) => (
                <span key={text} className="flex items-center gap-1.5 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                  <Icon className="w-4 h-4" /> {text}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary bg-white text-earth-700 hover:bg-earth-50">Get Directions & Hours</Link>
              <a href="#plants" className="btn-outline border-white text-white hover:bg-white hover:text-earth-700">Browse Plants</a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="bg-earth-50 border-y border-earth-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustStats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-display font-bold text-earth-600">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Shop With Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="section-heading">Why Choose Our Plant Nursery?</h2>
          <p className="section-subheading">
            Finding the right greenery for your space is easy with us. As leading plant nursery suppliers in Thoothukudi, we sell strong plants that grow well in local weather.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((w) => (
            <div key={w.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-earth-300 hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-earth-50 flex items-center justify-center mb-4 group-hover:bg-earth-100 transition-colors">
                <w.icon className="w-6 h-6 text-earth-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-earth-600 transition-colors">{w.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Plant categories */}
      <section id="plants" className="bg-forest-50 border-y border-forest-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Browse Our Wide Selection of Plants</h2>
            <p className="section-subheading">
              We stock options for every sunny porch, dark room, or big yard. From rare ornamentals to everyday favourites — our nursery farm in Thoothukudi has it all.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-earth-300 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-earth-50 flex items-center justify-center mb-4 group-hover:bg-earth-100 transition-colors">
                  <cat.icon className="w-6 h-6 text-earth-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-earth-600 transition-colors">{cat.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{cat.desc}</p>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-earth-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-earth-600 font-medium uppercase tracking-wide text-sm mb-3">Bulk Orders Welcome</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-5">
              Wholesale Nursery Plants in Thoothukudi for Big Projects
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Are you building a park, working on apartments, or laying out commercial spaces? We remain a top pick for <strong>plant nursery wholesale in Thoothukudi</strong>. We offer bulk rates, matching sizes, and quick truck delivery.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">We supply bulk orders for:</p>
            <ul className="space-y-3 mb-8">
              {wholesaleClients.map((c) => (
                <li key={c} className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-earth-500 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary">Contact Us for a Bulk Quote</Link>
          </div>

          {/* Visit card */}
          <div className="bg-earth-50 border border-earth-100 rounded-2xl p-8">
            <h3 className="text-xl font-display font-bold text-gray-900 mb-5">Visit RR Nursery at Davis Puram Today</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Start your home garden setup or order bulk greens today. Stop by RR Nursery to check out our full range of 500+ plants, pots, and garden accessories.
            </p>
            <div className="space-y-4 mb-6">
              {contactDetails.map((cd) => (
                <div key={cd.label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-earth-100 flex items-center justify-center shrink-0 mt-0.5">
                    <cd.icon className="w-4 h-4 text-earth-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{cd.label}</p>
                    {cd.label === "Address" ? (
                      <address className="not-italic text-gray-600 text-sm">{cd.lines.map((l) => <span key={l} className="block">{l}</span>)}</address>
                    ) : (
                      cd.lines.map((l) => <p key={l} className="text-gray-600 text-sm">{l}</p>)
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://share.google/RtqNLLT7ObGJfD5z8" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Find Us on Google Maps
              </a>
              <Link href="/contact" className="btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Google reviews */}
      <section className="bg-forest-50 border-y border-forest-100 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-display font-bold text-gray-900">What Our Customers Say</h2>
              <div className="flex items-center gap-1 mt-1">
                {[1,2,3,4,5].map((i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                <span className="text-sm text-gray-600 ml-1">4.9 · 150+ reviews on Google</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white border border-gray-100 rounded-xl p-5">
                <p className="text-sm font-semibold text-gray-900 mb-1">{r.name}</p>
                <p className="text-sm text-gray-600 italic">&ldquo;{r.text}&rdquo;</p>
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
              <summary className="flex justify-between items-center px-6 py-4 cursor-pointer font-medium text-gray-900 list-none hover:bg-earth-50 transition-colors">
                {faq.q}
                <span className="text-earth-500 text-lg transition-transform group-open:rotate-45 shrink-0 ml-4">+</span>
              </summary>
              <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Local SEO copy */}
      <section className="bg-earth-50 border-t border-earth-100 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">
            Your Local Plant Nursery — Serving Thoothukudi &amp; South Tamil Nadu
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Skip the general search for a <strong>plant nursery near me</strong> and visit our local nursery shop at Davis Puram today. RR Nursery has been serving Thoothukudi, Tirunelveli, Nagercoil, Kanyakumari, Virudhunagar, and Kovilpatti for over 20 years. Whether you need <strong>ornamental plants nursery</strong> stock, <strong>wholesale nursery plants</strong>, or expert guidance — we are here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-500">
            {localKeywords.map((tag) => (
              <span key={tag} className="bg-white border border-earth-200 px-3 py-1.5 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-earth-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Come Visit Us Today</h2>
          <p className="text-earth-200 text-lg mb-8 max-w-xl mx-auto">
            Step into our nursery farm in Thoothukudi and let our team help you find the perfect plant. Open 6 days a week. Wholesale orders welcome.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary bg-white text-earth-700 hover:bg-earth-50 px-8 py-4 text-base">Contact Us</Link>
            <Link href="/services/landscape-design" className="btn-outline border-white text-white hover:bg-white hover:text-earth-700 px-8 py-4 text-base">Landscape Design Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
