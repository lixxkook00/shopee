const registerForm = document.querySelector('#registerForm')
const loginForm = document.querySelector('#loginForm')
const modal = document.querySelector('#modal')
const modalContent = document.querySelector('#modalcontent')
const inputsArea = document.querySelector('.header__search-inputs')
const inputPlace = document.querySelector('#headerSearchInputs')
const thisWindow = document.querySelector('.app')

const btnBackCloseModal = document.querySelectorAll('.btn-back')
const btnSwitchForms = document.querySelectorAll('.switch');
const btnNavRegister = document.querySelector('#btnNavRegister')
const btnNavLogin = document.querySelector('#btnNavLogin')
const btnSearchMobile = document.querySelector('.header__search-mobile')





closeModal = () => {
    modal.onclick = () => {
        modal.classList.add("close")
    }
}
openLoginForm = () => {
    registerForm.classList.add("close");
    loginForm.classList.remove("close");
}

openRegisterForm = () => {
    registerForm.classList.remove("close");
    loginForm.classList.add("close");
}

// Switch login/register form
for (let i = 0; i < btnSwitchForms.length; i++) {
    btnSwitchForms[i].onclick = function(event) {
        event.preventDefault();
        if (btnSwitchForms[i].getAttribute("value") == "0") {
            openLoginForm()

        } else if (btnSwitchForms[i].getAttribute("value") == "1") {
            openRegisterForm()
        }
    }
}
registerForm.onclick = (event) => {
    event.stopPropagation()
}
loginForm.onclick = (event) => {
    event.stopPropagation()
}

// Register button
btnNavRegister.onclick = () => {
    modal.classList.remove("close")
    openRegisterForm()
    closeModal()
}

// Login button
btnNavLogin.onclick = () => {
    modal.classList.remove("close")
    openLoginForm()
    closeModal()
}

// Close modal by Button Back
for (let i = 0; i < btnBackCloseModal.length; i++) {
    btnBackCloseModal[i].onclick = function(event) {
        modal.classList.add("close")
    }
}

// open/close input search in mobile
thisWindow.onclick = function(event) {
    inputsArea.classList.remove('active-inputs')
}
inputsArea.onclick = function(event) {
    event.stopPropagation()
}
var inputsState = false;
btnSearchMobile.onclick = function(event) {
    event.stopPropagation()
    if (inputsState === false) {
        inputsArea.classList.add('active-inputs')
        inputsState = true
    } else {
        inputsArea.classList.remove('active-inputs')
        inputsState = false
    }
}