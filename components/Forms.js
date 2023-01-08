app.component("quote-form", {
  template:
    /*html*/
    `
    <section class="container py-lg-5 py-md-3 py-sm-1">
        <div class="row pt-5 row-cols-1 row-cols-lg-12">
            <div class="col text-center">
                <h1> {{ language.titleText }} <span> {{language.titleSpanText}} </span></h1>
                <p class="testimonial-text"> {{ language.titleParagraph }} </p>
            </div>
        </div>

        <div class="card-custom">
            <div class="row row-cols-1 row-cols-lg-12 p-4">
                <div class="col-lg-6 col-md-12">
                    <h4> {{ language.officeSection }} </h4>
                    <p> <strong> {{ language.officeSectionSchedule }} </strong></p>
                    <p> {{ language.officeSectionWorkingHours }} </p>
                    <p> {{ language.officeSectionWeekend }} </p>
                    <address>
                        <h5> {{ language.officeSectionAddressTitle }} </h5>
                        <div class="d-flex gap-1">
                            <i class="bi bi-geo-alt-fill icon-blue"></i>
                            <p>
                                <a href="https://www.google.com/maps/place/%D0%91%D1%8E%D1%80%D0%BE+%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D0%BE%D0%B2+iText/@52.2841928,76.9440005,18.41z/data=!4m5!3m4!1s0x42f835292c059a2f:0x28d93a069f6a722d!8m2!3d52.2842215!4d76.9434585?hl=ru-KZ"
                                    class="footer-links" target="_blank"> {{ language.officeSectionAddress }} </a>
                            </p>
                        </div>
                        <div class="d-flex gap-1">
                            <i class="bi bi-telephone-fill icon-blue"></i>
                            <p>
                                <a href="tel:+77182764060" class="footer-links">+7 7182 76 40 60</a>
                            </p>
                        </div>
                        <div class="d-flex gap-1">
                            <i class="bi bi-envelope-fill icon-blue"></i>
                            <p><a :href="language.emailText" class="footer-links">itext@itext.kz</a></p>
                        </div>
                    </address>
                </div>

                <div class="col-lg-6 col-md-12">
                    <h4> {{ language.formTitle }} </h4>
                    <p> {{ language.formParagraph }} </p>

                  
                 <form action="https://formspree.io/f/xdojvazp" enctype="multipart/form-data" method="post">
                        <div class="form-row mb-3">
                            <div class="col">
                                <label for="name" class="form-label"> {{ language.formLabelName }} </label><br>
                                <input type="text" class="form-control" id="name" name="Client name" v-model="name" :class="{ 'is-invalid': nameError }" required>
        
                              <div v-if="errors.name" class="invalid-feedback">{{ errors.name }}</div>
                            </div>
                        </div>

                        <div class="form-row mb-3">
                            <div class="col">
                                <label for="email" class="form-label"> {{ language.formLabelEmail }} </label>
                                <input type="email" class="form-control" id="email" name="email" v-model="email" :class="{ 'is-invalid': emailError }" required>
                                <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
                            </div>
                        </div>

                        <div class="form-row mb-3">
                            <div class="col">
                                <label for="phone" class="form-label"> {{ language.formLabelPhone }} </label>
                                <input type="tel" class="form-control" id="phone" name="phone" v-model="phone" :class="{ 'is-invalid': phoneError }" required>
                                <div v-if="errors.phone" class="invalid-feedback">{{ errors.phone }}</div>
                            </div>
                        </div>


                        <div class="form-row mb-3">
                            <div class="col">
                            <label for="source-language" class="form-label"> {{ language.formLabelSourceLanguage }} </label>
                            <select class="form-select" id="source-language" name="Source language">
                                <option selected disabled value=""> {{ language.formLabelSourceLanguageSelect }} </option>
                                <option v-for="item in language.translationLanguages">{{ item }}</option>
                            </select>
                            <div v-if="errors.sourceLanguage" class="invalid-feedback">{{ errors.sourceLanguage }}</div>
                            </div>
                        </div>

                         <div class="form-row mb-3">
                            <div class="col">
                            <label for="target-language" class="form-label"> {{ language.formLabelTargetLanguage }} </label>
                            <select class="form-select" id="target-language" name="Target language">
                                <option selected disabled value=""> {{ language.formLabelTargetLanguageSelect }} </option>
                                <option v-for="item in language.translationLanguages">{{ item }}</option>
                            </select>
                            <div v-if="errors.targetLanguage" class="invalid-feedback">{{ errors.targetLanguage }}</div>
                            </div>
                        </div>

                        <div class="form-row mb-3">
                            <div class="col">
                                <label for="formFileMultiple" class="form-label"> {{ language.formLabelFilesSelect }} </label>
                                <input class="form-control" type="file" id="formFileMultiple" name="Files"
                                    accept="doc, docx, jpg, jpeg, pdf, pptx, ppt, xlsx, xls, txt, png, zip, rar "
                                    multiple />
                            </div>
                        </div>

                        <div class="form-check mb-3">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                                data-bs-toggle="collapse" href="#certification" aria-expanded="false"
                                aria-controls="collapseExample" name="Certification">
                            <label class="form-check-label" for="flexCheckDefault">
                                {{ language.formLabelCertification }}
                            </label>
                        </div>
                        <div class="collapse" id="certification">
                            <p>
                                {{ language.formLabelCertificationText }}
                            </p>
                        </div>

                        <div class="form-row mb-3">
                            <div class="col">
                                <label for="comment"> {{ language.formLabelComment }} </label>
                                <textarea class="form-control" rows="5" id="comment" name="Comments"></textarea>
                            </div>
                        </div>

                        <!-- reCaptcha -->
                        <div class="g-recaptcha mb-3" data-sitekey="6Lc0VVEeAAAAALpm1UU4pLQlLLfJZiAK-tNGKV90"></div> 

                        <input type="hidden" name="_language" value="ru" /> 

                        <!-- honeypot field -->
                        <input type="text" name="_gotcha" style="display:none" /> 

                        <div class="form-row mb-3">
                            <div class="col">
                                <button class="btn btn-primary w-100" type="submit" v-bind:disabled="!name || !email || !phone"> {{ language.buttonText }} </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    `,
  data() {
    return {
      russianText: {
        titleText: "Профессиональный перевод - это",
        titleSpanText: "просто и легко",
        titleParagraph:
          "Наши 45 переводчиков выполняют профессиональные переводы для более чем 1300 клиентов с 2012 года",
        officeSection: "Посетите наш офис",
        officeSectionSchedule: "График работы офиса:",
        officeSectionWorkingHours:
          "Пн - Пт: 9.30 - 17.00, перерыв: 12.00 - 14.00",
        officeSectionWeekend: "Сб - Вс: выходные дни",
        officeSectionAddressTitle: "Адрес",
        officeSectionAddress: "Пл. Победы 25, офис 201, Павлодар, Казахстан",
        emailText:
          "mailto:itext@itext.kz?subject=Заказ перевода с сайта&body=Добрый день! Необходим перевод вложенных документов",
        formTitle: "Форма заказа перевода",
        formParagraph: "Заполните форму и мы свяжемся с вами в ближайшее время",
        formLabelName: "Ваше имя (обязательно)",
        formLabelEmail: "Ваш email (обязательно)",
        formLabelPhone: "Ваш номер телефона (обязательно)",
        formLabelSourceLanguage: "Язык оригинала",
        formLabelSourceLanguageSelect: "Выберите язык оригинала",
        formLabelTargetLanguage: "Язык перевода",
        formLabelTargetLanguageSelect: "Выберите язык перевода",
        translationLanguages: [
          "Казахский язык",
          "Англиский язык",
          "Русский язык",
          "Немецкий язык",
          "Болгарский язык",
          "Венгерский язык",
          "Греческий язык",
          "Датский язык",
          "Испанский язык",
          "Итальянский язык",
          "Латышский язык",
          "Литовский язык",
          "Нидерландский язык",
          "Польский язык",
          "Португальский язык",
          "Румынский язык",
          "Словацкий язык",
          "Словенский язык",
          "Финский язык",
          "Французский язык",
          "Чешский язык",
          "Шведский язык",
          "Эстонский язык",
          "Турецкий язык",
          "Китайский язык",
        ],
        formLabelFilesSelect: "Выбрать файлы для перевода",
        formLabelCertification: "Мне требуется нотариальное заверение перевода",
        formLabelCertificationText:
          "Для нотариального заверения требуются следующие условия: 1. Вам необходимо принести оригинал документа к нам в офис по адресу: Пл. Победы 25, офис 201, Павлодар, азахстан. 2. Если документ выдан за пределами стран СНГ, на нем должен быть апостиль (например, документ выдан в Германии) или штамп консульской легализации (например, документ выдан в Китае или ОАЭ).",
        formLabelComment: "Ваш комментарий к заказу",
        buttonText: "Заказать перевод",
      },

      kazakhText: {
        titleText: "Кәсіби аударма - бұл",
        titleSpanText: "қарапайым және оңай",
        titleParagraph:
          "Біздің 45 аудармашымыз 2012 жылдан бері 1300-ден астам клиентке кәсіби аудармалар жасайды",
        officeSection: "Біздің кеңсемізге келіңіз",
        officeSectionSchedule: "Жұмыс уақыты:",
        officeSectionWorkingHours:
          "Дүйсенбі - жұма: 9.30 - 17.00, үзіліс: 12.00 - 14.00",
        officeSectionWeekend: "Сенбі - жексенбі: демалыс күндері",
        officeSectionAddressTitle: "Мекенжай",
        officeSectionAddress: "Жеңіс алаңы 25, 201 кеңсе",
        emailText:
          "mailto:itext@itext.kz?subject=Веб-сайттан аудармаға тапсырыс беру&body=Қайырлы күн! Қосымша құжаттардың аудармасы қажет",
        formTitle: "Аударымға тапсырыс беру нысаны",
        formParagraph:
          "Тапсырыс беру нысанын толтырыңыз, біз жақын арада жауап береміз.",
        formLabelName: "Сіздің есіміңіз (міндетті)",
        formLabelEmail: "Сіздің email-ңіз (міндетті)",
        formLabelPhone: "Сіздің телефон нөміріңіз (міндетті)",
        formLabelSourceLanguage: "Түпнұсқа тілі",
        formLabelSourceLanguageSelect: "Түпнұсқа тілін таңдаңыз",
        formLabelTargetLanguage: "Аударма тілі",
        formLabelTargetLanguageSelect: "Аударма тілін таңдаңыз",
        translationLanguages: [
          "Қазақ тілі",
          "Ағылшын тілі",
          "Орыс тілі",
          "Неміс тілі",
          "Болгар тілі",
          "Мажар тілі",
          "Грек тілі",
          "Дат тілі",
          "Испан тілі",
          "Италиян тілі",
          "Латыш тілі",
          "Литва тілі",
          "Голланд тілі",
          "Поляк тілі",
          "Португал тілі",
          "Румын тілі",
          "Словак тілі",
          "Словен тілі",
          "Фин тілі",
          "Француз тілі",
          "Чех тілі",
          "Швед тілі",
          "Эстон тілі",
          "Түрік тілі",
          "Қытай тілі",
        ],
        formLabelFilesSelect: "Аудару үшін файлдарды таңдаңыз",
        formLabelCertification: "Маған нотариалды растау қажет",
        formLabelCertificationText:
          "Нотариалды куәландыру үшін келесі шарттар талап етіледі: 1) Сізге құжаттың түпнұсқасын мына мекенжайдағы кеңсеге әкелу қажет: Жеңіс алаңы 25, офис 201, Павлодар, Қазақстан. 2) егер құжат ТМД елдерінен тыс жерде берілсе, онда апостиль (мысалы, Германияда берілген құжат) немесе консулдық заңдастыру мөрі (мысалы, Қытайда немесе БАӘ-де берілген құжат) болуы керек.",
        formLabelComment: "Сіздің тапсырысыңызға түсініктеме",
        buttonText: "Аудармаға тапсырыс беру",
      },

      englishText: {
        titleText: "Professional translation is",
        titleSpanText: "simple and easy",
        titleParagraph:
          "Our 45 specialists have been providing professional translations for more than 1,300 clients since 2012",
        officeSection: "Visit Our Office",
        officeSectionSchedule: "Office schedule:",
        officeSectionWorkingHours:
          "Mon-Fri: 9.30 - 17.00, break: 12.00 - 14.00",
        officeSectionWeekend: "Sat - Sun: days off",
        officeSectionAddressTitle: "Address:",
        officeSectionAddress: "Pl. Pobedy 25, office 201",
        emailText:
          "mailto:itext@itext.kz?subject=Ordering a translation from the website&body=Good afternoon! Translation of attached documents is required",
        formTitle: "Translation Quote Form",
        formParagraph:
          "Fill out the form, and we will reply as soon as possible.",
        formLabelName: "Your name (required)",
        formLabelEmail: "Your email (required)",
        formLabelPhone: "Your phone number (required)",
        formLabelSourceLanguage: "Source language",
        formLabelSourceLanguageSelect: "Select the source language",
        formLabelTargetLanguage: "Target language",
        formLabelTargetLanguageSelect: "Select the target language",
        translationLanguages: [
          "Kazakh",
          "English",
          "Russian",
          "German",
          "Bulgarian",
          "Hungarian",
          "Greek",
          "Danish",
          "Spanish",
          "Italian",
          "Latvian",
          "Lithuanian",
          "Dutch",
          "Polish",
          "Portuguese",
          "Romanian",
          "Slovak",
          "Slovenian",
          "Finnish",
          "French",
          "Czech",
          "Swedish",
          "Estonian",
          "Turkish",
          "Chinese",
        ],
        formLabelFilesSelect: "Select files to translate",
        formLabelCertification: "I need a notarized translation",
        formLabelCertificationText:
          "The following conditions are required for notarization: 1) You need to bring the original document to our office at: 25, Pl. Pobedy, office 201, Pavlodar, Kazakhstan. 2) If the document was issued outside the CIS countries, it must have an apostille  (for example, the document was issued in Germany) or a consular legalization stamp (for example, the document was issued in China or the UAE).",
        formLabelComment: "Your comment on the order",
        buttonText: "Get a Quote",
      },

      name: "",
      email: "",
      phone: "",
      message: "",
      emailError: false,
      phoneError: false,
      nameError: false,
      errors: {
        name: "",
        email: "",
        phone: "",
      },
    };
  },
  watch: {
    name: function (newValue, oldValue) {
      if (newValue && !this.validateName(newValue)) {
        this.nameError = true;
      } else {
        this.nameError = false;
      }
    },

    email: function (newValue, oldValue) {
      if (newValue && !this.validateEmail(newValue)) {
        this.emailError = true;
      } else {
        this.emailError = false;
      }
    },

    phone: function (newValue, oldValue) {
      if (newValue && !this.validatePhone(newValue)) {
        this.phoneError = true;
      } else {
        this.phoneError = false;
      }
    },
  },

  methods: {
    //Validate name
    validateName() {
      const regex = /^[a-zA-Zа-яА-Я]+$/;
      if (!regex.test(this.name)) {
        if (getLanguage() === "ru") {
          this.errors.name = "Имя должно содержать только буквы";
        } else if (getLanguage() === "en") {
          this.errors.name = "Name must contain only letters";
        } else if (getLanguage() === "kk") {
          this.errors.name = "Атыңыз тек әріптерден тұруы керек";
        }
        return false;
      } else {
        this.errors.name = "";
      }

      return true;
    },

    //Validate email
    validateEmail() {
      const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regex.test(this.email)) {
        if (getLanguage() === "ru") {
          this.errors.email =
            "Адрес электронной почты должен содержать символ @ и доменное имя";
        } else if (getLanguage() === "en") {
          this.errors.email =
            "The email address must contain the @ symbol and a domain name";
        } else if (getLanguage() === "kk") {
          this.errors.email =
            "Электрондық пошта мекенжайында @ белгісі мен домен атауы болуы керек";
        }
      } else {
        this.errors.email = "";
        return true;
      }
      return false;
    },

    //Validate phone
    validatePhone() {
      const regex = /^[+]*[0-9]*$/;
      if (!regex.test(this.phone)) {
        if (getLanguage() === "ru") {
          this.errors.phone = "В номере телефона могут быть только цифры";
        } else if (getLanguage() === "en") {
          this.errors.phone = "The phone number can only contain numbers";
        } else if (getLanguage() === "kk") {
          this.errors.phone = "Телефон нөмірінде тек сандар болуы мүмкін";
        }
        return false;
      } else {
        this.errors.phone = "";
      }

      return true;
    },
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
