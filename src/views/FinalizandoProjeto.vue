<template>
  <div id="finalizando">
    <v-container grind-list-xl class="py-10">
      <h1 v-scroll-reveal class="finalizando__title my-5">Finalizando</h1>
      <v-layout row wrap align-center pa-3>
        <v-flex col xs6 offset-xs3 offset-md4 offset-sm4 offset-lg0 lg2>
          <v-img
            v-scroll-reveal
            class="finalizando__image mb-16"
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="250"
            max-width="250"
            min-width="50px"
            min-height="50px"
            src="../../static/fotoPerfil/fotoPerfil.jpg"
          ></v-img>
        </v-flex>
        <v-flex col lg8 xs12
          ><p v-scroll-reveal class="finalizando__texto-sobre">
            Estudante autodidata de Desenvolvimento Web com foco em front-end.
            Tenho conhecimentos em: HTML5, CSS3, Javascript, frameworks como
            Vue.js, React.js, Versionamento com Git e GitHub, bibliotecas
            visuais como Vuetify e Bootstrap, testes automatizados com Cypress.
            Tenho conhecimentos básicos em: Python; Flask | SQL |. Gosto de
            resolver desafios, gosto de criar, sou automotivado e tenho sede de
            aprender. Acredito que os passos mais importantes para adquirir
            novas habilidades são a prática e a vontade de aprender. Estou em
            migração de carreira profissional entre duas áreas pelas quais sou
            apaixonado: música e tecnologia. Utilizo as ferramentas da
            programação para tornar mais prático e didático o ensino da música.
            Para isso, criei o App Enarmonia Simples, que ajuda meus alunos a
            descobrirem as notas enarmônicas (link do projeto:
            <a target="_blank" href="https://github.com/eliasbragga/projeto_enarmonico"
              >Projeto Enarmonia</a
            >
            ) e estou desenvolvendo um site para alocação dos conteúdos
            ministrados em aula, tais como: vídeos, PDFs e exercícios.
            Estou procurando minha primeira oportunidade na área, quem sabe, na sua empresa. <br> <br>
            E-mail: bragga_elias44@gmail.com
          </p>

          <p>
            Estou à procura da primeira oportunidade de emprego como Front-end
            e, quem sabe, na sua empresa ;). Ainda tenho muito que aprender e
            estou disposto a isto!Que tal conversarmos sobre?
          </p></v-flex
        >
        <v-flex
          class="ma-auto finalizando__buttoon"
          lg12
          md12
          xs12
          v-scroll-reveal
        >
          <v-btn
            block
            @click="openDialog"
            color="green"
            class="mx-auto white--text"
            width="59px"
          >
            CURRÍCULO
          </v-btn>
        </v-flex>
        <v-flex
          v-for="(info, i) in infos"
          :key="i"
          lg1
          md2
          sm2
          xs4
          class="finalizando__flex-icones mx-auto my-5"
        >
          <a :href="info.link" target="_blank"
            ><img class="finalizando__icone" :src="info.icone" target="_blank"
          /></a>
        </v-flex>
      </v-layout>
      <DialogComp :switchDialog="switchDialog" @closeDialog="closeDialog" />
    </v-container>
  </div>
</template>

<script>
import DialogComp from "./DialogComp.vue";
export default {
  name: "FinalizandoProjeto",
  data() {
    return {
      switchDialog: false,
      infos: [
        {
          link: "https://www.instagram.com/bragga_elias/",
          icone:
            "https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white",
        },
        {
          link: "https://github.com/eliasbragga",
          icone: require("../../static/icones/github.png"),
        },
        {
          link: "https://www.linkedin.com/in/elias-braga-069144172/",
          icone:
            "https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white",
        },
      ],
    };
  },
  methods: {
    openDialog() {
      this.switchDialog = !this.switchDialog;
    },
    closeDialog() {
      this.switchDialog = !this.switchDialog;
    },
  },
  components: {
    DialogComp,
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

.finalizando__buttoon {
  width: 50%;
}

>>> .v-btn--block {
  min-width: 66% !important;
}

@media screen and (max-width: 600px) {
  .finalizando__title {
    text-align: center;
    font-family: "Chelsea Market", cursive;
    color: white;
    font-size: 1.4em;
  }
}
</style>