app.component("hero", {
  template:
    /*html*/
    `
    <section class="container">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-6">
                    <img :src="language.heroImageSrc" class="d-block mx-lg-auto img-fluid"
                        :alt="language.altText" width="700" height="500">
                </div>
                <div class="col-lg-6">
                    <p class="tagline"> {{language.taglineText}} </p>
                    <h1 class="display-5 fw-bold lh-1 mb-3"> {{language.titleText}} <span> {{language.titleSpanText}} </span>
                    </h1>
                    <p class="lead"> {{language.leadText}} </p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <a :href="language.primaryButtonUrl" class="btn btn-primary btn-lg me-2"> {{language.primaryButtonText}} </a>
                        <a :href="language.secondaryButtonUrl" class="btn btn-outline-secondary btn-lg me-2"> {{language.secondaryButtonText}} </a>
                    </div>
                </div>
            </div>
        </section>
`,
  data() {
    return {
      russianTextHome: {
        heroImageSrc: "https://itext.agency/assets/hero_home.svg",
        altText: "Hero Image for Home Page",
        taglineText: "БЮРО ПЕРЕВОДОВ ITEXT",
        titleText: "Профессиональные переводы",
        titleSpanText: "для Вас и Вашего бизнеса",
        leadText:
          "От маркетинговых материалов и официальных документов до финансовых материалов, технических инструкций и не только - наши услуги профессионального перевода отвечают любым потребностям, проектам, обстоятельствам и бюджету.",
        primaryButtonUrl: "./ru/zakazat-perevod.html",
        primaryButtonText: "Заказать перевод",
        secondaryButtonUrl: "./ru/o-nas.html",
        secondaryButtonText: "О нас",
      },
      kazakhTextHome: {
        heroImageSrc: "https://itext.agency/assets/hero_home.svg",
        altText: "Hero Image for Home Page",
        taglineText: "ITEXT АУДАРМА БЮРОСЫ",
        titleText: "Сіз және сіздің бизнесіңіз үшін",
        titleSpanText: "кәсіби аудармалар",
        leadText:
          "Маркетингтік материалдар мен ресми құжаттардан бастап қаржылық материалдарға, техникалық нұсқаулықтарға және т.б. дейін - біздің кәсіби аударма қызметтеріміз кез-келген қажеттіліктерге, жобаларға, жағдайларға және бюджетке сәйкес келеді.",
        primaryButtonUrl: "../kk/audarmaga-tapsyrys-beru.html",
        primaryButtonText: "Аудармаға тапсырыс беру",
        secondaryButtonUrl: "../kk/biz-turaly.html",
        secondaryButtonText: "Өзіміз туралы",
      },
      englishTextHome: {
        heroImageSrc: "https://itext.agency/assets/hero_home.svg",
        altText: "Hero Image for Home Page",
        taglineText: "ITEXT TRANSLATION AGENCY",
        titleText: "Professional translations",
        titleSpanText: "for you and your business",
        leadText:
          "Our professional translation services meet every need, project, circumstance, and budget, ranging from marketing materials and official documents to financial materials technical manuals, and more.",
        primaryButtonUrl: "../en/quote.html",
        primaryButtonText: "Get a Quote",
        secondaryButtonUrl: "../en/about-us.html",
        secondaryButtonText: "About Us",
      },
      russianTextIndividuals: {
        heroImageSrc: "https://itext.agency/assets/hero_individuals.svg",
        altText: "Hero Image for Individuals Page",
        taglineText: "БЮРО ПЕРЕВОДОВ ITEXT",
        titleText: "Перевод личных документов",
        titleSpanText: "со многих языков мира",
        leadText:
          "Мы переведем и заверим все ваши документы нотариально с более чем 50 языков мира в кратчайшие сроки.",
        primaryButtonUrl: "../ru/zakazat-perevod.html",
        primaryButtonText: "Заказать перевод",
        secondaryButtonUrl: "../ru/o-nas.html",
        secondaryButtonText: "О нас",
      },
      kazakhTextIndividuals: {
        heroImageSrc: "https://itext.agency/assets/hero_individuals.svg",
        altText: "Hero Image for Individuals Page",
        taglineText: "ITEXT АУДАРМА БЮРОСЫ",
        titleText: "Жеке құжаттарды",
        titleSpanText: "әлемнің көптеген тілдерінен",
        leadText:
          "Біз сіздің барлық құжаттарыңызды әлемнің 50-ден астам тілінен ең қысқа мерзімде аударамыз және нотариалды түрде куәландырамыз.",
        primaryButtonUrl: "../kk/audarmaga-tapsyrys-beru.html",
        primaryButtonText: "Аудармаға тапсырыс беру",
        secondaryButtonUrl: "../kk/biz-turaly.html",
        secondaryButtonText: "Өзіміз туралы",
      },
      englishTextIndividuals: {
        heroImageSrc: "https://itext.agency/assets/hero_individuals.svg",
        altText: "Hero Image for Individuals Page",
        taglineText: "ITEXT TRANSLATION AGENCY",
        titleText: "Translation of personal documents",
        titleSpanText: "from many languages of the world",
        leadText:
          "We will translate and notarize all your documents from over 50 languages in the shortest possible time.",
        primaryButtonUrl: "../en/quote.html",
        primaryButtonText: "Quote",
        secondaryButtonUrl: "../en/about-us.html",
        secondaryButtonText: "About Us",
      },

      russianTextCompany: {
        heroImageSrc: "https://itext.agency/assets/hero_companies.svg",
        altText: "Hero Image for Companies Page",
        taglineText: "БЮРО ПЕРЕВОДОВ ITEXT",
        titleText: "Мы предоставляем новые возможности",
        titleSpanText: "для Вашего бизнеса",
        leadText:
          "Комплексное предложение для обеспечения потребностей вашего предприятия в переводах: от несложного перевода документов до специализированных решений по локализации, а также услуг по автоматизированному и срочному переводу на более чем 50 языков.",
        primaryButtonUrl: "../ru/zakazat-perevod.html",
        primaryButtonText: "Заказать перевод",
        secondaryButtonUrl: "../ru/o-nas.html",
        secondaryButtonText: "О нас",
      },
      kazakhTextCompany: {
        heroImageSrc: "https://itext.agency/assets/hero_companies.svg",
        altText: "Hero Image for Companies Page",
        taglineText: "ITEXT АУДАРМА БЮРОСЫ",
        titleText: "Біз Сіздің бизнесіңіз үшін",
        titleSpanText: "жаңа мүмкіндіктер ұсынамыз",
        leadText:
          "Сіздің кәсіпорныңыздың аударма қажеттіліктерін қамтамасыз етуге арналған кешенді ұсыныс: құжаттарды қарапайым аудармадан бастап локализация бойынша мамандандырылған шешімдерге дейін, сондай-ақ 50-ден астам тілге автоматтандырылған және жедел аударма қызметтері.",
        primaryButtonUrl: "../kk/audarmaga-tapsyrys-beru.html",
        primaryButtonText: "Аудармаға тапсырыс беру",
        secondaryButtonUrl: "../kk/biz-turaly.html",
        secondaryButtonText: "Өзіміз туралы",
      },
      englishTextCompany: {
        heroImageSrc: "https://itext.agency/assets/hero_companies.svg",
        altText: "Hero Image for Companies Page",
        taglineText: "ITEXT TRANSLATION AGENCY",
        titleText: "We provide new opportunities",
        titleSpanText: "for your business",
        leadText:
          "A comprehensive offering to meet your company's translation needs: from simple document translation to specialized localization solutions, as well as services for automated and express translation in more than 50 languages.",
        primaryButtonUrl: "../en/quote.html",
        primaryButtonText: "Quote",
        secondaryButtonUrl: "../en/about-us.html",
        secondaryButtonText: "About Us",
      },
    };
  },
  methods: {
    // ...
  },
  computed: {
    url() {
      return getLastUrlPart();
    },

    language() {
      switch (this.url) {
        case "index.html":
          return this.russianTextHome;
        case "basty.html":
          return this.kazakhTextHome;
        case "home.html":
          return this.englishTextHome;
        case "dlya-fizlits.html":
          return this.russianTextIndividuals;
        case "zheke-tulgalar-ushin.html":
          return this.kazakhTextIndividuals;
        case "for-individuals.html":
          return this.englishTextIndividuals;
        case "dlya-companiy.html":
          return this.russianTextCompany;
        case "kompaniyalar-ushin.html":
          return this.kazakhTextCompany;
        case "for-companies.html":
          return this.englishTextCompany;
        default:
          return this.russianTextHome;
      }
    },
  },
});
