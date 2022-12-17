const mapPopupOpenButton = document.querySelector('.map-and-contacts-open-map-button');
const mapPopup = document.querySelector('.modal-map')
const mapPopupCloseButton = mapPopup.querySelector('.modal-close')

mapPopupOpenButton.addEventListener('click', () => {
  mapPopup.classList.add('modal-show')
})

mapPopupCloseButton.addEventListener('click', () => {
  mapPopup.classList.remove('modal-show');
})
