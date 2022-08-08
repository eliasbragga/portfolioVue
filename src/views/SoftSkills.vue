<template>
  <ddiv id="app">
    <v-container grid-list-xl>
      <v-layout row wrap class="container">
        <v-flex        
          class="card"
          lg3
          md4
          sm6
          xs12
          v-tilt="{ speed: 1000, perspective: 1500, max: 10, glare: false }"
          v-for="(info, i) in infos"
          :key="i"
        >
         <h2 class="container__title">{{ info.num }}</h2>
          <div class="content">
            
            <h3>{{ info.title }}</h3>
            <p>{{ info.description }}</p>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </ddiv>
</template>

<script>
export default {
  name: "SoftSkills",
  data() {
    return {
        infos:[
            {
                num:"SoftSkill",
                title:"Facilidade em aprender",
                description:"Ser professor de música me ensinou a aprender a aprender. Durante 15 anos estudando música sendo autodidata, desenvolvi algumas facilidades e técnicas sobre aprender algo novo. Autodidata na música e agora na programação. Utilizo das mesmas técnicas e macetes para estudar programação "
            },
            {
                num:"SoftSkill",
                title:"Resolução de problemas",
                description:"Durante toda minha trajetória profissional, desenvolvi excelentes habilidades como: facilidade em aprender, relacionamento interpessoal, liderança, trabalho em grupo e criatividade, essas competências contribuem muito para a resolução de problemas e para pesquisas de novas soluções. "
            },
            {
                num:"SoftSkill",
                title:"Comunicação",
                description:"Acredito que uma boa comunicação seja a base firme de qualquer relacionamento interpessoal. Durante anos lidando diretamente com pessoas, desenvolvi facilidade na comunicação e percebi sua importância. Apesar de ter dificuldade para me expressar por conta da dicção, venho trabalhando nisso durante os últimos anos. Embora ja tenha melhorado muito, sempre podemos evoluir mais. "
            },
        ]
    };
  },
};
</script>

<style scoped>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

#app {
  background-color: #191919;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;  
  z-index: 1;
}

.container .card {
  position: relative;
  width: 500px;
  height: 400px;
  margin: 30px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  transition: 0.5ms ease-in-out;
}

.container .card .content {
  padding: 20px;
  text-align: center;
  transform: translateY(100px);
  opacity: 0;
  transition: 400ms ease-in-out;
}

.container .card:hover .content {
  transform: translateY(0);
  opacity: 1;
}

.container__title {
  position: absolute;
  top: 30%;
  right: 30px;
  font-size: 4em;
  color: rgba(255, 255, 255, 0.04);
  pointer-events: none;
  opacity: 1;
  
}


.container .card .content h3 {
  font-size: 1.8em;
  color: #fff;
  z-index: 1;
}

.container .card .content p {
  font-size: 1em;
  color: #fff;
  font-weight: 300;
 
}

@media screen and (max-width: 768px) {
  .container .card .content {
  padding: 20px;
  text-align: center;
  transform: translateY(0);
  opacity: 1;
  
}
}

@media screen and (max-width: 600px) {

.container .card .content {
  padding: 20px;
  text-align: center;
  transform: translateY(0);
  opacity: 1;
  
}

.container__title {
  position: absolute;
  top: 30%;
  right: 30px;
  font-size: 4em;
  color: rgba(255, 255, 255, 0.04);
  pointer-events: none;
  opacity: 0;
  
}

.container .card .content h3 {
  font-size: 24px;
  color: #fff;
  position: relative;
  top: 15%;
  z-index: 1;
}

.container .card .content p {
  font-size: 14px;
  color: #fff;
  font-weight: 300;
 
}

}
</style>