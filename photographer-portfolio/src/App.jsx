import React from "react";

const photos = {
  events: [
    "/photos/A.jpg",
    "/photos/B.jpg",
    "/photos/C.jpg",
    "/photos/F.jpg",
  ],
  icehockey: [
    "/photos/D.jpg",
    "/photos/E.jpg",
  ],
  football: [
    "/photos/D.jpg",
    "/photos/E.jpg",
  ],
};

const Section = ({ title, subtitle, images, altPrefix }) => (
  <motion.section
    className="mt-20 mb-16 px-4 md:px-12"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">{title}</h2>
    <p className="text-zinc-400 mb-8 text-base md:text-lg">{subtitle}</p>
    <div className="flex overflow-x-auto space-x-6 scrollbar-hide snap-x snap-mandatory pb-4">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${altPrefix} ${i + 1}`}
          className="w-72 md:w-96 h-auto object-cover rounded-xl shadow-xl snap-start transition-transform duration-300 hover:scale-105"
        />
      ))}
    </div>
  </motion.section>
);

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#121212] to-[#1a1a1a] text-white font-light tracking-wide">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-12">
        {/* Header */}
        <motion.header
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-4">
            James Betson Photography
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl">
            Sports & Event Photographer
          </p>
          <div className="mt-6 space-x-3 text-base md:text-lg">
            <a
              href="https://www.linkedin.com/in/james-betson-328460205/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
            <span className="text-zinc-600">|</span>
            <a
              href="https://www.instagram.com/jpb_.photos/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:underline"
            >
              Instagram
            </a>
          </div>
        </motion.header>

        {/* Sections */}
        <Section
          title="Events"
          subtitle="Capturing the moments that matter — from balls to birthdays."
          images={photos.events}
          altPrefix="Event"
        />
        <Section
          title="Ice Hockey"
          subtitle="Fast-paced action shots of the University of Southampton Spitfires."
          images={photos.icehockey}
          altPrefix="Ice Hockey"
        />
        <Section
          title="Football"
          subtitle="ECS Football Team — passion on the pitch."
          images={photos.football}
          altPrefix="Football"
        />

        {/* Footer */}
        <motion.footer
          className="mt-24 pt-12 border-t border-zinc-700 text-center text-sm text-zinc-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          © {new Date().getFullYear()} James Betson. All rights reserved.
        </motion.footer>
      </div>
    </div>
  );
}