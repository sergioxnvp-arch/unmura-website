const router = require('express').Router();
const { getAllUsers, deleteUser } = require('../controllers/adminController');
const verifyToken = require('../middleware/authJwt');
const isRole = require('../middleware/roleCheck');

router.get('/users', verifyToken, isRole('admin'), getAllUsers);
router.delete('/users/:id', verifyToken, isRole('admin'), deleteUser);

module.exports = router;
