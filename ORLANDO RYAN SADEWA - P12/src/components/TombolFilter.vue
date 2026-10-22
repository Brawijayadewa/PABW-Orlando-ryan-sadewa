<script setup>
defineProps({
  kategoriAktif: {
    type: String,
    default: 'semua'
  }
})

const emit = defineEmits(['ubah-kategori', 'atur-ulang'])
</script>

<template>
  <div class="kontrol-proyek">
    <div id="filter" class="baris-filter">
      <button
        type="button"
        :class="{ aktif: kategoriAktif === 'semua' }"
        @click="emit('ubah-kategori', 'semua')"
      >
        Semua
      </button>

      <button
        type="button"
        :class="{ aktif: kategoriAktif === 'web' }"
        @click="emit('ubah-kategori', 'web')"
      >
        Web
      </button>

      <button
        type="button"
        :class="{ aktif: kategoriAktif === 'lainnya' }"
        @click="emit('ubah-kategori', 'lainnya')"
      >
        Lainnya
      </button>
    </div>

    <button type="button" id="atur-ulang" @click="emit('atur-ulang')">
      Atur Ulang
    </button>
  </div>
</template>