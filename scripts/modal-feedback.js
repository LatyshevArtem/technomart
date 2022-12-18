const feedbackPopupOpenButtons = document.querySelectorAll('.feedback-open-button')
const feedbackPopup = document.querySelector('.modal-feedback')
const feedbackForm = feedbackPopup.querySelector('.feedback-form')
const authorName = feedbackForm.querySelector('#feedback-author-name')
const authorEmail = feedbackForm.querySelector('#feedback-author-email')
const authorText = feedbackForm.querySelector('#feedback-author-text')
const feedbackPopupCloseButton = feedbackPopup.querySelector('.modal-close')


for (let i = 0; i < feedbackPopupOpenButtons.length; i++) {
  feedbackPopupOpenButtons[i].addEventListener('click', () => {
    feedbackPopup.classList.add('modal-show')
    authorName.focus();
  })
}

feedbackForm.addEventListener('submit', event => {
  if (!authorName.value || !authorEmail.value || !authorText.value) {
    event.preventDefault()
    feedbackPopup.classList.remove('modal-error')
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth
    feedbackPopup.classList.add('modal-error')
  }
})

feedbackPopupCloseButton.addEventListener('click', () => {
  feedbackPopup.classList.remove('modal-error')
  feedbackPopup.classList.remove('modal-show')
})
