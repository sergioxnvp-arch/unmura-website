import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <h1 className="text-center py-20 text-2xl">Selamat datang di UNMURA</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
