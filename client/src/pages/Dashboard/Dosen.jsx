import { useEffect, useState } from 'react';
import api from '../../services/api';

const DosenDashboard = () => {
  const [kelas, setKelas] = useState([]);

  useEffect(() => {
    api.get('/dosen/kelas').then(res => setKelas(res.data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard Dosen</h1>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Kelas Ajar</h2>
        {kelas.map(k => (
          <div key={k.id}>{k.mataKuliah.nama} - {k.hari} {k.jamMulai} (Ruangan {k.ruangan})</div>
        ))}
      </div>
    </div>
  );
};

export default DosenDashboard;
