import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ nama: '', email: '', pesan: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Pesan terkirim (simulasi)');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-unmura-blue mb-8">Hubungi Kami</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p><strong>Alamat:</strong><br />Jalan Pendidikan No. 12, Kota Musirawas</p>
          <p className="mt-2"><strong>Email:</strong> febunmura@gmail.com</p>
          <p><strong>Telpon:</strong> +62 813-7850-930</p>
          <div className="mt-4 h-48 rounded overflow-hidden">
            <iframe
              title="Lokasi UNMURA"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1234567890!2d104.6427!3d-3.2967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMTcnNDguMSJTIDEwNMKwMzgnMzMuNyJF!5e0!3m2!1sid!2sid!4v1600000000000"
              width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy"
            />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Nama" value={form.nama} onChange={e => setForm({...form, nama: e.target.value})}
                 className="w-full p-2 border rounded" required />
          <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                 className="w-full p-2 border rounded" required />
          <textarea placeholder="Pesan" rows={5} value={form.pesan} onChange={e => setForm({...form, pesan: e.target.value})}
                    className="w-full p-2 border rounded" required />
          <button type="submit" className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800">Kirim</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
