import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact RR Nursery Thoothukudi | Get a Free Quote — Nursery & Landscaping Tamil Nadu",
  description:
    "Contact RR Nursery and Landscaping in Thoothukudi, Tamil Nadu for a free consultation, landscape design quote, or plant enquiry. Call +91 81240 50535. Serving South Tamil Nadu.",
  keywords: [
    "contact RR Nursery Thoothukudi",
    "nursery and landscaping quote Tamil Nadu",
    "landscape design consultation Thoothukudi",
    "plant nursery contact South Tamil Nadu",
  ],
  alternates: { canonical: "https://www.rrnursery.in/contact" },
};

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["12/582-6, Madhanager, Davis Puram", "Thoothukudi, Tamil Nadu 628002"],
    link: "https://share.google/RtqNLLT7ObGJfD5z8",
    linkLabel: "Get Directions",
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 81240 50535"],
    link: "tel:+918124050535",
    linkLabel: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@rrnursery.in"],
    link: "mailto:info@rrnursery.in",
    linkLabel: "Send Email",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    lines: ["Mon–Fri: 8 AM – 6 PM", "Saturday: 9 AM – 4 PM", "Sunday: Closed"],
    link: null,
    linkLabel: null,
  },
];

const socialLinks = [
  { label: "Facebook",  href: "#" },
  { label: "Instagram", href: "#" },
];

