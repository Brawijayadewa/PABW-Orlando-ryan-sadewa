<script setup>
defineProps({
  daftar: {
    type: Array,
    default: () => []
  },
  favorit: {
    type: Array,
    default: () => []
  },
  memuat: {
    type: Boolean,
    default: false
  },
  galat: {
    type: String,
    default: ''
  }
})

defineEmits(['ubah-favorit'])
</script>

<template>
  <p v-if="memuat" id="muat">
    Memuat daftar proyek...
  </p>

  <p v-else-if="galat" id="galat" role="alert">
    {{ galat }}
  </p>

  <p v-else-if="daftar.length === 0" id="kosong">
    Belum ada proyek untuk ditampilkan.
  </p>

  <ul v-else id="daftar" class="galeri">
    <li
      v-for="proyek in daftar"
      :key="proyek.id"
      class="kartu"
    >
      <h3>{{ proyek.judul }}</h3>
      <p>Tahun: {{ proyek.tahun }}</p>
      <p>Kategori: {{ proyek.kategori }}</p>
      <p>{{ proyek.selesai? 'Status: Selesai' : 'Status: Dalam pengerjaan' }}</p>

      <button
        type="button"
        @click="$emit('ubah-favorit', proyek.id)"
      >
        {{ favorit.includes(proyek.id) ? '★ Hapus Favorit' : '☆ Tambah Favorit' }}
      </button>
    </li>
  </ul>
</template>