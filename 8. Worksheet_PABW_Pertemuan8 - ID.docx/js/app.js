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