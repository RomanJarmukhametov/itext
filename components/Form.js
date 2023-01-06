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

                  

                   <form novalidate @submit.prevent="validateForm" id="my-form" action="https://formspree.io/f/xdojvazp" enctype="multipart/form-data" method="post">
                        <div class="form-row mb-3">
                            <div class="col">
                                <label for="name" class="form-label"> {{ language.formLabelName }} </label><br>
                                <input type="text" class="form-control" id="name" name="Client name" v-model="name" :class="{ 'is-invalid': errors.name }" required>
                                <div v-if="errors.name" class="invalid-feedback">{{ errors.name }}</div>
                            </div>
                        </div>

                        <div class="form-row mb-3">
                            <div class="col">
                                <label for="email" class="form-label"> {{ language.formLabelEmail }} </label>
                                <input type="email" class="form-control" id="email" name="email" v-model="email" :class="{ 'is-invalid': errors.email }" required>
                                <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
                            </div>
                        </div>

                        <div class="form-row mb-3">
                            <div class="col">
                                <label for="phone" class="form-label"> {{ language.formLabelPhone }} </label>
                                <input type="tel" class="form-control" id="phone" name="phone" v-model="phone" :class="{ 'is-invalid': errors.phone }" required>
                                <div v-if="errors.phone" class="invalid-feedback">{{ errors.phone }}</div>
                            </div>
                        </div>


                        <div class="form-row mb-3">
                            <div class="col">
                            <label for="source-language" class="form-label"> {{ language.formLabelSourceLanguage }} </label>
                            <select class="form-select" ref="source-language" id="source-language" name="Source language" :class="{ 'is-invalid': errors.sourceLanguage }" required @change="validateSourceLanguage">
                                <option selected disabled value=""> {{ language.formLabelSourceLanguageSelect }} </option>
                                <option v-for="item in language.translationLanguages">{{ item }}</option>
                            </select>
                            <div v-if="errors.sourceLanguage" class="invalid-feedback">{{ errors.sourceLanguage }}</div>
                            </div>
                        </div>

                         <div class="form-row mb-3">
                            <div class="col">
                            <label for="target-language" class="form-label"> {{ language.formLabelTargetLanguage }} </label>
                            <select class="form-select" ref="target-language" id="target-language" name="Target language" :class="{ 'is-invalid': errors.targetLanguage }" required @change="validateTargetLanguage">
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

                        <!-- reCaptcha 
                        <div class="g-recaptcha mb-3" data-sitekey="6Lc0VVEeAAAAALpm1UU4pLQlLLfJZiAK-tNGKV90"></div> 

                        <input type="hidden" name="_language" value="ru" /> -->

                        <!-- honeypot field 
                        <input type="text" name="_gotcha" style="display:none" /> -->

                        <div class="form-row mb-3">
                            <div class="col">
                                <button class="btn btn-primary w-100" type="submit"> {{ language.buttonText }} </button>
                            </div>

                            <p id="my-form-status"></p>

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
        formLabelSourceLanguage: "Язык оригинала (обязательно)",
        formLabelSourceLanguageSelect: "Выберите язык оригинала",
        formLabelTargetLanguage: "Язык перевода (обязательно)",
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
      name: "",
      email: "",
      phone: "",
      message: "",
      errors: {
        name: "",
        email: "",
        phone: "",
        sourceLanguage: "",
        targetLanguage: "",
      },
    };
  },
  methods: {
    validateForm() {
      this.errors = {
        name: "",
        email: "",
        phone: "",
        sourceLanguage: "",
        targetLanguage: "",
      };

      if (this.validateName() && this.validateEmail()) {
        console.log("Form is valid");
        this.sendFormData();
        return true;
      } else {
        console.log("Form is invalid");
        console.log(this.errors);
        console.log(Object.keys(this.errors).length);
        return false;
      }
    },

    // Validate name and console.log error message

    validateName() {
      console.log(this.name);
      if (!this.name) {
        if (getLanguage() === "ru") {
          this.errors.name = "Поле имя обязательно для заполнения";
        } else if (getLanguage() === "en") {
          this.errors.name = "The name field is required";
        } else if (getLanguage() === "kk") {
          this.errors.name = "Атыңызды енгізіңіз";
        }
        return false;
      } else {
        // Set error to empty string if name is valid and return true
        this.errors.name = "";
        this.sendFormData();
        return true;
      }
    },

    validateEmail() {
      console.log(this.email);
      if (!this.email) {
        if (getLanguage() === "ru") {
          this.errors.email = "Поле email обязательно для заполнения";
        } else if (getLanguage() === "en") {
          this.errors.email = "The email field is required";
        } else if (getLanguage() === "kk") {
          this.errors.email = "Email енгізіңіз";
        }
      } else {
        const regex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(this.email)) {
          if (getLanguage() === "ru") {
            this.errors.email = "Неверный email";
          } else if (getLanguage() === "en") {
            this.errors.email = "Invalid email";
          } else if (getLanguage() === "kk") {
            this.errors.email = "Жарамсыз email";
          }
        } else {
          console.log("Email is valid");
          return true;
        }
      }
      return false;
    },

    validatePhone() {
      console.log(this.phone);
      if (!this.phone) {
        if (getLanguage() === "ru") {
          this.errors.phone = "Поле телефон обязательно для заполнения";
        } else if (getLanguage() === "en") {
          this.errors.phone = "The phone field is required";
        } else if (getLanguage() === "kk") {
          this.errors.phone = "Телефон енгізіңіз";
        }
      } else {
        const regex = /^[+]*[0-9]*$/;
        if (!regex.test(this.phone)) {
          if (getLanguage() === "ru") {
            this.errors.phone = "Неверный телефон";
          } else if (getLanguage() === "en") {
            this.errors.phone = "Invalid phone";
          } else if (getLanguage() === "kk") {
            this.errors.phone = "Жарамсыз телефон";
          }
        } else {
          console.log("Phone is valid");
        }
      }
    },

    validateSourceLanguage() {
      const sourceLanguage = this.$refs["source-language"].value;
      console.log(sourceLanguage);
      if (sourceLanguage === "") {
        if (getLanguage() === "ru") {
          this.errors.sourceLanguage = "Выберите язык оригинала";
        } else if (getLanguage() === "en") {
          this.errors.sourceLanguage = "Please select a source language";
        } else if (getLanguage() === "kk") {
          this.errors.sourceLanguage = "Бастапқы тілді таңдаңыз";
        }
      } else {
        console.log("Source language is valid");
        // this.errors.sourceLanguage = "";
      }
    },

    validateTargetLanguage() {
      const targetLanguage = this.$refs["target-language"].value;
      console.log(targetLanguage);
      if (targetLanguage === "") {
        if (getLanguage() === "ru") {
          this.errors.targetLanguage = "Выберите язык перевода";
        } else if (getLanguage() === "en") {
          this.errors.targetLanguage = "Please select a target language";
        } else if (getLanguage() === "kk") {
          this.errors.targetLanguage = "Аяқталатын тілді таңдаңыз";
        }
      } else {
        console.log("Target language is valid");
        // this.errors.targetLanguage = "";
      }
    },

    clearErrors() {
      Object.keys(this.errors).forEach((key) => {
        this.errors[key] = "";
      });
    },

    async sendFormData() {
      try {
        const form = document.getElementById("my-form");
        const data = new FormData(form);
        const response = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: {
            Accept: "application/json",
          },
        });
        const status = document.getElementById("my-form-status");
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset();
        } else {
          const data = await response.json();
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        }
      } catch (error) {
        const status = document.getElementById("my-form-status");
        status.innerHTML = "Oops! There was a problem submitting your form";
      }
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
