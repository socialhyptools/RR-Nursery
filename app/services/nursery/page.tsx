import Link from "next/link";
import type { Metadata } from "next";
import {
  Flower2, TreeDeciduous, Flower, TreePine, Leaf, FlaskConical,
  GraduationCap, ShieldCheck, Truck, Recycle,
  MapPin, Clock, Phone, Star, ChevronLeft,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Plant Nursery Near Me Thoothukudi | Ornamental Plants & Wholesale Nursery Tamil Nadu",
  description:
    "RR Nursery — your local plant nursery near you in Thoothukudi, Tamil Nadu. Buy ornamental plants, wholesale nursery plants, plants for landscaping, and garden supplies. Open Mon–Sat. Delivery across South Tamil Nadu.",
  keywords: [
    "plant nursery near me",
    "ornamental plants nursery",
    "wholesale nursery plants",
    "plant nursery wholesale",
    "plants for landscaping",
    "plant nursery Thoothukudi",
    "plant nursery suppliers Tamil Nadu",
    "nursery farm Thoothukudi",
  ],
  alternates: { canonical: "https://www.rrnursery.in/services/nursery" },
  openGraph: {
    title: "Plant Nursery Near You | RR Nursery Thoothukudi, Tamil Nadu",
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
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "16:00" },
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
  { icon: Flower2,       title: "Indoor Plants",                    desc: "Beautify your home or office with our curated range of houseplants — from low-maintenance succulents to statement tropical varieties suited to Tamil Nadu's climate.",   items: ["Succulents & cacti", "Monstera & tropicals", "Snake plants & ZZs", "Peace lilies", "Pothos & philodendrons"] },
  { icon: TreeDeciduous, title: "Outdoor & Garden Plants",          desc: "Hardy varieties suited to South Tamil Nadu's climate — cottage, formal, tropical, or native. We stock seasonal favourites and year-round evergreens.",           items: ["Flowering annuals & perennials", "Ornamental grasses", "Native & drought-tolerant", "Ground covers", "Climbing plants & vines"] },
  { icon: Flower,        title: "Ornamental Plants",                desc: "Add colour and fragrance to any space. Our ornamental plant selection is updated seasonally so there is always something in bloom — perfect for landscaping projects.",    items: ["Roses & bougainvillea", "Jasmine & lavender", "Seasonal bedding plants", "Orchids & anthuriums", "Hibiscus & frangipani"] },
  { icon: TreePine,      title: "Trees & Shrubs",                   desc: "From fast-growing privacy hedges to slow-maturing specimen trees — we stock both bare-root and container-grown varieties ideal for Tamil Nadu's soil.",              items: ["Fruit & citrus trees", "Ornamental trees", "Hedging shrubs", "Bamboo varieties", "Topiary & shaped plants"] },
  { icon: Leaf,          title: "Herbs & Edibles",                  desc: "Grow your own food with our range of vegetable seedlings, herbs, and edible plants — perfect for kitchen gardens and raised beds in South Tamil Nadu.",               items: ["Herb collections", "Vegetable seedlings", "Chilli & tomato plants", "Berry plants", "Microgreens kits"] },
  { icon: FlaskConical,  title: "Soils, Fertilisers & Supplies",    desc: "Everything you need to make your plants thrive — organic potting mixes, slow-release fertilisers, pest control, and premium pots for every garden size.",         items: ["Organic potting soil", "Compost & manure", "Liquid & granular fertilisers", "Pots & planters", "Garden tools & accessories"] },
];

const whyUs = [
  { icon: GraduationCap, title: "Expert Staff On-Site",     desc: "Our certified horticulturists are in the shop daily to answer your plant questions and guide your selection." },
  { icon: ShieldCheck,   title: "Healthy, Quality Plants",  desc: "Every plant is grown or sourced with care. We inspect each batch on arrival and offer a 30-day health guarantee." },
  { icon: Truck,         title: "Local Delivery",           desc: "We deliver across Thoothukudi and surrounding South Tamil Nadu cities. Contact us for delivery rates." },
  { icon: Recycle,       title: "Sustainably Grown",        desc: "We stock organically grown plants and eco-friendly supplies. No harmful pesticides — safe for your family and pets." },
];

const trustStats = [
  { value: "500+",       label: "Plant Varieties" },
  { value: "4.9 ★",     label: "Google Rating" },
  { value: "150+",       label: "Local Reviews" },
  { value: "Wholesale",  label: "Bulk Orders Available" },
];

const contactDetails = [
  { icon: MapPin, label: "Address",       lines: ["12/582-6, Madhanager, Davis Puram", "Thoothukudi, Tamil Nadu 628002", "India"] },
  { icon: Clock,  label: "Opening Hours", lines: ["Mon – Fri: 8:00 AM – 6:00 PM", "Saturday: 9:00 AM – 4:00 PM", "Sunday: Closed"] },
  { icon: Phone,  label: "Phone",         lines: ["+91 81240 50535"] },
  { icon: Truck,  label: "Delivery Area", lines: ["Thoothukudi · Tirunelveli · Nagercoil", "Kanyakumari · Virudhunagar · Kovilpatti"] },
];

