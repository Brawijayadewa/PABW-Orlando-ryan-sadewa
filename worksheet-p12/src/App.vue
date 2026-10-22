<template>
  <div class="page">
    <header>
      <div class="navbar">
        <div class="brand">
          <h1>Daftar Anime, Donghua, dan Manhwa</h1>
        </div>

        <nav aria-label="Navigasi utama">
          <ul>
            <li><a href="#Anime">Anime</a></li>
            <li><a href="#Donghua">Donghua</a></li>
            <li><a href="#Manhwa">Manhwa</a></li>
          </ul>
        </nav>

        <div class="tema-pengatur">
          <input type="checkbox" id="tema" class="pengalih-tema" />
          <label for="tema" class="tombol-tema"></label>
        </div>
      </div>
    </header>

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

          <div class="kontrol-proyek">
            <div id="filter" class="baris-filter">
              <button
                type="button"
                data-kategori="semua"
                class="aktif"
              >
                Semua
              </button>

              <button type="button" data-kategori="web">
                Web
              </button>

              <button type="button" data-kategori="lainnya">
                Lainnya
              </button>
            </div>

            <button type="button" id="atur-ulang">
              Atur Ulang
            </button>
          </div>

          <p id="muat" hidden>Memuat data...</p>
          <ul id="daftar" class="galeri"></ul>
          <p id="kosong" hidden>Belum ada data.</p>
          <p id="galat" hidden></p>
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

        <section id="TambahKoleksi">
          <h2>Tambah Koleksi</h2>

          <form id="form-koleksi" action="/simpan" method="post">
            <div class="field-form">
              <label for="list-donghua">Nama Donghua</label>
              <input
                type="text"
                id="list-donghua"
                name="donghua"
                placeholder="Masukkan nama donghua"
                aria-describedby="error-donghua"
              />
              <p id="error-donghua" class="pesan-error" hidden></p>
            </div>

            <div class="field-form">
              <label for="list-anime">Nama Anime</label>
              <input
                type="text"
                id="list-anime"
                name="anime"
                placeholder="Masukkan nama anime"
                aria-describedby="error-anime"
              />
              <p id="error-anime" class="pesan-error" hidden></p>
            </div>

            <div class="field-form">
              <label for="list-manhwa">Nama Manhwa</label>
              <input
                type="text"
                id="list-manhwa"
                name="manhwa"
                placeholder="Masukkan nama manhwa"
                aria-describedby="error-manhwa"
              />
              <p id="error-manhwa" class="pesan-error" hidden></p>
            </div>

            <button type="submit" id="btn-kirim" disabled>
              Kirim Koleksi
            </button>
          </form>
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