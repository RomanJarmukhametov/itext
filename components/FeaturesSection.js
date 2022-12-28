app.component("features-section", {
  template:
    /*html*/
    ` <section class="container px-4 py-lg-5 py-md-3 py-sm-1">
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3 ">
                <div class="col d-flex align-items-stretch" v-for="item in language">
                    <div class="card card-custom-сlickable border-0">
                        <img :src="item.icon" class="py-1 icon-custom" alt="">
                        <div class="card-body">
                            <h5 class="card-title"> {{item.headerText}} </h5>
                            <p class="card-text"> {{item.paragraphText}} </p>
                            <a :href="item.link"
                                class="d-inline-flex align-items-center card-link stretched-link">
                                {{item.linkText}}
                                <i class="bi bi-arrow-right m-xl-1"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>`,
  data() {
    return {
      russianText: [
        {
          headerText: "Профессиональные переводы",
          paragraphText:
            "Оптимальное решение, сочетающее в себе современные информационные технологии и квалифицированных переводчиков для повышения качества переводов.",
          link: "./ru/dlya-fizlits.html",
          linkText: "Узнать больше",
          icon: "https://www.itext.agency/assets/icon_translations.svg",
        },
        {
          headerText: "Решения для компаний",
          paragraphText:
            "Бесперебойное выполнение переводов в глобальном масштабе с помощью рабочих процессов и технологий, позволяющих ускорить выход на рынок и повысить общую эффективность.",
          link: "./ru/dlya-companiy.html",
          linkText: "Узнать больше",
          icon: "https://www.itext.agency/assets/icon_enterprise_solutions.svg",
        },
        {
          headerText: "Инструменты для локализации",
          paragraphText:
            "Современные и в то же время простые в использовании инструменты перевода для непрерывной локализации, извлечения контента из 71 формата файлов.",
          link: "./ru/dlya-companiy.html",
          linkText: "Узнать больше",
          icon: "https://www.itext.agency/assets/icon_localization.svg",
        },
      ],
      englishText: [
        {
          headerText: "Professional Translations",
          paragraphText:
            "An optimal solution that combines state-of-the-art information  technology and skilled translators to improve the quality of translations.",
          link: "./for-individuals.html",
          linkText: "Find out more",
          icon: "https://www.itext.agency/assets/icon_translations.svg",
        },
        {
          headerText: "Solutions for Companies",
          paragraphText:
            "Smoothly execute translations on a global scale with workflows and technologies to accelerate time-to-market and improve overall efficiency.",
          link: "./for-companies.html",
          linkText: "Find out more",
          icon: "https://www.itext.agency/assets/icon_enterprise_solutions.svg",
        },
        {
          headerText: "Localization Tools",
          paragraphText:
            "Modern yet easy-to-use translation tools for continuous localization, extracting content from 71 file formats.",
          link: "./for-companies.html",
          linkText: "Find out more",
          icon: "https://www.itext.agency/assets/icon_localization.svg",
        },
      ],
      kazakhText: [
        {
          headerText: "Кәсіби аудармалар",
          paragraphText:
            "Аудармалардың сапасын жақсарту үшін заманауи ақпараттық технологиялар мен білікті аудармашыларды біріктіретін оңтайлы шешім.",
          link: "../kk/zheke-tulgalar-ushin.html",
          linkText: "Көбірек білу",
          icon: "https://www.itext.agency/assets/icon_translations.svg",
        },
        {
          headerText: "Компаниялар үшін шешімдер",
          paragraphText:
            "Нарыққа шығуды жеделдетуге және жалпы тиімділікті арттыруға мүмкіндік беретін жұмыс процестері мен технологиялары арқылы жаһандық ауқымда аудармаларды үздіксіз орындау.",
          link: "../kk/kompaniyalar-ushin.html",
          linkText: "Көбірек білу",
          icon: "https://www.itext.agency/assets/icon_enterprise_solutions.svg",
        },
        {
          headerText: "Оқшаулау құралдары",
          paragraphText:
            "Үздіксіз оқшаулау, 71 файл пішімінен мазмұнды шығару үшін заманауи және сонымен бірге қолдануға оңай аударма құралдары.",
          link: "../kk/kompaniyalar-ushin.html",
          linkText: "Көбірек білу",
          icon: "https://www.itext.agency/assets/icon_localization.svg",
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
  },
});
