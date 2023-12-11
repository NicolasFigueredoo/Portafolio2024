
<template>

<div class="container">
  <div class="d-flex justify-content-center align-items-center" style="min-height: 100vh;">
    <div class="text-center">
      <h1 v-bind:class="{'animate__bounceOut': isClassAdded}">NICOLAS FIGUEREDO</h1>
      <p id="subtitulo" v-bind:class="{'animate__bounceOut': isClassAdded}">Desarrollador Backend</p>
    </div>
  </div>
</div>

<div v-if="mostrarComponent">
      <dataNico class="animate__animated animate__backInLeft " />
    </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #FAFAFA;
}

h1{
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
  font-size: 80px
}
#subtitulo{
  font-weight: 400;
  font-size: 20px


}
</style>


<script>
import dataNico from './components/DataNico.vue';

import $ from 'jquery';

export default {
  data() {
    return {
      mostrarComponent: false,
      isClassAdded: false,
    };
  },
  created() {
    setTimeout(() => {
      this.isClassAdded = true;      
    }, 1500);

    setTimeout(() => {
      this.mostrarComponent = true;
      $('.container').html('');
    }, 2000);
  },
  components:{
    dataNico
  }
};
</script>


