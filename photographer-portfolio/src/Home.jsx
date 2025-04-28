import { Link } from 'react-router-dom';

const folders = {
  events: "/photos/A.JPG",
  icehockey: "/photos/D.JPG",
  football: "/photos/E.JPG",
};

export default function Home() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Object.entries(folders).map(([name, cover], i) => (
            <Link key={i} to={`/${name}`} className="flex flex-col items-center">
              <img
                src={cover}
                alt={name}
                className="transform scale-50 hover:scale-55 transition-transform duration-300 object-cover"
              />
              <div className="mt-2 text-center text-xl font-semibold capitalize text-zinc-700">
                {name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
