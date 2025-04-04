import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Events",
    photos: [
      { src: "/photos/henry21.JPG", alt: "Henry's 21st" },
      { src: "/photos/wedding.JPG", alt: "Wedding" },
      { src: "/photos/birthday.JPG", alt: "Birthday Celebration" },
    ],
  },
  {
    title: "Sports",
    photos: [
      { src: "/photos/football.JPG", alt: "Football Match" },
      { src: "/photos/basket.JPG", alt: "Basketball Action" },
    ],
  },
  {
    title: "Concerts",
    photos: [
      { src: "/photos/concert1.JPG", alt: "Live Concert" },
      { src: "/photos/concert2.JPG", alt: "Music Stage" },
    ],
  },
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-10 max-w-7xl mx-auto font-sans">
      <h1 className="text-5xl font-extrabold mb-8 text-center tracking-wide text-white">
        James Betson Photography
      </h1>
      <p className="mb-12 text-gray-400 text-center text-lg">Explore my work</p>

      {categories.map((category, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-white">{category.title}</h2>
          <div className="grid grid-cols-auto gap-0 overflow-x-auto">
            {category.photos.map((photo, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.02 }}>
                <div
                  onClick={() => setSelectedImage(photo.src)}
                  className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            <img src={selectedImage} alt="Enlarged" style={{ width: "50%", height: "auto" }} className="rounded-lg" />
            <button className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg" onClick={() => setSelectedImage(null)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
