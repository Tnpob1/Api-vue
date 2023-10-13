<script setup>
import axios from 'axios'
import { ref } from 'vue'
const items = ref([])
const url = ref('https://jsonplaceholder.typicode.com/posts')
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
// onMounted(fetchPosts)
</script>

<template>
  <div>
    <h1>Post-Page</h1>
  </div>

  <button @click="fetchPosts">แสดงผล</button>

  <div>
    <ul v-for="(post, index) in items" :key="index">
      <li>userID ={{ post.userId }}</li>
      <li>ID ={{ post.id }}</li>
      <li>Title ={{ post.title }}</li>
      <!-- <li>Body ={{ post.body }}</li> -->
      <li>
        <RouterLink :to="`/post/${post.id}`">อ่านต่อ...</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
