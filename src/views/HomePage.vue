<template>
  <div id="home">
    <v-container grid-list-xl class="home__container">
      <v-layout row wrap style="height: 50%">
        <v-flex md8 sm12 lg6 offset-xs1 offset-md0 >
          <div class="">
            <p class="home__boas-vindas">Ola. Seja bem vindo!</p>
            <br />
            <p id="home__boas-vindas-ID" class="typing-animation">
              Eu sou o Elias
            </p>
            <br />
            <p class="home__boas-vindas">e este é meu portfólio</p>
          </div>
        </v-flex>
        <v-flex md4 sm6 lg6 offset-xs3 offset-md0 xs8>
          <v-img
            v-scroll-reveal
            class="home__image"
            src="../assets/imagens/avatarPortifolio (2).png"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            aspect-ratio="1"
          >
          </v-img>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {};
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  background-image: url("../assets/gifs/backgroundGif.webp");
  background-attachment: fixed;
  background-size: cover;
}

.home__container {
  position: relative;
  top: 30%;
  width: 80%;
  margin: auto;
}

.home__start {
  width: 70%;
  height: 50%;

  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.home__image {
  width: 50%;
  animation: animationAvatar 4000ms infinite linear;
}

.home__texto-apresentacao {
  color: white;
  width: 30%;
  position: absolute;
  left: 5%;
}

.home__boas-vindas {
  font-size: clamp(1.1em, 2vw + 1em, 2rem);
  color: white;
  font-family: "Chelsea Market", cursive;
  position: relative;
}

#home__boas-vindas-ID {
  font-size: clamp(1.1em, 4vw + 1em, 3rem);
  color: #f2be22;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  white-space: nowrap;
  overflow: hidden;
  font-family: "Chelsea Market", cursive;
}

.typing-animation {
  animation: blinkCursor 500ms steps(40) infinite normal,
    typing 1.8s steps(40) 1s normal both;
}

@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 70%;
  }
}

@keyframes blinkCursor {
  from {
    border-right-color: rgba(255, 255, 255, 0.75);
  }

  to {
    border-right-color: transparent;
  }
}

@keyframes animationAvatar {
  0% {
    bottom: 0;
  }

  50% {
    bottom: 20px;
  }

  100% {
    bottom: 0;
  }
}
</style>