"use strict";

const modal = document.querySelectorAll(".modal");
const startModals = document.querySelectorAll(".start-modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelectorAll(".close-modal");

for (let i = 0; i < modal.length; i++) {
  modal[i].addEventListener("click", function () {
    startModals[i].classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

for (let i = 0; i < closeModal.length; i++) {
  closeModal[i].addEventListener("click", function () {
    startModals[i].classList.add("hidden");
    overlay.classList.add("hidden");
  });
}

document.querySelector(".overlay").addEventListener("click", function () {
  overlay.classList.add("hidden");
  for (let i = 0; i < startModals.length; i++) {
    if (!startModals[i].classList.contains("hidden"))
      startModals[i].classList.add("hidden");
  }
});

document.addEventListener("keydown", function (event) {
  console.log(event);
  if (event.key === "Escape") {
    if (!overlay.classList.contains("hidden")) {
      overlay.classList.add("hidden");
    }
    for (let i = 0; i < startModals.length; i++) {
      if (!startModals[i].classList.contains("hidden"))
        startModals[i].classList.add("hidden");
    }
  }
});
