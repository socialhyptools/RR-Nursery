import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | RR Nursery",
  description: "Learn about RR Nursery's 20-year journey, our expert team, and our commitment to sustainable horticulture.",
};

const team = [
  {
    name: "Rajesh R.",
    role: "Founder & Master Horticulturist",
    bio: "With over 25 years in horticulture, Rajesh founded RR Nursery with a vision to make quality plants and professional landscaping accessible to everyone.",
    emoji: "👨‍🌾",
  },
  {
    name: "Rekha R.",
    role: "Co-Founder & Head of Design",
    bio: "Rekha brings an artist's eye to every landscape design. She leads our creative team and personally oversees all major design projects.",
    emoji: "👩‍🎨",
  },
  {
    name: "Arun Kumar",
    role: "Lead Landscape Architect",
    bio: "A certified landscape architect with a decade of experience, Arun specializes in sustainable design and water-efficient garden systems.",
    emoji: "🧑‍💼",
  },
  {
    name: "Divya S.",
    role: "Plant Health Specialist",
    bio: "Divya is our resident plant doctor. She diagnoses, treats, and nurtures plants back to health using organic, eco-friendly methods.",
    emoji: "👩‍🔬",
  },
];

const values = [
  {
    icon: "🌍",
    title: "Environmental Responsibility",
    desc: "We prioritize sustainable practices — from composting and rainwater harvesting to using only organic fertilizers and pesticides.",
  },
  {
    icon: "🤝",
    title: "Community Focus",
    desc: "We actively participate in local greening initiatives, school garden programs, and urban reforestation projects.",
  },
  {
    icon: "🏅",
    title: "Quality Above All",
    desc: "Every plant we sell and every garden we design is held to the highest standard. Our 30-day plant guarantee backs this promise.",
  },
  {
    icon: "📚",
    title: "Continuous Learning",
    desc: "Horticulture is always evolving. Our team regularly attends workshops and conferences to stay at the forefront of the industry.",
  },
];

const milestones = [
  { year: "2005", event: "RR Nursery founded by Rajesh & Rekha in a small 500 sq ft shop." },
  { year: "2008", event: "Expanded to a full 2-acre nursery and launched landscaping services." },
  { year: "2012", event: "Certified as an Organic Nursery by the State Horticultural Board." },
  { year: "2016", event: "Launched the Community Garden Initiative — donated 1,000 plants to local schools." },
  { year: "2019", event: "Opened second location and added commercial landscaping services." },
  { year: "2023", event: "Served our 5,000th customer. Launched online plant delivery service." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-800 to-forest-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-forest-300 font-medium uppercase tracking-wide text-sm mb-3">Who We Are</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-5">About RR Nursery</h1>
          <p className="text-forest-100 text-lg max-w-2xl mx-auto">
            A family-founded, community-driven nursery with over two decades of passion for plants and sustainable living.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-forest-600 font-medium uppercase tracking-wide text-sm mb-3">Our Story</p>
            <h2 className="section-heading text-left">Rooted in Passion, Grown with Purpose</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              RR Nursery began in 2005 when husband-and-wife team Rajesh and Rekha decided to turn their lifelong love of gardening into a community resource. Starting with a small retail plot and a big dream, they built the nursery one plant — and one customer — at a time.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Today, RR Nursery spans 2 acres and employs 12 passionate horticulture professionals. But the family spirit that launched us in 2005 is still very much alive in everything we do — from the personalized advice we give every customer to the way we treat our plants like family.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe that a well-tended garden is good for the soul, the community, and the planet. That belief drives every decision we make.
            </p>
          </div>
          <div className="bg-forest-50 rounded-2xl p-8 border border-forest-100">
            <h3 className="font-display font-bold text-xl text-gray-900 mb-6">Our Journey</h3>
            <div className="space-y-5">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-forest-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-forest-200 my-1" />
                    )}
                  </div>
                  <div className="pb-4">
                    <span className="text-xs font-semibold text-forest-600 uppercase tracking-wide">
                      {m.year}
                    </span>
                    <p className="text-gray-700 text-sm mt-0.5">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-earth-50 border-y border-earth-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What We Stand For</h2>
            <p className="section-subheading">Our values aren&apos;t just words — they guide every project we take on.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-earth-100 text-center hover:shadow-md transition-shadow">
                <span className="text-4xl mb-4 block">{v.icon}</span>
                <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="section-heading">Meet Our Team</h2>
          <p className="section-subheading">
            The passionate people behind every beautiful garden we create.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:border-forest-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-forest-100 flex items-center justify-center text-4xl mx-auto mb-4">
                {member.emoji}
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">{member.name}</h3>
              <p className="text-forest-600 text-sm font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-forest-800 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "20+", label: "Years in Business" },
              { value: "500+", label: "Plant Varieties" },
              { value: "5,000+", label: "Happy Customers" },
              { value: "12", label: "Expert Staff" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-display font-bold text-forest-300 mb-1">{stat.value}</div>
                <div className="text-forest-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
          Let&apos;s Grow Together
        </h2>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
          Whether you need a single houseplant or a full landscape overhaul, we&apos;d love to be part of your garden story.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/services" className="btn-primary">Explore Services</Link>
          <Link href="/contact" className="btn-outline">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
