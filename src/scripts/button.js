const button = document.getElementById('button')

button.addEventListener('click', () => {
  button.disabled = true
  setTimeout(() => {
    button.disabled = false
  }, 1500)
})
