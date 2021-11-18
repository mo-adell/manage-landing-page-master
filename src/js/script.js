const toggle = document.querySelector('.toggle')
const toggleLine = document.querySelectorAll('.toggle__line')
const menu = document.querySelector('.menu')
const body = document.body

toggleLine.forEach((item) => {
  toggle.addEventListener('click', (event) => {
    item.classList.toggle('open')
    menu.classList.toggle('open')
    body.classList.toggle('open')
  })
})
