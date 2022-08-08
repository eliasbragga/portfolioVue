<template>
  <v-app>
    <HomePage/>
    <HelloWorld/>
    <CarouselImages/>
    <DescricaoProjetos/>
    <SoftSkills/>
    <TransicaoViews/>
    <FinalizandoProjeto/>
  </v-app>
</template>

<script>
import HomePage from './views/HomePage'
import HelloWorld from './views/HelloWorld'
import CarouselImages from './views/CarouselImages'
import DescricaoProjetos from './views/DescricaoProjetos'
import FinalizandoProjeto from './views/FinalizandoProjeto'
import TransicaoViews from './views/TransicaoViews'
import SoftSkills from './views/SoftSkills'



export default {
  name: 'App',
  components: {
    HomePage,
    HelloWorld,
    CarouselImages,
    DescricaoProjetos,
    FinalizandoProjeto,   
    TransicaoViews,
    SoftSkills
  }  
};
</script>
