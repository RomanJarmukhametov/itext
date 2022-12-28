app.component("processes", {
  template:
    /*html*/
    `
    <section class="container py-lg-5 py-md-3 py-sm-1">
            <div class="row pt-5 row-cols-1 row-cols-lg-12">
                <div class="col text-center">
                    <h2> {{languageGeneralText.headerText}}</h2>
                    <p class="testimonial-text"> {{languageGeneralText.paragraphText}} </p>
                </div>
            </div>

            <div class="row g-4 pb-4 row-cols-1 row-cols-lg-2">
                <div class="col d-flex align-items-stretch" v-for="item in language">
                    <div class="card card-custom border-0">
                        <img src="../assets/icon_star.svg" class="py-1 icon-custom" alt="">
                        <div class="card-body">
                            <h5 class="card-title"> {{ item.headerText }} </h5>
                            <p class="card-text">{{item.paragraphText}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
`,
  data() {
    return {
      russianGeneralText: {
        headerText: "Мастерство начинается с процессов",
        paragraphText:
          "Мы постоянно работаем над тем, чтобы повысить эффективность переводческих услуг, опираясь на передовые технологии и талантливых сотрудников.",
      },
      russianText: [
        {
          headerText: "Отбор переводчиков",
          paragraphText:
            "Мы тщательно отбираем наших переводчиков и сотрудничаем только с теми, кто отвечает запросам наших клиентов.",
        },
        {
          headerText: "Управление проектами",
          paragraphText:
            "Мы знаем, что грамотное управление проектом – это залог успеха. Наша собственная система управления процессом помогает нам переводить, а вам – достигать ваших бизнес-целей.",
        },
        {
          headerText: "Контроль качества",
          paragraphText:
            "Качество перевода – это главный критерий нашей работы. Весь процесс перевода состоит из нескольких этапов в соответствии со стандартом ISO 17100:2015.",
        },
        {
          headerText: "Сдача работы",
          paragraphText:
            "Мы всегда сдаем работу вовремя в соответствии с требованиями клиента. И если вдруг мы нарушили сроки сдачи – мы вернем оплату в полном объеме.",
        },
      ],
      englishGeneralText: {
        headerText: "Mastery Begins With Processes",
        paragraphText:
          "We are constantly working to improve the efficiency of our translation services by relying on cutting-edge technology and talented employees.",
      },
      englishText: [
        {
          headerText: "Selecting Translators",
          paragraphText:
            "We carefully select our interpreters and work only with those who meet our clients' needs.",
        },
        {
          headerText: "Project Management",
          paragraphText:
            "We know that proper project management is the key to success. Our proprietary process management system helps us translate and enables you to achieve your business goals.",
        },
        {
          headerText: "Quality Control",
          paragraphText:
            "Quality of translation is the main criterion of our work. The entire translation process consists of several steps under ISO 17100:2015.",
        },
        {
          headerText: "Work Delivery",
          paragraphText:
            "We always deliver the work on time according to the client's requirements. And if we suddenly violate the deadline - we will refund the payment in full.",
        },
      ],
      kazakhGeneralText: {
        headerText: "Шеберлік процестерден басталады",
        paragraphText:
          "Біз озық технологиялар мен талантты қызметкерлерге сүйене отырып, аударма қызметтерінің тиімділігін арттыру үшін ұдайы жұмыс жасаймыз.",
      },
      kazakhText: [
        {
          headerText: "Аудармашыларды іріктеу",
          paragraphText:
            "Біз аудармашыларымызды мұқият таңдаймыз және клиенттеріміздің сұраныстарына жауап беретін адамдармен ғана жұмыс жасаймыз.",
        },
        {
          headerText: "Жобаларды басқару",
          paragraphText:
            "Жобаны сауатты басқару - табыс кепілі екенін білеміз. Біздің жеке процесті басқару жүйесі бізге аударуға көмектеседі, ал сіз өзіңіздің бизнес мақсаттарыңызға жетесіз.",
        },
        {
          headerText: "Сапаны бақылау",
          paragraphText:
            "Аударма сапасы - біздің жұмысымыздың басты критерийі. Бүкіл аударма процесі ISO 17100:2015 стандартына сәйкес бірнеше кезеңнен тұрады.",
        },
        {
          headerText: "Жұмысты тапсыру",
          paragraphText:
            "Біз әрқашан клиенттің талаптарына сәйкес жұмысты уақытында тапсырамыз. Егер біз кенеттен тапсыру мерзімін бұзсақ - төлемді толық көлемде қайтарамыз.",
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
