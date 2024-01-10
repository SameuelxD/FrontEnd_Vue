<template>
  <div>
    <div id="nav">
      <router-link to="/" class="item_nav">Home</router-link> |
      <router-link to="/about" class="item_nav">About</router-link>
      <button @click="singOf">Sing Of</button>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['ObtenerToken','singOf'])
  },
  created() {
    this.ObtenerToken();
  }
}
</script>
<style scoped>
#nav{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
}
.item_nav{
  font-size: 1.2rem;
  text-decoration: none;
  color: black;
}
</style>
