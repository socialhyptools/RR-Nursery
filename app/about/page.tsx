import Link from "next/link";
import type { Metadata } from "next";
import { Globe, Users, Award, BookOpen, Calendar, Sprout, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | RR Nursery and Landscaping Thoothukudi, Tamil Nadu",
  description:
    "Learn about RR Nursery and Landscaping — Thoothukudi's trusted nursery and landscape design company. 10+ years serving South Tamil Nadu with premium plants, expert landscape architects, and sustainable horticulture.",
  keywords: [
    "RR Nursery Thoothukudi",
    "nursery and landscaping South Tamil Nadu",
    "landscape architects Thoothukudi",
    "about RR Nursery",
  ],
  alternates: { canonical: "https://www.rrnursery.in/about" },
};

const founders = [
  {
    initials: "A",
    label: "About the Founder",
    name: "Arbutharobert",
    qualification: "B.Sc. Agri & MBA",
    roles: ["Founder – RR Nursery and Landscaping", "Founder – GreenSky Landscape, Chennai"],
    bio: [
      "Arbutharobert is a B.Sc. Agriculture and MBA graduate with 12 years of experience in the landscaping industry. As the Founder of GreenSky Landscape, Chennai, he has successfully led the company for over 6 years, delivering approximately 700 landscaping projects.",
      "With expertise in landscape design, execution, and maintenance, he is committed to transforming outdoor spaces into beautiful, functional, and sustainable green environments through innovative designs and quality-driven solutions.",
    ],
    highlights: [
      { value: "12", label: "Years in Landscaping" },
      { value: "700+", label: "Projects Delivered" },
      { value: "6+", label: "Years Leading GreenSky" },
    ],
    color: "bg-forest-700",
  },
  {
    initials: "R",
    label: "About the Co-founder",
    name: "Raghul",
    qualification: "B.E. Mechanical Engineering",
    roles: ["Co-founder – RR Nursery and Landscaping", "Project Manager – GreenSky Landscape"],
    bio: [
      "A Mechanical Engineering graduate with nearly 5 years of experience in project management and team leadership, Raghul specializes in technical project coordination, engineering structures, automated irrigation, team management, and the execution of landscape and hardscape projects.",
    ],
    highlights: [
      { value: "5", label: "Years in Project Management" },
      { value: "B.E.", label: "Mechanical Engineer" },
    ],
    skills: ["Technical Project Coordination", "Engineering Structures", "Automated Irrigation", "Team Management", "Landscape & Hardscape Execution"],
    color: "bg-earth-600",
  },
];

const values = [
  { icon: Globe,    title: "Environmental Responsibility", desc: "We prioritize sustainable practices — from composting and rainwater harvesting to using only organic fertilizers and pesticides." },
  { icon: Users,    title: "Community Focus",              desc: "We actively participate in local greening initiatives, school garden programs, and urban reforestation projects across South Tamil Nadu." },
  { icon: Award,    title: "Quality Above All",            desc: "Every plant we sell and every garden we design is held to the highest standard. Our 30-day plant guarantee backs this promise." },
  { icon: BookOpen, title: "Continuous Learning",          desc: "Horticulture is always evolving. Our team regularly attends workshops and conferences to stay at the forefront of the industry." },
];

const milestones = [
  { year: "2005", event: "RR Nursery and Landscaping founded in Thoothukudi, Tamil Nadu — starting with a small nursery farm and a big vision." },
  { year: "2008", event: "Expanded to a full 2-acre nursery farm and launched professional landscaping services across South Tamil Nadu." },
  { year: "2012", event: "Certified as an Organic Nursery. Introduced ornamental plants and wholesale plant supply services." },
  { year: "2016", event: "Launched the Community Garden Initiative — donated plants to local schools and public spaces in Thoothukudi." },
  { year: "2019", event: "Expanded services to Tirunelveli, Nagercoil, Kanyakumari, and Virudhunagar. Added commercial landscaping division." },
  { year: "2023", event: "Served thousands of customers across South Tamil Nadu. Launched online plant enquiry and delivery booking." },
];

