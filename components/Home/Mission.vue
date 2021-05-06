<template>
  <section id="mission">
    <div class='mission_grid'>    
      <!-- Mission -->
      <div class="mission_box yellow--text text--darken-2" data-aos="zoom-in"
          data-aos-duration="1500">
          Missão  
      </div>      
          <p>
            Fazer nosso cliente crescer exponencialmente, através dos números
            produzidos por nossa contabilidade.
          </p>     
      <!-- Vision -->
      <div class="mission_box yellow--text text--darken-2" data-aos="zoom-in"
          data-aos-duration="2000">
          Visão
      </div>     
        <p>
            Ser referência em organização contábil e consultoria,
            transparencia com os nossos clientes
          </p>      
      <div class="mission_box yellow--text text--darken-2" data-aos="zoom-in"
          data-aos-duration="2000">
          Valores 
      </div>
        <p>
            Ética, Segurança, Responsabilidade, Confiabilidade, Competência e
            Respeito.
          </p>
    </div>      
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#mission {
  margin: 0 auto;
  background: white !important;
}
.h2-custom {
  font-size: 1.7rem;
  font-weight: 900;
}
.services_container {
  max-width: 1380px;
}
.mission_grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  justify-content: center;
}
.mission_box {
  background: var(--dark);
  display: flex;
  justify-content: center;
  padding: 4em 0;
  font-size: 1.3rem;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
}
#mission p {
  margin: 0 auto;
  display: flex;
  text-align: center;
  align-items: center;
  font-size: 0.84rem;
  max-width: 82%;
  margin-left: auto;
  margin-right: auto;
  color: #747474;
  font-weight: 400;
  
}
</style>