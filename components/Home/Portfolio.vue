<template>
  <!-- All Products -->
  <section class="all-Portfolio">
    <v-container class="df-width">
      <h2
        class="h2 mb-12 text-center"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        Nosso <b>Portfólio</b>
      </h2>

      <v-row class="text-center">
        <v-col
          cols="12"
          md="4"
          lg="3"
          sm="6"
          v-for="item in allPortfolio"
          :key="item.id"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <a :href="item.link" target="_blank">
            <v-card flat>
              <v-img height="225px" :src="item.photo"></v-img>
              <h3 class="py-2">{{ item.title }}</h3>
            </v-card>
          </a>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  props: {
    allPortfolio: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style>
.all-Portfolio {
  padding: 3.8em 0 5em;
  background-color: var(--layout-color) !important;
}
</style>