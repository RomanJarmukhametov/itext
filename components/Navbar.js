app.component("navbar-section", {
  template:
    /*html*/
    `
        <nav class="navbar navbar-expand-lg bg-primary-custom">
            <div class="container">
                <a class="navbar-brand" :href="language.logoLinkUrl"> <img src="https://www.itext.agency/assets/itext_logo.svg" alt="logo"> </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" :class="{ 'active-link': ['Главная', 'Home', 'Басты бет'].includes(currentPage), 'nav-link-color': !['Главная', 'Home', 'Басты бет'].includes(currentPage)}" :href="language.homepageLinkUrl"> {{language.homepageText}} </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :class="{ 'active-link': ['О нас', 'About Us', 'Өзіміз туралы'].includes(currentPage), 'nav-link-color': !['О нас', 'About Us', 'Өзіміз туралы'].includes(currentPage)}" :href="language.aboutUsLinkUrl"> {{language.aboutUsText}} </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :class="{ 'active-link': ['Компаниям', 'Companies', 'Компанияларға'].includes(currentPage), 'nav-link-color': !['Компаниям', 'Companies', 'Компанияларға'].includes(currentPage)}" :href="language.companiesLinkUrl"> {{language.companiesText}} </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :class="{ 'active-link': ['Физлицам', 'Individuals', 'Жеке тұлғаларға'].includes(currentPage), 'nav-link-color': !['Физлицам', 'Individuals', 'Жеке тұлғаларға'].includes(currentPage)}" :href="language.individualsLinkUrl"> {{language.individualsText}} </a>
                        </li>
                    </ul>
                    <div class="d-flex">
                        <a :href="language.buttonLinkUrl" class="btn btn-primary btn-sm me-2" :class="{ 'hidden-btn': ['Заказать перевод', 'Аудармага тапсырыс беру', 'Quote'].includes(currentPage)}"> {{language.buttonText}} </a>
                    </div>
                </div>
            </div>
        </nav>
`,
  data() {
    return {
      russianText: {
        logoLinkUrl: "https://itext.agency/index.html",
        homepageText: "Главная",
        homepageLinkUrl: "https://itext.agency/index.html",
        aboutUsText: "О нас",
        aboutUsLinkUrl: "https://itext.agency/ru/o-nas.html",
        companiesText: "Компаниям",
        companiesLinkUrl: "https://itext.agency/ru/dlya-companiy.html",
        individualsText: "Физлицам",
        individualsLinkUrl: "https://itext.agency/ru/dlya-fizlits.html",
        buttonText: "Заказать перевод",
        buttonLinkUrl: "https://itext.agency/ru/zakazat-perevod.html",
      },

      englishText: {
        logoLinkUrl: "https://itext.agency/en/home.html",
        homepageText: "Home",
        homepageLinkUrl: "https://itext.agency/en/home.html",
        aboutUsText: "About Us",
        aboutUsLinkUrl: "https://itext.agency/en/about-us.html",
        companiesText: "Companies",
        companiesLinkUrl: "https://itext.agency/en/for-companies.html",
        individualsText: "Individuals",
        individualsLinkUrl: "https://itext.agency/en/for-individuals.html",
        buttonText: "Get a Quote",
        buttonLinkUrl: "https://itext.agency/en/quote.html",
      },

      kazakhText: {
        logoLinkUrl: "https://itext.agency/kk/basty.html",
        homepageText: "Басты бет",
        homepageLinkUrl: "https://itext.agency/kk/basty.html",
        aboutUsText: "Өзіміз туралы",
        aboutUsLinkUrl: "https://itext.agency/kk/biz-turaly.html",
        companiesText: "Компанияларға",
        companiesLinkUrl: "https://itext.agency/kk/kompaniyalar-ushin.html",
        individualsText: "Жеке тұлғаларға",
        individualsLinkUrl: "https://itext.agency/kk/zheke-tulgalar-ushin.html",
        buttonText: "Аудармаға тапсырыс беру",
        buttonLinkUrl: "https://itext.agency/kk/audarmaga-tapsyrys-beru.html",
      },
    };
  },
  methods: {},
  computed: {
    currentPage() {
      switch (getLastUrlPart()) {
        case "index.html":
          return "Главная";
        case "home.html":
          return "Home";
        case "basty.html":
          return "Басты бет";

        case "o-nas.html":
          return "О нас";
        case "about-us.html":
          return "About Us";
        case "biz-turaly.html":
          return "Өзіміз туралы";

        case "dlya-companiy.html":
          return "Компаниям";
        case "for-companies.html":
          return "Companies";
        case "kompaniyalar-ushin.html":
          return "Компанияларға";

        case "dlya-fizlits.html":
          return "Физлицам";
        case "for-individuals.html":
          return "Individuals";
        case "zheke-tulgalar-ushin.html":
          return "Жеке тұлғаларға";

        case "zakazat-perevod.html":
          return "Заказать перевод";
        case "zakazat-perevod.html":
          return "Заказать перевод";
        case "audarmaga-tapsyrys-beru.html":
          return "Аудармага тапсырыс беру";
        case "quote.html":
          return "Quote";
      }
    },

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
