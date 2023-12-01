<template>
  <section id="services">
    <v-container fluid>
      <h2
        class="solaris-title mb-12 white--text text-center"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        Nossos <span class="yellow--text text--darken-2">Serviços</span>
      </h2>

      <div class="services-grid">
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          v-for="item in services"
          :key="item.id"
        >
          <v-card elevation="15" class="services-card" max-width="220px">
            <img :src="item.photo" class="services_img" alt="servicos" />

            <h3 class="services_title mb-2">{{ item.text }}</h3>
            <div class="grey--text services_p text-center">
              {{ item.paragraph }}
            </div>
          </v-card>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        services: [
          {
            photo: require('~/assets/imagens/home/servicos/1.jpg'),
            text: 'Fiscal',
            link: '/fiscal',
            paragraph:
              'Apuração dos tributos de acordo com regime tributário, elaboração e entrega das obrigações, planejamento tributário e muito.',
          },
          {
            photo: require('~/assets/imagens/home/servicos/2.jpg'),
            text: 'Contabil',
            link: '/contabil',
            paragraph:
              'Melhores atendimentos na contabilização e conciliação contábil mensal, balanço contábil anual e demonstrativo de resultados anuais',
          },
          {
            photo: require('~/assets/imagens/home/servicos/3.jpg'),
            text: 'Trabalhista',
            link: 'trabalhista-e-previdenciario',
            paragraph:
              'Cálculo mensal da folha de pagamento e pró-labore, apuração mensal dos encargos trabalhistas e a apuração mensal dos encargos sociais.',
          },
          {
            photo: require('~/assets/imagens/home/servicos/4.jpg'),
            text: 'BPO  Financeiro',
            link: '/bpo-financeiro',
            paragraph:
              'Organização do financeiro, demonstração de um balancete mensal com despesas, análise empresarial diferencial sobre seu dinheiro.',
          },
        ],
      }
    },
  }
</script>

<style scoped>
  #services {
    padding: 3.8em 0 6em;
    width: 100%;
    margin: 0 auto;
    background-color: var(--dark);
  }

  .services-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.1em;
  }

  .services_img {
    width: 100%;
    height: 100%;
    margin-bottom: 0.4em;
  }
  .services_title {
    font-size: 0.9rem;
    font-weight: 700 !important;
    text-transform: uppercase;
    text-align: center;
    color: #313131;
  }
  .services_p {
    font-size: 0.84rem;
    max-width: 78%;
    margin-left: auto;
    margin-right: auto;
    color: #313131;
    font-weight: 400;
    padding-bottom: 1.65em;
  }

  @media only screen and (max-width: 600px) {
    .services-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin: 0 1.2em;
    }
  }
</style>
