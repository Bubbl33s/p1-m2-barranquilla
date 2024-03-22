const btnMenuLateral = document.querySelector('.btnMenuLateral');
const btnCerrarNav = document.querySelector('.btnCerrarNav');
const nav = document.querySelector('nav');

btnMenuLateral.addEventListener('click',()=>{   
    nav.classList.add('open-nav')
})

btnCerrarNav.addEventListener('click',()=>{
    nav.classList.remove('open-nav')
})
