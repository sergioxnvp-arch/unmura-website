import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Berita from './pages/Berita';
import Contact from './pages/Contact';
import MahasiswaDashboard from './pages/Dashboard/Mahasiswa';
import DosenDashboard from './pages/Dashboard/Dosen';
import AdminDashboard from './pages/Dashboard/Admin';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard/mahasiswa" element={<ProtectedRoute roles={['mahasiswa']}><MahasiswaDashboard /></ProtectedRoute>} />
          <Route path="/dashboard/dosen" element={<ProtectedRoute roles={['dosen']}><DosenDashboard /></ProtectedRoute>} />
          <Route path="/dashboard/admin" element={<ProtectedRoute roles={['admin']}><AdminDashboard /></ProtectedRoute>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
