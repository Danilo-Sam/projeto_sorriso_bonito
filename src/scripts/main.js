function animar() {
  menu = document.getElementById('menu');
  menu.classList.toggle('open-menu')
}





























// Faq +++
document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll("[data-faq-question]");

  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", abreOuFechaResposta);
  }
});

function abreOuFechaResposta(elemento) {
  const classe = "faq__questions__item--is-open";
  const elementoPai = elemento.target.parentNode;

  elementoPai.classList.toggle(classe);
}

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
