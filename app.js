//Creating dropdown functionality
let button = document.querySelectorAll('.dropdown-button');
button.forEach((btn) => {
    btn.addEventListener("click",(e) => {
        btn.nextElementSibling.classList.toggle('show');
        btn.classList.toggle('rotate');
        
        if(sidebar.classList.contains('close')){
            sidebar.classList.toggle('close');
            sidebarButton.classList.toggle('rotate');
        }
    });
});

//Creating sidebar collapse functionality
let sidebarButton = document.querySelector('.toggle-button');
let sidebar = document.querySelector('#sidebar');

sidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('close');
    sidebarButton.classList.toggle('rotate');
});