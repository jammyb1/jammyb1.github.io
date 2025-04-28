import { Link } from 'react-router-dom';

const folders = {
  events: "/photos/A.JPG",
  icehockey: "/photos/D.JPG",
  football: "/photos/E.JPG",
  landscapes: "/photos/C.JPG",
};

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="grid grid-cols-2 gap-12">
        {Object.entries(folders).map(([name, cover], i) => (
          <Link key={i} to={`/${name}`} className="flex flex-col items-center">
            <div className="w-40 h-40 overflow-hidden rounded-lg shadow-lg">
              <img
                src={cover}
                alt={name}
                style={{ width: "20%", height: "20%", objectFit: "cover" }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-3 text-center text-2xl font-bold capitalize text-zinc-700">
              {name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
