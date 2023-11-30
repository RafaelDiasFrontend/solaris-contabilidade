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
    <!-- <Blog :allPosts='products' />  -->
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
          // More structured data...
        },
        title: 'Contabilidade e Consultoria no Guarujá',
        image:
          'https://solaris-contabilidade-andre.s3.amazonaws.com/solaris_og.jpg',
        description: 'Solaris Contabilidade',
        testimonials: [],
        clients: [],
        email: '',
        name: '',
        subject: '',
        message: '',
      }
    },

    methods: {
      async addToNewsletter() {
        try {
          let data = {
            email: this.email,
          }
          let newsletters = await this.$axios.$post('/api/newsletters', data)
          this.$swal(
            'Parabens!',
            'Seu email foi adicionado com sucesso!',
            'success',
          )
          this.newsletters.push(data)
        } catch (err) {
          console.log(err)
        }
      },
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
