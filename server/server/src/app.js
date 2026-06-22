require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const mahasiswaRoutes = require('./routes/mahasiswa');
const dosenRoutes = require('./routes/dosen');
const adminRoutes = require('./routes/admin');
const beritaRoutes = require('./routes/berita');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/mahasiswa', mahasiswaRoutes);
app.use('/api/dosen', dosenRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/berita', beritaRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
