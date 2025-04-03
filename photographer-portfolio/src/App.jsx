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
      { src: "/photos/D.JPG", alt: "Football Match" },
      { src: "/photos/E.JPG", alt: "Basketball Action" },
    ],
  },
  {
    title: "Concerts",
    photos: [
      { src: "/photos/F.JPG", alt: "Live Concert" },
      { src: "/photos/F.JPG", alt: "Music Stage" },
    ],
  },
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-10 max-w-7xl mx-auto font-sans">
      <h1 className="text-5xl font-extrabold mb-8 text-center tracking-wide text-white">James Betson Photography</h1>
      <p className="mb-12 text-gray-400 text-center text-lg">Explore my work</p>
      
      {categories.map((category, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-white">{category.title}</h2>
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide p-2">
            {category.photos.map((photo, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.05 }}>
                <div onClick={() => setSelectedImage(photo.src)} className="cursor-pointer overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={photo.src} 
                    alt={photo.alt} 
                    style={{ width: "50%", height: "60%" }} 
                    className="rounded-md" 
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
            <img src={selectedImage} alt="Enlarged" className="rounded-lg max-w-full max-h-full" />
            <button className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg" onClick={() => setSelectedImage(null)}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
}
