import { saring } from "./api.js";

const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#kosong");
const pesanMuat = document.querySelector("#muat");
const pesanGalat = document.querySelector("#galat");

export function buatKartu(proyek, favorit) {
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

    const tombol = document.createElement("button");
    tombol.className = "favorit";
    tombol.dataset.id = proyek.id;
    tombol.textContent = favorit.includes(proyek.id)
        ? "★ Favorit"
        : "☆ Favorit";
    tombol.type = "button";
    tombol.setAttribute(
        "aria-label",
        `Ubah favorit ${proyek.judul}`
    );

    li.append(judul, tahun, status, kategori, tombol);
    return li;
}

export function render(state) {
    wadah.replaceChildren();
    pesanKosong.hidden = true;

    const daftar = saring(
        state.daftarProyek,
        state.kategoriAktif
    );

    if (daftar.length === 0) {
        pesanKosong.textContent =
            "Belum ada proyek untuk kategori ini.";
        pesanKosong.hidden = false;
        return;
    }

    const fragmen = document.createDocumentFragment();

    daftar.forEach((proyek) => {
        fragmen.append(
            buatKartu(proyek, state.favorit)
        );
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