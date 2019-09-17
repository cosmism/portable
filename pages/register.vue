<template>
  <v-layout>
    <v-flex class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        &#8220;REGISTER.&#8221;
      </blockquote>
      <input v-model="id" />
      <input v-model="pw" />
      <button v-on:click="login">REGISTER</button>
      {{ user }}
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    id: '',
    pw: '',
    user: ''
  }),
  methods: {
    login() {
        const formData = new FormData()
        formData.append('i', this.id)
        formData.append('pw', this.pw)
        axios
        .post('/api/register', formData)
        .then(response => { this.user = response })
    }
  }
}
</script>

