<template>
  
    <v-container fluid id="carousel" grid-list-xl class="py-10 px-0 carousel__container">
      <v-flex><h1 v-scroll-reveal class="carousel__title mb-10">{{ title }}</h1></v-flex>
      <v-layout row wrap v-scroll-reveal >
        <v-flex cols12 lg8 class="ma-auto"> 
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
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
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

</style>