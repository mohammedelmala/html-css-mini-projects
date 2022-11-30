const modalBtn = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

const openModal = () => {
  modalOverlay.classList.add("open-modal");
};

const closeModal = () => {
  modalOverlay.classList.remove("open-modal");
};

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
