const menu = document.getElementById('link-nav');
const subMenu = document.getElementById('sub-menu');
const contSubMenu = document.getElementById('container-sub-menu');


menu.addEventListener('mouseenter', function(){
    subMenu.style.display = "block";
});

contSubMenu.addEventListener('mouseover', function(){
    subMenu.style.display = "block";
});

subMenu.addEventListener('mouseout', function(){
    subMenu.style.display = "none";
});
