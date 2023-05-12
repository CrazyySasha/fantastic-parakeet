const Open = document.querySelector("#menuToggler")
     const Header = document.querySelector(".menu")

     Open.addEventListener('click', ()=> {
        Header.classList.toggle('max-lg:-translate-x-full')
        Header.classList.toggle('translate-x-0')
     })

     Header.addEventListener('click', ()=> {
        Header.classList.toggle('max-lg:-translate-x-full')
        Header.classList.toggle('translate-x-0')
     })

let Toggler = document.getElementById("toggle");
let Touched = document.getElementById("touched");
let Body = document.querySelector("body");
let myHeader = document.getElementById("myHeader")

Toggler.addEventListener('click', ()=> {
    Touched.classList.toggle('left-0');
    Touched.classList.toggle('left-[48px]');
    Body.classList.toggle('bg-zinc-700');
    Toggler.classList.toggle('bg-black');
    myHeader.classList.toggle('bg-zinc-700')
 })


 Touched.style.transition = "all 0.4s ease-in-out";
 Body.style.transition = "all 0.4s ease-in-out";
 Toggler.style.transition = "all 0.4s ease-in-out";
