<template>
    <div class="home">
        <div id="nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>
        </div>
<div @click='test2333()'>
    233333
</div>
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { getIndex } from 'api/index';

export default {
    name: 'home',
    components: {
        HelloWorld
    },
    async created() {
        try {
            await getIndex({ pageSiza: 100, num: 10 });
        } catch (err) {}
    },
    mounted() {
    },
    methods: {
        async test2333() {
            try {
                await getIndex({ pageSiza: 100, num: 10 });
            } catch (err) {
                console.log('err', err);
            }
        }
    }
};
</script>
