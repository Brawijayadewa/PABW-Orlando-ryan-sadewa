const ALAMAT = "https://raw.githubusercontent.com/Brawijayadewa/PABW-Orlando-ryan-sadewa/refs/heads/main/10.%20Worksheet_PABW_Pertemuan10%20-%20ID%20(revisi%20sinkron%20v2).docx/data/proyek.json";

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