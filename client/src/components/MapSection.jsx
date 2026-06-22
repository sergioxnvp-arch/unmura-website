const MapSection = () => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-unmura-blue mb-8">Lokasi Kampus</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-700 mb-2"><strong>Universitas Musirawas</strong></p>
          <p className="text-gray-600">Jalan Pendidikan No. 12,<br />Kota Musirawas, Sumatera Selatan</p>
          <p className="mt-4">📧 febunmura@gmail.com</p>
          <p>📞 +62 813-7850-930</p>
          <a
            href="https://www.google.com/maps?q=Universitas+Musirawas"
            target="_blank"
            className="mt-4 inline-block bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800"
          >
            Buka di Google Maps
          </a>
        </div>
        <div className="h-80 rounded overflow-hidden shadow">
          <iframe
            title="Lokasi UNMURA"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1234567890!2d104.6427!3d-3.2967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMTcnNDguMSJTIDEwNMKwMzgnMzMuNyJF!5e0!3m2!1sid!2sid!4v1600000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default MapSection;
