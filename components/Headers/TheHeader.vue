<template>
  <div>
    <v-app-bar>
      <v-navigation-drawer
        width="25em"
        color="white"
        right
        v-model="drawer"
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
                <li v-for="item in servicos" :key="item.id">
                  <nuxt-link
                    class="black--text font-weight-medium"
                    :to="item.link"
                    >{{ item.text }}</nuxt-link
                  >
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-container>
      </v-navigation-drawer>
    </v-app-bar>

    <v-app-bar app flat color="transparent">
      <v-toolbar-title style="width: 300px" class="ml-12 pl-4">
        <div
          class="hidden-sm-and-down font-weight-bold grey--text text--lighten-3 letter-spacing-2 text-initial pr-2"
        >
          <nuxt-link to="/">
            <div class="primary--text">Logo</div>
          </nuxt-link>
        </div>
      </v-toolbar-title>

      <v-spacer />

      <v-app-bar-nav-icon
        color="primary"
        class="mr-12"
        light
        @click.stop="drawer = !drawer"
      />

      <template>
        <div class="white--text"></div>
      </template>
    </v-app-bar>
  </div>
</template>
<script>
  export default {}
</script>

<style scoped>
  .btn-login {
    font-family: var(---font);
    text-transform: initial;
    font-weight: 700;
    background-color: var(--primary-color) !important;
    border-color: var(--primary-color);
  }

  .btn-login-2 {
    font-family: var(--primary-font);
    text-transform: initial;
    font-weight: 700;
    border-radius: 100px;
    background-color: var(--primary-color) !important;
    border-color: #fff !important;
    color: #fff !important;
  }

  .flex-logo {
    display: flex;
    align-items: center;
  }

  .logo-default {
    width: 243px;
    height: auto;
  }

  .header-container {
    height: 60px;
    display: grid;
    align-items: center;
  }

  .nuxt-link,
  a {
    font-family: 'Montserrat', sans-serif;
    text-transform: none;
    text-decoration: none;
    font-size: 0.85rem;
    letter-spacing: 0.04em;
    color: white !important;
  }

  .custom-link {
    font-family: 'Montserrat', sans-serif;
    text-transform: none;
    text-decoration: none;
    font-size: 0.85rem;
    letter-spacing: 0.03em;
    color: #fff !important;
  }

  .the-header {
    font-size: 2rem;
    width: 85%;
    height: 72px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: transparent;
    z-index: 2;
    position: relative;
    margin: 0 auto;
    margin-top: 14px;
  }

  .logo {
    font-size: 1.2rem;
    letter-spacing: 4px;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
  }

  .logo a {
    text-decoration: none;
    color: white;
  }

  .flex-ul {
    display: flex;
    align-items: center;
  }

  .spacer {
    flex: 1;
  }

  .navigation-items {
    display: none;
  }
  .navigation-items a {
    color: #fafafa !important;
  }
  .navigation-items a:hover {
    color: var(--secondary-color) !important;
  }

  @media (min-width: 768px) {
    .navigation-items {
      display: block;
    }
  }

  .nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  .nav-item {
    margin: 0 10px;
  }

  .nav-item a {
    text-decoration: none;
  }

  .nav-item a:hover,
  .nav-item a:active,
  .nav-item a.nuxt-link-active {
    color: #fff !important;
  }

  .application a:hover {
    color: #fff;
  }

  .btn {
    border-radius: 100px;
    padding: 12px 30px;
  }

  li {
    list-style: none;
  }

  ul {
    font-family: 'Lato', sans-serif;
    font-size: 0;
    list-style-type: none;
  }

  ul li {
    font-size: 1rem;
    font-weight: 700;
    display: inline-block;
    padding: 13px;
    position: relative;
    padding-left: 5px !important;
  }

  ul li ul {
    display: none;
  }

  ul li:hover {
    cursor: pointer;
  }

  ul li:hover ul {
    display: block;
    left: 0;
    position: absolute;
  }

  ul li:hover ul li {
    display: block;
    visibility: visible;
    transition-delay: 0.1s;
    transition: 0.1s;
    line-height: 2px;
    font-size: 0.9rem;
  }

  ul li:hover ul li span {
    float: right;
    padding: 2px 5px;
    text-align: center;
    font-size: 0.8rem;
    border-radius: 3px;
    visibility: visible;
    transition-delay: 0.3s;
    transition: 0.3s;
  }

  .btn-custom {
    padding: 0.95em 2.3em;
    text-transform: none;
    border-radius: 30px;
  }

  .btn-custom {
    border-radius: 5px;
    background: transparent;
    font-size: 0.8rem !important;
    border: 2px solid rgba(216, 216, 216, 0.849);
  }

  .btn-custom:hover {
    background: var(--primary-color);
    transition-delay: 0.1s;
    transition-duration: 0.6s;
    border: 2px solid var(--primary-color);
  }

  @media only screen and (max-width: 420px) {
    .nuxt-link,
    a {
      font-size: 0.8rem;
    }

    ul li {
      font-size: 0.8rem;
      padding: 8px;
      position: relative;
      padding-left: 5px !important;
    }

    ul li ul {
      display: none;
    }

    .btn-custom {
      padding: 0.92em 2em;
      text-transform: none;
      border-radius: 30px;
    }

    .btn-custom {
      border-radius: 5px;
      background: transparent;
      font-size: 0.59rem !important;
      border: 2px solid rgb(238, 238, 238);
    }

    .logo-default {
      padding-top: 5px;
      width: 195px;
      height: auto;
    }
  }
</style>
