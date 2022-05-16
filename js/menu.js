let menuBtn = document.querySelector('.menu-btn');
let menuBtnActive = document.querySelector(".menu-btn--active")
let MenuMob = document.querySelector(".menu-mobile")

menuBtn.addEventListener('click', function () {
   menuBtn.classList.toggle("menu-btn--active");
   MenuMob.classList.toggle("menu-mobile--active");
})

