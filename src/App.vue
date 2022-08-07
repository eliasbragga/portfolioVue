<template>
  <v-app>
    <HomePage/>
    <HelloWorld/>
    <CarouselImages/>
    <DescricaoProjetos/>
    <FinalizandoProjeto/>
  </v-app>
</template>

<script>
import HomePage from './views/HomePage'
import HelloWorld from './views/HelloWorld'
import CarouselImages from './views/CarouselImages'
import DescricaoProjetos from './views/DescricaoProjetos'
import FinalizandoProjeto from './views/FinalizandoProjeto'



export default {
  name: 'App',
  components: {
    HomePage,
    HelloWorld,
    CarouselImages,
    DescricaoProjetos,
    FinalizandoProjeto,   
  }  
};
</script>
