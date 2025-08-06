function setActiveNav() {
  const navLinks = document.querySelectorAll('nav a');
  const path = window.location.pathname.split('/').pop();
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (
      (path === '' || path === 'index.html') && link.href.endsWith('index.html')
      || (path === 'features.html' && link.href.endsWith('features.html'))
      || (path === 'impact.html' && link.href.endsWith('impact.html'))
      || (path === 'about.html' && link.href.endsWith('about.html'))
      || (path === 'feedback.html' && link.href.endsWith('feedback.html'))
    ) {
      link.classList.add('active');
    }
  });
}
function toggleMode() {
  const body = document.body;
  const btn = document.getElementById('modeSwitchBtn');
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    btn.innerHTML = "☀️ Light Mode";
  } else {
    btn.innerHTML = "🌙 Dark Mode";
  }
}
window.onload = setActiveNav;