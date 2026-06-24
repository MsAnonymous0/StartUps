const openBtn = document.getElementById("clickopen");
const closeBtn = document.getElementById("clickclose");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", () => {modal.classList.add("open");});
closeBtn.addEventListener("click", () => {modal.classList.remove("open");});
