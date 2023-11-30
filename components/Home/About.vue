<template>
  <section id="about">
    <v-container class="df-width">
      <v-row>
        <v-col cols="12" md="5" class="text-left">
          <img
            class="elevation-13"
            src="~/assets/imagens/home/solaris.jpg"
            width="auto"
            alt="contabilidade-financeira-em-santos"
            data-aos="fade-right"
            data-aos-duration="1500"
          />
        </v-col>
        <v-col
          cols="12"
          sm="12"
          offset="1"
          md="6"
          data-aos="fade-left"
          data-aos-duration="1800"
        >
          <h2 class="solaris-title mb-6">
            sobre
            <span class="yellow--text text--darken-1">nós</span>
          </h2>
          <p class="about-p mb-6">
            Somos a Solaris, e sabemos que a contabilidade se torna cada vez
            mais uma ferramenta indispensável para administração do seu negócio.
            E o serviço contratado precisa ir além do simples lançamento diário,
            dos cálculos, dos impostos e do cumprimento da legalidade.
            Acreditando nisso, a Solaris contabilidade vem trabalhando duro a
            favor da saúde financeira empresarial. Hoje contamos com uma equipe
            de profissionais motivados e empenhados, que se preocupam em
            conduzir as empresas de todos os portes, e dos mais variados
            segmentos para a melhoria de sua gestão. Além disso, a empresa
            oferece serviços de consultoria no Guarujá, e serviços online,
            sempre pensando na melhoria contínua da satisfação de nossos
            clientes.
          </p>
        </v-col>
        <p></p>
      </v-row>
    </v-container>
  </section>
</template>
<script>
  export default {}
</script>

<style scoped>
  #about {
    padding: 6em 0;
  }

  .about-p {
    font-size: 0.9rem;
    line-height: 1.8;
    color: #828282;
    width: 90%;
  }
  @media only screen and (min-width: 1904px) {
    .about-p {
      font-size: 0.95rem;
      width: 92%;
    }
  }
  @media only screen and (max-width: 904px) {
    #about img {
      display: none;
    }
  }

  @media only screen and (max-width: 680px) {
    .about-p {
      font-size: 0.8rem;
      line-height: 1.7;
    }
    #about {
      padding: 0.5em 0;
    }
    #about img {
      display: none;
    }
  }
</style>
