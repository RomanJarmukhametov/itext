app.component("client-logos", {
  template:
    /*html*/
    `
    <section class="container py-lg-5 py-md-3 py-sm-1">
            <div class="card-custom">
                <div class="row pt-3 row-cols-1 row-cols-lg-12">
                    <div class="col text-center">
                        <h2> {{language.headerText}} </h2>
                        <p> {{language.paragraphText}}
                        </p>
                    </div>
                </div>

                <div class="row logo-list">
                    <div class="col-lg-2 col-md-4 col-6" v-for="client in clients">
                        <img :src="client.logo" class="img-fluid" :alt="client.name">
                    </div>
                </div>
            </div>
    </section>
    `,
  data() {
    return {
      russianText: {
        headerText: "Наши клиенты",
        paragraphText:
          "Настоящее партнерство - это движение в обе стороны: идеи и информация поступают открыто и регулярно на основе взаимного доверия и уважения к опыту друг друга, и наши клиенты принимают эту философию.",
      },

      kazakhText: {
        headerText: "Біздің клиенттеріміз",
        paragraphText:
          "Нағыз серіктестік - бұл екі бағыттағы қозғалыс: идеялар мен ақпарат бір-бірінің тәжірибесіне деген өзара сенім мен құрмет негізінде ашық және тұрақты түрде түседі және біздің клиенттеріміз бұл философияны қабылдайды.",
      },

      englishText: {
        headerText: "Our Clients",
        paragraphText:
          "A true partnership is a two-way traffic: ideas and information flow openly and regularly based on mutual trust and respect for each other's expertise, and our clients embrace this philosophy.",
      },

      clients: [
        {
          logo: "https://itext.agency/assets/logo_erg.svg",
          name: "ERG",
        },
        {
          logo: "https://itext.agency/assets/logo_kazmunaygas.png",
          name: "Kazmunaygas",
        },
        {
          logo: "https://itext.agency/assets/logo_nfc.png",
          name: "NFC",
        },
        {
          logo: "https://itext.agency/assets/logo_sulpak.png",
          name: "Sulpak",
        },
        {
          logo: "https://itext.agency/assets/logo_eurasian.jpeg",
          name: "Eurasian",
        },
        {
          logo: "https://itext.agency/assets/logo_kios.png",
          name: "Kios",
        },
      ],
    };
  },
  methods: {},
  computed: {
    language() {
      switch (getLanguage()) {
        case "en":
          return this.englishText;
        case "kk":
          return this.kazakhText;
        default:
          return this.russianText;
      }
    },
  },
});
