app.component("testimonials", {
  template:
    /*html*/
    `
    <section class="container mt-5 mb-5">

            <div class="row pt-5 row-cols-1 row-cols-lg-12 ">
                <div class="col text-center">
                    <h2> {{languageGeneralText.title}} </h2>
                    <p class="testimonial-text"> {{languageGeneralText.text}} </p>
                </div>
            </div>

            <div class="row g-2">
                <div class="col-md-4 d-flex align-items-stretch" v-for="item in language">
                    <div class="card card-custom border-0 p-3 text-center px-4">

                        <div class="user-image">
                            <img :src="item.photo" alt="client's image" class="rounded-circle" width="80">
                        </div>

                        <div class="user-content">
                            <h5 class="mb-0"> {{item.name}} </h5>
                            <span> {{item.position}} </span>
                            <p> {{item.review}} </p>
                        </div>

                        <div class="ratings">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                        </div>

                    </div>
                </div>
            </div>
    </section>
`,
  data() {
    return {
      russianGeneralText: {
        title: "Нам благодарны",
        text: "Мы прилагаем все усилия, чтобы наши клиенты всегда оставались довольны нашими услугами. Благодаря этому мы заслужили репутацию надежного бюро переводов. Узнайте, что некоторые из наших предыдущих клиентов говорят о нашей работе и услугах.",
      },

      englishGeneralText: {
        title: "They are thankful to us",
        text: "We make every effort to ensure that our clients are always satisfied with our services. Thanks to this we have earned a reputation as a reliable translation company. Find out what some of our previous clients say about our work and services.",
      },

      kazakhGeneralText: {
        title: "Бізге риза",
        text: "Клиенттеріміз әрқашан біздің қызметтерімізге риза болуы үшін бар күшімізді саламыз. Осының арқасында біз сенімді аударма бюросы ретінде беделге ие болдық. Біздің алдыңғы клиенттеріміздің кейбіреулері біздің жұмысымыз бен қызметтеріміз туралы не айтатынын біліңіз.",
      },
      russianText: [
        {
          name: "Куаныш Бекжанов",
          position: "Инженер по поставкам нефтегазового оборудования",
          review:
            "Я чрезвычайно доволен услугами перевода, предоставленными бюро переводов iText. Для меня, инженера по поставкам нефтегазового оборудования, было крайне важно, чтобы перевод моего проекта объемом более 1000 страниц был точным и аккуратным, и команда iText превзошла мои ожидания. Они проявили профессионализм, эффективность и выполнили работу высокого качества в срок. Я настоятельно рекомендую бюро переводов iText для любых потребностей в переводе.",
          photo: "https://www.itext.agency/assets/client1.jpeg",
        },
        {
          name: "Кейт Лю",
          position: "Менеджер по локализации контента",
          review:
            "Недавно мне довелось работать с бюро переводов iText над локализацией контента нашего сайта электронной коммерции на казахский язык. Как менеджер по локализации контента, я предъявляю высокие требования к качеству и точности переводов, и на меня произвели большое впечатление профессионализм и внимание к деталям, проявленные командой iText. Они выполнили первоклассный перевод, который точно передал смысл и тон оригинального содержания, а их своевременное выполнение заказа сделало процесс беспроблемным для нашей компании. Я настоятельно рекомендую бюро переводов iText для решения любых переводческих задач и надеюсь на сотрудничество с ними в будущем.",
          photo: "https://www.itext.agency/assets/client2.jpeg",
        },
        {
          name: "Рауия Хасенова",
          position: "Редактор журнала",
          review:
            "Будучи редактором онлайн-журнала, я регулярно прибегаю к услугам бюро переводов iText для перевода статей с русского на английский и китайский языки. Меня неизменно впечатляет качество их работы и профессионализм их команды. Переводы всегда точны и выполняются вовремя, что очень важно для соблюдения сжатых сроков. Команда iText также очень отзывчива и готова ответить на любые мои вопросы или проблемы. Я настоятельно рекомендую бюро переводов iText всем, кто нуждается в высококачественных переводческих услугах.",
          photo: "https://www.itext.agency/assets/client3.jpeg",
        },
      ],
      englishText: [
        {
          name: "Kuanysh Bekzhanov",
          position: "Oil & Gas Equipment Supply Engineer",
          review:
            "I am extremely satisfied with the translation services provided by iText Translation Agency. As an Oil & Gas Equipment Supply Engineer, it was crucial for the translation of my 1000+ page project to be accurate and precise, and the team at iText exceeded my expectations. They were professional, efficient, and delivered high-quality work on time. I highly recommend iText Translation Agency for any translation needs.",
          photo: "https://www.itext.agency/assets/client1.jpeg",
        },
        {
          name: "Kate Liu",
          position: "Content Localization Manager",
          review:
            "I recently had the pleasure of working with iText Translation Agency for the localization of our e-commerce website content into Kazakh. As a Content Localization Manager, I have high standards for the quality and accuracy of translations, and I was thoroughly impressed with the professionalism and attention to detail displayed by the team at iText. They delivered top-notch translations that accurately conveyed the intended meaning and tone of the original content, and their timely turnaround made the process seamless for our company. I highly recommend iText Translation Agency for any translation needs and look forward to collaborating with them in the future.",
          photo: "https://www.itext.agency/assets/client2.jpeg",
        },
        {
          name: "Rauiya Khassenova",
          position: "Editor-in-Chief",
          review:
            "As an editor for an online magazine, I rely on iText Translation Agency for the translation of articles from Russian into English and Chinese on a regular basis. I am consistently impressed with the quality of their work and the professionalism of their team. The translations are always accurate and delivered on time, which is essential for meeting tight deadlines. The team at iText is also very responsive and willing to answer any questions or concerns I have. I highly recommend iText Translation Agency for anyone in need of high-quality translation services.",
          photo: "https://www.itext.agency/assets/client3.jpeg",
        },
      ],
      kazakhText: [
        {
          name: "Қуаныш Бекжанов",
          position: "Мұнай және газбен қамтамасыз ету жөніндегі инженер",
          review:
            "Мен iText аударма агенттігі ұсынатын аударма қызметтеріне өте ризамын. Мұнай және газбен жабдықтау инженері ретінде мен үшін 1000-нан астам беттік жобамның аудармасы дәл және дәл болуы өте маңызды болды және iText командасы менің күткенімнен асып түсті. Олар кәсіпқойлық, тиімділік көрсетіп, жұмысты уақытында сапалы аяқтады. Кез келген аударма қажеттіліктері үшін iText аударма агенттігін ұсынамын.",
          photo: "https://www.itext.agency/assets/client1.jpeg",
        },
        {
          name: "Кейт Лю",
          position: "Мазмұнды локализациялау менеджері",
          review:
            "Мен жақында iText аударма агенттігімен электрондық коммерция сайтымыздың мазмұнын қазақ тіліне локализациялау үшін жұмыс істедім. Мазмұнды локализациялау менеджері ретінде мен аудармалардың сапасы мен дәлдігіне жоғары талаптар қоямын және iText командасының кәсіби шеберлігі мен егжей-тегжейге көңіл бөлуі мені таң қалдырды. Олар түпнұсқа мазмұнның мәні мен үнін шынайы жеткізетін бірінші дәрежелі аударма жасады, ал тапсырысты уақтылы жеткізу компаниямыз үшін процесті кедергісіз етті. Кез келген аударма қажеттіліктері үшін iText аударма агенттіктерін ұсынамын және болашақта олармен жұмыс істеуді асыға күтемін.",
          photo: "https://www.itext.agency/assets/client2.jpeg",
        },
        {
          name: "Рауия Хасенова",
          position: "Журнал редакторы",
          review:
            "Интернет-журнал редакторы ретінде мен мақалаларды орыс тілінен ағылшын және қытай тілдеріне аудару үшін iText аударма агенттігін үнемі пайдаланамын. Мен олардың жұмысының сапасы мен командасының кәсібилігіне үнемі тәнті боламын. Аудармалар әрқашан дәл және уақытында жеткізіледі, бұл қатаң мерзімдерді сақтау үшін өте маңызды. iText командасы да өте жауапты және менің кез келген сұрақтарыма жауап беруге дайын. Мен жоғары сапалы аударма қызметтерін қажет ететін кез келген адамға iText аударма бюросын ұсынамын.",
          photo: "https://www.itext.agency/assets/client3.jpeg",
        },
      ],
    };
  },
  methods: {
    // ...
  },
  computed: {
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
