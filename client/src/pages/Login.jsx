import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await login(email, password);
      if (user.role === 'admin') navigate('/dashboard/admin');
      else if (user.role === 'dosen') navigate('/dashboard/dosen');
      else navigate('/dashboard/mahasiswa');
    } catch (err) {
      setError('Login gagal, periksa email/password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold text-unmura-blue mb-6">Login UNMURA</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
               className="w-full mb-3 p-2 border rounded" required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
               className="w-full mb-4 p-2 border rounded" required />
        <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800">Masuk</button>
      </form>
    </div>
  );
};

export default Login;
