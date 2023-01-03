app.component("quote", {
  template:
    /*html*/
    `
<section class="container py-lg-5 py-md-3 py-sm-1">
            <div class="card-custom">
                <div class="row flex-lg-row align-items-center g-3 py-3">
                    <div class="col-lg-9">
                        <h2 class="fw-bold lh-1 mb-3 w-75"> {{language.title}} <span> {{language.titleSpan}} </span>
                        </h2>
                        <p class="w-75"> {{language.text}} </p>
                    </div>
                    <div class="col-lg-3 d-grid gap-2 d-md-flex justify-content-md-start">
                        <a :href="language.buttonLink" class="btn btn-primary btn-sm me-2"> {{language.button}} </a>
                    </div>
                </div>
            </div>
        </section>
`,
  data() {
    return {
      russianText: {
        title: "Узнайте стоимость вашего перевода",
        titleSpan: "прямо сейчас",
        text: "Заполните форму заказа на перевод. Мы предоставим вам наилучшую стоимость.",
        button: "Заказать перевод",
        buttonLink: "https://itext.agency/ru/zakazat-perevod.html",
      },
      englishText: {
        title: "Find out the cost of your translation",
        titleSpan: "right now",
        text: "Submit a translation quote form. We will give you the best price.",
        button: "Quote",
        buttonLink: "https://itext.agency/en/quote.html",
      },
      kazakhText: {
        title: "Аударманың құнын дәл",
        titleSpan: "қазір біліңіз",
        text: "Аудармаға тапсырыс нысанын толтырыңыз. Біз Сізге ең жақсы жағдайларды ұсынамыз.",
        button: "Аудармаға тапсырыс беру",
        buttonLink: "https://itext.agency/kk/audarmaga-tapsyrys-beru.html",
      },
    };
  },
  methods: {
    // ...
  },
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
