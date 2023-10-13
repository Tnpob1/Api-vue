<script setup>
import axios from 'axios'
const id = ref(route.params.id)
import { ref, onMounted } from 'vue'

//รับค่า Parameter --> Id
import { useRoute } from 'vue-router';
const route = useRoute()
// const id =parseInt(rout.params.id)
console.log(id.value)

const items = ref({})
// const url = ref('https://jsonplaceholder.typicode.com/posts/1')
const url = ref('https://jsonplaceholder.typicode.com/posts/' + route+params.id)

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
</script>

<template>
  <div>
    <h1>A-Post-Page {{ route.params.id }}</h1>
  </div>

  <!-- <button @click="fetchPosts">แสดงผล</button> -->

  <div>
    <ul v-for="(post, index) in items" :key="index">
      <li>userID ={{ items.userId }}</li>
      <li>ID ={{ items.id }}</li>
      <li>Title ={{ items.title }}</li>
      <!-- <li>Body ={{ post.body }}</li> -->
      <!-- <li>
        <RouterLink :to="`/posts/${post.id}`">อ่านต่อ...</RouterLink>
      </li> -->
    </ul>
  </div>
</template>

<style scoped></style>
