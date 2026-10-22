import { ambilProyek } from "./api.js";
import {
    state,
    isiProyek,
    muat,
    pulihkan
} from "./state.js";
import {
    tampilkanGalat,
    aturMemuat
} from "./dom.js";
import { pasangPendengar } from "./events.js";

async function mulai() {
    pasangPendengar();
    pulihkan(muat());
    aturMemuat(true);

    try {
        const data = await ambilProyek();

        if (!Array.isArray(data)) {
            throw new Error("Format data harus berupa array.");
        }

        isiProyek(data);
    } catch (galat) {
        tampilkanGalat(
            "Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman."
        );
        console.error("Gagal memuat proyek:", galat.message);
    } finally {
        aturMemuat(false);
    }
}

mulai();