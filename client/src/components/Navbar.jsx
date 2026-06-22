import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="text-xl font-bold text-unmura-blue">UNMURA</Link>
        <div className="space-x-4 flex items-center">
          <Link to="/" className="hover:text-unmura-blue">Home</Link>
          <Link to="/berita" className="hover:text-unmura-blue">Berita</Link>
          <Link to="/contact" className="hover:text-unmura-blue">Kontak</Link>
          {isAuthenticated ? (
            <>
              <Link to={`/dashboard/${user.role}`} className="text-green-700 font-medium">Dashboard</Link>
              <button onClick={logout} className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
            </>
          ) : (
            <Link to="/login" className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
