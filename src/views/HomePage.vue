<template>
  <div id="home">
    <v-container grid-list-xl class="home__container">
      <v-layout row wrap style="height: 50%">
        <v-flex md8 sm12 lg6 offset-xs1 offset-md0>
          <div class="">
            <p class="home__boas-vindas">Olá. Seja bem vindo!</p>
            <br />
            <p id="home__boas-vindas-ID" class="typing-animation">
              Eu sou o Elias
            </p>
            <br />
            <p class="home__boas-vindas">e este é meu portfólio</p>
          </div>
          <v-flex v-scroll-reveal>
            <p class="home__titulo">Front-End Developer</p>
          </v-flex>
        </v-flex>
        <v-flex md4 sm6 lg6 offset-xs3 offset-md0 xs8>
          <v-img
            class="home__image"
            src="../../static/avatar/avatarPortifolio (2).png"
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
@import url("https://fonts.googleapis.com/css2?family=Alumni+Sans+Inline+One:ital@1&family=Jura:wght@500&family=Mouse+Memoirs&display=swap");
#home {
  height: 100vh;
  background-image: url("../../static/gifs/backgroundGif.webp");
  background-attachment: fixed;
  background-size: cover;
}

.home__container {
  position: relative;
  top: 25%;
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
    width: 50%;
  }
}

@media screen and (max-width: 780px) {
  @keyframes typing {
    from {
      width: 0;
    }

    to {
      width: 80%;
    }
  }

  .home__container {
    position: relative;
    top: 10%;
    width: 80%;
    margin: auto;
  }
}

.home__image {
  width: 80%;
  animation: animationAvatar 4000ms infinite linear;
}

.home__titulo {
  font-family: "Jura", sans-serif;
  font-size: 1.3rem;
  color: white;
}
@media screen and (max-width: 1024px) {
  @keyframes typing {
    from {
      width: 0;
    }

    to {
      width: 85%;
    }
  }
}

.home__image {
  width: 50%;
  animation: animationAvatar 4000ms infinite linear;
}

@media screen and (max-width: 1920px) {
  @keyframes typing {
    from {
      width: 0;
    }

    to {
      width: 65%;
    }
  }
}



@media screen and (max-width: 1440px) {
  @keyframes typing {
    from {
      width: 0;
    }

    to {
      width: 75%;
    }
  }
}
@media screen and (max-width: 600px) {
  @keyframes typing {
    from {
      width: 0;
    }

    to {
      width: 90%;
    }
  }

  .home__titulo {
    font-family: "Jura", sans-serif;
    font-size: 12px;
    color: white;
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

@media screen and (max-width: 320px) {
  @keyframes typing {
    from {
      width: 0;
    }

    to {
      width: 100%;
    }
  }

  .home__titulo {
    font-family: "Jura", sans-serif;
    font-size: 12px;
    color: white;
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