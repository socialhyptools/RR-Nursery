import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | RR Nursery",
  description: "Get in touch with RR Nursery for a free consultation, quote, or any questions about our plants and services.",
};

const contactDetails = [
  {
    icon: "📍",
    title: "Visit Us",
    lines: ["123 Garden Lane", "Green Valley, CA 90210"],
  },
  {
    icon: "📞",
    title: "Call Us",
    lines: ["(123) 456-7890", "Mon–Sat: 8 AM – 6 PM"],
  },
  {
    icon: "✉️",
    title: "Email Us",
    lines: ["info@rrnursery.com", "We reply within 24 hours"],
  },
  {
    icon: "🕐",
    title: "Opening Hours",
    lines: ["Mon–Fri: 8 AM – 6 PM", "Saturday: 9 AM – 4 PM", "Sunday: Closed"],
  },
];

const faqs = [
  {
    q: "Do you offer free consultations?",
    a: "Yes! We offer a complimentary on-site or virtual consultation for all new customers. Our experts will assess your space and recommend the best service package.",
  },
  {
    q: "How long does a landscaping project take?",
    a: "It depends on the scope. A basic garden refresh can take 1–2 days, while a full landscape overhaul may take 1–3 weeks. We provide a detailed timeline with every project quote.",
  },
  {
    q: "Do you deliver plants?",
    a: "Yes, we deliver across the region. Delivery fees vary by distance. Orders above $200 qualify for free local delivery.",
  },
  {
    q: "What is your plant guarantee?",
    a: "We offer a 30-day guarantee on all plants purchased in-store or delivered. If a plant doesn't survive, we'll replace it at no additional charge.",
  },
  {
    q: "Do you work on commercial properties?",
    a: "Absolutely. We serve restaurants, offices, apartment complexes, and retail spaces. Contact us to discuss your commercial landscaping needs.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-800 to-forest-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-forest-300 font-medium uppercase tracking-wide text-sm mb-3">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-5">Contact Us</h1>
          <p className="text-forest-100 text-lg max-w-2xl mx-auto">
            Have a question, need a quote, or just want to talk plants? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">Fill in the form and we&apos;ll get back to you within one business day.</p>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="firstName">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    placeholder="Jane"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-100 outline-none transition text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="lastName">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    placeholder="Smith"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-100 outline-none transition text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-100 outline-none transition text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-100 outline-none transition text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="service">
                  Service Interested In
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-100 outline-none transition text-sm text-gray-700 bg-white"
                >
                  <option value="">Select a service...</option>
                  <option>Landscape Design</option>
                  <option>Lawn Installation & Renovation</option>
                  <option>Tree & Shrub Trimming</option>
                  <option>Seasonal Planting</option>
                  <option>Irrigation Installation</option>
                  <option>Hardscaping</option>
                  <option>Indoor Plant Design</option>
                  <option>Other / General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="message">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Tell us about your project, garden size, timeline, or any questions you have..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-100 outline-none transition text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary text-base py-4"
              >
                Send Message →
              </button>
              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Your information will never be shared.
              </p>
            </form>
          </div>

          {/* Contact details + map */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">Get in Touch Directly</h2>
              <p className="text-gray-600 mb-6">Prefer to reach us another way? Here&apos;s how to find us.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactDetails.map((cd) => (
                  <div key={cd.title} className="bg-forest-50 rounded-xl p-5 border border-forest-100">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{cd.icon}</span>
                      <h3 className="font-semibold text-gray-900 text-sm">{cd.title}</h3>
                    </div>
                    {cd.lines.map((line) => (
                      <p key={line} className="text-gray-600 text-sm">{line}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-forest-50 h-64 flex flex-col items-center justify-center text-center p-8">
              <span className="text-5xl mb-3">🗺️</span>
              <p className="font-semibold text-gray-800 mb-1">123 Garden Lane, Green Valley, CA</p>
              <p className="text-sm text-gray-500">
                Embed your Google Maps iframe here once your real address is confirmed.
              </p>
            </div>

            {/* Social / quick CTA */}
            <div className="bg-forest-800 text-white rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2">Follow Our Garden Journey</h3>
              <p className="text-forest-300 text-sm mb-4">
                Stay inspired with plant tips, seasonal highlights, and behind-the-scenes garden magic.
              </p>
              <div className="flex gap-3">
                {["📘 Facebook", "📸 Instagram", "🐦 Twitter"].map((s) => (
                  <span
                    key={s}
                    className="text-xs bg-forest-700 hover:bg-forest-600 transition-colors px-3 py-2 rounded-lg cursor-pointer"
                  >
                    {s}
                  </span>
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
            <p className="section-subheading">Quick answers to questions we hear most often.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden"
              >
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
    </>
  );
}
