const form = document.querySelector('form');
const email = document.getElementById('email');
const phoneNumber = document.querySelector('#phone-number');
const emailError = document.querySelector('.email-error');
const phoneError = document.querySelector('.phone-error');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const passwordError = document.querySelector('.password-error');

const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

emailError.style.fontWeight = '500';
phoneError.style.fontWeight = '500';
passwordError.style.fontWeight = '500';

firstName.addEventListener('input', (e) => {
  if (firstName.validity.valid) {
    firstName.style.outline = '1.5px rgb(156, 156, 255) solid';
    firstName.style.background = 'rgba(156, 156, 255, 0.2)';
  } else {
    firstName.style.outline = '1.5px rgb(255, 156, 156) solid';
    firstName.style.background = 'rgba(255, 156, 156, 0.2)';
  }
});
lastName.addEventListener('input', (e) => {
  if (lastName.validity.valid) {
    lastName.style.outline = '1.5px rgb(156, 156, 255) solid';
    lastName.style.background = 'rgba(156, 156, 255, 0.2)';
  } else {
    lastName.style.outline = '1.5px rgb(255, 156, 156) solid';
    lastName.style.background = 'rgba(255, 156, 156, 0.2)';
  }
});

phoneNumber.addEventListener('input', (e) => {
  if (phoneNumber.validity.valid) {
    phoneError.textContent = '';
    phoneNumber.style.outline = '1.5px rgb(156, 156, 255) solid';
    phoneNumber.style.background = 'rgba(156, 156, 255, 0.2)';
  } else {
    phoneError.textContent = 'Please use only numbers';
    phoneNumber.style.outline = '1.5px rgb(255, 156, 156) solid';
    phoneNumber.style.background = 'rgba(255, 156, 156, 0.2)';
  }
});

email.addEventListener('input', (event) => {
  if (email.validity.valid) {
    emailError.textContent = '';
    email.style.outline = '1.5px rgb(156, 156, 255) solid';
    email.style.background = 'rgba(156, 156, 255, 0.2)';
  } else {
    showError();
  }
});

form.addEventListener('submit', (event) => {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
  event.preventDefault();
  checkPasswords();
});

function showError() {
  email.style.outline = '1.5px rgb(255, 156, 156) solid';
  email.style.background = 'rgba(255, 156, 156, 0.2)';
  if (email.validity.valueMissing) {
    emailError.textContent = 'You need to enter an email address.';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an email address.';
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  emailError.className = 'email-error active';
}

checkPasswords = () => {
  if (password.value !== confirmPassword.value) {
    password.style.outline = '1.5px rgb(255, 156, 156) solid';
    password.style.background = 'rgba(255, 156, 156, 0.2)';
    confirmPassword.style.outline = '1.5px rgb(255, 156, 156) solid';
    confirmPassword.style.background = 'rgba(255, 156, 156, 0.2)';
    passwordError.textContent = '*Passwords do not match';
  } else {
    password.style.outline = '1.5px rgb(156, 156, 255) solid';
    password.style.background = 'rgba(156, 156, 255, 0.2)';
    confirmPassword.style.outline = '1.5px rgb(156, 156, 255) solid';
    confirmPassword.style.background = 'rgba(156, 156, 255, 0.2)';
    passwordError.textContent = '';
  }
};

// document.querySelector(
//   '.footerText'
// ).value.textContent = `realsarius © ${new Date.now().getFullYear()}`;
document.addEventListener('click', (e) => {
  const isDropDownButton = e.target.matches('[data-dropdown-button]');
  if (!isDropDownButton && e.target.closest('[data-dropdown]') != null) {
    return;
  }

  let currentDropdown;
  if (isDropDownButton) {
    currentDropdown = e.target.closest('[data-dropdown]');
    currentDropdown.classList.toggle('active');
  }

  document.querySelectorAll('[data-dropdown].active').forEach((dropDown) => {
    if (dropDown === currentDropdown) {
      return;
    }
    dropDown.classList.toggle('active');
  });
});
