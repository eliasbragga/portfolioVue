<template>
  <div id="finalizando">
    <v-container grind-list-xl class="py-10">
      <h1 v-scroll-reveal class="finalizando__title mb-5">Finalizando</h1>
      <v-layout row wrap align-center pa-3>
        <v-flex col xs6 offset-xs4 offset-md0 lg3>
          <v-img
            v-scroll-reveal
            class="finalizando__image mb-16"
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="250"
            max-width="250"
            min-width="50px"
            min-height="50px"
            src="../../static/fotoPerfil.jpg"
          ></v-img>
        </v-flex>
        <v-flex col lg7 xs12
          ><p v-scroll-reveal class="finalizando__texto-sobre">
            Estudante autodidata de Desenvolvimento Web com foco em front-end.
            Tenho conhecimentos em: HTML, CSS, Javascript, frameworks como
            Vue.js, React.js, Versionamento com Git e GitHub. Tenho
            conhecimentos básicos em: Python; Flask | SQL |. Gosto de resolver
            desafios, gosto de criar, sou automotivado e tenho sede de aprender.
            Desde que conheci a programação, novos objetivos surgiram. Trabalho
            há 5 anos na área da cultura como Professor de Música particular, o
            que muito me ajudou em minha comunicação, trabalho em equipe,
            liderança e me ensinou a aprender a aprender. Acredito que os passos
            mais importantes para adquirir novas habilidades são a prática e a
            vontade de aprender. Estou em migração de carreira profissional
            entre duas áreas pelas quais sou apaixonado: música e tecnologia.
            Utilizo as ferramentas de programação para tornar mais prático e
            didático o ensino da música. Para isso, criei o App Enarmonia
            Simples, que ajuda meus alunos a descobrirem as notas enarmônicas
            (link do projeto:
            <a href="https://github.com/eliasbragga/projeto_enarmonico"
              >Projeto Enarmonia</a
            >
            ) e estou desenvolvendo um site para alocação dos conteúdos
            ministrados em aula, tais como: vídeos, PDFs e exercícios.
          </p>

          <p>
            Estou à procura da primeira oportunidade de emprego como Front-end
            e, quem sabe, na sua empresa ;). Ainda tenho muito que aprender e
            estou disposto a isto!Que tal conversarmos sobre?
          </p></v-flex
        >
        <v-flex lg2 xs12 offset-xs5 offset-md0 v-scroll-reveal>
          <v-btn
            
            color="green"
            class="ma-2 white--text"
            @click="loader = 'loading3'"
          >
            Currículo
            <v-icon right dark> mdi-cloud-download </v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "FinalizandoProjeto",
  data() {
    return {};
  },
};
</script>

<style scoped>
#finalizando {
  background-color: black;
}

.finalizando__title {
  text-align: center;
  font-family: "Chelsea Market", cursive;
  color: white;
}

.finalizando__image {
  border-radius: 50%;
}

.finalizando__texto-sobre {
  font-family: "Biryani", sans-serif;
  font-size: 1.1em;
  text-align: justify;
  color: white;
}

.button {
  margin: auto;
}
</style>