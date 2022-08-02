<template>
  <v-app>
    <HomePage/>
    <HelloWorld/>
    <JogoCobrinha/>
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
import JogoCobrinha from './views/JogoCobrinha'


export default {
  name: 'App',
  data(){
    return {

    }
  },
  components: {
    HomePage,
    HelloWorld,
    CarouselImages,
    DescricaoProjetos,
    FinalizandoProjeto,
    JogoCobrinha
  }
  
};
</script>
