app.component("footer-section", {
  template:
    /*html*/
    `
        <footer class="text-center text-lg-start text-muted border-top">
            <section>
                <div class="container text-center text-md-start mt-5 mb-4">
                    <div class="row mt-3">
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <a class="navbar-brand" :href="language.logoLink"> <img src="https://itext.agency/assets/itext_logo.svg" alt="logo">
                            </a>
                            <div class="top-buffer">
                                <a href="https://itext.agency/kk/basty.html" class="footer-links" :class="{ 'selected-language': currentLanguage === 'Kazakh' }">Қазақша</a>
                            </div>
                            <div class="top-buffer">
                                <a href="https://itext.agency/index.html" class="footer-links" :class="{ 'selected-language': currentLanguage === 'Russian' }">Русский</a>
                            </div>
                            <div class="top-buffer">
                                <a href="https://itext.agency/en/home.html" class="footer-links" :class="{ 'selected-language': currentLanguage === 'English' }">English</a>
                            </div>
                        </div>
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                {{ language.menuTitleText }}                                
                            </h6>
                            <p>
                                <a :href="language.linkToHomePageUrl" class="footer-links"> {{ language.linkToHomePageText }} </a>
                            </p>
                            <p>
                                <a :href="language.linkToAboutUsPageUrl" class="footer-links"> {{ language.linkToAboutUsPageText }} </a>
                            </p>
                            <p>
                                <a :href="language.linkToCompanyPageUrl" class="footer-links"> {{ language.linkToCompanyPageText }} </a>
                            </p>
                            <p>
                                <a :href="language.linkToIndividualsPageUrl" class="footer-links"> {{ language.linkToIndividualsPageText }} </a>
                            </p>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                {{ language.additionalInformationTitleText}}
                            </h6>
                            <p>
                                <a :href="language.linkToServiceTermsPageUrl" class="footer-links"> {{ language.linkToServiceTermsPageText }} </a>
                            </p>
                            <p>
                                <a :href="language.linkToConfidentialityPageUrl" class="footer-links"> {{ language.linkToConfidentialityPageText }} </a>
                            </p>

                        </div>
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 class="text-uppercase fw-bold mb-4"> {{ language.contactInformationTitleText }} </h6>
                            <p><a :href="language.linkToEmailUrl"
                                    class="footer-links">itext@itext.kz</a></p>
                            <p>
                                <a href="tel:+77182764060" class="footer-links">+7 7182 76 40 60</a>
                            </p>
                            <p>
                                <a href="http://wa.me/77018712531" class="footer-links"> {{ language.linkToWhatsAppUrlText }} </a>
                            </p>
                            <p>
                                <a href="https://www.google.com/maps/place/%D0%91%D1%8E%D1%80%D0%BE+%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D0%BE%D0%B2+iText/@52.2841928,76.9440005,18.41z/data=!4m5!3m4!1s0x42f835292c059a2f:0x28d93a069f6a722d!8m2!3d52.2842215!4d76.9434585?hl=ru-KZ"
                                    class="footer-links" target="_blank"> {{ language.linkToAddressUrlText }} </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.025);">
                <p>© {{ currentYear }} {{ language.copyrigthText }} </p>
            </div>
        </footer>
    `,
  data() {
    return {
      russianText: {
        logoLink: "https://itext.agency/index.html",
        menuTitleText: "Меню",
        linkToHomePageUrl: "https://itext.agency/index.html",
        linkToHomePageText: "Главная",
        linkToAboutUsPageUrl: "https://itext.agency/ru/o-nas.html",
        linkToAboutUsPageText: "О нас",
        linkToCompanyPageUrl: "https://itext.agency/ru/dlya-companiy.html",
        linkToCompanyPageText: "Компаниям",
        linkToIndividualsPageUrl: "https://itext.agency/ru/dlya-fizlits.html",
        linkToIndividualsPageText: "Физлицам",
        additionalInformationTitleText: "Дополнительная информация",
        linkToServiceTermsPageUrl:
          "https://itext.agency/ru/usloviya-obsluzhivaniya.html",
        linkToServiceTermsPageText: "Условия оказания услуг",
        linkToConfidentialityPageUrl:
          "https://itext.agency/ru/konfidentsialnost.html",
        linkToConfidentialityPageText: "Конфиденциальность",
        contactInformationTitleText: "Контактная информация",
        linkToEmailUrl:
          "mailto:itext@itext.kz?subject=Заказ перевода с сайта&body=Добрый день! Необходим перевод вложенных документов",
        linkToWhatsAppUrlText: "Написать в WhatsApp",
        linkToAddressUrlText: "Пл. Победы 25, офис 201, Павлодар, Казахстан",
        copyrigthText: "Все права защищены: Бюро переводов iText",
      },
      englishText: {
        logoLink: "https://itext.agency/en/home.html",
        menuTitleText: "Menu",
        linkToHomePageUrl: "https://itext.agency/en/home.html",
        linkToHomePageText: "Home",
        linkToAboutUsPageUrl: "https://itext.agency/en/about-us.html",
        linkToAboutUsPageText: "About Us",
        linkToCompanyPageUrl: "https://itext.agency/en/for-companies.html",
        linkToCompanyPageText: "Companies",
        linkToIndividualsPageUrl:
          "https://itext.agency/en/for-individuals.html",
        linkToIndividualsPageText: "Individuals",
        additionalInformationTitleText: "Additional Information",
        linkToServiceTermsPageUrl: "https://itext.agency/en/terms-of-sale.html",
        linkToServiceTermsPageText: "Terms of Service",
        linkToConfidentialityPageUrl:
          "https://itext.agency/en/confidentiality.html",
        linkToConfidentialityPageText: "Confidentiality",
        contactInformationTitleText: "Contact Information",
        linkToEmailUrl:
          "mailto:itext@itext.kz?subject=Translation order from the site&body=Hello! I need to translate the attached documents",
        linkToWhatsAppUrlText: "WhatsApp Us",
        linkToAddressUrlText: "Pl. Pobedy 25, office 201, Pavlodar, Kazakhstan",
        copyrigthText: "All rights reserved: iText Translation Agency",
      },
      kazakhText: {
        logoLink: "https://www.itext.agency/kk/basty.html",
        menuTitleText: "Мәзір",
        linkToHomePageUrl: "https://www.itext.agency/kk/basty.html",
        linkToHomePageText: "Басты бет",
        linkToAboutUsPageUrl: "https://www.itext.agency/kk/biz-turaly.html",
        linkToAboutUsPageText: "Өзіміз туралы",
        linkToCompanyPageUrl:
          "https://www.itext.agency/kk/kompaniyalar-ushin.html",
        linkToCompanyPageText: "Компанияларға",
        linkToIndividualsPageUrl:
          "https://www.itext.agency/kk/zheke-tulgalar-ushin.html",
        linkToIndividualsPageText: "Жеке тұлғаларға",
        additionalInformationTitleText: "Қосымша ақпарат",
        linkToServiceTermsPageUrl:
          "https://www.itext.agency/kk/qyzmet-korsetu-sharttary.html",
        linkToServiceTermsPageText: "Қызметтерді көрсету шарттары",
        linkToConfidentialityPageUrl:
          "https://www.itext.agency/kk/kupiyalylyk.html",
        linkToConfidentialityPageText: "Құпиялылық",
        contactInformationTitleText: "Байланыс ақпарат",
        linkToEmailUrl:
          "mailto:itext@itext.kz?subject=Веб-сайттан аудармаға тапсырыс&body=Сәлеметсіз бе! Маған қоса берілген құжаттарды аудару керек",
        linkToWhatsAppUrlText: "WhatsApp-қа жазу",
        linkToAddressUrlText: "Жеңіс алаңы 25, офис 201, Павлодар, Қазақстан",
        copyrigthText: "Барлық құқықтар қорғалған: iText аударма бюросы",
      },
    };
  },
  methods: {
    // ...
  },
  computed: {
    currentLanguage() {
      switch (getLanguage()) {
        case "en":
          return "English";
        case "kk":
          return "Kazakh";
        default:
          return "Russian";
      }
    },
    currentYear() {
      return new Date().getFullYear();
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
