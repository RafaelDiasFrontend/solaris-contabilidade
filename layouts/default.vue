<template>
  <v-app id="inspire">
    <v-container>
      <v-app-bar       
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        flat
        color="transparent"
        class="align-center"
      >
        <v-toolbar-title style="width: 300px" class="ml-12 pl-4">
          <div
            class="font-weight-bold grey--text text--lighten-3 letter-spacing-2 text-initial pr-2"
          >
            <nuxt-link to="/">
              <div class="text-logo yellow--text text--darken-1">Kpax</div>
            </nuxt-link>
          </div>
        </v-toolbar-title>

        <v-spacer />
        <ul class="k-nav mr-12 pr-4 yellow--text text--darken-1 hidden-md-and-down">
          <a href="#about" v-smooth-scroll="{ offset: -140, duration: 1400 }">
            <li>Sobre</li>
          </a>

          <a href="#about" v-smooth-scroll="{ duration: 1800 }">
            <li>Serviços</li>
          </a>

          <a href="#contact" v-smooth-scroll="{ duration: 1800 }">
            <li>Contato</li>
          </a>
      
          <a href="#testimonials" v-smooth-scroll="{ duration: 1400 }">
            <li>Depoimentos</li>
          </a>
          <a href="#news" v-smooth-scroll="{ offset: -40, duration: 1400 }">
            <li>Cadastre-se</li>
          </a>
        </ul>         

        <v-app-bar-nav-icon
          class='hidden-lg-and-up mr-12' 
          color="primary"
         
          light
          @click.stop="drawer = !drawer"
        />

        <template>
          <div class="white--text"></div>
        </template>
      </v-app-bar>    
    </v-container>    


  <v-navigation-drawer   
      class='hidden-lg-and-up'
      color="white"
      right
      v-model="drawer"      
      :clipped="$vuetify.breakpoint.lgAndDown"
      app
      tile
      flat
      temporary     
      light
    >    
        <v-list dense class='pt-12'>
        <!-- <a :href="slugs"></a> -->
        <template v-for="item in items" router :to="item.route">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-col>
          </v-row>

          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
              router
              :to="child.route"
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.text" router :to="item.route">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>    
    </v-navigation-drawer>

   
    
       

       
      
    <v-main>
      <Nuxt />
    </v-main>
    <Footer01 />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

import Footer01 from "@/components/Footers/Footer01";
export default {
  props: {
    source: String,
  },
  components: {    
    Footer01
  },
  methods: {
    async signOut() {
      await this.$auth.logout();
    },
  },
  computed: {
    ...mapGetters(["getCartLength"]),
  },
  data: () => ({
    drawer: true,
    menu: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ], 
     
    messages: 11,
    dialog: false,
    themePrimary: true,
    themeDark: false,

    themePrimary: true,
    drawer: false,
    slugs: "",

    items: [
      {
       
        text: "Sobre",
        name: "Sobre",
        route: "#about",
      },   
      
      {
     
        text: "Serviços",
        name: "Serviços",
        route: "#services",
      },
      {
       
        text: "Contato",
        name: "Contato",
        route: "#contact",
      },
      {
        
        text: "Depoimentos",
        name: "Depoimentos",
        route: "#testimonials",
      },
       {
      
        text: "Cadastre-se",
        name: "Cadastre-se",
        route: "#news",
      },
      
      
    ],
  }),
};
</script>

<style>
#kpax .theme--light.v-btn:hover::before {
  opacity: 0;
}

.k-nav {
  display: flex;
}
.k-nav li {
  text-rendering: optimizeLegibility;

  font-weight: 500;
  justify-content: flex-start;
  margin-right: 1.8em;
  font-size: 0.825rem;
}
.k-nav li:hover {
  color: #f4ed2a !important;
  transition: all 0.3s ease;
}
.k-nav .v-btn {
  text-transform: initial;
}
.k-nav .v-btn:hover {
  background: none;
  color: black;
}

.text-logo { 
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1px;
  font-family: var(--primary-font);
}

.theme-color-change {
  padding-top: 8.6em;
}
.darkColor {
  background-color: #161616 !important;
}
.lightColor {
  background-color: #c9c9c9 !important;
}
.inspire {
  background-color: #6a737d !important;
}
.bg-content {
  background-color: #f1f2f7;
}
.width-95 {
  max-width: 95%;
}
.custom-padding {
  padding: 5em 1em !important;
}
.custom-card {
  padding: 3.8em 0 5.2em 0em;
}
.pa-custom {
  padding: 1.6em 1em;
}
.k-footer {
  background: #ebf8ff !important;
  color: var(--primary-color) !important;
}


</style>
