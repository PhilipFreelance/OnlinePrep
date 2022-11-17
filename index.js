const btn1=document.querySelector('.nav-toggler')
const nav=document.querySelector('nav')

console.log(nav)

btn1.addEventListener('click',toggleNav)

function toggleNav(){
    btn1.classList.toggle('active')
    nav.classList.toggle('active')
}

document.addEventListener('load',(e)=>{
    e.preventDefault()
})