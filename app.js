const burgerButton = document.getElementById('burgerButton');
const burgerLineOne = document.getElementById('burgerLineOne');
const burgerLineTwo = document.getElementById('burgerLineTwo');
const burgerLineThree = document.getElementById('burgerLineThree');
const burgerMenu = document.getElementById('burgerMenu');
const burgerText = document.getElementById('burgerText');

let isBurgerOpen = false;

burgerButton.addEventListener('click', (e) => {
    if(window.pageYOffset >= headPage.getBoundingClientRect().height && isBurgerOpen) {
        burgerLineOne.classList.remove('header__burger__line-one__open');
        burgerLineTwo.classList.remove('header__burger__line-two__open');
        burgerLineThree.classList.remove('header__burger__line-three__open');
        burgerMenu.classList.remove('header__burger-menu__open');
        isBurgerOpen = !isBurgerOpen;
        return;
    }
    if(!isBurgerOpen) {
        burgerLineOne.classList.add('header__burger__line-one__open');
        burgerLineTwo.classList.add('header__burger__line-two__open');
        burgerLineThree.classList.add('header__burger__line-three__open');
        burgerMenu.classList.add('header__burger-menu__open');
        headerWrapper.style.background = "black";
        header.classList.add('header__padding__scroll');
        isBurgerOpen = !isBurgerOpen;
    } else {
        burgerLineOne.classList.remove('header__burger__line-one__open');
        burgerLineTwo.classList.remove('header__burger__line-two__open');
        burgerLineThree.classList.remove('header__burger__line-three__open');
        burgerMenu.classList.remove('header__burger-menu__open');
        headerWrapper.style.background = "";
        header.classList.remove("header__padding__scroll");
        isBurgerOpen = !isBurgerOpen;
    }
})

const headPage = document.getElementById('head');
const headerWrapper = document.getElementById('headerWrapper');
const header = document.getElementById('header');

document.addEventListener('scroll', (e) => {
    if(window.pageYOffset <= headPage.getBoundingClientRect().height && isBurgerOpen) {
        return;
    }
    if(window.pageYOffset >= headPage.getBoundingClientRect().height) {
        headerWrapper.style.background = "black";
        header.classList.add('header__padding__scroll');
    } else {
        headerWrapper.style.background = "";
        header.classList.remove("header__padding__scroll");
    }
})