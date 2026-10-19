import { render } from "./dom.js";
import { saring } from "./api.js";

export const state = {
    daftarProyek: [],
    kategoriAktif: "semua",
    favorit: []
};

export function isiProyek(daftar) {
    state.daftarProyek = daftar;
    render(state);
}

export function pilihKategori(kategori) {
    state.kategoriAktif = kategori;
    render(state);
}

export function tambahFavorit(id) {
    if (state.favorit.includes(id)) {
        state.favorit = state.favorit.filter(
            (item) => item !== id
        );
    } else {
        state.favorit = [...state.favorit, id];
    }

    render(state);
}

export function proyekTampil() {
    return saring(
        state.daftarProyek,
        state.kategoriAktif
    );
}