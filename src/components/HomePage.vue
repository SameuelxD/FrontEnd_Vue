<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="vue-img">
    <form class="login-form" @submit.prevent="login(usuario)">
      <input type="text" placeholder="Ingrese email" v-model="usuario.email">
      <input type="password" placeholder="Ingrese contraseña" v-model="usuario.password">
      <button type="submit">Acceder</button>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      usuario: {
        email: 'lineaddr2004@gmail.com',
        password: '123456789'
      }
    }
  },
  methods: {
    ...mapActions(['login'])
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Ajusta la altura según tus necesidades */
}
.vue-img{
  width: 20%;
  height: auto;
  object-fit: cover;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px; /* Ajusta el ancho según tus necesidades */
}

.login-form input {
  margin-bottom: 10px;
  padding: 8px;
}

.login-form button {
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.login-form button:hover {
  background-color: #45a049;
}
</style>
