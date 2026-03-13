const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  if (mobileMenu.classList.contains('open')) {
    mobileMenu.style.display = 'flex';
    hamburger.innerHTML = '&times;';
  } else {
    mobileMenu.style.display = 'none';
    hamburger.innerHTML = '&#9776;';
  }
});
// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    hamburger.innerHTML = '&#9776;';
    mobileMenu.classList.remove('open');
  });
});