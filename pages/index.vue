<template>
  <div class="">
    <h1 class="text-left d-none">Contabilidade e Consultoria no Guarujá</h1>
    <p class="d-none">Contabilidade e Consultoria no Guarujá</p>
    <HeroImgFull />
    <About />
    <Services />
    <Contact />
    <Mission />
    <Testimonials :allTestimonials="testimonials" />

    <Newsletter01 />
  </div>
</template>

<script>
  import HeroImgFull from '@/components/Home/HeroImgFull'
  import Contact from '@/components/Home/Contact'
  import IconsHome from '@/components/Home/IconsHome'
  import About from '@/components/Home/About'
  import Mission from '@/components/Home/Mission'
  import Services from '@/components/Home/Services'
  import Testimonials from '@/components/Home/Testimonials'
  import Newsletter01 from '@/components/Forms/Newsletter01'
  export default {
    head() {
      return {
        script: [{ type: 'application/ld+json', json: this.structuredData }],
        title: this.title,
        image: this.image,
        link: [
          {
            rel: 'canonical',
            href: 'http://solariscontabilidade.com.br',
          },
        ],
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.description,
          },
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: this.title,
          },
          {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: this.description,
          },
          {
            hid: 'twitter:image',
            name: 'twitter:image',
            content: this.image,
          },
          {
            hid: 'twitter:image:alt',
            name: 'twitter:image:alt',
            content: this.title,
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: this.title,
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.description,
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: this.image,
          },
          {
            hid: 'og:image:secure_url',
            property: 'og:image:secure_url',
            content: this.image,
          },
          {
            hid: 'og:image:alt',
            property: 'og:image:alt',
            content: this.title,
          },
        ],
      }
    },
    components: {
      IconsHome,
      HeroImgFull,
      Services,
      Testimonials,
      About,
      Contact,
      Mission,
      Newsletter01,
    },
    data() {
      return {
        structuredData: {
          '@context': 'http://schema.org',
          '@type': 'website',
        },
        title: 'Contabilidade e Consultoria no Guarujá',
        image:
          'https://solaris-contabilidade-andre.s3.amazonaws.com/solaris_og.jpg',
        description: 'Solaris Contabilidade',
        testimonials: [
          {
            photo:
              'https://img.freepik.com/fotos-premium/empresario-com-rosto-nao-barbeado-retrato-do-empresario-empresario-usando-gravata-borboleta-com-smoking_474717-78987.jpg',
            name: 'A Solaris trouxe eficiência e transparência para a contabilidade da minha empresa. Desde o início da parceria, a equipe tem se mostrado altamente profissional, proporcionando relatórios financeiros precisos e organizados. Recomendo a Solaris para quem busca uma gestão contábil sólida e confiável.',
            text: 'João Silva, Empresário',
          },
          {
            name: 'A decisão de escolher a Solaris para cuidar da contabilidade foi acertada. A agilidade no processamento de dados e a precisão nas análises financeiras deram uma visão estratégica ao nosso desempenho. Estamos muito satisfeitos com a parceria e confiantes em continuar crescendo juntos',
            text: 'Ana Oliveira, Diretora Financeira',
          },
          {
            name: 'Contratar a Solaris foi fundamental para a gestão financeira da minha empresa. Eles simplificaram processos complexos, tornando a execução de obrigações fiscais mais eficaz. Sempre disponíveis, a equipe oferece suporte e esclarecimento de dúvidas. Com a Solaris, a contabilidade se tornou mais fácil e eficiente.',
            text: 'Carlos Santos, Empreendedor',
          },
        ],
        clients: [],
        email: '',
        name: '',
        subject: '',
        message: '',
      }
    },
  }
</script>

<style>
  .newsletter {
    padding: 4em 0 6em 0;
    background: #fff;
  }
  .section-title {
    color: #f6f7f9;
  }
  .all-products {
    background: #f6f7f9 !important;
    padding: 1em 0 4.5em 0;
  }
  .product_title {
    font-size: 1.09rem;
  }
  .product_price {
    font-size: 0.89rem;
    color: #aaaaaa;
  }
  .work-with-us {
    margin: 3.5em 0;
    padding: 3em 0;
    background: rgb(31, 31, 31);
  }
</style>
