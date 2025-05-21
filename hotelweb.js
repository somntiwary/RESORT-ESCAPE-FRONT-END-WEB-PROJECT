const cursorGlow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
  cursorGlow.style.top = `${e.clientY}px`;
  cursorGlow.style.left = `${e.clientX}px`;
});


// Menu toggle for responsive nav
function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
}

