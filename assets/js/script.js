document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle')
  const nav = document.querySelector('nav')
  const overlay = document.querySelector('.overlay')

  navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('active')
    nav.classList.toggle('active')
    overlay.classList.toggle('active')
  })

  overlay.addEventListener('click', function () {
    navToggle.classList.remove('active')
    nav.classList.remove('active')
    overlay.classList.remove('active')
  })

  // Close menu when clicking on nav links
  const navLinks = document.querySelectorAll('nav a')
  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      navToggle.classList.remove('active')
      nav.classList.remove('active')
      overlay.classList.remove('active')
    })
  })
})
