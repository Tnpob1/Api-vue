<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

function fetchPosts() {
  axios
    .get(url.value)
    .then((response) => {
      items.value = response.data
    })
    .catch((err) => {
      console.log(err)
    })
}
onMounted(fetchPosts)

const items = ref({})
const lat = ref('38.914089')
const lon = ref('-78.789284')
const apiKey = ref('f3563a1c254c38667eb5e4f6e1ae6f32')

const url = ref('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=f3563a1c254c38667eb5e4f6e1ae6f32')


</script>

<template>
    <div>
        ข้อมูล5วัน

    </div>
</template>

<style scoped>

</style>