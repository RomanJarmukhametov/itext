app.component("our-working-environment", {
  template:
    /*html*/
    `
    <section class="container py-lg-5 py-md-3 py-sm-1">
            <div class="row flex-lg-row align-items-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-6">
                    <img src="https://itext.agency/assets/our_family.svg" class="d-block mx-lg-auto img-fluid" alt="Our Family" width="700"
                        height="500" loading="lazy">
                </div>
                <div class="col-lg-6">
                    <h2 class="fw-bold lh-1 mb-3"> {{language.title}} <span> {{language.titleSpan}} </span>
                    </h2>
                    <p> {{language.text}} </p>
                    <a :href="language.link" class="d-inline-flex align-items-center arrow-link">
                        {{language.buttonText}}
                        <i class="bi bi-arrow-right m-xl-1"></i>
                    </a>
                </div>
            </div>
        </section>
    `,
  data() {
    return {
      russianText: {
        image: "./assets/our_family.svg",
        title: "Наша рабочая",
        titleSpan: "атмосфера",
        text: "Мы с гордостью отмечаем, что справедливо оплачиваем труд наших переводчиков и формируем рабочую среду, в которой царит дух сотрудничества, удовольствия и открытости для всех: культуру, которая побуждает сотрудников делать великие дела для вас.",
        link: "../ru/o-nas.html",
        buttonText: "О нас",
      },
      englishText: {
        image: "../assets/our_family.svg",
        title: "Our Working",
        titleSpan: "Environment",
        text: "We are proud to say that we pay our translators fairly and foster a work environment that is collaborative, fun, and inclusive: a culture that encourages employees to do great things for you.",
        link: "../en/about-us.html",
        buttonText: "About Us",
      },
      kazakhText: {
        image: "../assets/our_family.svg",
        title: "Біздің жұмыс",
        titleSpan: "атмосферамыз",
        text: "Біз аудармашыларымыздың еңбегіне әділ ақы төлейтінімізді және ынтымақтастық рухы, барлығына рахат пен ашықтық орнаған жұмыс ортасын: қызметкерлерді сіз үшін үлкен істер жасауға итермелейтін мәдениетті қалыптастыратынымызды мақтанышпен атап өтеміз.",
        link: "../kz/biz-turaly.html",
        buttonText: " Өзіміз туралы ",
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
