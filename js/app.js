const app = Vue.createApp({
  data() {
    return {};
  },
});

// Function to get the language of the page
const getLanguage = () => {
  const language = document
    .getElementsByTagName("html")[0]
    .getAttribute("lang");
  return language;
};

//Function to get the url of the page
const getUrl = () => {
  const url = document.URL;
  return url;
};

//Function to get the last part of the url
const getLastUrlPart = () => {
  const lastUrlPart = getUrl().split("/").pop();
  return lastUrlPart;
};
