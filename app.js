const burgerButton = document.getElementById('burgerButton');
const burgerLineOne = document.getElementById('burgerLineOne');
const burgerLineTwo = document.getElementById('burgerLineTwo');
const burgerLineThree = document.getElementById('burgerLineThree');

let isBurgerOpen = false;

burgerButton.addEventListener('click', (e) => {
    if(!isBurgerOpen) {
        burgerLineOne.classList.add('header__burger__line-one__open');
        burgerLineTwo.classList.add('header__burger__line-two__open');
        burgerLineThree.classList.add('header__burger__line-three__open');
        isBurgerOpen = !isBurgerOpen;
    } else {
        burgerLineOne.classList.remove('header__burger__line-one__open');
        burgerLineTwo.classList.remove('header__burger__line-two__open');
        burgerLineThree.classList.remove('header__burger__line-three__open');
        isBurgerOpen = !isBurgerOpen;
    }
})

const headPage = document.getElementById('head');
const header = document.getElementById('header');

document.addEventListener('scroll', (e) => {
    if(window.pageYOffset >= headPage.getBoundingClientRect().height) {
        header.style.background = "black";
    } else {
        header.style.background = "";
    }
})