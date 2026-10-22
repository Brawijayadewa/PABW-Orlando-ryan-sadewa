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
  console.log('Data koleksi:', data)
  alert('Data koleksi berhasil dibaca!')
}

onMounted(async () => {
  try {
    const tersimpan = JSON.parse(localStorage.getItem('pabw-p11'))

    if (tersimpan?.versi === 2) {
      if (['semua', 'web', 'lainnya'].includes(tersimpan.kategoriAktif)) {
        state.kategoriAktif = tersimpan.kategoriAktif
      }

      if (Array.isArray(tersimpan.favorit)) {
        state.favorit = tersimpan.favorit
      }
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
          <p>
            Selamat datang di koleksi anime,
            donghua, dan manhwa saya.
          </p>

          <nav aria-label="Menu koleksi">
            <ul>
              <li><a href="#Anime">Anime</a></li>
              <li><a href="#Donghua">Donghua</a></li>
              <li><a href="#Manhwa">Manhwa</a></li>
            </ul>
          </nav>
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
          <h2>Anime, Donghua, dan Manhwa</h2>

          <div class="galeri">
            <div class="kartu">
              <div class="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Anime</th>
                      <th scope="col">Donghua</th>
                      <th scope="col">Manhwa</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th scope="row">One Piece</th>
                      <td>Ni Tian Zhizun</td>
                      <td>Solo Leveling</td>
                    </tr>
                    <tr>
                      <th scope="row">Naruto Shipuden</th>
                      <td>Xian Ni</td>
                      <td>Dogulwang</td>
                    </tr>
                    <tr>
                      <th scope="row">Jujutsu Kaisen</th>
                      <td>Wanmei Shijie</td>
                      <td>Tower of Gods</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTseeq3hq7Z1BBo1a2oKNkzll3rG-E-d_3prSPVHPg1eA&s=10"
              alt="Gambar koleksi anime, donghua, dan manhwa"
              width="640"
              height="360"
              loading="lazy"
            />
            <figcaption>
              Koleksi anime, donghua, dan manhwa
            </figcaption>
          </figure>
        </section>

        <section id="Donghua">
          <h2>Donghua</h2>
          <p>Koleksi donghua saya.</p>
        </section>

        <section id="TambahKoleksi">
          <h2>Tambah Koleksi</h2>
          <FormKontak @kirim="tanganiKirim" />
        </section>

        <section id="Manhwa">
          <h2>Manhwa Favorit</h2>

          <div class="galeri">
            <article class="kartu">
              <h3>Solo Leveling</h3>
              <p>
                Salah satu manhwa favorit saya
                dengan tema action dan fantasy.
              </p>
              <div class="kartu__kaki">
                <span>Action · Fantasy</span>
              </div>
            </article>

            <article class="kartu">
              <h3>Tower of God</h3>
              <p>
                Manhwa dengan cerita petualangan
                dan dunia yang luas.
              </p>
              <div class="kartu__kaki">
                <span>Adventure · Fantasy</span>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>

    <footer>
      <p>Orlando Ryan Sadewa · 25523129 · 2026</p>
    </footer>
  </div>
</template>