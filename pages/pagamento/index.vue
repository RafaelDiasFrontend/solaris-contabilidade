<template>
  <section class="registerAddress mt-12">
    <v-container class="">
      <v-row>
        <v-col cols="12" md="6" lg="4">
          <v-card flat>
            <v-container class="pa-lg-12 pa-6 payment-container">
              <h2 class="h2">Realizar Pagamento</h2>
              <div class="text-left dark-color font-weight-medium">
                O preço total é R$ {{ getCartTotalPriceWithShipping }}
              </div>
              <!-- Stripe Card -->

              <div ref="card"></div>

              <nuxt-link to="#" href="" class="grey--text">
                Verifique se o seu endereço está correto
              </nuxt-link>
              <v-form action="#" method="post">
                <v-btn
                  @click.prevent="onPurchase"
                  large
                  flat
                  color="primary mt-3"
                  >Realizar pagamento</v-btn
                >
              </v-form>
            </v-container>
          </v-card>
          <!-- Error message  -->
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      error: "",
      stripe: null,
      card: null,
    };
  },
  computed: {
    ...mapGetters([
      "getCart",
      "getCartTotalPriceWithShipping",
      "getEstimatedDelivery",
    ]),
  },
  mounted() {
    this.stripe = Stripe(
      "pk_test_51HM3c5HvE88c1UOuAeDh3JjBJ4mnxQQYVXuccXrv3vkmHPaWY2HxFogGbFhzIVsMK6d16ssoH5juTsp27i1u9ycf00P903f9Jn"
    );
    let elements = this.stripe.elements();
    this.card = elements.create("card");
    this.card.mount(this.$refs.card);
  },
  methods: {
    async onPurchase() {
      try {
        let token = await this.stripe.createToken(this.card);
        let response = await this.$axios.$post("/api/payment", {
          token: token,
          totalPrice: this.getCartTotalPriceWithShipping,
          cart: this.getCart,
          estimatedDelivery: this.getEstimatedDelivery,
        });
        if (response.success) {
          // Do something like redirecting to the home page
          this.$store.commit("clearCart");
          this.$router.push("/");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style>
.payment-container {
  display: flex;
  flex-direction: column;
  gap: 0.7em;
}

.StripeElement {
  box-sizing: border-box;
  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
</style>