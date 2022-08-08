<template>
  
    <v-container fluid id="carousel" grid-list-xl class="py-10 px-5 carousel__container">
      <v-flex><h1 v-scroll-reveal class="carousel__title mb-10">{{ title }}</h1></v-flex>
      <v-layout row wrap v-scroll-reveal >
        <v-flex cols12 lg7 class="ma-auto"> 
          <v-carousel cycle lg8>
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>     
    </v-container>
  
</template>

<script>
export default {
  name: "CarouselImages",
  data() {
    return {
      title:"Projetos",
      items: [
          {
            src: require("../../static/slideProjetos/slide-aiko-1.png"),
          },
          {
            src: require("../../static/slideProjetos/slide-aiko-2.png"),
          },
         {
            src: require("../../static/slideProjetos/slide-bempaggo-1.png"),
          },
          {
            src: require("../../static/slideProjetos/slide-bempaggo-2.png"),
          },
          {
            src: require("../../static/slideProjetos/slide-bempaggo-3.png"),
          },
          {
            src: require("../../static/slideProjetos/slide-bempaggo-4.png"),
          },
          {
            src: require("../../static/slideProjetos/slide-henarmonico.png"),
          },
          {
            src: require("../../static/slideProjetos/slide-soliv-1.png"),
          },
          {
            src: require("../../static/slideProjetos/slide-soliv-2.png"),
          },
          {
            src: require("../../static/slideProjetos/slide-hamburger-1.png"),
          },
          {
            src: require("../../static/slideProjetos/slide-hamburger-2.png"),
          },
          {
            src: require("../../static/slideProjetos/slide-cordel.png"),
          },
          
        ],
    };
  },
};
</script>

<style scoped>
#carousel {
  background-color: #191919;
}

.carousel__title {
  color:#f2be22;
  text-align: center;
   font-family: "Chelsea Market", cursive;
}

@media screen and (max-width: 600px) {
  .carousel__title {
  color:#f2be22;
  text-align: center;
   font-family: "Chelsea Market", cursive;
   font-size: 1.4em;
}

}

</style>