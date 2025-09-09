let button = document.querySelectorAll('.dropdown-button');
button.forEach((btn) => {
    btn.addEventListener("click",(e) => {
        btn.nextElementSibling.classList.toggle('show');
        btn.classList.toggle('rotate');
    });
})