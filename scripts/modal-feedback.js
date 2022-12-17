const feedbackPopupOpenButtons = document.querySelectorAll('.feedback-open-button')
const feedbackPopup = document.querySelector('.modal-feedback')
const feedbackPopupCloseButton = feedbackPopup.querySelector('.modal-close')
const feedbackPopupFirstInputField = feedbackPopup.querySelector('#feedback-author-name')

for (let i = 0; i < feedbackPopupOpenButtons.length; i++) {
  feedbackPopupOpenButtons[i].addEventListener('click', () => {
    feedbackPopup.classList.add('modal-show')
    feedbackPopupFirstInputField.focus();
  })
}

feedbackPopupCloseButton.addEventListener('click', () => {
  feedbackPopup.classList.remove('modal-show')
})
