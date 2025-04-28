import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Gallery from './Gallery';
import ImageView from './ImageView';

function Header() {
  return (
    <header className="flex flex-col items-center justify-center p-8 bg-black text-white shadow-md">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4">James Betson Photography</h1>
      <div className="text-base text-zinc-400 flex gap-2">
        <a href="https://www.instagram.com/jpb_.photos/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Instagram
        </a>
        <span className="text-zinc-500"> | </span>
        <a href="https://www.linkedin.com/in/james-betson-328460205/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          LinkedIn
        </a>
      </div>
    </header>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-100 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:folder" element={<Gallery />} />
            <Route path="/:folder/:image" element={<ImageView />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
