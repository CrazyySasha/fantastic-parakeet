const open = document.querySelector(".open")
const header = document.querySelector("header")

open.addEventListener('click', () => {
    header.classList.toggle('mobile-menu')
})

header.addEventListener('click', () => {
    header.classList.toggle('mobile-menu')
})
