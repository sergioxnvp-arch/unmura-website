const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function main() {
  await prisma.nilai.deleteMany();
  await prisma.kRS.deleteMany();
  await prisma.jadwalKuliah.deleteMany();
  await prisma.mataKuliah.deleteMany();
  await prisma.berita.deleteMany();
  await prisma.user.deleteMany();

  const salt = bcrypt.genSaltSync(10);

  const admin = await prisma.user.create({
    data: {
      email: 'admin@unmura.ac.id',
      password: bcrypt.hashSync('admin123', salt),
      role: 'admin',
      nama: 'Admin UNMURA',
    },
  });

  const dosen1 = await prisma.user.create({
    data: {
      email: 'dosen@unmura.ac.id',
      password: bcrypt.hashSync('dosen123', salt),
      role: 'dosen',
      nama: 'Dr. Budi Santoso, M.Si.',
      prodi: 'Akuntansi',
    },
  });

  const mhs1 = await prisma.user.create({
    data: {
      email: 'mhs@unmura.ac.id',
      password: bcrypt.hashSync('mhs123', salt),
      role: 'mahasiswa',
      nama: 'Andi Pratama',
      prodi: 'Akuntansi',
    },
  });

  const mk1 = await prisma.mataKuliah.create({
    data: { kode: 'AKT101', nama: 'Pengantar Akuntansi', sks: 3, semester: 1, prodi: 'Akuntansi' },
  });
  const mk2 = await prisma.mataKuliah.create({
    data: { kode: 'BD201', nama: 'Digital Marketing', sks: 3, semester: 1, prodi: 'Bisnis Digital' },
  });

  await prisma.jadwalKuliah.create({
    data: {
      mataKuliahId: mk1.id,
      dosenId: dosen1.id,
      hari: 'Senin',
      jamMulai: '08:00',
      jamSelesai: '10:30',
      ruangan: 'R.201',
    },
  });

  await prisma.kRS.create({
    data: { mahasiswaId: mhs1.id, mataKuliahId: mk1.id, semester: '2025/2026 Ganjil' },
  });

  await prisma.nilai.create({
    data: { mahasiswaId: mhs1.id, mataKuliahId: mk1.id, nilai: 85.5, grade: 'A' },
  });

  await prisma.berita.create({
    data: {
      judul: 'Penerimaan Mahasiswa Baru UNMURA 2026',
      konten: 'Universitas Musirawas membuka pendaftaran mahasiswa baru tahun akademik 2026/2027. Segera daftar!',
      kategori: 'Akademik',
      gambar: null,
    },
  });

  console.log('Seed data UNMURA berhasil!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
