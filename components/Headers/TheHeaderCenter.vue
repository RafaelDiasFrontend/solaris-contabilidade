<template>

<v-app-bar>
  <v-navigation-drawer
    width="25em"
    color="white"
    right
    v-model="drawer"
    :clipped="$vuetify.breakpoint.lgAndUp"
    app
    tile
    flat
    temporary
    :class="{ darkColor: themeDark }"
    dark
  >
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="11">
          <div class="text-left h2 font-weight-bold black--text pt-12">
            Logo<br />
          </div>
          <div class="mt-12 black--text font-weight-bold h3">Serviços</div>
          <ul class="px-0 mt-2">
            <li>
              <a
                class="black--text font-weight-medium"
                
                ></a
              >
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </v-navigation-drawer>  
  </v-app-bar>
</template>