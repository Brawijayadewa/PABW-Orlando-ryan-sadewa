const ALAMAT = "./data/proyek.json";

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