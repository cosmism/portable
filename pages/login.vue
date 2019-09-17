<template>
  <v-layout>
    <v-flex class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        &#8220;LOGIN.&#8221;
      </blockquote>
      <input v-model="id" />
      <input v-model="pw" />
      <button v-on:click="login">LOGIN</button>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    id: '',
    pw: ''
  }),
  methods: {
    login() {
      axios.post('/api/login', qs.stringify({ id, pw }) ).then(data => { commit("LOGIN", data); });
    }
  }
}
</script>

