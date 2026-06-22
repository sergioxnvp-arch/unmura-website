const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getKelasAjar = async (req, res) => {
  try {
    const jadwal = await prisma.jadwalKuliah.findMany({
      where: { dosenId: req.user.id },
      include: { mataKuliah: true },
    });
    res.json(jadwal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.inputNilai = async (req, res) => {
  const { mahasiswaId, mataKuliahId, nilai, grade } = req.body;
  try {
    const newNilai = await prisma.nilai.create({
      data: { mahasiswaId, mataKuliahId, nilai, grade },
    });
    res.status(201).json(newNilai);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