const faqs = [
  { q: "Do you offer free consultations?",                a: "Yes! We offer a complimentary on-site or virtual consultation for all new customers in Thoothukudi and across South Tamil Nadu. Our experts will assess your space and recommend the best service package." },
  { q: "How long does a landscaping project take?",       a: "It depends on the scope. A basic garden refresh can take 1–2 days, while a full landscape overhaul may take 1–3 weeks. We provide a detailed timeline with every project quote." },
  { q: "Do you deliver plants across Tamil Nadu?",        a: "Yes, we deliver across South Tamil Nadu — Thoothukudi, Tirunelveli, Nagercoil, Kanyakumari, Virudhunagar, and Kovilpatti. Contact us to confirm delivery rates for your area." },
  { q: "What is your plant guarantee?",                   a: "We offer a 30-day guarantee on all plants purchased in-store or delivered. If a plant does not survive, we will replace it at no additional charge." },
  { q: "Do you supply plants wholesale for landscaping?", a: "Absolutely. We are a plant nursery wholesale supplier catering to landscaping companies and contractors across South Tamil Nadu. Contact us for bulk pricing on ornamental plants and landscaping plants." },
  { q: "Do you work on commercial properties?",          a: "Yes. We serve offices, hotels, apartments, and retail spaces across South Tamil Nadu. Contact us to discuss your commercial landscaping needs." },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-800 to-forest-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-forest-300 font-medium uppercase tracking-wide text-sm mb-3">Thoothukudi, Tamil Nadu</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-5">Contact RR Nursery</h1>
          <p className="text-forest-100 text-lg max-w-2xl mx-auto">
            Have a question, need a quote, or just want to talk plants? We would love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="tel:+918124050535" className="btn-primary bg-white text-forest-800 hover:bg-forest-50">
              <Phone className="w-4 h-4 inline mr-2" />
              Call +91 81240 50535
            </a>
            <a href="https://share.google/RtqNLLT7ObGJfD5z8" target="_blank" rel="noopener noreferrer" className="btn-outline border-white text-white hover:bg-white hover:text-forest-800">
              <MapPin className="w-4 h-4 inline mr-2" />
              Find Us on Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactDetails.map((cd) => (
            <div key={cd.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-forest-200 hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-forest-50 flex items-center justify-center mb-4">
                <cd.icon className="w-5 h-5 text-forest-700" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{cd.title}</h3>
              {cd.lines.map((line) => (
                <p key={line} className="text-gray-600 text-sm">{line}</p>
              ))}
              {cd.link && (
                <a href={cd.link} target={cd.link.startsWith("http") ? "_blank" : undefined} rel={cd.link.startsWith("http") ? "noopener noreferrer" : undefined} className="inline-flex items-center gap-1 text-forest-600 hover:text-forest-800 text-xs font-medium mt-3 transition-colors">
                  {cd.linkLabel} <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">Fill in the form and we will get back to you within one business day.</p>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="firstName">First Name *</label>
                  <input id="firstName" type="text" required placeholder="Your name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-100 outline-none transition text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="lastName">Last Name</label>
                  <input id="lastName" type="text" placeholder="Your last name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-100 outline-none transition text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="phone">Phone Number *</label>
                <input id="phone" type="tel" required placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-100 outline-none transition text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">Email Address</label>
                <input id="email" type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-100 outline-none transition text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="city">Your City</label>
                <input id="city" type="text" placeholder="e.g. Thoothukudi, Tirunelveli, Nagercoil..." className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-100 outline-none transition text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="service">Service Interested In</label>
                <select id="service" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-100 outline-none transition text-sm text-gray-700 bg-white">
                  <option value="">Select a service...</option>
                  <option>Landscape Design &amp; Architecture</option>
                  <option>Nursery Plant Purchase</option>
                  <option>Wholesale Plant Supply</option>
                  <option>Ornamental Plants</option>
                  <option>Pots &amp; Accessories</option>
                  <option>Hardscape</option>
                  <option>Garden Maintenance</option>
                  <option>Irrigation System</option>
                  <option>Other / General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="message">Message *</label>
                <textarea id="message" rows={5} required placeholder="Tell us about your project, garden size, timeline, or any questions you have..." className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-100 outline-none transition text-sm resize-none" />
              </div>
              <button type="submit" className="w-full btn-primary text-base py-4">
                Send Message
              </button>
              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Your information will never be shared.
              </p>
            </form>
          </div>

          {/* Map + social */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">Find Us in Thoothukudi</h2>
              <p className="text-gray-600 mb-4">
                Located at Davis Puram, Thoothukudi — visit our nursery farm to browse 500+ varieties of plants, pots, and accessories in person.
              </p>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-forest-50 h-72 flex flex-col items-center justify-center text-center p-8">
              <MapPin className="w-12 h-12 text-forest-400 mb-3" />
              <p className="font-semibold text-gray-800 mb-1">RR Nursery and Landscaping</p>
              <p className="text-sm text-gray-600">12/582-6, Madhanager, Davis Puram</p>
              <p className="text-sm text-gray-600 mb-3">Thoothukudi, Tamil Nadu 628002</p>
              <a
                href="https://share.google/RtqNLLT7ObGJfD5z8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-5 py-2"
              >
                Open in Google Maps
              </a>
            </div>

            {/* NAP block for SEO */}
            <div className="bg-forest-800 text-white rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
              <ul className="space-y-3 text-sm text-forest-200">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-forest-400" />
                  <address className="not-italic">12/582-6, Madhanager, Davis Puram, Thoothukudi, Tamil Nadu 628002</address>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 shrink-0 text-forest-400" />
                  <a href="tel:+918124050535" className="hover:text-white transition-colors">+91 81240 50535</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 shrink-0 text-forest-400" />
                  <a href="mailto:info@rrnursery.in" className="hover:text-white transition-colors">info@rrnursery.in</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 shrink-0 text-forest-400" />
                  <span>Mon–Sat: 8 AM – 6 PM &nbsp;|&nbsp; Sun: Closed</span>
                </li>
              </ul>
              <div className="flex gap-3 mt-5">
                {socialLinks.map(({ label, href }) => (
                  <a key={label} href={href} aria-label={label} className="text-xs bg-forest-700 hover:bg-forest-600 transition-colors px-3 py-2 rounded-lg font-medium">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-earth-50 border-t border-earth-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="section-subheading">Quick answers to questions we hear most often from customers across South Tamil Nadu.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-white border border-gray-100 rounded-xl overflow-hidden">
                <summary className="flex justify-between items-center px-6 py-4 cursor-pointer font-medium text-gray-900 list-none hover:bg-forest-50 transition-colors">
                  {faq.q}
                  <span className="text-forest-600 text-lg transition-transform group-open:rotate-45 shrink-0 ml-4">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
