<template>
  <div class="reviewPage mt-3">
    <v-container class="container-fluid c-section">
      <v-row class="row">
        <v-col cols="12" sm="2"></v-col>
        <v-col class="col-sm-8">
          <div class="a-spacing-top-medium">
            <h1 class="h1">Criar avaliação</h1>
            <v-row class="row">
              <!-- Product Photo -->
              <div class="col-md-2 col-sm-3 col-3">
                <img :src="product.photo" style="width: 80px" />
              </div>
              <!-- Product Title -->
              <div class="col-md-10 col-sm-9 col-9 m-auto">
                <h4>
                  <b>{{ product.title }}</b>
                </h4>
              </div>
            </v-row>
            <div class="a-spacing-top-medium"></div>
            <hr />

            <hr />

            <!-- Body -->
            <div class="a-spacing-base">
              <h2 class="h2 dark-color a-spacing-base">
                Escreva a sua revisão
              </h2>
              <v-form>
                <div class="d-flex align-center">
                  <v-rating
                    v-model="rating"
                    background-color="yellow accent-4"
                    color="yellow accent-4"
                    dense
                    half-increments
                    hover
                    size="44"
                  ></v-rating>
                  <span class="ml-3"> ({{ rating }}) </span>
                </div>
                {{ product._id }}
                <h2 class="h2 dark-color">Classifique o Produto</h2>

                <v-textarea
                  solo
                  flat
                  v-model="body"
                  label="Descrição"
                ></v-textarea>
                <v-btn @click="onAddReview" large color="primary">Enviar</v-btn>
              </v-form>
            </div>
          </div>
        </v-col>
        <div class="col-sm-2"></div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: [],
      rating: 0,
      body: "",
    };
  },
  methods: {
    async onAddReview() {
      try {
        let data = {
          rating: this.rating,
          body: this.body,
        };

        let result = await this.$axios.$post(
          `/api/reviews/${this.product._id}`,
          data
        );
        if (result.success) {
          this.$router.push(`/produtos/${this.$route.params.id}`);
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  // Async Data
  async asyncData({ $axios, params }) {
    try {
      let response = await $axios.$get(`/api/products/${params.id}`);
      return {
        product: response.product,
      };
    } catch (err) {
      console.log(err);
    }
  },
};
</script>