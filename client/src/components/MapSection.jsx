import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({ iconUrl: icon, shadowUrl: iconShadow });
L.Marker.prototype.options.icon = DefaultIcon;

const MapSection = () => {
  const position = [-3.2967, 104.6427]; // Ganti dengan koordinat asli UNMURA

  return (
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
            <MapContainer center={position} zoom={15} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>UNMURA - Fakultas Ekonomi dan Bisnis</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
