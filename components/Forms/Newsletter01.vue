<template>
  <section id="news" data-aos="zoom-out" data-aos-duration="2100">
    <v-form
      @submit.prevent="addToNewsletter"
      label="fique por dentro das novidades"
    >
      <v-container class="df-width">
        <v-row class="news-bg">
          <v-col cols="12" md="12" xs="9" sm="6" class="mx-auto pa-0">
            <h2 class="py-5 solaris-title dark--text text-center">
              Fique por dentro das
              <span class="yellow--text text--darken-2">novidades</span>
            </h2>
          </v-col>
          <v-col cols="12" md="7" xs="9" sm="6" class="mx-auto pa-3">
            <v-text-field
              outlined
              v-model="email"
              label="Digite o seu email aqui"
            ></v-text-field>
            <div class="text-center">
              <v-btn
                type="submit"
                color="#313131"
                elevation="12"
                class="btn px-12 white--text btn-register"
                >Enviar</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <img
      src="~/assets/imagens/home/cities/2.png"
      width="100%"
      height="auto"
      class="pt-6"
    />
  </section>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
      }
    },
    methods: {
      async addToNewsletter() {
        try {
          let data = {
            email: this.email,
          }
          let newsletters = await this.$axios.$post('/api/newsletters', data)
          this.$swal(
            'Parabens!',
            'Seu email foi adicionado com sucesso!',
            'success',
          )
          this.newsletters.push(data)
        } catch (err) {
          console.log(err)
        }
      },
    },
  }
</script>

<style></style>
