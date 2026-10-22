<script setup>
import { reactive, computed } from 'vue'

const form = reactive({
  donghua: '',
  anime: '',
  manhwa: ''
})

const emit = defineEmits(['kirim'])

const valid = computed(() =>
  form.donghua.trim() !== '' ||
  form.anime.trim() !== '' ||
  form.manhwa.trim() !== ''
)

function kirimForm() {
  if (!valid.value) return
  emit('kirim', { ...form })
}
</script>

<template>
  <form
    id="form-koleksi"
    action="/simpan"
    method="post"
    @submit.prevent="kirimForm"
  >
    <div class="field-form">
      <label for="list-donghua">Nama Donghua</label>
      <input
        id="list-donghua"
        v-model="form.donghua"
        name="donghua"
        type="text"
        placeholder="Masukkan nama donghua"
        aria-describedby="error-donghua"
      />
      <p id="error-donghua" class="pesan-error" hidden></p>
    </div>

    <div class="field-form">
      <label for="list-anime">Nama Anime</label>
      <input
        id="list-anime"
        v-model="form.anime"
        name="anime"
        type="text"
        placeholder="Masukkan nama anime"
        aria-describedby="error-anime"
      />
      <p id="error-anime" class="pesan-error" hidden></p>
    </div>

    <div class="field-form">
      <label for="list-manhwa">Nama Manhwa</label>
      <input
        id="list-manhwa"
        v-model="form.manhwa"
        name="manhwa"
        type="text"
        placeholder="Masukkan nama manhwa"
        aria-describedby="error-manhwa"
      />
      <p id="error-manhwa" class="pesan-error" hidden></p>
    </div>

    <button
      type="submit"
      id="btn-kirim"
      :disabled="!valid"
    >
      Kirim Koleksi
    </button>
  </form>
</template>