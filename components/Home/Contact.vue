<template>
  <section id="contact" class="contact">
    <v-container>
      <v-row justify="center" class="contact-grid">
        <v-col cols="12" xs="5" sm="8" md="10" lg="8" xl="5">
          <v-card elevation="11" dark class="login-card">
            <h2
              class="h2 text-uppercase text-center font-weight-bold mb-5 white--text"
            >
              Contato
            </h2>
            <v-form
              @submit.prevent="handleContactFormSubmit"
              class="login-form mt-2"
            >
              <v-row>
                <!-- Nome -->
                <v-col cols="12" md="6">
                  <v-text-field
                    outlined
                    label="Nome"
                    append-icon="face"
                    v-model="form.name"
                  ></v-text-field>
                </v-col>
                <!-- Email -->
                <v-col cols="12" md="6">
                  <v-text-field
                    outlined
                    label="E-mail"
                    append-icon="email"
                    v-model="form.email"
                    :rules="emailRules"
                  ></v-text-field>
                </v-col>
              </v-row>

              <!-- Assunto -->
              <v-text-field
                outlined
                label="Assunto"
                append-icon="subject"
                v-model="form.subject"
              ></v-text-field>
              <!-- Password -->
              <v-textarea
                outlined
                label="Mensagem"
                rows="4"
                append-icon="chat_bubble"
                v-model="form.message"
              ></v-textarea>
              <!-- Submit -->
              <v-btn
                :loading="isLoading"
                :class="{ 'btn-loading': isLoading }"
                type="submit"
                block
                class="black--text font-weight-bold"
                color="yellow darken-1"
                >Enviar</v-btn
              >
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
  const WEB3FORMS_ACCESS_KEY = '6130e23b-0df3-4bd7-8abb-d04d89af3795'
  export default {
    data() {
      return {
        isLoading: false,
        form: {
          name: '',
          email: '',
          subject: '',
          message: '',
        },
        emailRules: [
          (v) => !!v || 'O email é obrigatório',
          (v) => /.+@.+\..+/.test(v) || 'O email deve ser válido',
        ],
      }
    },
    methods: {
      resetForm() {
        this.form.name = ''
        this.form.email = ''
        this.form.subject = ''
        this.form.message = ''
      },

      async handleContactFormSubmit() {
        try {
          this.isLoading = true
          const data = {
            access_key: WEB3FORMS_ACCESS_KEY,
            email: this.form.email,
            from_name: this.form.email,
            message: this.form.message,
          }
          await this.$axios.$post('https://api.web3forms.com/submit', data)
          this.$swal(
            'Parabens!',
            'Sua mensagem foi enviada com sucesso!',
            'success',
          )
        } catch (err) {
          console.log(err)
          this.$swal(
            'Ops ocorreu um erro!',
            'Atualiza a página e tente novamente por favor...',
            'error',
          )
        } finally {
          this.resetForm()
          this.isLoading = false
        }
      },
    },
  }
</script>

<style scoped>
  .contact {
    z-index: -99;
    min-height: 100vh;
    height: 100vh;
    background-image: url('~assets/imagens/login/background_login3.jpg');
    background-size: cover;
    background-position: top;
    display: grid;
    grid-template-columns: 1fr;
    height: 100vh;
    display: grid;
    align-items: center;
  }
  .img-hero {
    width: 699px;
    height: auto;
  }

  .login-card {
    padding: 5em 8em;
    background: rgba(0, 0, 0, 0.441) !important;
    box-shadow: inset 2px 2px 3px #fff, 2px 2px 3px #333;
  }

  .btn-loading {
    background-color: #ccc; /* Adapte a cor conforme necessário */
    cursor: not-allowed;
  }

  .login-card {
    padding: 5.5em 6em;
  }
  /* Desktop */
  @media only screen and (max-width: 680px) {
    .contact {
      padding: 2em 0;
      height: auto;
    }

    .login-card {
      padding: 3em 4em;
    }

    .h2 {
      font-size: 1.5rem;
      text-align: center;
    }

    .login-card {
      padding: 4em;
    }
  }
</style>
