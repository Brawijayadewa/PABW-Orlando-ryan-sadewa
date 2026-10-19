const ALAMAT = "https://raw.githubusercontent.com/Brawijayadewa/PABW-Orlando-ryan-sadewa/refs/heads/main/ORLANDO%20RYAN%20SADEWA%20-%20P11/data/proyek.json";

export async function ambilProyek() {
    try {
        const respons = await fetch(ALAMAT);

        if (!respons.ok) {
            throw new Error("Status " + respons.status);
        }

        const data = await respons.json();
        return data;
    } catch (galat) {
        console.error("Gagal memuat proyek:", galat.message);
        throw galat;
    }
}

export function saring(daftar, kategori) {
    if (kategori === "semua") {
        return daftar;
    }

    return daftar.filter(
        (item) => item.kategori === kategori
    );
}