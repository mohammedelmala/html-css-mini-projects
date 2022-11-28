const btn = document.querySelector("#btn");
const colorSpan = document.querySelector(".color");
const main = document.querySelector("main");
const letters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
let currentColor = "red";

// generate color
const generateColor = () => {
  var newColor = "#";

  Array.from(Array(6).keys()).forEach(
    (value, index) => (newColor += letters[Math.floor(Math.random() * 16)])
  );
  return newColor;
};

// set color of span and main section
const setColor = (color) => {
  main.style.backgroundColor = color;
  colorSpan.innerHTML = color;
  colorSpan.style.color = color;
};

// set onClick
const onBtnClick = (e) => {
  currentColor = generateColor();
  setColor(currentColor);
};
btn.addEventListener("click", onBtnClick);

setColor(currentColor);
