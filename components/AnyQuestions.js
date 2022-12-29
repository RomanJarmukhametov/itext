app.component("any-questions", {
  template:
    /*html*/
    `
        <section class="container py-lg-5 py-md-3 py-sm-1">
            <div class="row flex-lg-row align-items-center g-5 py-5">
                <div class="col-lg-6">
                    <h2 class="fw-bold lh-1 mb-3"> {{language.titleFirst}}? <span> {{language.titleFirstSpan}} </span>
                    </h2>
                    <p> {{language.textFirst}} </p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <a :href="language.link" class="btn btn-outline-secondary btn-sm me-2"> {{language.linkText}} </a>
                    </div>
                </div>
                <div class="col-lg-6 text-center">
                    <img src="https://itext.agency/assets/avatar.png" loading="lazy" alt="Project Manager Photo">
                    <p class="fw-bold"> {{language.titleSecond}} <br> {{language.titleSecondSpan}} </p>
                    <p> {{language.textSecond}} </p>
                </div>
            </div>
        </section>
    `,
  data() {
    return {
      russianText: {
        titleFirst: "Остались еще вопросы",
        titleFirstSpan: "Свяжитесь с нами!",
        textFirst:
          "Наша команда готова ответить на все ваши вопросы и найти оптимальное решение для реализации ваших потребностей в переводе.",
        link: "https://itext.agency/ru/zakazat-perevod.html",
        linkText: "Связаться с нами",
        titleSecond: "Привет! Я Лилия.",
        titleSecondSpan: "Чем могу помочь?",
        textSecond: "Лилия - менеджер по работе с клиентами.",
      },
      kazakhText: {
        titleFirst: "Әлі де сұрақтар бар ма",
        titleFirstSpan: "Бізбен хабарласыңыз!",
        textFirst:
          "Біздің команда Сіздің барлық сұрақтарыңызға жауап беруге және Сіздің аударма қажеттіліктеріңізді жүзеге асыру үшін оңтайлы шешім табуға дайын.",
        link: "https://itext.agency/kk/audarmaga-tapsyrys-beru.html",
        linkText: "Бізбен байланысу",
        titleSecond: "Сәлем! Мен Лилиямын.",
        titleSecondSpan: "Мен қалай көмектесе аламын?",
        textSecond: "Лилия - клиенттермен жұмыс жөніндегі менеджер",
      },
      englishText: {
        titleFirst: "Do you have any more questions",
        titleFirstSpan: "Contact us!",
        textFirst:
          "Our team is ready to answer all your questions and find the best solution for your translation needs.",
        link: "https://itext.agency/en/quote.html",
        linkText: "Contact Us",
        titleSecond: "Hi! I am Liliya.",
        titleSecondSpan: "How can I help you?",
        textSecond: "Liliya - an account manager.",
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
