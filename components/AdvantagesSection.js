app.component("advantages-section", {
  template:
    /*html*/
    ` <section class="container py-lg-5 py-md-3 py-sm-1">
            <div class="row py-5">
                <div class="col-lg-4 col-md-12">
                    <h2> {{languageGeneralText.headerText}} </h2>
                    <p> {{languageGeneralText.paragraphText}} </p>
                </div>

                <div class="col-lg-8 col-md-12 mb-2">
                    <div class="card-custom bottom-buffer" v-for="item in language">
                        <div class="row">
                            <div class="col-lg-2 col-md-12">
                                <img :src="item.icon" class="py-1 icon-custom" alt="">
                            </div>
                            <div class="col-lg-10 col-md-12">
                                <h5> {{ item.headerText }} </h5>
                                <p> {{item.paragraphText}} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`,
  data() {
    return {
      russianGeneralText: {
        headerText: "Наши преимущества",
        paragraphText:
          "Благодаря сочетанию передового технологического опыта и профессиональных редакторов мы обеспечиваем быстрый, эффективный и качественный перевод.",
      },

      russianText: [
        {
          icon: "https://itext.agency/assets/icon_experience.svg",
          headerText: "Опыт и уверенность",
          paragraphText:
            "С 2012 года мы перевели более 10,2 миллиона слов на 35 языков для 1 300 клиентов из различных отраслей.",
        },
        {
          icon: "https://itext.agency/assets/icon_quality.svg",
          headerText: "Эффективность процесса",
          paragraphText:
            "Мы стремимся повысить эффективность переводческих услуг, совершенствуя производственные процессы с помощью передовых технологий и талантливых сотрудников.",
        },
        {
          icon: "https://itext.agency/assets/icon_one_step.svg",
          headerText: "На шаг впереди",
          paragraphText:
            "Мы оказываем широкий спектр лингвистических услуг, которые покрывают все ваши будущие запросы: перевод объявлений в Google Ads, локализация программного обеспечения и мобильных приложений, создание субтитров, а также API для интеграции автоматического перевода везде, где это необходимо.",
        },
      ],

      englishGeneralText: {
        headerText: "Our Advantages",
        paragraphText:
          "We provide fast, efficient, and high-quality translations through a combination of advanced technological expertise and professional editors.",
      },
      englishText: [
        {
          icon: "https://itext.agency/assets/icon_experience.svg",
          headerText: "Experience and Confidence",
          paragraphText:
            "Since 2012, we have translated over 10.2 million words into 35 languages for 1,300 clients in various industries.",
        },
        {
          icon: "https://itext.agency/assets/icon_quality.svg",
          headerText: "Process Efficiency",
          paragraphText:
            "We strive to improve the efficiency of our translation services by improving our production processes with the help of advanced technology and talented employees.",
        },
        {
          icon: "https://itext.agency/assets/icon_one_step.svg",
          headerText: "One Step Ahead",
          paragraphText:
            "We provide a wide range of linguistic services that cover all your future needs: translation of ads in Google Ads, localization of software and mobile applications, creation of subtitles, as well as API for automatic translation integration wherever it is needed.",
        },
      ],
      kazakhGeneralText: {
        headerText: "Біздің артықышылығымыз",
        paragraphText:
          "Озық технологиялық тәжірибе мен кәсіби редакторлардың үйлесімі арқылы біз жылдам, тиімді және сапалы аударманы қамтамасыз етеміз.",
      },
      kazakhText: [
        {
          icon: "https://itext.agency/assets/icon_experience.svg",
          headerText: "Тәжірибе және сенімділік",
          paragraphText:
            "2012 жылдан бері біз әртүрлі салалардан келген 1 300 клиент үшін 10,2 миллионнан астам сөзді 35 тілге аудардық.",
        },
        {
          icon: "https://itext.agency/assets/icon_quality.svg",
          headerText: "Процестің тиімділігі",
          paragraphText:
            "Біз озық технологиялар мен дарынды қызметкерлердің көмегімен өндірістік процестерді жетілдіре отырып, аударма қызметтерінің тиімділігін арттыруға ұмтыламыз.",
        },
        {
          icon: "https://itext.agency/assets/icon_one_step.svg",
          headerText: "Бір қадам алда",
          paragraphText:
            "Біз сіздің болашақ сұраныстарыңызды қамтитын лингвистикалық қызметтердің кең спектрін ұсынамыз: Google Ads-ке жарнамаларды аудару, бағдарламалық жасақтама мен мобильді  қосымшаларды локализациялау, субтитрлер жасау, қажет болған жағдайда автоматты аударманы біріктіруге арналған API.",
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
