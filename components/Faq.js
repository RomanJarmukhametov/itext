app.component("faq", {
  template:
    /*html*/
    `
         <section class="container py-lg-5 py-md-3 py-sm-1">
            <div class="row pt-5 row-cols-1 row-cols-lg-12">
                <div class="col text-center">
                    <h2> {{languageGeneral.title}} </h2>
                    <p class="testimonial-text"> {{languageGeneral.text}} </p>
                </div>
            </div>
            <div class="row flex-lg-row align-items-center g-5 py-5">
                <div class="col-lg-6 col-sm-12">
                    <img src="../assets/faq.svg" class="d-block mx-lg-auto img-fluid" alt="FAQ" width="700" height="500"
                        loading="lazy">
                </div>
                <div class="col-lg-6 col-sm-12">
                    <div class="card-custom bottom-buffer" v-for="item in language">
                        <div class="row">
                            <div class="col-lg-10 col-md-12">
                                <h5> {{item.question}} </h5>
                                <p> {{item.answer}} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `,
  data() {
    return {
      russianGeneralTextIndividuals: {
        title: "Частые вопросы и ответы",
        text: "Ниже мы собрали ответы на ваши самые частые вопросы.",
      },
      russianGeneralTextCompanies: {
        title: "Частые вопросы и ответы",
        text: "Ниже мы собрали ответы на ваши самые частые вопросы.",
      },
      russianTextIndividuals: [
        {
          question: "Вы сможете нотариально заверить перевод моих документов?",
          answer:
            "Да, мы обязательно нотариально заверим ваш перевод, при условии, что вы предоставите оригинал документа.",
        },
        {
          question: "У меня очень срочный перевод. Это влияет на стоимость?",
          answer:
            "Да, за срочные переводы мы берем дополнительную оплату. Перевод срочный, если вы хотите его получить в день заказа.",
        },
        {
          question: "Как вам оплатить?",
          answer:
            "Мы принимаем оплату наличными и через kaspi QR. Оплатить необходимо до начала работы.",
        },
        {
          question: "Могу я вам отправить документы на перевод по WhatsApp?",
          answer:
            "Да, такая возможность есть, но лучше отправить через форму заказа или на электронную почту. Также, мы не принимаем в работу фотографии документов, вам необходимо их отсканировать.",
        },
      ],
      russianTextCompanies: [
        {
          question:
            "У нас большой объем материалов на перевод. Вы предоставите скидку?",
          answer:
            "Да, конечно. Мы обязательно пойдем вам навстречу и предложим лучшие ценовые условия.",
        },
        {
          question: "У нас срочный перевод. Он будет стоить дороже?",
          answer:
            "Если мы сотрудничаем с вашей компании постоянно и на основании договора, то мы не берем плату за срочность. В противном случае перевод будет стоить в 2 раза дороже.",
        },
        {
          question:
            "Наша компания всегда оплачивает после оказания услуг. Вы так работаете?",
          answer:
            "Да, при условии заключения договора мы готовы предоставить срок оплаты до 60 календарных дней.",
        },
        {
          question: "Вы предоставляете документы для бухгалтерии?",
          answer:
            "Обязательно, мы предоставляем все документы в соответствии с законодательством Республики Казахстан – счета-фактуры и акты выполненных работ отправляются в ИС ЭСФ.",
        },
      ],
      kazakhGeneralTextIndivuduals: {
        title: "Жиі қойылатын сұрақтар мен жауаптар",
        text: "Төменде біз сіздің жиі қойылатын сұрақтарыңызға жауап жинадық.",
      },
      kazakhGeneralTextCompanies: {
        title: "Жиі қойылатын сұрақтар мен жауаптар",
        text: "Төменде біз сіздің жиі қойылатын сұрақтарыңызға жауап жинадық.",
      },
      kazakhTextIndividuals: [
        {
          question:
            "Сіздер менің құжаттарымның аудармасын нотариалды түрде куәландыра алсыз ба?",
          answer:
            "Иә, құжаттың түпнұсқасын ұсынған жағдайда, біз сіздің аудармаңызды міндетті түрде нотариалды куәландырамыз.",
        },
        {
          question: "Менде өте шұғыл аударма бар. Бұл құнға әсер ете ме?",
          answer:
            "Иә, жедел аудармалар үшін біз қосымша ақы аламыз. Егер сіз оны тапсырыс берген күні алғыңыз келсе, аударма шұғыл болады.",
        },
        {
          question: "Сізге қалай төлеуге болады?",
          answer:
            "Біз төлемді қолма-қол ақшамен және kaspi QR арқылы қабылдаймыз. Жұмыс басталғанға дейін төлеу керек.",
        },
        {
          question:
            "Мен сізге WhatsApp арқылы құжаттарды аударуға жібере аламын ба?",
          answer:
            "Иә, мұндай мүмкіндік бар, бірақ тапсырыс нысаны немесе электрондық пошта арқылы жіберген дұрыс. Сондай-ақ, біз құжаттардың фотосуреттерін жұмысқа қабылдамаймыз, оларды сканерлеу қажет.",
        },
      ],
      kazakhTextCompanies: [
        {
          question:
            "Бізде аударма материалдарының үлкен көлемі бар. Сіз жеңілдік бересіз бе?",
          answer:
            "Иә, әрине. Біз міндетті түрде Сізбен кездесіп, ең жақсы баға шарттарын ұсынамыз.",
        },
        {
          question: "Бізде шұғыл аударма бар. Ол қымбатқа түсе ме?",
          answer:
            "Егер біз сіздің компанияңызбен үнемі және шарт негізінде ынтымақтасып қызмет істейтін болсақ, онда біз жеделдігі үшін ақы алмаймыз. Әйтпесе, аударма 2 есе қымбат болады.",
        },
        {
          question:
            "Біздің компания әрқашан қызмет көрсетілгеннен кейін төлейді. Сіз осылай жұмыс істейсіз бе?",
          answer:
            "Иә, шарт жасасқан жағдайда біз төлем мерзімін 60 күнтізбелік күнге дейін ұсынуға дайынбыз.",
        },
        {
          question: "Сіз бухгалтерияға құжаттар ұсынасыз ба?",
          answer:
            "Міндетті түрде, біз Қазақстан Республикасының заңнамасына сәйкес барлық құжаттарды – шот-фактураларды және орындалған жұмыстардың актілерін ЭШФ АЖ-ға жөнелтеміз.",
        },
      ],
      englishGeneralTextIndividuals: {
        title: "Frequent Questions and Answers",
        text: "Below we have compiled answers to your most common questions.",
      },
      englishGeneralTextCompanies: {
        title: "Frequent Questions and Answers",
        text: "Below we have compiled answers to your most common questions.",
      },
      englishTextIndividuals: [
        {
          question: "Can you notarize the translation of my documents?",
          answer:
            "Yes, we can. We will notarize your translation, provided you provide the original document.",
        },
        {
          question:
            "I have a very urgent translation. Does this affect the cost?",
          answer:
            "Yes, it does. We charge extra for urgent translations. The translation is urgent if you want it on the day of the order.",
        },
        {
          question: "How do I pay you?",
          answer:
            "We accept payment in cash and via kaspi QR. Payment must be made before work begins.",
        },
        {
          question: "Can I send you the documents for translation on WhatsApp?",
          answer:
            "Yes, you can. It is possible, but it is better to send it through the order form or e-mail. Also, we do not accept photographs of documents. It would be best if you scanned them.",
        },
      ],
      englishTextCompanies: [
        {
          question:
            "We have a large volume of materials to translate. Will you give a discount?",
          answer:
            "Yes, of course, we will. We will meet you halfway and offer you the best price conditions.",
        },
        {
          question: "We have an urgent translation. Will it cost more?",
          answer:
            "We do not charge for urgency if we cooperate with your company constantly and based on a contract. Otherwise, the translation will cost twice as much.",
        },
        {
          question:
            "Our company always pays after services are rendered. Is that how you work?",
          answer:
            "Yes, it is. We are ready to provide a payment period of up to 60 calendar days, subject to the conclusion of a contract.",
        },
        {
          question: "Do you provide documents for the accounting department?",
          answer:
            "We do. We provide all documents by the laws of the Republic of Kazakhstan - invoices and certificates of completion are sent to the information system Electronic Invoice.",
        },
      ],
    };
  },
  methods: {},
  computed: {
    url() {
      return getLastUrlPart();
    },

    languageGeneral() {
      switch (this.url) {
        case "dlya-fizlits.html":
          return this.russianGeneralTextIndividuals;
        case "dlya-companiy.html":
          return this.russianGeneralTextCompanies;
        case "for-individuals.html":
          return this.englishGeneralTextIndividuals;
        case "for-companies.html":
          return this.englishGeneralTextCompanies;
        case "zheke-tulgalar-ushin.html":
          return this.kazakhGeneralTextIndivuduals;
        case "kompaniyalar-ushin.html":
          return this.kazakhGeneralTextCompanies;
      }
    },

    language() {
      switch (this.url) {
        case "dlya-fizlits.html":
          return this.russianTextIndividuals;
        case "dlya-companiy.html":
          return this.russianTextCompanies;
        case "for-individuals.html":
          return this.englishTextIndividuals;
        case "for-companies.html":
          return this.englishTextCompanies;
        case "zheke-tulgalar-ushin.html":
          return this.kazakhTextIndividuals;
        case "kompaniyalar-ushin.html":
          return this.kazakhTextCompanies;
      }
    },
  },
});
