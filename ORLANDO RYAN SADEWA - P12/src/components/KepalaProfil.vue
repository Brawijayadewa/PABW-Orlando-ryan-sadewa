<script setup>
defineProps({
  profil: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <header>
    <div class="navbar">
      <div class="brand">
        <h1>{{ profil.nama }}</h1>
      </div>

      <nav aria-label="Navigasi utama">
        <ul>
          <li><a href="#Anime">Anime</a></li>
          <li><a href="#Donghua">Donghua</a></li>
          <li><a href="#Manhwa">Manhwa</a></li>
        </ul>
      </nav>

      <div class="tema-pengatur">
        <input
          id="tema"
          class="pengalih-tema"
          type="checkbox"
        />
        <label for="tema" class="tombol-tema"></label>
      </div>
    </div>
  </header>
</template>