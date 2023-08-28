const dropdown = document.querySelectorAll('.dropdown');

dropdown.forEach(function (dropdownWrapper) {
  const dropdownText = dropdownWrapper.querySelector('.dropdown__button');
  const dropdownList = dropdownWrapper.querySelector('.dropdown__list');
  const dropdownItems = dropdownList.querySelectorAll('.dropdown__list-item');
  const dropdownInput = dropdownWrapper.querySelector('.dropdown__input_hidden')
  const dropdownContainer = dropdownWrapper.querySelector('.dropdown__container')

  dropdownContainer.addEventListener('click', function () {
    dropdownList.classList.toggle('dropdown__list_visible');
    this.classList.add('dropdown__button_active');
  });

  dropdownItems.forEach(function(listItem) {
    listItem.addEventListener('click', function (e) {
      dropdownContainer.classList.remove('dropdown__button_active')
      dropdownItems.forEach(function(el) {
        el.classList.remove('dropdown__list-item_active');
      })
      e.target.classList.add('dropdown__list-item_active');
      dropdownText.innerText = this.innerText;
      dropdownInput.value = this.dataset.value;
      dropdownList.classList.remove('dropdown__list_visible');
    })
  })
})
