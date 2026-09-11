import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery | RR Nursery and Landscaping Thoothukudi — Plants & Landscaping Photos",
  description:
    "Browse photos from RR Nursery and Landscaping in Thoothukudi — our nursery farm, ornamental plants, landscaping projects, and garden designs across South Tamil Nadu.",
  keywords: [
    "RR Nursery photos Thoothukudi",
    "nursery farm gallery Tamil Nadu",
    "landscaping projects South Tamil Nadu",
    "plant nursery Thoothukudi pictures",
  ],
  alternates: { canonical: "https://www.rrnursery.in/gallery" },
};

const galleryImages = [
  { src: "/gallery/nursery-shop-1.jpg", alt: "RR Nursery and Landscaping shop front, Thoothukudi", caption: "Our Nursery, Thoothukudi" },
  { src: "/gallery/gallery-2.jpg", alt: "Plants at RR Nursery Thoothukudi", caption: "Plants & Greenery" },
  { src: "/gallery/gallery-3.jpg", alt: "Landscaping work by RR Nursery", caption: "Landscaping Projects" },
  { src: "/gallery/gallery-4.jpg", alt: "Garden plants nursery Thoothukudi", caption: "Garden Plants" },
  { src: "/gallery/gallery-5.jpg", alt: "Ornamental plants RR Nursery", caption: "Ornamental Plants" },
  { src: "/gallery/gallery-6.jpg", alt: "Nursery farm Thoothukudi Tamil Nadu", caption: "Nursery Farm" },
  { src: "/gallery/gallery-7.jpg", alt: "Garden design South Tamil Nadu", caption: "Garden Design" },
  { src: "/gallery/gallery-8.jpg", alt: "Plant collection RR Nursery Thoothukudi", caption: "Plant Collection" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-800 to-forest-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-forest-300 font-medium uppercase tracking-wide text-sm mb-3">Thoothukudi, Tamil Nadu</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-5">Our Gallery</h1>
          <p className="text-forest-100 text-lg max-w-2xl mx-auto">
            A glimpse into RR Nursery and Landscaping — our farm, plants, and landscaping work across South Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl bg-forest-50 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-square">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-3 bg-white border-t border-gray-100">
                <p className="text-sm font-medium text-gray-700">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Visit CTA */}
        <div className="mt-16 bg-forest-50 border border-forest-100 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-3">
            Visit Our Nursery in Thoothukudi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            See our full range of 500+ plants, pots, and landscaping work in person. Located at Davis Puram, Thoothukudi — open Mon–Sat, 8 AM to 6 PM.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://share.google/RtqNLLT7ObGJfD5z8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
            <a href="tel:+918124050535" className="btn-outline inline-flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Call +91 81240 50535
            </a>
          </div>
        </div>
      </section>

      {/* SEO block */}
      <section className="bg-forest-900 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-display font-bold mb-4">Nursery &amp; Landscaping in Thoothukudi</h2>
          <p className="text-forest-300 leading-relaxed">
            RR Nursery and Landscaping is your one-stop destination for plants and professional landscaping in Thoothukudi, Tamil Nadu. We stock 500+ varieties of ornamental plants, indoor plants, fruit trees, and garden accessories. Our landscape architects design and execute beautiful gardens for homes, offices, hotels, and apartments across South Tamil Nadu — Thoothukudi, Tirunelveli, Nagercoil, Kanyakumari, and beyond.
          </p>
          <Link href="/contact" className="btn-primary mt-6 inline-block bg-white text-forest-800 hover:bg-forest-50">
            Request a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
