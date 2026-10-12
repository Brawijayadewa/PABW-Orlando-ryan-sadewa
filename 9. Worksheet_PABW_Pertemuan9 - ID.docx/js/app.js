const profil = {
    nama: "Orlando Ryan Sadewa",
    peran: "Mahasiswa Informatika",
    keahlian: ["HTML", "CSS", "JavaScript", "untuk sekarang sementara hanya html yang paling saya kuasai"],
    jumlahProyek: 3
};

const kalimatProfil = `Nama saya ${profil.nama}, dan saya adalah ${profil.peran}.`;

console.log(kalimatProfil);

console.log("Nama:", profil.nama);
console.log("Peran:", profil.peran);
console.log("Keahlian:", profil.keahlian);
console.log("Jumlah proyek:", profil.jumlahProyek);

const alamatProfil = profil.alamat?.kota ?? "Alamat belum tersedia";

console.log("Kota:", alamatProfil);

console.log(typeof profil.nama);
console.log(typeof profil.jumlahProyek);
console.log(typeof profil.keahlian);

function buatPerkenalan(nama, peran) {
    return `Halo, saya ${nama}. Saya adalah ${peran}.`;
}

function formatKeahlian(keahlian) {
    return keahlian.join(", ");
}

const perkenalan = buatPerkenalan(profil.nama, profil.peran);
const daftarKeahlian = formatKeahlian(profil.keahlian);

console.log(perkenalan);
console.log("Keahlian:", daftarKeahlian);

export const daftarProyek = [
    {
        judul: "Halaman Profil",
        tahun: 2026,
        selesai: true,
        kategori: "web"
    },
    {
        judul: "Katalog Anime",
        tahun: 2026,
        selesai: false,
        kategori: "web"
    },
    {
        judul: "Website Koleksi Manhwa",
        tahun: 2026,
        selesai: true,
        kategori: "lainnya"
    }
];

const judulProyek = daftarProyek.map((proyek) => proyek.judul);

console.log("Hasil map:");
console.table(judulProyek);

const proyekSelesai = daftarProyek.filter((proyek) => proyek.selesai);

console.log("Proyek yang sudah selesai:");
console.table(proyekSelesai);

const proyekKatalog = daftarProyek.find(
    (proyek) => proyek.judul === "Katalog Anime"
);

console.log("Hasil find:");
console.log(proyekKatalog);

console.log("Seluruh daftar proyek:");
console.table(daftarProyek);

const proyekTerurut = [...daftarProyek].sort(
    (a, b) => a.judul.localeCompare(b.judul)
);

console.log("Daftar proyek setelah disalin dan diurutkan:");
console.table(proyekTerurut);

console.log("Data asli tetap:");
console.table(daftarProyek);

const nilai1 = "10";
const nilai2 = "20";
const hasil = 10 + 20;

console.log(hasil);
console.log(profil.nama);