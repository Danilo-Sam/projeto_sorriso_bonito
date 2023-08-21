function animar() {
  menu = document.getElementById('menu');
  menu.classList.toggle('open-menu')
}





























// Faq +++
const faq = document.querySelectorAll(".faq__questions__item");

faq.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

const faq2 = document.querySelectorAll(".faq2__container");

faq2.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
    console.log("Hello");
  });
});

$(document).ready(function () {
  $("#Telefone").mask("(00) 00000-0000");
});

const treatment = document.querySelectorAll(".treatment__content");
treatment.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});
