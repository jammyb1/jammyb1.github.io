import React from "react";

const photos = {
  events: [
    "/photos/A.jpg",
    "/photos/B.jpg",
    "/photos/C.jpg",
  ],
  sports: [
    "/photos/D.jpg",
    "/photos/E.jpg",
  ],
};

export default function App() {
  return (
    <div className="bg-zinc-900 min-h-screen text-white font-light tracking-wide px-6">
      <header className="py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold">James Betson Photography</h1>
        <p className="mt-3 text-zinc-400 text-lg">Explore my work through the lens</p>
        <div className="mt-4 space-x-4">
          <a
            href="https://www.linkedin.com/in/james-betson-328460205/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            LinkedIn
          </a>
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

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Events</h2>
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

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sports</h2>
        <div className="flex overflow-x-auto space-x-4 pl-2">
          {photos.sports.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Sport ${i + 1}`}
              className="w-[400px] h-auto object-cover rounded-md shadow-lg"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
