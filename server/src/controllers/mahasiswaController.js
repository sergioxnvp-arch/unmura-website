const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getKRS = async (req, res) => {
  try {
    const krs = await prisma.kRS.findMany({
      where: { mahasiswaId: req.user.id },
      include: { mataKuliah: true },
    });
    res.json(krs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getJadwal = async (req, res) => {
  try {
    const krsMkIds = await prisma.kRS.findMany({
      where: { mahasiswaId: req.user.id },
      select: { mataKuliahId: true },
    });
    const mkIds = krsMkIds.map(k => k.mataKuliahId);
    const jadwal = await prisma.jadwalKuliah.findMany({
      where: { mataKuliahId: { in: mkIds } },
      include: { mataKuliah: true },
    });
    res.json(jadwal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getNilai = async (req, res) => {
  try {
    const nilai = await prisma.nilai.findMany({
      where: { mahasiswaId: req.user.id },
      include: { mataKuliah: true },
    });
    res.json(nilai);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
