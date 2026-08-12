import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nursery Plant Shop Near You | RR Nursery – Green Valley, CA",
  description:
    "Visit RR Nursery's plant shop in Green Valley, CA. Buy indoor plants, outdoor plants, flowering plants, trees, shrubs & organic supplies near you. Open Mon–Sat. Local delivery available.",
  keywords:
    "nursery near me, plant shop near me, indoor plants, outdoor plants, buy plants Green Valley, plant nursery CA, flowering plants, garden center near me, RR Nursery",
  openGraph: {
    title: "RR Nursery – Plant Shop Near You | Green Valley, CA",
    description:
      "Shop 500+ varieties of indoor and outdoor plants at RR Nursery in Green Valley. Expert advice, organic supplies, and local delivery.",
    type: "website",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GardenStore",
  name: "RR Nursery",
  image: "",
  url: "https://www.rrnursery.com/services/nursery",
  telephone: "+11234567890",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Garden Lane",
    addressLocality: "Green Valley",
    addressRegion: "CA",
    postalCode: "90210",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.0195,
    longitude: -118.4912,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "312",
  },
};

const categories = [
  {
    icon: "🪴",
    title: "Indoor Plants",
    desc: "Beautify your home or office with our curated range of houseplants — from low-maintenance succulents to statement monstera and fiddle-leaf figs.",
    items: ["Succulents & cacti", "Monstera & tropicals", "Snake plants & ZZs", "Peace lilies", "Pothos & philodendrons"],
  },
  {
    icon: "🌳",
    title: "Outdoor & Garden Plants",
    desc: "Hardy varieties suited to every garden style — cottage, formal, tropical, or native. We stock seasonal favourites and year-round evergreens.",
    items: ["Flowering annuals & perennials", "Ornamental grasses", "Native & drought-tolerant", "Ground covers", "Climbing plants & vines"],
  },
  {
    icon: "🌸",
    title: "Flowering Plants",
    desc: "Add colour and fragrance to any space. Our flowering plant selection is updated seasonally so there's always something in bloom.",
    items: ["Roses & bougainvillea", "Jasmine & lavender", "Seasonal bedding plants", "Orchids & anthuriums", "Hibiscus & frangipani"],
  },
  {
    icon: "🌲",
    title: "Trees & Shrubs",
    desc: "From fast-growing privacy hedges to slow-maturing specimen trees — we stock both bare-root and container-grown varieties.",
    items: ["Fruit & citrus trees", "Ornamental trees", "Hedging shrubs", "Bamboo varieties", "Topiary & shaped plants"],
  },
  {
    icon: "🌿",
    title: "Herbs & Edibles",
    desc: "Grow your own food with our range of vegetable seedlings, herbs, and edible plants — perfect for kitchen gardens and raised beds.",
    items: ["Herb collections", "Vegetable seedlings", "Chilli & tomato plants", "Berry plants", "Microgreens kits"],
  },
  {
    icon: "🧪",
    title: "Soils, Fertilisers & Supplies",
    desc: "Everything you need to make your plants thrive — organic potting mixes, slow-release fertilisers, pest control, and premium pots.",
    items: ["Organic potting soil", "Compost & manure", "Liquid & granular fertilisers", "Pots & planters", "Garden tools & accessories"],
  },
];

const whyUs = [
  { icon: "🏅", title: "Expert Staff On-Site", desc: "Our certified horticulturists are in the shop daily to answer your plant questions and guide your selection." },
  { icon: "🌱", title: "Healthy, Quality Plants", desc: "Every plant is grown or sourced with care. We inspect each batch on arrival and offer a 30-day health guarantee." },
  { icon: "🚚", title: "Local Delivery", desc: "We deliver across Green Valley and surrounding areas. Orders over $150 qualify for free local delivery." },
  { icon: "🌍", title: "Sustainably Grown", desc: "We stock organically grown plants and eco-friendly supplies. No harmful pesticides — safe for your family and pets." },
];

