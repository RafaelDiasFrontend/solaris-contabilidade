<template>
  <section class="login">
    <h1 class="d-none">Registro</h1>
    <v-container>
      <v-row justify="center" class="login-grid">
        <v-col cols="12" xs="8" sm="8" md="7" lg="6" xl="4">
          <v-card elevation="11" dark class="login-card reg-mg">
            <h2 class="h2 font-weight-bold text-center text-uppercase white--text py-5">Registro</h2>
            <v-form
              action=""
              @submit.prevent="register"
              class="login-form mt-2"
            >
              <!-- Name -->
              <v-text-field
              
                label="Nome"
                append-icon="face"
                v-model="name"
                class='mb-1'
              ></v-text-field>
              <!-- Email -->
              <v-text-field
                label="email"
                append-icon="email"
                v-model="email"
                :rules="emailRules"
                class='mb-1'
              ></v-text-field>
              <!-- Password -->
              <v-text-field
                class='mb-1'
                label="senha"
                v-model="password"
                :type="show1 ? 'text' : 'password'"
                :append-icon="show1 ? 'visibility' : 'visibility_off'"
                @click:append="show1 = !show1"
              ></v-text-field>
              <!-- Submit -->
              <v-btn type="submit" block color="primary">Registrar</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  layout: "loginRegister",
  middleware: "auth",
  auth: "guest",

  data() {
    return {
      show1: false,
      name: "",
      email: "",
      password: "",
      // Rules
      emailRules: [
        (v) => !!v || "O email é obrigatório",
        (v) => /.+@.+\..+/.test(v) || "O email deve ser válido",
      ],
    };
  },
  methods: {
    async register() {
      try {
        let data = {
          name: this.name,
          email: this.email,
          password: this.password,
        };

        let response = await this.$axios.$post("/api/auth/signup", data);
        console.log(response);

        if (response.success) {
          this.$auth.loginWith("local", {
            data: {
              email: this.email,
              password: this.password,
            },
          });
          this.$swal(
            "Parabens!",
            "Seu cadastro foi efetuado com sucesso",
            "success"
          );
          this.$router.push("/admin");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.login {
  background: url('~assets/imagens/login/background_login2.jpg');
  z-index: -99;
    min-height: 100vh;
    height: 100vh;
    background-image: linear-gradient(295deg, rgba(29, 31, 34, 0.164) 0%, rgba(61, 92, 124, 0.089) 0%, rgba(26, 24, 27, 0.151) 100%, rgba(46, 46, 46, 0.342) 100%),
     url('~assets/imagens/login/background_login2.jpg');
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
  padding: 8em 9em;
  background: rgba(26, 26, 26, 0.578)!important;
  border: 2px solid rgba(250, 24, 24, 0.384)!important;
}

/* Desktop */
@media only screen and (max-width: 1390px) {
  .img-hero {
    width: 499px;
    height: auto;
  }
}
.login-card {
  padding: 5.5em 6em;
}
/* Desktop */
@media only screen and (max-width: 680px) {
  .container {
    width: 95%;
  }

  .login {
    display: flex;
  }
  .h2 {
    font-size: 1.5rem;
    text-align: center;
  }
  .img-hero {
    width: 499px;
    height: auto;
  }
  .login-card {
    padding: 4em;
  }
  .img-hero {
    display: none;
  }
}
</style>

  