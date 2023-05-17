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