const stats = [
  { icon: Calendar,  value: "10+",   label: "Years in Business" },
  { icon: Sprout,    value: "500+",  label: "Plant Varieties" },
  { icon: Users,     value: "5,000+", label: "Happy Customers" },
  { icon: UserCheck, value: "12",    label: "Expert Staff" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-800 to-forest-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-forest-300 font-medium uppercase tracking-wide text-sm mb-3">Thoothukudi, Tamil Nadu</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-5">About RR Nursery and Landscaping</h1>
          <p className="text-forest-100 text-lg max-w-2xl mx-auto">
            A family-founded, community-driven nursery and landscaping company with over a decade of passion for plants and sustainable living in South Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-forest-600 font-medium uppercase tracking-wide text-sm mb-3">Our Story</p>
            <h2 className="section-heading text-left">Rooted in Thoothukudi, Grown with Purpose</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              RR Nursery and Landscaping was founded by Arbutharobert and Raghul, who bring together 12 years of landscaping industry experience and around 700 completed projects from GreenSky Landscape, Chennai. They started RR Nursery to bring that same design and execution expertise to Thoothukudi.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Today, RR Nursery spans 2 acres and employs 12 passionate horticulture professionals. We are proud to serve Thoothukudi, Tirunelveli, Nagercoil, Kanyakumari, Virudhunagar, and all of South Tamil Nadu with premium plants and professional landscape design.
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
                    {i < milestones.length - 1 && <div className="w-px flex-1 bg-forest-200 my-1" />}
                  </div>
                  <div className="pb-4">
                    <span className="text-xs font-semibold text-forest-600 uppercase tracking-wide">{m.year}</span>
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
            <p className="section-subheading">Our values are not just words — they guide every project we take on across South Tamil Nadu.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-earth-100 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-earth-50 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-earth-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="section-heading">Meet the Founders</h2>
          <p className="section-subheading">The people behind every beautiful garden we create in South Tamil Nadu.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {founders.map((f) => (
            <div key={f.name} className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 hover:border-forest-300 hover:shadow-lg transition-all duration-300 flex flex-col">
              <p className="text-forest-600 font-medium uppercase tracking-wide text-xs mb-4">{f.label}</p>
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-16 h-16 rounded-full ${f.color} text-white flex items-center justify-center text-2xl font-display font-bold shrink-0`}>
                  {f.initials}
                </div>
                <div>
                  <h3 className="font-display font-bold text-gray-900 text-2xl">{f.name}</h3>
                  <p className="text-earth-600 text-sm font-semibold">{f.qualification}</p>
                </div>
              </div>
              <ul className="space-y-1 mb-5">
                {f.roles.map((r) => (
                  <li key={r} className="text-gray-800 text-sm font-medium flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-500 mt-1.5 shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
              {f.bio.map((p) => (
                <p key={p} className="text-gray-600 text-sm leading-relaxed mb-3">{p}</p>
              ))}
              {f.skills && (
                <div className="flex flex-wrap gap-2 mt-1 mb-3">
                  {f.skills.map((s) => (
                    <span key={s} className="text-xs bg-forest-50 text-forest-700 border border-forest-100 px-3 py-1 rounded-full">{s}</span>
                  ))}
                </div>
              )}
              <div className="grid grid-cols-3 gap-3 mt-auto pt-5 border-t border-gray-100">
                {f.highlights.map((h) => (
                  <div key={h.label} className="text-center">
                    <div className="text-2xl font-display font-bold text-forest-700">{h.value}</div>
                    <div className="text-gray-500 text-xs leading-snug">{h.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-forest-800 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <s.icon className="w-6 h-6 mx-auto mb-2 text-forest-400" />
                <div className="text-4xl font-display font-bold text-forest-300 mb-1">{s.value}</div>
                <div className="text-forest-100 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Let&apos;s Grow Together</h2>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
          Whether you need a single houseplant or a full landscape overhaul in Thoothukudi or anywhere in South Tamil Nadu — we would love to be part of your garden story.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/services" className="btn-primary">Explore Services</Link>
          <Link href="/contact" className="btn-outline">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
