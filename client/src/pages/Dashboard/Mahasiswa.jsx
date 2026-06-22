import { useEffect, useState } from 'react';
import api from '../../services/api';

const MahasiswaDashboard = () => {
  const [krs, setKrs] = useState([]);
  const [jadwal, setJadwal] = useState([]);
  const [nilai, setNilai] = useState([]);

  useEffect(() => {
    api.get('/mahasiswa/krs').then(res => setKrs(res.data));
    api.get('/mahasiswa/jadwal').then(res => setJadwal(res.data));
    api.get('/mahasiswa/nilai').then(res => setNilai(res.data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard Mahasiswa</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-2">KRS</h2>
          {krs.map(item => (
            <div key={item.id} className="text-sm">{item.mataKuliah.nama} ({item.mataKuliah.kode}) - {item.semester}</div>
          ))}
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-2">Jadwal Kuliah</h2>
          {jadwal.map(j => (
            <div key={j.id} className="text-sm">{j.mataKuliah.nama}, {j.hari} {j.jamMulai}-{j.jamSelesai}</div>
          ))}
        </div>
        <div className="bg-white p-4 rounded shadow col-span-2">
          <h2 className="font-semibold mb-2">Nilai & Transkrip</h2>
          <table className="w-full text-sm">
            <thead><tr><th>MK</th><th>Nilai</th><th>Grade</th></tr></thead>
            <tbody>
              {nilai.map(n => (
                <tr key={n.id}><td>{n.mataKuliah.nama}</td><td>{n.nilai}</td><td>{n.grade}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MahasiswaDashboard;
