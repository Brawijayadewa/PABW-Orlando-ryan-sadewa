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

    const fragmen = document.createDocumentFragment();

    daftar.forEach((proyek) => {
        fragmen.append(buatKartu(proyek));
    });

    wadah.append(fragmen);
}

function tandaiTombolAktif(tombolAktif) {
    const semuaTombol = barisFilter.querySelectorAll("button");

    semuaTombol.forEach((tombol) => {
        tombol.classList.toggle("aktif", tombol === tombolAktif);
    });
}

barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");

    if (!tombol || !barisFilter.contains(tombol)) {
        return;
    }

    const kategori = tombol.dataset.kategori;

    const hasilFilter = kategori === "semua"
        ? daftarProyek
        : daftarProyek.filter(
            (proyek) => proyek.kategori === kategori
        );

    render(hasilFilter);
    tandaiTombolAktif(tombol);
});

render(daftarProyek);

tandaiTombolAktif(
    barisFilter.querySelector('[data-kategori="semua"]')
);

const kolomForm = [
    {
        input: document.querySelector("#list-donghua"),
        pesan: document.querySelector("#error-donghua"),
        nama: "Donghua"
    },
    {
        input: document.querySelector("#list-anime"),
        pesan: document.querySelector("#error-anime"),
        nama: "Anime"
    },
    {
        input: document.querySelector("#list-manhwa"),
        pesan: document.querySelector("#error-manhwa"),
        nama: "Manhwa"
    }
];

const tombolKirim = document.querySelector("#btn-kirim");

console.log("Tombol kirim:", tombolKirim);

kolomForm.forEach((kolom) => {
    console.log("Kolom:", kolom.input);
    console.log("Pesan galat:", kolom.pesan);
});

function periksaKolom(kolom) {
    const nilai = kolom.input.value.trim();
    const sah = nilai.length > 0;

    kolom.input.setAttribute("aria-invalid", String(!sah));

    if (!sah) {
        kolom.pesan.textContent =
            `Nama ${kolom.nama} wajib diisi. ` +
            `Silakan masukkan nama ${kolom.nama.toLowerCase()}.`;

        kolom.pesan.hidden = false;
    } else {
        kolom.pesan.textContent = "";
        kolom.pesan.hidden = true;
    }

    return sah;
}

function periksaForm() {
    const hasil = kolomForm.map((kolom) => periksaKolom(kolom));
    const semuaSah = hasil.every(Boolean);

    tombolKirim.disabled = !semuaSah;

    return semuaSah;
}

kolomForm.forEach((kolom) => {
    kolom.input.addEventListener("input", () => {
        periksaKolom(kolom);

        const semuaSah = kolomForm.every(
            (item) => item.input.value.trim().length > 0
        );

        tombolKirim.disabled = !semuaSah;
    });

    kolom.input.addEventListener("blur", () => {
        periksaKolom(kolom);

        const semuaSah = kolomForm.every(
            (item) => item.input.value.trim().length > 0
        );

        tombolKirim.disabled = !semuaSah;
    });
});

formKoleksi.addEventListener("submit", (event) => {
    event.preventDefault();

    const semuaSah = periksaForm();

    if (!semuaSah) {
        const kolomBermasalah = kolomForm.find(
            (kolom) => kolom.input.value.trim().length === 0
        );

        if (kolomBermasalah) {
            kolomBermasalah.input.focus();
        }

        return;
    }

    alert("Validasi berhasil! Semua kolom sudah terisi.");

});