import { useEffect, useState } from 'react';
import api from '../../services/api';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/admin/users').then(res => setUsers(res.data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard Admin</h1>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Manajemen User</h2>
        <table className="w-full text-sm">
          <thead><tr><th>Nama</th><th>Email</th><th>Role</th><th>Prodi</th></tr></thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id}><td>{u.nama}</td><td>{u.email}</td><td>{u.role}</td><td>{u.prodi || '-'}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
