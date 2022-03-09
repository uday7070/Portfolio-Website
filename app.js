const menubtn= document.querySelector('.menu_btn')
const navlist= document.querySelector('.list')
const container= document.querySelector('.container')
const hamburger= document.querySelector('.hamburger')
const closeicon= document.querySelector('.closeicon')


menubtn.addEventListener("click",()=>{
navlist.classList.toggle('nav-is-open')
container.classList.toggle("active")
menubtn.classList.toggle("trans")
hamburger.classList.toggle("hamburgerclose")
closeicon.classList.toggle("icon")

})
navlist.addEventListener("click",()=>{
    menubtn.classList.toggle("trans")
    container.classList.toggle("active")

    navlist.classList.remove("nav-is-open")
    hamburger.classList.toggle("hamburgerclose")
closeicon.classList.toggle("icon")

})