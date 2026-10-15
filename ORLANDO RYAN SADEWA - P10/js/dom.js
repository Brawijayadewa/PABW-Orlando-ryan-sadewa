const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#kosong");
const pesanMuat = document.querySelector("#muat");
const pesanGalat = document.querySelector("#galat");

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

export function render(daftar) {
    wadah.replaceChildren();
    pesanKosong.hidden = true;

    if (daftar.length === 0) {
        pesanKosong.textContent = "Belum ada proyek untuk kategori ini.";
        pesanKosong.hidden = false;
        return;
    }

    const fragmen = document.createDocumentFragment();

    daftar.forEach((proyek) => {
        fragmen.append(buatKartu(proyek));
    });

    wadah.append(fragmen);
}

export function tampilkanGalat(pesan) {
    pesanGalat.textContent = pesan;
    pesanGalat.hidden = false;
}

export function aturMemuat(aktif) {
    pesanMuat.hidden = !aktif;

    if (aktif) {
        pesanGalat.hidden = true;
        pesanKosong.hidden = true;
        wadah.replaceChildren();
    }
}