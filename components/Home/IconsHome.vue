<template>
  <div class="icons-home df-width">
    <img
      src="~/assets/imagens/home/tecnologias/01_aws.svg"
      class="img-aws"
      alt=""
    />
    <img
      src="~/assets/imagens/home/tecnologias/02_node.svg"
      class="img-icons"
      alt=""
    />
    <img
      src="~/assets/imagens/home/tecnologias/03_nuxt.svg"
      class="img-icons"
      alt=""
    />

    <img
      src="~/assets/imagens/home/tecnologias/04_vue.svg"
      class="img-icons"
      alt=""
    />

    <img
      src="~/assets/imagens/home/tecnologias/05_js.svg"
      class="img-icons"
      alt=""
    />
  </div>
</template>

<style scoped>
.icons-home {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-column-gap: 2em;
    align-items: center;
    justify-content: space-between;
}
.img-aws {
  width: 100px;
  height: auto;
  opacity: 0.19;
  margin-left: auto !important;
  margin-right: auto !important;
}
.img-icons {
  height: 80px;
  width: auto;
  opacity: 0.19;
  margin-left: auto !important;
  margin-right: auto !important;
}
</style>