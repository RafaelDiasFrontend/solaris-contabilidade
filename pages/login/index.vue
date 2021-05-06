<template>
  <section class="login">
    <h1 class="d-none">Agência de Marketing Digital Santos</h1>
    <v-container>
      <v-row justify="center" class="login-grid">
        <v-col cols="12" xs="5" sm="5" md="5" lg="5" xl="4">
          <v-card elevation="11" dark class="login-card">
            <h2
              class="h2 text-uppercase text-center font-weight-bold mb-5 white--text"
            >
              Login
            </h2>
            <v-form  @submit.prevent="login" class="login-form mt-2">
              <!-- Email -->
              <v-text-field                   
               
                label="email"
                append-icon="email"
                v-model="email"
                :rules="emailRules"
           
              ></v-text-field>
              <!-- Password -->
              <v-text-field
                     
                dark
                label="senha"
                v-model="password"
                :type="show1 ? 'text' : 'password'"
                :append-icon="show1 ? 'visibility' : 'visibility_off'"
                @click:append="show1 = !show1"
              ></v-text-field>
              <!-- Submit -->
              <v-btn type="submit" block class='black--text font-weight-bold' color="yellow darken-1">Login</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import DefaultLogo from "@/components/Logos/DefaultLogo";

export default {
  layout: "loginRegister",
  middleware: "auth",
  auth: "guest",
  components: {
    DefaultLogo,
  },
  data() {
    return {
      show1: false,
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
    async login() {
      this.$auth
        .loginWith("local", {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        .then(() => {
          this.$swal({
            position: "top-end",
            icon: "success",
            title: "Login efetuado com sucesso",
            showConfirmButton: true,
            timer: 1000,
          });
          this.$router.push("/admin");
        })
        .catch(() => {
          this.$swal({
            position: "top-end",
            icon: "error",
            title: "Não foi possível fazer o login",
            showConfirmButton: false,
            timer: 2000,
          });
          this.$router.push("/login");
        });
    },
  },
};
</script>

<style>
.login {
  z-index: -99;
  min-height: 100vh;
  height: 100vh;
  background-image: url("~assets/imagens/login/background_login2.jpg");
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
  box-shadow: inset 2px 2px 3px #FFF, 2px 2px 3px #333;
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
  .login-card {
  padding: 3em 4em; 
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
  