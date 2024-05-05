const correctId = 'coovi'
const correctPw = '1234'

const loginForm = document.getElementById('login-form')
const userId = document.querySelector('#login-form .user-id')
const userPw = document.querySelector('#login-form .user-pw')

const handleToLoginSubmit = (event) => {
  event.preventDefault()
  console.log(userId.value, userPw.value)
  console.log(userId.value === correctId && userPw.value === correctPw)
  if (userId.value === correctId && userPw.value === correctPw) {
    localStorage.setItem('userInfo', correctId)
    loginForm.classList.add('hidden')
    greeting.classList.remove('hidden')
  }
}

loginForm.addEventListener('submit', handleToLoginSubmit)

const userInfo = localStorage.getItem('userInfo')
const greeting = document.querySelector('.greeting')

if (userInfo !== null) {
  loginForm.classList.add('hidden')
  greeting.innerText = `Hello ${userInfo}`
  greeting.classList.remove('hidden')
}
