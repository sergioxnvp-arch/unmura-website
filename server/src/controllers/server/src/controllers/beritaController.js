const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllBerita = async (req, res) => {
  try {
    const berita = await prisma.berita.findMany({ orderBy: { createdAt: 'desc' } });
    res.json(berita);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createBerita = async (req, res) => {
  const { judul, konten, kategori, gambar } = req.body;
  try {
    const newBerita = await prisma.berita.create({ data: { judul, konten, kategori, gambar } });
    res.status(201).json(newBerita);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateBerita = async (req, res) => {
  const { id } = req.params;
  const { judul, konten, kategori, gambar } = req.body;
  try {
    const updated = await prisma.berita.update({
      where: { id },
      data: { judul, konten, kategori, gambar },
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteBerita = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.berita.delete({ where: { id } });
    res.json({ message: 'Berita deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