const reviews = [
  { name: "Anita K., Thoothukudi", text: "Best plant nursery in Thoothukudi! Huge selection of ornamental plants and the staff are so knowledgeable." },
  { name: "James T., Tirunelveli", text: "Bought plants for landscaping — all thriving three months later. Great wholesale prices too!" },
];

const socialLinks = [
  { label: "Facebook" },
  { label: "Instagram" },
];

const localKeywords = [
  "Plant nursery near me",
  "Ornamental plants Thoothukudi",
  "Wholesale nursery plants Tamil Nadu",
  "Plants for landscaping",
  "Plant nursery wholesale",
  "Plant nursery suppliers South Tamil Nadu",
];

export default function NurseryShopPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-earth-700 via-earth-600 to-forest-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/services" className="inline-flex items-center gap-1 text-earth-200 text-sm hover:text-white transition-colors mb-6">
              <ChevronLeft className="w-4 h-4" /> Back to Services
            </Link>
            <p className="text-earth-200 font-medium uppercase tracking-wide text-sm mb-3">RR Nursery — Thoothukudi, Tamil Nadu</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Plant Nursery <br />
              <span className="text-earth-200">Near You in Thoothukudi</span>
            </h1>
            <p className="text-earth-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              South Tamil Nadu&apos;s favourite local plant nursery. Shop 500+ varieties of ornamental plants, indoor plants, trees, herbs, and garden supplies — with expert advice on hand and wholesale options available.
            </p>
            <div className="flex flex-wrap gap-3 text-sm mb-10">
              {[
                { icon: MapPin, text: "Davis Puram, Thoothukudi, TN 628002" },
                { icon: Clock,  text: "Mon–Fri 8 AM–6 PM · Sat 9 AM–4 PM" },
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

      {/* Plant categories */}
      <section id="plants" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="section-heading">What&apos;s In Our Shop</h2>
          <p className="section-subheading">
            From rare ornamental plants to everyday favourites — our nursery farm in Thoothukudi stocks a huge range of plants and gardening supplies for every level of gardener, including wholesale nursery plants for landscaping projects.
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
      </section>

      {/* Why shop with us */}
      <section className="bg-forest-50 border-y border-forest-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Shop at RR Nursery?</h2>
            <p className="section-subheading">We are more than a plant shop — we are your local gardening partner in South Tamil Nadu.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="bg-white rounded-2xl p-6 border border-forest-100 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-forest-50 flex items-center justify-center mx-auto mb-4">
                  <w.icon className="w-6 h-6 text-forest-700" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{w.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">Visit Our Nursery in Thoothukudi</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Located at Davis Puram, Thoothukudi, Tamil Nadu — RR Nursery and Landscaping is your neighbourhood plant destination. Whether you are looking for ornamental plants, wholesale nursery plants for a landscaping project, pots &amp; accessories, or expert gardening advice — we are here to help.
            </p>
            <div className="space-y-4 mb-8">
              {contactDetails.map((cd) => (
                <div key={cd.label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-earth-50 border border-earth-100 flex items-center justify-center shrink-0 mt-0.5">
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

          <div className="space-y-4">
            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-earth-50 h-64 flex flex-col items-center justify-center text-center p-8">
              <MapPin className="w-10 h-10 text-earth-400 mb-3" />
              <p className="font-semibold text-gray-800 mb-1">RR Nursery and Landscaping</p>
              <p className="text-sm text-gray-500 mb-1">Thoothukudi, Tamil Nadu 628001</p>
              <p className="text-xs text-gray-400">Replace with your Google Maps embed iframe</p>
            </div>

            {/* Google reviews */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-semibold text-gray-900">Google Reviews</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    {[1,2,3,4,5].map((i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                    <span className="text-sm text-gray-600 ml-1">4.9 · 150+ reviews</span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                </div>
              </div>
              {reviews.map((r) => (
                <div key={r.name} className="border-t border-gray-50 pt-3 mt-3">
                  <p className="text-xs font-semibold text-gray-800">{r.name}</p>
                  <p className="text-xs text-gray-600 mt-0.5 italic">&ldquo;{r.text}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO copy */}
      <section className="bg-earth-50 border-t border-earth-100 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">
            Your Local Plant Nursery — Serving Thoothukudi &amp; South Tamil Nadu
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Looking for a <strong>plant nursery near me</strong> in Thoothukudi? RR Nursery and Landscaping has been serving Thoothukudi, Tirunelveli, Nagercoil, Kanyakumari, Virudhunagar, and Kovilpatti for over 20 years. Whether you are searching for <strong>ornamental plants nursery</strong>, <strong>wholesale nursery plants</strong>, <strong>plant nursery wholesale</strong> suppliers, or <strong>plants for landscaping</strong> projects — we have got you covered with expert advice, quality plants, and delivery across South Tamil Nadu.
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
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/contact" className="btn-primary bg-white text-earth-700 hover:bg-earth-50 px-8 py-4 text-base">Contact Us</Link>
            <Link href="/services/landscape-design" className="btn-outline border-white text-white hover:bg-white hover:text-earth-700 px-8 py-4 text-base">Landscape Design Services</Link>
          </div>
          <div className="flex justify-center gap-4">
            {socialLinks.map(({ label }) => (
              <a key={label} href="#" aria-label={label} className="text-xs bg-earth-600 hover:bg-earth-500 text-white px-4 py-2 rounded-lg transition-colors font-medium">
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
