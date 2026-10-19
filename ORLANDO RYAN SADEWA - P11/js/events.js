import {
    pilihKategori,
    tambahFavorit
} from "./state.js";

export function pasangPendengar() {
    const barisFilter = document.querySelector("#filter");
    const wadah = document.querySelector("#daftar");

    if (barisFilter) {
        barisFilter.addEventListener("click", (event) => {
            const tombol = event.target.closest("button");

            if (!tombol || !barisFilter.contains(tombol)) {
                return;
            }

            const kategori = tombol.dataset.kategori;
            if (!kategori) return;

            barisFilter.querySelectorAll("button").forEach((item) => {
                item.classList.toggle("aktif", item === tombol);
            });

            pilihKategori(kategori);
        });
    }

    if (wadah) {
        wadah.addEventListener("click", (event) => {
            const tombol = event.target.closest(".favorit");

            if (!tombol || !wadah.contains(tombol)) {
                return;
            }

            tambahFavorit(Number(tombol.dataset.id));
        });
    }
}