<script setup>
import { reactive, computed, onMounted, watch } from 'vue'
import { ambilProyek, saring } from './api.js'

import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

const state = reactive({
  profil: {
    nama: 'Daftar Anime, Donghua, dan Manhwa'
  },
  daftarProyek: [],
  kategoriAktif: 'semua',
  favorit: [],
  memuat: true,
  galat: ''
})

const daftarTersaring = computed(() =>
  saring(state.daftarProyek, state.kategoriAktif)
)

function ubahKategori(kategori) {
  state.kategoriAktif = kategori
}

function ubahFavorit(id) {
  if (state.favorit.includes(id)) {
    state.favorit = state.favorit.filter(item => item !== id)
  } else {
    state.favorit.push(id)
  }
}

function aturUlang() {
  state.kategoriAktif = 'semua'
  state.favorit = []
}

function tanganiKirim(data) {
  console.log('Data form:', data)
}

onMounted(async () => {
  try {
    const tersimpan = JSON.parse(localStorage.getItem('pabw-p11'))

    if (tersimpan?.versi === 2) {
      state.kategoriAktif = tersimpan.kategoriAktif ?? 'semua'
      state.favorit = tersimpan.favorit ?? []
    }
  } catch {
    localStorage.removeItem('pabw-p11')
  }

  try {
    const data = await ambilProyek()

    if (!Array.isArray(data)) {
      throw new Error('Format data harus berupa array.')
    }

    state.daftarProyek = data
  } catch (error) {
    state.galat =
      'Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.'
    console.error('Gagal memuat proyek:', error.message)
  } finally {
    state.memuat = false
  }
})

watch(
  () => ({
    kategoriAktif: state.kategoriAktif,
    favorit: [...state.favorit]
  }),
  (nilai) => {
    localStorage.setItem('pabw-p11', JSON.stringify({
      versi: 2,
      kategoriAktif: nilai.kategoriAktif,
      favorit: nilai.favorit
    }))
  },
  { deep: true }
)
</script>

<template>
  <div class="page">
    <KepalaProfil :profil="state.profil" />

    <main class="isi">
      <aside class="sisi">
        <div class="kartu">
          <h2>Koleksi Saya</h2>
        </div>
      </aside>

      <div class="utama">
        <section id="Proyek">
          <h2>Daftar Proyek</h2>

          <TombolFilter
            :kategori-aktif="state.kategoriAktif"
            @ubah-kategori="ubahKategori"
            @atur-ulang="aturUlang"
          />

          <DaftarProyek
            :daftar="daftarTersaring"
            :favorit="state.favorit"
            :memuat="state.memuat"
            :galat="state.galat"
            @ubah-favorit="ubahFavorit"
          />
        </section>

        <section id="Anime">
          <h2>Anime</h2>
          <p>Koleksi anime kamu.</p>
        </section>

        <section id="Donghua">
          <h2>Donghua</h2>
          <p>Koleksi donghua kamu.</p>
        </section>

        <section id="Manhwa">
          <h2>Manhwa</h2>
          <p>Koleksi manhwa kamu.</p>
        </section>

        <section id="TambahKoleksi">
          <h2>Kontak</h2>
          <FormKontak @kirim="tanganiKirim" />
        </section>
      </div>
    </main>

    <footer>
      Orlando Ryan Sadewa · 25523129 · 2026
    </footer>
  </div>
</template>