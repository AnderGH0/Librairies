const btn = document.querySelector("button");
const modalContainer = document.querySelector(".modal-container");
const body = document.querySelector("body");
const cross = document.querySelector(".cross");
const blur = document.querySelector(".blur");

btn.addEventListener("click", () => {
    modalContainer.classList.toggle('hidden');
    body.classList.toggle('no-scroll');
});

cross.addEventListener("click", () => {
    modalContainer.classList.toggle('hidden');
    body.classList.toggle('no-scroll');
});
blur.addEventListener("click", () => {
    modalContainer.classList.toggle('hidden');
    body.classList.toggle('no-scroll');
});


