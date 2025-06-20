document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => e.preventDefault());
});
