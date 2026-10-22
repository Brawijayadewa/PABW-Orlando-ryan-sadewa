<script setup>
defineProps({
  profil: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <header class="navbar">
    <div class="brand">
      <h1>{{ profil.nama }}</h1>
    </div>

    <nav>
      <a href="#Anime">Anime</a>
      <a href="#Donghua">Donghua</a>
      <a href="#Manhwa">Manhwa</a>
    </nav>

    <div class="tema-pengatur">
      <input
        id="tema"
        class="pengalih-tema"
        type="checkbox"
      />
      <label class="tombol-tema" for="tema">
        🌙 Tema Gelap
      </label>
    </div>
  </header>
</template>