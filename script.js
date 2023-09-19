import Kartya from "./kartya.js";
$(function () {
  const galeriaTomb = [
    {
      kep: "kepek/virag_1.jpeg",
    },
    {
      kep: "kepek/virag_2.jpeg",
    },
    {
      kep: "kepek/virag_3.jpeg",
    },
    {
      kep: "kepek/virag_4.jpeg",
    },
  ];

  const GALERIA = $("#galeria");

  /**Galéria képeinek generálása */
  galeriaTomb.forEach((elem, index) => {
    const galeriaKep = new Kartya(elem, index, GALERIA);
  });
  $(window).on("kep", (event) => {
    console.log(event.detail);
  });
});
