import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    watchTrigger: false,
    isDesktopView: window.innerWidth >= 400,
    isMenuActive: false,
    isScrollUp: true,
    activeLanguage: "TR",
    isImgDetail: false,
    imgDetailList: [],
    galleryImageTranslate: [0, 0],
    imgCount: 0,
    createdPosition: "",
    setPosition: "",
    homeImageList: [],
    isLoading: false,
    isImageLoaded: false,
    albums: [],
    iconList: [
      {
        href: "https://www.instagram.com/thepancakebatter/",
        class: "fa-brands fa-instagram",
      },
      {
        href: "#.",
        class: "fa-brands fa-twitter",
      },
      {
        href: "mailto:allperensahin@gmail.com",
        class: "fa-regular fa-envelope",
      },
    ],
    imgList: [
      {
        src: require("../assets/home/horizontal/1.jpeg"),
        alt: "img",
        album: "animal",
        description: "description",
      },
      {
        src: require("../assets/home/horizontal/2.jpeg"),
        alt: "img",
        album: "animal",
      },
      {
        src: require("../assets/home/horizontal/6.jpeg"),
        alt: "img",
        album: "animal",
      },
      {
        src: require("../assets/home/horizontal/4.jpeg"),
        alt: "img",
        album: "animal",
      },
      {
        src: require("../assets/home/horizontal/5.jpeg"),
        alt: "img",
        album: "animal",
      },
      {
        src: require("../assets/home/horizontal/2.jpeg"),
        alt: "img",
        album: "animal",
      },
      {
        src: require("../assets/home/horizontal/6.jpeg"),
        alt: "img",
        album: "animal",
      },
      {
        src: require("../assets/home/horizontal/1.jpeg"),
        alt: "img",
        album: "animal",
      },
      {
        src: require("../assets/home/horizontal/2.jpeg"),
        alt: "img",
        album: "animal",
      },
      {
        src: require("../assets/home/horizontal/3.jpeg"),
        alt: "img",
        album: "nature",
      },
      {
        src: require("../assets/home/horizontal/6.jpeg"),
        alt: "img",
        album: "animal",
      },
      {
        src: require("../assets/home/horizontal/5.jpeg"),
        alt: "img",
        album: "nature",
      },
      {
        src: require("../assets/home/horizontal/2.jpeg"),
        alt: "img",
        album: "nature",
      },
      {
        src: require("../assets/home/horizontal/4.jpeg"),
        alt: "img",
        album: "animal",
      },
      {
        src: require("../assets/home/horizontal/4.jpeg"),
        alt: "img",
        album: "animal",
      },
      {
        src: require("../assets/home/horizontal/1.jpeg"),
        alt: "img",
        album: "animal",
      },
      {
        src: require("../assets/home/horizontal/6.jpeg"),
        alt: "img",
        album: "animal",
      },
      {
        src: require("../assets/home/horizontal/5.jpeg"),
        alt: "img",
        album: "animal",
      },
      {
        src: require("../assets/home/horizontal/3.jpeg"),
        alt: "img",
        album: "animal",
      },
      {
        src: require("../assets/home/horizontal/2.jpeg"),
        alt: "img",
        album: "nature",
      },
      {
        src: require("../assets/home/horizontal/2.jpeg"),
        alt: "img",
        album: "animal",
      },
      {
        src: require("../assets/home/horizontal/1.jpeg"),
        alt: "img",
        album: "animal",
      },
      {
        src: require("../assets/home/horizontal/6.jpeg"),
        alt: "img",
        album: "nature",
      },
      {
        src: require("../assets/home/horizontal/4.jpeg"),
        alt: "img",
        album: "animal",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
