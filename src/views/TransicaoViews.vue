<template>
  <div id="app">
    <v-container
      grid-list-xl
      class="transicao"
      style="height: 800px; background-color: black"
    >
      <v-layout row wrap v-scroll-reveal >
        <v-flex   lg6 md6 offset-md3 offset-lg3>
          <h1 class="transicao__title">A transição</h1>
        </v-flex>
        <v-flex   lg8 md9 class="transicao__text">
          <p class="p"  >
            Me chamo Elias, tenho 24 anos e estudo desenvolvimento Web. Atuo
            como professor de música há 5 anos e estou em transição de carreira
            profissional. Música e tecnologia sempre foram minhas duas áreas de
            paixão. Se alguém tivesse me falado que software é sobre humanidade,
            é sobre ajudar pessoas usando computadores, eu teria mudado minha
            visão muito antes. Em 2018 fui diagnosticado com um linfoma,
            durante o período de tratamento tive um encontro comigo mesmo
            muito forte e sincero. Descobri que sou apaixonado pela vida e
            também apaixonado em aprender. Sempre estive em um constante
            processo de aprendizado. Sou autodidata na música e também na
            programação. Hoje, estudo desenvolvimento web focado no front-end e
            estou procurando minha primeira oportunidade na área. Uma das coisas
            que mais me motiva é o poder da programação. Afinal, a programação é o que temos mais próximo dos super poderes.
            Dei muito de mim dentro da música, mas agora a programação me chama! Ter o poder de criar algo, colocar uma ideia em prátrica dentro do seu quarto, isso pra mim é fascinante! Com a programação consigo ajudar pessoas, em destaque, estudantes de música. Criei o aplicativo Enarmonia que facilita a didática do ensino da teoria musical, e ajuda estudantes da música que estão iniciando os estudos na teoria musical. Ver colegas da música utilizando uma ferramenta que desenvolvi em poucos meses de estudo é animador e esperançoso.
          </p>
        </v-flex>
        <div class="teste" v-tilt="{ speed: 500, perspective: 1200 }">...</div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "TransicaoViews",
  data() {
    return {
      textos: ["A", "Transição", "de", "carreira"],
    };
  },
};
</script>

<style scoped>
#app {
  background-color: black;
}
.transicao__text {
  background: url(../../static/fotoTexto/fototexto.jpeg) no-repeat center;
  width: 84%;
  margin: auto;
  background-size: contain;
  -webkit-background-clip: text;
  color: rgba(0, 0, 255, 0);
  transition: 200ms all ease-in-out;
  font-size: 1.2rem;
}

p {
  text-align: justify;
}

.transicao__text:hover {
  color: white;
  transition: 200ms all ease-in-out;
  font-size: 1.2rem;
}

.transicao__title {
  color: #f2be22;
  font-family: "Chelsea Market", cursive;
  text-align: center;
}


@media screen and (max-width: 600px) {

.transicao__text {    
  margin: auto;
  color: #fff;
  
  font-size: 14px;
}

.transicao__text:hover {  
  font-size: 14px;
}

.transicao__title {
  color: #f2be22;
  text-align: center;
  font-family: "Chelsea Market", cursive;
  font-size: 1.4em;
  
}



}
</style>