//Creating dropdown functionality
let button = document.querySelectorAll('.dropdown-button');
button.forEach((btn) => {
    btn.addEventListener("click",(e) => {
        if(!btn.nextElementSibling.classList.contains('show'))
            closeSubMenus();
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
    closeSubMenus();
});
function closeSubMenus(){
    let submenus = document.querySelectorAll('.sub-menu');
    submenus.forEach((submenu) => {
        if(submenu.classList.contains('show')){
            submenu.classList.toggle('show');
            let dropbtn = submenu.parentElement.querySelector('.dropdown-button');
            dropbtn.classList.toggle('rotate');
        }
            
    });
}