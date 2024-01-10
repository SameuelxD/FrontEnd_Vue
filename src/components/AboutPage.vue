<template>
    <div class="about">
        <h1>Ruta Protegida</h1>
        {{ token }}
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['token'])
    },
    methods: {
        async protectData() {
            try {
                const res = await fetch('https://nodejs-express-jwt-deploy.onrender.com/api/dashboard', {
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': this.token
                    }
                })
                const dataDB = await res.json()
                console.log(dataDB);
            } catch (error) {
                console.log(error);
            }
        },
        created() {
            this.protectData()
        }
    }
};
</script>

<style scoped>
.about {
    width: 50%;
    height: auto;
    display: grid;
    place-items: center;
}
</style>