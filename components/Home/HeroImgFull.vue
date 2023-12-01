<template>
  <section class="hero__banner">
    <div class="hero__grid">
      <div class="text-center pa-5">
        <h2
          class="h1 text-center pt-15 mb-3 grey--text text--lighten-2 font-weight-black"
        >
          VEJA SUA EMPRESA<br />
          <span class="yellow--text text--darken-2">DISPARAR NO MERCADO</span>
        </h2>
      </div>
      <div class="hero__arrow arrow-div d-mobile">
        <ArrowScrolldownButton />
      </div>
    </div>
  </section>
</template>

<script>
  import ArrowScrolldownButton from '@/components/Buttons/ArrowScrolldownButton'

  export default {
    components: {
      ArrowScrolldownButton,
    },
  }
</script>

<style scoped lang="scss">
  .hero {
    &__banner {
      background-image: url('~assets/imagens/hero5.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      min-height: 101vh;
      z-index: -999;
      margin-top: -89px;
      width: 100%;
      background-position: top;
    }

    &__grid {
      width: 100vw;
      height: 101vh;
      background: linear-gradient(
        90deg,
        rgba(28, 28, 28, 0.71) 0%,
        rgba(33, 33, 33, 0.71) 62%,
        rgba(13, 13, 13, 0.71) 100%
      );
      z-index: 20;
      display: grid;
      grid-template-rows: 83% 17%;
      align-items: center;
      justify-content: center;
    }

    &__arrow {
      margin-top: 3em !important;
      display: grid;
      justify-content: center;
      align-content: center;
    }
  }

  /* SM */
  @media only screen and (max-width: 600px) {
    .hero__banner {
      background-image: url('~assets/imagens/hero-sm.jpg');
      // Restante dos estilos para a versão mobile
    }

    .h1 {
      font-size: 2rem;
    }

    .hero__grid {
      height: 101vh;
      background: linear-gradient(
        90deg,
        rgba(28, 28, 28, 0.71) 0%,
        rgba(33, 33, 33, 0.71) 54%,
        rgba(13, 13, 13, 0.71) 100%
      );
      z-index: 20;
      display: grid;
      align-items: center;
      justify-content: center;
    }
  }
</style>
