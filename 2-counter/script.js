const decreaseBtn = document.querySelector("#decrease");
const increaseBtn = document.querySelector("#increase");
const resetBtn = document.querySelector("#reset");
const valueSpan = document.querySelector(".value");
let value = 0;

const decrease = (e) => {
  value--;
  valueSpan.innerHTML = value;
};

const reset = (e) => {
  value = 0;
  valueSpan.innerHTML = value;
};

const increae = (e) => {
  value++;
  valueSpan.innerHTML = value;
};

reset();

decreaseBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);
increaseBtn.addEventListener("click", increae);
