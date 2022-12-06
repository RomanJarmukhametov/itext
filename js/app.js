const app = Vue.createApp({
  data() {
    return {
      clients: [
        { logo: "https://www.itext.agency/assets/logo_erg.svg", name: "ERG" },
        {
          logo: "https://www.itext.agency/assets/logo_kazmunaygas.png",
          name: "Kazmunaygas",
        },
        { logo: "https://www.itext.agency/assets/logo_nfc.png", name: "NFC" },
        {
          logo: "https://www.itext.agency/assets/logo_sulpak.png",
          name: "Sulpak",
        },
        {
          logo: "https://www.itext.agency/assets/logo_eurasian.jpeg",
          name: "Eurasian",
        },
        {
          logo: "https://www.itext.agency/assets/logo_kios.png",
          name: "Kios",
        },
      ],
    };
  },
});
