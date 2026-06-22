import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="text-xl font-bold text-unmura-blue">UNMURA</Link>
        <div className="space-x-4 flex items-center">
          <Link to="/" className="hover:text-unmura-blue">Home</Link>
          <Link to="/berita" className="hover:text-unmura-blue">Berita</Link>
          <Link to="/contact" className="hover:text-unmura-blue">Kontak</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
