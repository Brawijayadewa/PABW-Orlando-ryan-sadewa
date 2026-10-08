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