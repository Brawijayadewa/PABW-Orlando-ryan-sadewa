import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const pesanKosong = document.querySelector("#kosong");
const formKoleksi = document.querySelector("#form-koleksi");

console.log("Daftar proyek:", wadah);
console.log("Baris filter:", barisFilter);
console.log("Pesan kosong:", pesanKosong);
console.log("Form koleksi:", formKoleksi);

function buatKartu(proyek) {
    const li = document.createElement("li");
    li.className = "kartu";

    const judul = document.createElement("h3");
    judul.textContent = proyek.judul;

    const tahun = document.createElement("p");
    tahun.textContent = `Tahun: ${proyek.tahun}`;

    const status = document.createElement("p");
    status.textContent = proyek.selesai
        ? "Status: Selesai"
        : "Status: Dalam pengerjaan";

    const kategori = document.createElement("p");
    kategori.textContent = `Kategori: ${proyek.kategori}`;

    li.append(judul, tahun, status, kategori);

    return li;
}

function render(daftar) {
    wadah.replaceChildren();

    if (daftar.length === 0) {
        pesanKosong.hidden = false;
        return;
    }

    pesanKosong.hidden = true;

    const kartuProyek = daftar.map((proyek) => buatKartu(proyek));
    const fragmen = document.createDocumentFragment();
    kartuProyek.forEach((kartu) => fragmen.append(kartu));
    wadah.append(fragmen);
}

render(daftarProyek);
