const router = require('express').Router();
const { getAllBerita, createBerita, updateBerita, deleteBerita } = require('../controllers/beritaController');
const verifyToken = require('../middleware/authJwt');
const isRole = require('../middleware/roleCheck');

router.get('/', getAllBerita);
router.post('/', verifyToken, isRole('admin'), createBerita);
router.put('/:id', verifyToken, isRole('admin'), updateBerita);
router.delete('/:id', verifyToken, isRole('admin'), deleteBerita);

module.exports = router;
