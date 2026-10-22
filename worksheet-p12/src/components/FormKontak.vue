<script setup>
import { ref } from 'vue'

const nama = ref('')
const pesan = ref('')

const emit = defineEmits(['kirim'])

function kirimForm() {
  emit('kirim', {
    nama: nama.value,
    pesan: pesan.value
  })
}
</script>

<template>
  <form @submit.prevent="kirimForm">
    <div>
      <label for="nama-kontak">Nama</label>
      <input
        id="nama-kontak"
        v-model="nama"
        type="text"
        required
      />
    </div>

    <div>
      <label for="pesan-kontak">Pesan</label>
      <textarea
        id="pesan-kontak"
        v-model="pesan"
        required
      ></textarea>
    </div>

    <button type="submit">
      Kirim
    </button>
  </form>
</template>