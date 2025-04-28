import { useParams, Link } from 'react-router-dom';

const imagesPerFolder = {
  events: ['A.JPG', 'B.JPG'],
  landscapes: ['C.JPG', 'D.JPG'],
  sports: ['E.JPG', 'F.JPG'],
};

function Gallery() {
  const { folder } = useParams();
  const images = imagesPerFolder[folder] || [];

  return (
    <div className="p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {images.map(image => (
        <Link key={image} to={`/${folder}/${image}`}>
          <img
            src={`/${folder}/${image}`}
            alt={image}
            className="w-full h-40 object-cover rounded-lg shadow hover:shadow-xl transition"
          />
        </Link>
      ))}
    </div>
  );
}

export default Gallery;
