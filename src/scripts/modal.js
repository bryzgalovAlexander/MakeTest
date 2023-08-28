const burgerMenu = document.getElementById('open-modal')
const modal = document.getElementById('modal')
const closeModalButton = document.getElementById('close-modal')

burgerMenu.addEventListener('click', () => {
  modal.classList.add('open')
})

closeModalButton.addEventListener('click', () => {
  modal.classList.remove('open')
})

