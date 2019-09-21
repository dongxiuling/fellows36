<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{$store.state.count}}
    <button @click="$store.commit('add',5)">add</button>
    <button @click="$store.commit('reduce')">reduce</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
