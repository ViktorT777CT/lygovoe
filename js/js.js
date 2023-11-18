let header = document.querySelector('#fixed_menu-bg')
document.addEventListener('scroll', function() {
    if (window.pageYOffset >= 1) {
        header.classList.add('fixed_menu-bg')
    }
    else {
        header.classList.remove('fixed_menu-bg')
    }
});