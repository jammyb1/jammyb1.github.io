import React from "react";

const photos = {
  events: [
    "/photos/A.JPG",
    "/photos/B.JPG",
    "/photos/C.JPG",
    "/photos/F.JPG",
  ],
  icehockey: [
    "/photos/D.JPG",
    "/photos/E.JPG",
  ],
  football: [
    "/photos/D.JPG",
    "/photos/E.JPG",
  ],
};

export default function App() {
  return (
    <div className="bg-zinc-900 min-h-screen text-white font-light tracking-wide">
      <div className="max-w-7xl mx-auto px-4 py-12">
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
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">Events</h2>
          <p className="text-zinc-400 mb-8 text-center">Capturing the moments that matter, from balls to birthdays.</p>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {photos.events.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Event ${i + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </section>

        {/* Ice Hockey */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">Ice Hockey</h2>
          <p className="text-zinc-400 mb-8 text-center">Fast-paced action shots of the University of Southampton's own ice hockey team, the Spitfires</p>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {photos.icehockey.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Ice Hockey ${i + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </section>

        {/* Football */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">Football</h2>
          <p className="text-zinc-400 mb-8 text-center">ECS football team</p>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {photos.football.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Football ${i + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
