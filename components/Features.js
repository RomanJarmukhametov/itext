app.component("features", {
  template:
    /*html*/
    `
<section class="container px-4 py-lg-5 py-md-3 py-sm-1">
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3 h-100">
                <div class="col d-flex align-items-stretch text-center" v-for="item in language">
                    <div class="card card-custom border-0">
                        <img src="../assets/icon_done.svg" class="py-1 icon-custom align-self-center" alt="">
                        <div class="card-body">
                            <h5 class="card-title"> {{item.title}}</h5>
                            <p class="card-text"> {{item.text}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
`,
  data() {
    return {
      russianTextIndividuals: [
        {
          title: "Срочный перевод",
          text: "Мы сможем перевести все ваши документы, даже если это очень и очень срочно.",
        },
        {
          title: "Заверение перевода",
          text: "Мы сотрудничаем с нотариусами и готовы нотариально заверить все наши переводы.",
        },
        {
          title: "Перевод с 50+ языков",
          text: "С нами работают многие переводчики, и мы можем предложить вам перевод с более чем 50 языков мира.",
        },
      ],
      kazakhTextIndividuals: [
        {
          title: "Жедел аударма",
          text: "Біз сіздің барлық құжаттарыңызды, тіпті өте шұғыл болса да, аудара аламыз.",
        },
        {
          title: "Аударманы куәландыру",
          text: "Біз нотариустармен бірге қызмет жасаймыз және біздің барлық аудармаларымызды нотариалды куәландыруға дайынбыз.",
        },
        {
          title: "50+ тілден аудару",
          text: "Бізбен көптеген аудармашылар жұмыс істейді, сондықтан біз сізге әлемнің 50-ден астам тілінен аударманы ұсына аламыз.",
        },
      ],
      englishTextIndividuals: [
        {
          title: "Urgent Translation",
          text: "We can translate all your documents, even if it is very urgent.",
        },
        {
          title: "Notarization of Translation",
          text: "We cooperate with notaries and are ready to notarize all our translations.",
        },
        {
          title: "Translation from 50+ Languages",
          text: "We have many translators working with us, and we can offer you translations from over 50 languages.",
        },
      ],
      russianTextCompanies: [
        {
          title: "Специализированные переводы",
          text: "За время нашей работы мы накопили огромный опыт в переводах текстов различных тематик – инструкции, чертежи, контракты и многое другое. Мы с удовольствием предлагаем использовать наши знания и опыт для развития вашего бизнеса.",
        },
        {
          title: "Локализация",
          text: "Сегодня почти у каждой компании есть веб-сайт и у каждой третьей компании – мобильное приложение. Вместе с нами вы сможете перевести и локализовать ваши цифровые решения для охвата большей аудитории и привлечения новых клиентов.",
        },
        {
          title: "Автоматизация процессов",
          text: "Мы любим новые технологии и успешно их применяем. Мы поможем автоматизировать процесс передачи вашего контента на перевод. Особенно это актуально для онлайн-магазинов, новостных порталов, где материал обновляется очень часто и требуется его быстро перевести.",
        },
      ],
      kazakhTextCompanies: [
        {
          title: "Мамандандырылған аудармалар",
          text: "Жұмыс барысында біз әртүрлі тақырыптағы мәтіндерді – нұсқаулықтар, сызбалар, келісімшарттар және тағы басқаларды аударуда үлкен тәжірибе жинадық. Біз Сіздің бизнесіңізді дамыту үшін біліміміз бен тәжірибемізді пайдалануды ұсынамыз.",
        },
        {
          title: "Оқшаулау",
          text: "Бүгінгі таңда әр компанияның веб – сайты және әрбір үшінші компанияның мобильді қосымшасы бар. Бізбен бірге Сіз үлкен аудиторияны қамту және жаңа клиенттерді тарту үшін цифрлы шешімдеріңізді аудара және оқшаулай аласыз.",
        },
        {
          title: "Процестерді автоматтандыру",
          text: "Біз жаңа технологияларды жақсы көреміз және оларды табысты қолданамыз. Біз сіздің контентіңізді аудармаға беру процесін автоматтандыруға көмектесеміз. Бұл әсіресе интернет-дүкендерге, жаңалықтар порталдарына қатысты, онда материал жиі жаңартылады және оны тез аудару қажет.",
        },
      ],
      englishTextCompanies: [
        {
          title: "Specialized Translations",
          text: "Throughout our work, we have accumulated extensive experience translating texts of various subjects - instructions, drawings, contracts, and much more. We are pleased to offer you the use of our knowledge and experience to develop your business.",
        },
        {
          title: "Localization",
          text: "Today almost every company has a website, and every third company has a mobile app. You can translate and localize your digital solutions with us to reach a larger audience and attract new customers.",
        },
        {
          title: "Process Automation",
          text: "We love new technology, and we're successfully applying it. We can help automate the process of submitting your content for translation. This is especially important for online stores and news portals, where the material is updated frequently and needs to be translated quickly.",
        },
      ],
    };
  },
  methods: {},
  computed: {
    url() {
      return getLastUrlPart();
    },
    language() {
      switch (this.url) {
        case "dlya-fizlits.html":
          return this.russianTextIndividuals;
        case "zheke-tulgalar-ushin.html":
          return this.kazakhTextIndividuals;
        case "for-individuals.html":
          return this.englishTextIndividuals;
        case "dlya-companiy.html":
          return this.russianTextCompanies;
        case "kompaniyalar-ushin.html":
          return this.kazakhTextCompanies;
        case "for-companies.html":
          return this.englishTextCompanies;
      }
    },
  },
});
