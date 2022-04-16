let menuBtn = document.querySelector('.menu_mobile');
let navbar = document.querySelector('.menu');


menuBtn.addEventListener('click', function() {
    navbar.classList.toggle('active');
});

window.onscroll = () => {
    navbar.classList.remove('active')
}