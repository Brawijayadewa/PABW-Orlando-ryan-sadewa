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
  <div class="filter-proyek">
    <div id="filter">
      <button
        type="button"
        data-kategori="semua"
        :class="{ aktif: kategoriAktif === 'semua' }"
        @click="emit('ubah-kategori', 'semua')"
      >
        Semua
      </button>

      <button
        type="button"
        data-kategori="web"
        :class="{ aktif: kategoriAktif === 'web' }"
        @click="emit('ubah-kategori', 'web')"
      >
        Web
      </button>

      <button
        type="button"
        data-kategori="lainnya"
        :class="{ aktif: kategoriAktif === 'lainnya' }"
        @click="emit('ubah-kategori', 'lainnya')"
      >
        Lainnya
      </button>
    </div>

    <button
      id="atur-ulang"
      type="button"
      @click="emit('atur-ulang')"
    >
      Atur Ulang
    </button>
  </div>
</template>