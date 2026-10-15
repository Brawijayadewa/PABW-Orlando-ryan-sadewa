import { ambilProyek } from "./api.js";
import {
    render,
    tampilkanGalat,
    aturMemuat
} from "./dom.js";

let semuaProyek = [];

function terapkanFilter(kategori) {
    const hasil = kategori === "semua"
        ? semuaProyek
        : semuaProyek.filter(
            (proyek) => proyek.kategori === kategori
        );

    render(hasil);
}

const barisFilter = document.querySelector("#filter");

if (barisFilter) {
    barisFilter.addEventListener("click", (event) => {
        const tombol = event.target.closest("button");

        if (!tombol || !barisFilter.contains(tombol)) {
            return;
        }

        const kategori = tombol.dataset.kategori;

        barisFilter.querySelectorAll("button").forEach((item) => {
            item.classList.toggle("aktif", item === tombol);
        });

        terapkanFilter(kategori);
    });
}

async function muat() {
    aturMemuat(true);

    try {
        const data = await ambilProyek();

        if (!Array.isArray(data)) {
            throw new Error("Format data harus berupa array.");
        }

        semuaProyek = data;
        terapkanFilter("semua");
    } catch (galat) {
        tampilkanGalat(
            "Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman."
        );
        console.error("Gagal memuat proyek:", galat.message);
    } finally {
        aturMemuat(false);
    }
}

muat();