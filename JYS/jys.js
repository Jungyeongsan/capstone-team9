const dropdown = document.querySelector('.dropdown')
const tolleButton = document.querySelector('.dropdown-toggle')
const menu = document.querySelector('.dropdown-menu')
const options = document.querySelectorAll('.dropdown-option')

tolleButton.addEventListener('click', function(){
    menu.classList.toggle('show')
})