const toggleBtn = document.querySelector('.menu-btn')
const toggleBtnIcon = document.querySelector('.menu-btn i')
const dropDownMenu = document.querySelector('.menu-baixo')

toggleBtn.onclick = function () {
    console.log("teste")
    dropDownMenu.classList.toggle('aberto')
    const isOpen = dropDownMenu.classList.contains('aberto')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

