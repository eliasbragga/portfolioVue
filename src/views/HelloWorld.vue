<template>
  <div id="helloWorld">
    <v-container grid-list-xl class="cards pa-0 py-10 " >
      <h1 class="cards__title mb-7"> {{ mensage }} </h1>
      <v-layout row wrap class="cards__layout ma-0">
        <v-flex class="card"  col12 md6 lg6 v-for="(card, i) in cards" :key="i">
          <v-card
                       
            v-scroll-reveal
            dark
            class="pa-5 cards__card mx-1 mb-0  "
            elevation="2">
            <h2>{{ card.nome }}</h2>
            <p class="descricao ma-0"> {{ card.descricao }} </p>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      mensage:"Hello World",
      cards: [
        {
          nome: "Quem sou eu?",
          descricao:
            "Me chamo Elias, tenho 23 anos e estou graduando no curso Análise e desenvolvimento de sistemas pela UNIASSELVI. Atualmente sou professor de música e estou em transição de carreira Atualmente sou professor de música e estou em transição de carreira",
        },
        {
          nome: "Qual meu objetivo",
          descricao:
          "O objetivo deste projeto é mostrar um pouco dos meus conhecimentos em front-end."
        },
        {
          nome: "O que estudo?",
          descricao:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aut ut quisquam minus consequuntur similique error neque quae accusantium exercitationem reprehenderit ad,."
        },
        {
          nome: "O que utilizei?",
          descricao:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aut ut quisquam minus consequuntur similique error neque quae accusantium exercitationem reprehenderit ad,."
        },
      ],
    };
  },
};
</script>

<style scoped>
#helloWorld {
  background-color: #f2be22;
}

.cards {
  background-color: #f2be22;
  
  
}

.cards__layout {  
  position: relative;
  
}

.cards__title{
  text-align: center;
  font-family: "Chelsea Market", cursive;
}

.cards__card {
    height: 100%;
    
    
}



.descricao {
   font-size:2vh;
 
}
</style>