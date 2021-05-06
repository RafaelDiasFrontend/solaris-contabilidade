 <template>
  <v-footer id="footer" class="bg-solaris" padless>
    <v-container class="df-width pt-4">
      <v-row justify='center'>
        <v-col cols="12" md="4">        
            <div class="text-center">
              <img
                src="~/assets/imagens/home/solaris_logo.jpg"
                alt="solaris-logo"
                class="footer-logo"
              />
            </div>
            <div class="text-center">
              <v-btn v-for="item in icons" :key="item.id" class="mx-2" icon>
                <a :href="item.link" target="_blank">
                  <v-icon color="yellow darken-2" size="25px">
                    {{ item.icon }}
                  </v-icon>
                </a>
              </v-btn>
            </div>        
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12" class="mt-4">
          <div class="copyright white--text pt-1">
            Desenvolvido em
            <a
              class="font-weight-bold yellow--text text--darken-2"
              href="http://agenciakpax.com.br"
              target="_blank"
            >
              KPAX
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import DefaultLogo from "@/components/Logos/DefaultLogo";
export default {
  data: () => ({
    menu: [
      { text: "Home", link: "index" },
      { text: "Sobre", link: "/sobre" },
      { text: "Servicos", link: "/servicos" },
      { text: "Blog", link: "/blog" },
      { text: "Contato", link: "/blog" },
      { text: "Login", link: "/login" },
    ],
    servicos: [
      { text: "Site", link: "/site" },
      { text: "Loja Virtual", link: "/loja-virtual" },
      { text: "SEO", link: "/seo" },
      { text: "Marketing Digital", link: "/marketing-digital" },
      { text: "Hospedagem", link: "/hospedagem" },
      { text: "Podcast", link: "/podcast" },
    ],
    icons: [
      { icon: "mdi-facebook", link: "https://www.facebook.com/solaris.contabilidade" },
      { icon: "mdi-whatsapp", link: "https://api.whatsapp.com/send?phone=5513992147997&fbclid=IwAR2QlXU-h3TbYiPBWk-yIKABujuiYpZkj3BQX8yAK9TjOWsSPFEiGaOyU0Q" },
      { icon: "mdi-linkedin", link: "https://www.instagram.com/solaris.contabilidade/" },
      { icon: "mdi-email", link: "mailto:contato@solariscontabilidade.com.br" },
    ],
  }),
};
</script>

<style>
#footer {
  margin-top: -7px;
}
#footer a {
  color: white;
}

.bg-solaris {
  background-color: #000000 !important;
}
.copyright {
  letter-spacing: 3px;
  color: rgba(204, 204, 204, 0.816);
  font-size: 0.65rem;
  text-align: center;
}
.footer-logo {
  width: 90%;
  margin-top: 0.5em;
  height: auto;
}
.footer-ul li {
  margin-bottom: 4px;
}
.footer-ul li:hover {
  color: #313131;
}

.copyright a:hover {
  color: var(--primary-color);
}
@media only screen and (max-width: 680px) {
.footer-logo {
  width: 65%;
  height: auto;
}


}
</style>
