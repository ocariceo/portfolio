window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
})

function toggelMenu() {
    var menuToggle = document.querySelector('.toggle')
    var menu = document.querySelector('.menu')
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}