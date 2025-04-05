import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Events",
    photos: [
      { src: "/photos/A.JPG", alt: "Henry's 21st" },
      { src: "/photos/B.JPG", alt: "Wedding" },
      { src: "/photos/C.JPG", alt: "Birthday Celebration" },
    ],
  },
  {
    title: "Sports",
    photos: [
      { src: "/photos/C.JPG", alt: "Football Match" },
      { src: "/photos/D.JPG", alt: "Basketball Action" },
    ],
  },
  {
    title: "Concerts",
    photos: [
      { src: "/photos/E.JPG", alt: "Live Concert" },
      { src: "/photos/F.JPG", alt: "Music Stage" },
    ],
  },
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-10 max-w-7xl mx-auto font-sans bg-[#111] text-gray-200 min-h-screen">
      <h1 className="text-6xl font-extrabold mb-6 text-center tracking-tight text-white">
        James Betson Photography
      </h1>
      <p className="mb-14 text-gray-400 text-center text-xl">
        Explore my work through the lens
      </p>

      {categories.map((category, index) => (
        <div key={index} className="mb-16">
          <h2 className="text-4xl font-semibold mb-4 text-gray-100 pl-8">{category.title}</h2>
          <div className="overflow-x-auto whitespace-nowrap py-2 pl-8">
            {category.photos.map((photo, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="inline-block mr-6"
              >
                <div
                  onClick={() => setSelectedImage(photo.src)}
                  className="cursor-pointer overflow-hidden rounded-xl shadow-xl"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    style={{ width: "600px", height: "400px", objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Enlarged"
              style={{ width: "85vw", maxHeight: "85vh", objectFit: "contain" }}
              className="rounded-lg shadow-2xl"
            />
            <button
              className="absolute top-4 right-4 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
