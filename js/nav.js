var burgerMenu = document.getElementsByClassName
('material-symbols-outlined');

var menu = document.getElementById('nav-hamburger-menu');
menu.style.display = 'none'

function clickMenu(){
    if (menu.style.display === 'none'){
        menu.style.display = 'flex'
    }

    else {
        menu.style.display = 'none'
    }
}

var exit = document.getElementById('exit-button');

function exitMenu(){
    if(menu.style.display === 'flex'){
        menu.style.display = 'none'
    }

    else{
        menu.style.display = 'flex'
    }
}