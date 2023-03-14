// Modal Login

const submitBtn = document.querySelector('.js-loginBtn')
const submitBtn1 = document.querySelector('.js-loginBtn1')
const modalSubmit = document.querySelector('.modal-login')
const modalSubmitContainer = document.querySelector('.modal-login--container')
const modalSubmitClose = document.querySelector('.js-modal-login--close')


submitBtn.addEventListener('click', showEnquire)
submitBtn1.addEventListener('click', showEnquire)



function showEnquire() {
    modalSubmit.classList.add('open')
}


modalSubmitClose.addEventListener('click', hideEnquire)

function hideEnquire() {
    modalSubmit.classList.remove('open')
}


modalSubmit.addEventListener('click', hideEnquire)

modalSubmitContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})

