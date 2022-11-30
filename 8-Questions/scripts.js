const questionBtn = document.querySelector(".question-btn");
const plusIcons = document.querySelectorAll(".plus-icon");
const minusIcons = document.querySelectorAll(".minus-icon");
const plusIcon = document.querySelector(".plus-icon");

const showText = (e) => {
  const question =
    e.target.parentElement.parentElement.parentElement.parentElement;
  question.classList.add("show-text");
};

const hideText = (e) => {
  const question =
    e.target.parentElement.parentElement.parentElement.parentElement;
  question.classList.remove("show-text");
};

plusIcons.forEach((icon) => icon.addEventListener("click", showText));

minusIcons.forEach((icon) => icon.addEventListener("click", hideText));

// minusIcon.addEventListener("click", hideText);
