<template>
  <div id="helloWorld">
    <v-container grid-list-xl class="cards px-16 py-10 " >
      <h1 class="cards__title mb-7"> {{ title }} </h1>
      <v-layout row wrap class="cards__layout ma-0">
        <v-flex class="card"  col12 md6 sm6 lg6 v-for="(card, i) in cards" :key="i">
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
      title:"Hello World",
      cards: [
        {
          nome: "Quem sou eu?",
          descricao:
            "Me chamo Elias, tenho 24 anos e curso Análise e desenvolvimento de sistemas pela UNIASSELVI. Sou natural de Senador Pompeu-CE e moro em Fortaleza-CE. Atualmente sou professor de música e estou em transição de carreira",
        },
        {
          nome: "Qual meu objetivo",
          descricao:
          "O objetivo deste projeto é alocar meus projetos pessoais e afins, e para que você possa me conhecer e conhecer meu trabalho um pouco mais. Meu objetivo com a programação é ajudar pessoas com a ajuda de computadores."
        },
        {
          nome: "O que estudo?",
          descricao:
          "Atualmente estudo tecnologias como HTML5, CSS3 e JavaScript. Estudo desenvolvimento web focado no front-end e frameworks como Vue.js e React.js sempre focando na acessibilidade e experiência do usuário e  em utilizar boas práticas em JavaScript. Também tenho conhecimento em testes automatizados e banco de dados. "
        },
        {
          nome: "O que utilizei?",
          descricao:
          "Para a realização deste projeto utilizei Vue.js com a biblioteca visual Vuetify e teste automatizado para testar o fluxo da aplicação do início ao fim. "
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
  min-height: 700px;
  
  
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

@media screen and (max-width: 600px) {
  .cards__title{
  text-align: center;
  font-family: "Chelsea Market", cursive;
  font-size: 1.4em;
}
}
</style>