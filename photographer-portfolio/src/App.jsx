import { useState } from "react";
import { motion } from "framer-motion";

const photos = [
  { src: "/images/event1.jpg", alt: "Wedding Event" },
  { src: "/images/event2.jpg", alt: "Concert Photography" },
  { src: "/images/event3.jpg", alt: "Birthday Celebration" },
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Event Photography Portfolio</h1>
      <p className="mb-6 text-gray-600">Capturing unforgettable moments.</p>
      <div className="grid grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }}>
            <div onClick={() => setSelectedImage(photo.src)} className="cursor-pointer overflow-hidden">
              <img src={photo.src} alt={photo.alt} className="rounded-lg w-full h-48 object-cover" />
            </div>
          </motion.div>
        ))}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="relative">
            <img src={selectedImage} alt="Enlarged" className="rounded-lg max-w-full max-h-full" />
            <button className="absolute top-2 right-2 bg-white p-2 rounded" onClick={() => setSelectedImage(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

