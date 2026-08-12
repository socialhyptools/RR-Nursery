import Link from "next/link";

const features = [
  { icon: "🌱", title: "Wide Plant Selection", desc: "Over 500 varieties of indoor and outdoor plants carefully sourced from top growers." },
  { icon: "🌿", title: "Expert Advice", desc: "Our certified horticulturists are always ready to guide you to the perfect plant." },
  { icon: "🚚", title: "Delivery & Planting", desc: "We deliver and plant across the region — sit back and watch your garden transform." },
  { icon: "💚", title: "Sustainable Practices", desc: "Eco-friendly growing methods and organic fertilizers for a healthier planet." },
];

const services = [
  { icon: "🏡", title: "Landscape Design", desc: "Custom garden plans tailored to your space, style, and budget." },
  { icon: "✂️", title: "Tree & Shrub Trimming", desc: "Professional pruning to keep your greenery healthy and looking its best." },
  { icon: "🪴", title: "Indoor Plant Styling", desc: "Transform your interior spaces with curated plant arrangements." },
  { icon: "💧", title: "Irrigation Systems", desc: "Water-efficient irrigation installation and maintenance." },
  { icon: "🌸", title: "Seasonal Planting", desc: "Keep your garden vibrant year-round with seasonal planting services." },
  { icon: "🧱", title: "Hardscaping", desc: "Paths, patios, retaining walls, and more to complement your landscape." },
];

const testimonials = [
  {
    name: "Priya M.",
    text: "RR Nursery transformed our bare backyard into a lush paradise. The team was professional, creative, and delivered beyond expectations!",
    rating: 5,
  },
  {
    name: "James T.",
    text: "Incredible selection of plants and the staff really knows their stuff. I always leave with exactly what I need.",
    rating: 5,
  },
  {
    name: "Anita K.",
    text: "Gorgeous plants at fair prices. The delivery and planting service saved us so much time. Highly recommend!",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <p className="text-forest-300 font-medium mb-4 tracking-wide uppercase text-sm">
              Welcome to RR Nursery
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
              Grow Something <br />
              <span className="text-forest-300">Beautiful Today</span>
            </h1>
            <p className="text-forest-100 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Your one-stop destination for premium plants, expert landscaping, and everything you need to create the garden of your dreams.
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
        {/* Decorative leaf shapes */}
        <div className="absolute right-0 top-0 h-full w-1/3 flex items-center justify-center opacity-20 text-[200px] pointer-events-none select-none">
          🌿
        </div>
      </section>

      {/* Features strip */}
      <section className="bg-forest-50 border-y border-forest-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 items-start">
                <span className="text-3xl shrink-0">{f.icon}</span>
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
            From a single potted plant to a complete garden makeover — we've got you covered.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-forest-300 hover:shadow-lg transition-all duration-300"
            >
              <span className="text-4xl mb-4 block">{s.icon}</span>
              <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-forest-700 transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/services" className="btn-primary">
            View All Services →
          </Link>
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-earth-50 border-y border-earth-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-forest-600 font-medium uppercase tracking-wide text-sm mb-3">Our Story</p>
              <h2 className="section-heading text-left">20+ Years of Nurturing Nature</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded in 2005, RR Nursery has grown from a small family-run plant shop into the region&apos;s most trusted full-service nursery and landscaping company. We combine deep horticultural expertise with genuine passion for the environment.
              </p>
              <ul className="space-y-3 mb-8">
                {["Certified master gardeners on staff", "Sustainable and organic growing methods", "Trusted by 5,000+ happy customers", "Community garden initiatives"].map((pt) => (
                  <li key={pt} className="flex items-center gap-3 text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-forest-100 text-forest-700 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn-outline">
                Learn More About Us →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-forest-700 rounded-2xl p-8 text-white text-center">
                <div className="text-4xl font-display font-bold">20+</div>
                <div className="text-forest-200 text-sm mt-1">Years Experience</div>
              </div>
              <div className="bg-earth-600 rounded-2xl p-8 text-white text-center">
                <div className="text-4xl font-display font-bold">500+</div>
                <div className="text-earth-100 text-sm mt-1">Plant Varieties</div>
              </div>
              <div className="bg-earth-600 rounded-2xl p-8 text-white text-center">
                <div className="text-4xl font-display font-bold">5K+</div>
                <div className="text-earth-100 text-sm mt-1">Happy Customers</div>
              </div>
              <div className="bg-forest-700 rounded-2xl p-8 text-white text-center">
                <div className="text-4xl font-display font-bold">12</div>
                <div className="text-forest-200 text-sm mt-1">Expert Staff</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="section-heading">What Our Customers Say</h2>
          <p className="section-subheading">Real reviews from real plant lovers.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-forest-50 rounded-2xl p-6 border border-forest-100">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
              <p className="font-semibold text-forest-800">— {t.name}</p>
            </div>
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
            Contact us today for a free consultation and let our experts design the perfect garden for you.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-forest-800 hover:bg-forest-50 text-base px-8 py-4">
            Get Your Free Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
