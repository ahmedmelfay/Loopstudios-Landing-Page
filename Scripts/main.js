const Ham=document.querySelector('.ham');
const NavList=document.querySelector('.list');
const NavIcon=document.querySelector('.ham img');
const NavItems=Array.from(document.querySelectorAll('.list li'));
const NavLinks=Array.from(document.querySelectorAll('.list li a'));
Ham.addEventListener('click', () => {
    NavList.classList.toggle('nav-hidden');
    NavList.classList.toggle('nav-visible');
    if(NavIcon.getAttribute('src')=='images/icon-hamburger.svg'){
        NavIcon.setAttribute('src','images/icon-close.svg');
    }
    else NavIcon.setAttribute('src','images/icon-hamburger.svg');
})
if(window.innerWidth<992){
    NavLinks.forEach( item => {
        item.innerHTML=item.innerHTML.toUpperCase();
    })
}