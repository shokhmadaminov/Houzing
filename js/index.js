// VARIABLES
const burgerBtn = document.querySelector(".burger-btn")
const leftNav = document.querySelector(".left-nav")

burgerBtn.addEventListener("click", () => {
    leftNav.classList.toggle("show-nav")
})

