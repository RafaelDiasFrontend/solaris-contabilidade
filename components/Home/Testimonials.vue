  <template>
  <section id="testimonials">
    <v-container data-aos="fade-up" data-aos-duration="1500">
      <h2 class="solaris-title mb-8 text-center solaris-title">
        O que falam sobre <span class="yellow--text text--darken-2">Nós</span>
      </h2>
      <v-row>
        <v-col cols="12" md="9" sm='11' class="mx-auto">
          <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
            light
           
          >
            <v-carousel-item v-for="item in allTestimonials" :key="item.id">
              <v-sheet height="100%" class="pt-12 transparent">
                <v-container
                  class="d-flex flex-column align-center text-center justify-center"
                >
                  <v-avatar size="150" class="testimonial-avatar pb-5">
                    <img :src="item.photo" alt="John" />
                  </v-avatar>
                  <h3 class="h3 font-weight-bold mb-2 dark-color">
                    {{ item.name }}
                  </h3>
                  <p class="p px-12 grey--text">
                    {{ item.text }}
                  </p>
                </v-container>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  props: {
    allTestimonials: {
      required: true,
      Type: Array,
    },
  },
};
</script>


<style>
#testimonials {
 
  padding: 5em 0 0.2em;
}
.testimonial-avatar {
  margin: 0 auto;
  margin-bottom: 18px;
}
.p {
  max-width: 800px;
  margin: 0 auto;
}
</style>