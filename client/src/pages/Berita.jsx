import { useEffect, useState } from 'react';
import api from '../services/api';

const Berita = () => {
  const [berita, setBerita] = useState([]);
  useEffect(() => { api.get('/berita').then(res => setBerita(res.data)).catch(console.error); }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-unmura-blue mb-8">Berita & Pengumuman</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {berita.map(item => (
          <div key={item.id} className="bg-white rounded shadow overflow-hidden">
            {item.gambar && <img src={item.gambar} alt="" className="h-40 w-full object-cover" />}
            <div className="p-4">
              <span className="text-xs text-gray-500">{item.kategori}</span>
              <h3 className="font-bold mt-1">{item.judul}</h3>
              <p className="text-sm mt-2">{item.konten.substring(0,100)}...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Berita;
