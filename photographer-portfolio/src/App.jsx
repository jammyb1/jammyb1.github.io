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

export default function App() {
  return (
    <div className="bg-zinc-900 min-h-screen text-white font-light tracking-wide">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold">James Betson Photography</h1>
          <p className="mt-3 text-zinc-400 text-lg">Sports and event photography</p>
          <div className="mt-4 space-x-2 text-base text-zinc-300">
            <a
              href="https://www.linkedin.com/in/james-betson-328460205/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
            <span className="text-zinc-500"> | </span>
            <a
              href="https://www.instagram.com/jpb_.photos/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:underline"
            >
              Instagram
            </a>
          </div>
        </header>

        {/* Events */}
        <section className="mt-16 mb-12">
          <h2 className="text-2xl font-semibold mb-1">Events</h2>
          <p className="text-zinc-400 mb-4">Capturing the moments that matter, from galas to gatherings.</p>
          <div className="flex overflow-x-auto space-x-4 pl-2">
            {photos.events.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Event ${i + 1}`}
                className="w-[400px] h-auto object-cover rounded-md shadow-lg"
              />
            ))}
          </div>
        </section>

        {/* Sports */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-1">Ice Hockey</h2>
          <p className="text-zinc-400 mb-4">Fast-paced action shots from courts, fields and beyond.</p>
          <div className="flex overflow-x-auto space-x-4 pl-2">
            {photos.icehockey.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Sport ${i + 1}`}
                className="w-[400px] h-auto object-cover rounded-md shadow-lg"
              />
            ))}
          </div>
        </section>

        {/* Portraits */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-1">Football</h2>
          <p className="text-zinc-400 mb-4">Personal, powerful portraits — bringing personality into focus.</p>
          <div className="flex overflow-x-auto space-x-4 pl-2">
            {photos.football.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Portrait ${i + 1}`}
                className="w-[400px] h-auto object-cover rounded-md shadow-lg"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}