export default function NurseryShopPage() {
  return (
    <>
      {/* Structured data for local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-earth-700 via-earth-600 to-forest-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-earth-200 text-sm hover:text-white transition-colors mb-6"
            >
              ← Back to Services
            </Link>
            <p className="text-earth-200 font-medium uppercase tracking-wide text-sm mb-3">
              RR Nursery — Green Valley, CA
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Nursery Farm &amp; <br />
              <span className="text-earth-200">Plant Shop Near You</span>
            </h1>
            <p className="text-earth-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Green Valley&apos;s favourite local plant nursery. Shop 500+ varieties of indoor plants, outdoor plants, trees, herbs, and garden supplies — all in one place, with expert advice on hand.
            </p>

            {/* Store info quick bar */}
            <div className="flex flex-wrap gap-4 text-sm mb-10">
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                📍 123 Garden Lane, Green Valley, CA
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                🕐 Mon–Fri 8 AM–6 PM · Sat 9 AM–4 PM
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                📞 (123) 456-7890
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary bg-white text-earth-700 hover:bg-earth-50">
                Get Directions & Hours
              </Link>
              <a href="#plants" className="btn-outline border-white text-white hover:bg-white hover:text-earth-700">
                Browse Plants ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local trust signals */}
      <section className="bg-earth-50 border-y border-earth-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "500+", label: "Plant Varieties" },
              { value: "4.9 ★", label: "Google Rating" },
              { value: "312", label: "Local Reviews" },
              { value: "Same Day", label: "Local Delivery" },
            ].map((s) => (
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
            From rare tropicals to everyday favourites — our nursery farm stocks a huge range of plants and gardening supplies for every level of gardener.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-earth-300 hover:shadow-lg transition-all duration-300 group"
            >
              <span className="text-4xl mb-4 block">{cat.icon}</span>
              <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-earth-600 transition-colors">
                {cat.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{cat.desc}</p>
              <ul className="space-y-1.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-earth-500 text-xs">●</span>
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
            <p className="section-subheading">
              We&apos;re more than a plant shop — we&apos;re your local gardening partner.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="bg-white rounded-2xl p-6 border border-forest-100 text-center hover:shadow-md transition-shadow">
                <span className="text-4xl mb-4 block">{w.icon}</span>
                <h3 className="font-semibold text-gray-900 mb-2">{w.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit us / Local SEO section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">
              Visit Our Nursery in Green Valley
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Conveniently located in the heart of Green Valley, CA, RR Nursery is your neighbourhood plant destination. Whether you&apos;re looking for a single houseplant or stocking up for a full garden project — we&apos;re here to help.
            </p>

            {/* NAP — consistent for local SEO */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">📍</span>
                <div>
                  <p className="font-semibold text-gray-900">Address</p>
                  <address className="not-italic text-gray-600 text-sm">
                    123 Garden Lane<br />
                    Green Valley, CA 90210<br />
                    United States
                  </address>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">🕐</span>
                <div>
                  <p className="font-semibold text-gray-900">Opening Hours</p>
                  <ul className="text-gray-600 text-sm space-y-0.5">
                    <li>Monday – Friday: 8:00 AM – 6:00 PM</li>
                    <li>Saturday: 9:00 AM – 4:00 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">📞</span>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <a href="tel:+11234567890" className="text-earth-600 hover:underline text-sm">
                    (123) 456-7890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">🚚</span>
                <div>
                  <p className="font-semibold text-gray-900">Local Delivery Area</p>
                  <p className="text-gray-600 text-sm">
                    Green Valley · Sunridge · Maple Heights · Riverside Park · Elmwood · and surrounding areas
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get Directions on Google Maps →
              </a>
              <Link href="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Map embed placeholder */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-earth-50 h-72 flex flex-col items-center justify-center text-center p-8">
              <span className="text-5xl mb-3">🗺️</span>
              <p className="font-semibold text-gray-800 mb-1">RR Nursery, 123 Garden Lane</p>
              <p className="text-sm text-gray-500 mb-3">Green Valley, CA 90210</p>
              <p className="text-xs text-gray-400">
                Replace this with your Google Maps embed iframe once confirmed.
              </p>
            </div>

            {/* Google reviews snippet */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-semibold text-gray-900">Google Reviews</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    {[1,2,3,4,5].map((i) => <span key={i} className="text-yellow-400 text-sm">★</span>)}
                    <span className="text-sm text-gray-600 ml-1">4.9 · 312 reviews</span>
                  </div>
                </div>
                <span className="text-3xl">🏆</span>
              </div>
              {[
                { name: "Anita K.", text: "Best plant shop in Green Valley! Huge selection and the staff are so knowledgeable." },
                { name: "James T.", text: "Bought a monstera and some herbs — all thriving three months later. Will be back!" },
              ].map((r) => (
                <div key={r.name} className="border-t border-gray-50 pt-3 mt-3">
                  <p className="text-xs font-semibold text-gray-800">{r.name}</p>
                  <p className="text-xs text-gray-600 mt-0.5 italic">&ldquo;{r.text}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO area targeting copy */}
      <section className="bg-earth-50 border-t border-earth-100 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">
            Your Local Plant Nursery — Serving Green Valley &amp; Surrounding Areas
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Looking for a <strong>plant nursery near me</strong> in Green Valley, CA? RR Nursery has been serving Green Valley, Sunridge, Maple Heights, Riverside Park, and Elmwood for over 20 years. Whether you&apos;re searching for <strong>indoor plants near me</strong>, <strong>garden plants near me</strong>, or a local <strong>garden centre near me</strong> — we&apos;ve got you covered with expert advice, quality plants, and same-day local delivery.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-500">
            {[
              "Nursery near me",
              "Plant shop Green Valley",
              "Indoor plants near me",
              "Garden centre CA",
              "Buy plants online & in-store",
              "Local plant delivery",
            ].map((tag) => (
              <span key={tag} className="bg-white border border-earth-200 px-3 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-earth-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Come Visit Us Today
          </h2>
          <p className="text-earth-200 text-lg mb-8 max-w-xl mx-auto">
            Step into our nursery farm and let our team help you find the perfect plant. Open 6 days a week.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary bg-white text-earth-700 hover:bg-earth-50 px-8 py-4 text-base">
              Contact Us →
            </Link>
            <Link href="/services/landscape-design" className="btn-outline border-white text-white hover:bg-white hover:text-earth-700 px-8 py-4 text-base">
              Landscape Design Services →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
