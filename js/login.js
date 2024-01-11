const signinBtn = document.querySelector('.signinBtn');
const signupBtn = document.querySelector('.signupBtn');
const formBox = document.querySelector('.formBox');
const body = document.querySelector('.login')


signupBtn.onclick = function() {
  formBox.classList.add('active')
  body.classList.add('active')
}

signinBtn.onclick = function() {
  formBox.classList.remove('active')
  body.classList.remove('active')
}