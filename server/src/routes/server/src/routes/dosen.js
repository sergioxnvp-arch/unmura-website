const router = require('express').Router();
const { getKelasAjar, inputNilai } = require('../controllers/dosenController');
const verifyToken = require('../middleware/authJwt');
const isRole = require('../middleware/roleCheck');

router.get('/kelas', verifyToken, isRole('dosen'), getKelasAjar);
router.post('/nilai', verifyToken, isRole('dosen'), inputNilai);

module.exports = router;
