<template>
  <div id="descricaoProjetos">
    <v-container grid-list-xl class="py-10">
      <h1 class="title__projeto mb-10">{{ descricao }}</h1>
      <v-layout row wrap class="pa-5">
        <v-img src="../assets/b1.png"></v-img>
        <v-flex xs4 v-for="(link, i) in links" :key="i">
          <v-img :src="link.url" aspect-ratio="1"/>
        </v-flex>
      </v-layout>
      <!-- <v-layout row wrap class="pa-5">
        <v-flex lg12 xs class="">
          <v-row>
            <v-flex
              lg4
              xs12
              offset-md0
              offset-xs2
              v-for="(link, i) in links"
              :key="i"
              class="d-flex child-flex"
            >
              <v-img
                max-width="250px"
                max-height="250px"
                min-width="30px"
                min-height="30px"
                :src="link.url"
                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                aspect-ratio="1"
                class="grey lighten-2 cols12 lg6 image"
              >
                
                <v-expansion-panels focusable>
                  <v-expansion-panel>
                    <v-expansion-panel-header>{{
                      link.item
                    }}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      Descricao Projeto
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-flex>
          </v-row>
        </v-flex>
        <v-flex>
          <v-sheet class="mx-auto" max-width="800">
            <v-slide-group
              v-model="model"
              class="pa-4"
              active-class="success"
              show-arrows
            >
              <v-slide-item
                v-for="(icone, i) in icones"
                :key="i"
                v-slot="{ active, toggle }"
              >
                <v-card
                  color="black"
                  class="ma-4"
                  height="100"
                  width="100"
                  @click="toggle"
                >
                  <v-img
                    src="http://localhost:8080/img/Bootstrap_logo.svg.bd61e5c2.png"
                    height="100%"
                  ></v-img>
                  <v-row class="fill-height" align="center" justify="center">
                    <v-scale-transition>
                      <v-icon
                        v-if="active"
                        color="black"
                        size="48"
                        v-text="'mdi-close-circle-outline'"
                      ></v-icon>
                    </v-scale-transition>
                  </v-row>
                </v-card>
              </v-slide-item>
            </v-slide-group>
            <v-expand-transition>
              <v-sheet v-if="model != null" height="200" tile>
                <v-row class="fill-height" align="center" justify="center">
                  <h3 class="text-h6">Selected {{ model }}</h3>
                </v-row>
              </v-sheet>
            </v-expand-transition>
          </v-sheet>
        </v-flex>
      </v-layout> -->
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
      descricao: "Descrição dos projetos",
      links: [
        {
          url: require("../assets/b1.png"),
          item: "Make Your Burger",
        },
        {
          url: require("../assets/b2.png"),
          item: "Henarmonia",
        },
        {
          url: require("../assets/b3.png"),
          item: "Solive",
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
};
</script>

<style scoped>
#descricaoProjetos {
  background-color: #f2be22;
}

.image {
  border-radius: 5px;
  width: 100%;
}
.title__projeto {
  font-family: "Chelsea Market", cursive;
  text-align: center;
}

>>> .theme--light.v-sheet {
  background-color: transparent;
}
</style>