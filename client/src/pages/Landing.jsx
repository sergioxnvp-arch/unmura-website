import { Link } from 'react-router-dom';
import MapSection from '../components/MapSection';

const Landing = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-unmura-blue to-blue-900 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Universitas Musirawas</h1>
        <p className="text-xl mb-8">Fakultas Ekonomi dan Bisnis – Mewujudkan Generasi Profesional</p>
        <Link to="/login" className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200">
          Portal Mahasiswa / Dosen
        </Link>
      </section>

      {/* Profil */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-unmura-blue mb-6">Profil UNMURA</h2>
        <p className="text-gray-700 leading-relaxed">
          Universitas Musirawas (UNMURA) adalah perguruan tinggi yang berkomitmen menghasilkan lulusan unggul di bidang ekonomi dan bisnis. Saat ini FEB UNMURA memiliki dua program studi: Akuntansi dan Bisnis Digital.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg">Mahasiswa Aktif</h3>
            <ul className="mt-2 text-gray-600">
              <li>Akuntansi: 102</li>
              <li>Bisnis Digital: 33</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg">Total Alumni</h3>
            <p className="text-2xl text-unmura-blue font-bold mt-2">571</p>
            <p className="text-sm text-gray-500">Sejak 2013</p>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="bg-unmura-light py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-unmura-blue mb-8">Visi & Misi</h2>
          <div className="space-y-6">
            <div><h3 className="font-semibold text-xl">Visi</h3><p>Menjadi fakultas ekonomi dan bisnis unggul di Sumatera Selatan pada tahun 2030.</p></div>
            <div><h3 className="font-semibold text-xl">Misi</h3>
              <ul className="list-disc ml-6">
                <li>Menyelenggarakan pendidikan berkualitas di bidang akuntansi dan bisnis digital.</li>
                <li>Melakukan penelitian yang berkontribusi pada pengembangan ilmu pengetahuan.</li>
                <li>Mengabdi kepada masyarakat melalui penerapan ilmu ekonomi dan bisnis.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Statistik */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-unmura-blue mb-8">Statistik Alumni FEB UNMURA</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded">
            <thead><tr className="bg-blue-900 text-white"><th className="py-2 px-4">Tahun</th><th className="py-2 px-4">Jumlah Alumni</th></tr></thead>
            <tbody className="text-center">
              {[
                ['2013',18],['2014',88],['2015',88],['2016',31],['2017',31],
                ['2018',53],['2019',60],['2020',35],['2021',37],['2022',53],
                ['2023',33],['2024',20],['2025 Ganjil',3],['2025 Genap',19],
                ['2026 Ganjil',2]
              ].map(([tahun, jumlah]) => (
                <tr key={tahun} className="border-b"><td className="py-2">{tahun}</td><td className="py-2">{jumlah} orang</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <MapSection />

      <section className="bg-unmura-blue text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Siap Bergabung?</h2>
        <p className="mb-6">Hubungi kami untuk informasi pendaftaran.</p>
        <Link to="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold">Hubungi Kami</Link>
      </section>
    </div>
  );
};

export default Landing;
