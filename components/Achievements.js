app.component("achievements", {
  template:
    /*html*/
    `
    <section class="container py-lg-5 py-md-3 py-sm-1" id="achievements">
            <div class="card-custom">
                <div class="row pt-3 row-cols-1 row-cols-lg-12 ">
                    <div class="col text-center">
                        <h2> {{languageGeneralText.title}} </h2>
                        <p> {{languageGeneralText.description}} </p>
                    </div>
                </div>
                <div class="row pb-3 row-cols-1 row-cols-lg-4 ">
                    <div class="col text-center" v-for="item in language">
                        <div class="counter" :data-target="item.number"></div>
                        <p> {{item.text}}</p>
                    </div>
                </div>
            </div>
        </section>
`,
  data() {
    return {
      russianGeneralText: {
        title: "Коротко о нас",
        description:
          "С момента нашего основания в 2012 году в Казахстане мы перевели",
      },
      russianText: [
        { number: 1300, text: "личных документов" },
        { number: 1410, text: "инструкций" },
        { number: 1100, text: "договоров" },
        { number: 1230, text: "презентаций" },
      ],
      kazakhGeneralText: {
        title: "Біз туралы қысқаша",
        description:
          "2012 жылы Қазақстанда негізі қаланған сәттен бастап біз аударма жасаймыз",
      },
      kazakhText: [
        { number: 1300, text: "жеке құжаттар" },
        { number: 1410, text: "нұсқаулар" },
        { number: 1100, text: "шарттар" },
        { number: 1230, text: "презентациялар" },
      ],
      englishGeneralText: {
        title: "Short about us",
        description:
          "Since our founding in Kazakhstan in 2012, we have translated",
      },
      englishText: [
        { number: 1300, text: "personal documents" },
        { number: 1410, text: "manuals" },
        { number: 1100, text: "contracts" },
        { number: 1230, text: "presentations" },
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
    languageGeneralText() {
      switch (getLanguage()) {
        case "en":
          return this.englishGeneralText;
        case "kk":
          return this.kazakhGeneralText;
        default:
          return this.russianGeneralText;
      }
    },
  },
});
