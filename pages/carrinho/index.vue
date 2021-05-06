<template>
  <section class="shopping-cart mt-3">
    <h1 class="text-center primary-color text-capitalize font-weight-medium">
      Seu Carrinho
    </h1>
    <v-container>
      <v-row>
        <v-col cols="12" lg="8" md="7" sm="6">
          <v-card flat>
            <v-card-title
              >Você tem&nbsp;
              <b class="primary-color"> {{ getCartLength }} </b>&nbsp;item
              adicionado ao seu carrinho!</v-card-title
            >
          </v-card>

          <div class="pa-md-5">
            <form action="#" method="post">
              <div class="sc-list-head">
                <div class="text-right a-spacing-top-micro">
                  <span class="a-color-secondary">Preço</span>
                </div>
              </div>
              <!-- List of the item -->
              <div class="mb-2" v-for="product in getCart" :key="product._id">
                <v-row>
                  <!-- Product's Image -->
                  <v-col cols="12" sm="2">
                    <a href="#" class="a-link-normal">
                      <v-img :src="product.photo" />
                    </a>
                  </v-col>
                  <v-col cols="12" sm="8">
                    <!-- Product's Title -->
                    <div class="a-spacing-mini">
                      <a href="#"
                        ><h2 class="h3 font-weight-bold">
                          {{ product.title }}
                        </h2></a
                      >
                      <!-- Product's Owner name -->
                      <span class="text-details">Nome Do vendedor</span>
                    </div>
                    <div>
                      <span class="a-color-secondary font-weight-bold"></span>
                    </div>
                    <div></div>
                    <div
                      class="a-checkbox a-align-top a-size-small a-spacing-top-micro"
                    >
                      <div class="d-flex align-center mb-3">
                        <v-icon color="success" lass="mr-3">check</v-icon>
                        <v-icon color="primary" class="mr-3"
                          >card_giftcard</v-icon
                        >
                        <input type="checkbox" name="checkbox" />
                        <span class="ml-2 text-details">
                          Esse pedido contem um presente
                        </span>
                      </div>
                      <v-btn color="primary" class="mb-5" small
                        >Saiba Mais</v-btn
                      >
                    </div>

                    <div class="d-flex align-center">
                      <select @change="onChangeQuantity($event, product)">
                        <option
                          v-for="i in 10"
                          :key="i"
                          :value="i"
                          :selected="checkQty(product.quantity, i)"
                        >
                          Qtd: &nbsp; {{ i }}
                        </option>
                      </select>
                      &nbsp;&nbsp;
                      <span>|</span>
                      &nbsp;
                      <!-- Delete button -->
                      <v-icon @click="$store.commit('removeProduct', product)" color="error" size="19" class="ml-1 pt-1 pb-1"
                        >delete</v-icon
                      >
                      &nbsp; &nbsp;
                    </div>
                  </v-col>
                  <v-col cols="12" sm="2">
                    <!-- Product's Price -->
                    <p class="a-spacing-small">
                      <span
                        class="a-size-medium a-color-price sc-price sc-white-space-nowrap sc-product-price sc-price-sign a-text-bold"
                        >R$ {{ product.price * product.quantity }},00</span
                      >
                    </p>
                  </v-col>
                </v-row>
              </div>

              <!-- List of the item -->
              <div class="text-right">
                <!-- Cart Subtotal -->
                <p class="a-spacing-none a-spacing-top-mini">
                  <span class="a-size-medium">{{ getCartLength }}</span>
                  <span class="a-color-price a-text-bold">
                    <!-- Cart Total Price -->
                    <span class="a-size-medium a-color-price">R${{ getCartTotalPrice }}</span>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </v-col>
        <v-col cols="12" lg="4" md="5" sm="6">
          <v-card flat>
            
            <v-card-title class='primary--text d-flex'>
              <span class="text-left">Total de produtos:{{ getCartLength }}</span>
              <span>Total:${{ getCartTotalPrice }}</span>
            </v-card-title>
            <input type="checkbox" name="checkbox" />
            <span class="ml-2"> Esse pedido contem um presente </span>

            <v-btn color="primary" block href="#" class="a-button-text"
              >Ir para o pagamento</v-btn
            >
          </v-card>

          <!-- Recently Viewed -->
          <div class="a-spacing-large">
            <div class="a-box">
              <div class="a-box-inner">
                <h5 class="a-spacing-base">Seus itens vistos recentemente</h5>
                <div class="a-spacing-micro">
                  <ul class="a-unordered-list recently-viewed">
                    <li class="a-spacing-medium" v-for="i in 4" :key="i">
                      <span class="a-list-item">
                        <div class="row">
                          <div class="col-md-4 col-sm-3 col-3 pl-0">
                            <a href="#">
                              <img src="img/cartRecent4.png" class />
                            </a>
                          </div>
                          <div class="col-md-8 col-sm-9 col-9">
                            <a href="#" class="a-link-normal"
                              >The Everything Store:…</a
                            >
                            <div class="a-size-small">
                              <a href="#" class="a-size-small a-link-child"
                                >Brad Stone</a
                              >
                            </div>
                            <div class="a-icon-row a-spacing-none">
                              <a href="#">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                              </a>
                              <a href="#">155</a>
                            </div>
                            <div class="a-size-small">
                              <span class="a-size-small a-color-secondary"
                                >Kindle Edition</span
                              >
                            </div>
                            <div class="a-spacing-top-micro">
                              <span
                                class="a-button-inspired a-spacing-top-none a-button-base a-button-small"
                              >
                                <span class="a-button-inner">
                                  <a href="#" class="a-button-text"
                                    >See all buying options</a
                                  >
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
      isAGift: "",
      product: [],
    };
  },
  computed: {
    ...mapGetters(["getCart", "getCartLength", "getCartTotalPrice"]),
  },
  methods: {
    onChangeQuantity(event, product) {
      let qty = parseInt(event.target.value);
      this.$store.commit("changeQty", { product, qty });
    },
    checkQty(prodQty, qty) {
      if (parseInt(prodQty) === parseInt(qty)) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
.text-details {
  font-size: 12px;
}
</style>

