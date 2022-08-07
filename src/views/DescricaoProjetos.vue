<template>
  <div id="descricaoProjetos">
    <v-container grid-list-xl class="py-10">
      <h1 class="title__projeto mb-10">{{ title }}</h1>
      <v-layout row wrap class="pa-5" >
        <v-flex lg3 xs12 offset-sm3 sm6 offset-md0 md4 v-for="(path, i) in paths" :key="i">
          <v-card
            v-scroll-reveal       
            class="mx-auto elevation-4"
            max-width="344"            
          >
            <v-img :src="path.url"  min-height="170px"></v-img>
            <v-card-title> {{ path.title }} </v-card-title>

            <v-card-actions>
              <v-btn color="white" text @click="path.show = !path.show">
                Ver mais

                <v-icon>{{
                  path.show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="path.show">
                <v-divider></v-divider>

                <v-card-text class="card__text">
                  <p class="card__text-descricao"> {{ path.description }} </p>
                  <a class="card__link" target="_blank" :href="path.link">Link repositório </a>
                  <span style="font-size:1.3em">&#129488;;</span>
                  
                  
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "DescricaoProjetos",
  data() {
    return {
      
      icones: [
        {
          url: "http://localhost:8080/img/js.7b936471.png",
        },
      ],
      model: null,
      title: "Descrição dos projetos",
      paths: [       
        {
          url: require("../../static/projetos/projeto-aiko-2.png"),
          title: "AIKO",
          description:"Site desenvolvido para um teste da empresa AIKO. O site descreve os estados e as localizações mais recentes dos equipamentos em um mapa. Utilizei Vue.js com a biblioteca visual Vuetify, Google charts para exibir as informações e boas práticas de JavaScript para o desenvolvimento do projeto.",
          show:false,
          link:"https://github.com/eliasbragga/teste-frontend-estagio-v2"
        },
        {
          url: require("../../static/projetos/projeto-bempaggo-1.png"),
          title: "Bem Paggo",
          description:"Site desenvolvido para um teste da empresa Bem Paggo. O site simula uma loja virtual onde o cliente seleciona os itens e é direcionado para a página de pagamento para o preenchimento do formulário. O site conta com 3 opções de pagamento: Pix, crédito e débito. Realizei  integração com a API de localização do IBGE para obter os estados brasileiros. Tabém realizei testes automatizados com cypress para testar todo fluxo da aplicação. Utilizei Vue.js com a biblioteca visual Vuetify e boas práticas de JavaScript para o desenvolvimento do projeto.",
          show:false,
          link:"hhttps://github.com/eliasbragga/testeFrontEndBemPago"
        },
        {
          url: require("../../static/projetos/projeto-hamburger-1.png"),
          title: "Make your burger",
          description:"Site desenvolvido durante um curso de Vue.js. O site conta com um backend fictício que simula um banco de dados. Site para donos de estabelecimentos de vendas. É possivel acompanhar e alterar os estados do pedido. Utilizei Vue.js com a biblioteca visual Vuetify e boas práticas de JavaScript para o desenvolvimento do projeto. ",
          show:false,
          link:"https://github.com/eliasbragga/makeYourBurger-vue"
        },
        {
          url: require("../../static/projetos/projeto-soliv-2.png"),
          title: "Solive",
          description:"Site desenvolvido para servir como portfólio dos principais trabalhos artesanais do cliente. O site conta com links das redes soiciais e com uma galeria de fotos dos principais trabalhos. Utilizei HTML5 e CSS3 para a o desenvolvimento do projeto. ",
          show:false,
          link:"https://github.com/eliasbragga/site-solive"
        },
        {
          url: require("../../static/projetos/projeto-henarmonico.png"),
          title: "Enarmônico",
          description:"Site desenvolvido para o facilitamento da didática no ensino da teoria musical e para ajudar estudantes de música. O site tem ajudado vários colegas professores de música e tambem colegas amantes da música e da teoria musical. No site é possível descobrir todas as notas enarmônicas da nota solicitada. Utilizei Vue.js com a biblioteca visual Vuetify e boas práticas de JavaScript para o desenvolvimento do projeto",
          show:false,
          link:"https://github.com/eliasbragga/projeto_enarmonico"
        },
        {
          url: require("../../static/projetos/projeto-portfolio.png"),
          title: "Portfólio",
          description:"Site desenvolvido para alocar meus projetos pessoais e afins. O intúito é ter algo que aloque todos meus trabalhos e meu progresso nos estudos de Desenvolvimento Web focado no front-end. Fiquei super feliz com o resultado e muito motivado a continuar meus estudos no desenvolvimento Web. Utilizei Vue.js com a biblioteca visual Vuetify e boas práticas de JavaScript para o desenvolvimento do projeto",
          show:false,
          link:"https://github.com/eliasbragga/portfolioVue"
        },
        {
          url: require("../../static/projetos/projeto-supermario.png"),
          title: "Super Mario",
          description:"Projeto realizado para colocar em prática meus conhecimentos em HTML5, CSS3 e JavaScript. É um jogo simples, mas que pude exercitar boas práticas em JavaScript e CSS. Utilizei HTML5, CSS3 e javaScript para o desenvolvimento do projeto. ",
          show:false,
          link:"https://github.com/eliasbragga/super-mario"
        },
        {
          url: require("../../static/projetos/projeto-cordel.png"),
          title: "Cordel",
          description:"Site desenvolvido durante um curso de HTML5 e CSS3. O site conta com a obra Cordel Moderno de Milton Duarte . Utilizei HTML5 e CSS3 para o desenvolvimento do projeto.",
          show:false,
          link:"https://github.com/eliasbragga/projeto_cordel"
        },
      ],
      cards: [
        {
          titulo: "Henarmonia",
          descricao:
            "Me chamo Elias, tenho 23 anos e estou graduando no curso Análise e desenvolvimento de sistemas pela UNIASSELVI. Atualmente sou professor de música e estou em transição de carreira",
        },
        {
          titulo: "Create your Burger",
          descricao:
            "O objetivo deste projeto é mostrar um pouco dos meus conhecimentos em front-end.",
        },
        {
          titulo: "AIKO",
          descricao:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aut ut quisquam minus consequuntur similique error neque quae accusantium exercitationem reprehenderit ad,.",
        },
        {
          titulo: "O que utilizei?",
          descricao:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aut ut quisquam minus consequuntur similique error neque quae accusantium exercitationem reprehenderit ad,.",
        },
      ],
    };
  },
  methods: {
    switchExplore(){
      this.path.show = !this.path.show
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Biryani:wght@300&family=Chelsea+Market&family=Glegoo&family=Roboto:wght@100;300;400&display=swap");
#descricaoProjetos {
  background-color: #191919;
}

.image {
  border-radius: 5px;
  width: 100%;
}
.title__projeto {
  font-family: "Chelsea Market", cursive;
  text-align: center;
  color: #F2BE22;
}

>>> .theme--light.v-sheet {
  background-color: transparent;
}

>>> .theme--light.v-sheet {
  background-color: #0889bf;
}

>>>.v-btn__content {    
    font-size: 1.1em;
}


>>>.theme--light.v-sheet {    
    color: #ffe188;
    
}

.card__text-descricao {
  color: black;
  font-family:Helvetica, sans-serif;
  
  font-size: medium;
}

.card__link {
  text-decoration: none;
  color: #F2BE22;
  font-size: 1.3em;
}

.card__link:hover {
  text-decoration:underline;
  color: white;
  font-size: 1.3em;
}

.card__text-descricao{
  font-size: 1.3em;
}

@media screen and (max-width: 600px) {

  .card__text-descricao{
  font-size: 15px;
}

}






</style>