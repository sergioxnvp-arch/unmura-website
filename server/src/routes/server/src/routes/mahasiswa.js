const router = require('express').Router();
const { getKRS, getJadwal, getNilai } = require('../controllers/mahasiswaController');
const verifyToken = require('../middleware/authJwt');
const isRole = require('../middleware/roleCheck');

router.get('/krs', verifyToken, isRole('mahasiswa'), getKRS);
router.get('/jadwal', verifyToken, isRole('mahasiswa'), getJadwal);
router.get('/nilai', verifyToken, isRole('mahasiswa'), getNilai);

module.exports = router;
