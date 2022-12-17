const goodsAddedPopupOpenButtons = document.querySelectorAll('.goods-card-buy-button')
const goodsAddedPopup = document.querySelector('.modal-goods-added')
const goodsAddedPopupCloseButton = goodsAddedPopup.querySelector('.modal-close')
const goodsAddedPopupContinueShoppingButton = goodsAddedPopup.querySelector('.modal-continue-shopping-button')

for (let i = 0; i < goodsAddedPopupOpenButtons.length; i++) {
  goodsAddedPopupOpenButtons[i].addEventListener('click', () => {
    goodsAddedPopup.classList.add('modal-show')
  })
}

goodsAddedPopupCloseButton.addEventListener('click', () => {
  goodsAddedPopup.classList.remove('modal-show');
})

goodsAddedPopupContinueShoppingButton.addEventListener('click', () => {
  goodsAddedPopup.classList.remove('modal-show');
})
