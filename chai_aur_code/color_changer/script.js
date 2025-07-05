const allBtn = document.querySelectorAll(".button");
const body = document.querySelector("body");

allBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
            body.style.backgroundColor = e.target.id;
      })
})