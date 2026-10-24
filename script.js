const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = isOpen ? '×' : '☰';
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  if (menuToggle) { menuToggle.textContent = '☰'; menuToggle.setAttribute('aria-label', 'Open navigation'); }
}));
document.getElementById('year').textContent = new Date().getFullYear();

const toast = document.getElementById('toast');
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2500);
}

// Replace this sample email in index.html before publishing.
const email = 'your.email@example.com';
document.getElementById('copyEmail')?.addEventListener('click', async () => {
  if (email === 'your.email@example.com') {
    showToast('First add your real email in index.html.');
    return;
  }
  try {
    await navigator.clipboard.writeText(email);
    showToast('Email address copied.');
  } catch {
    showToast('Email: ' + email);
  }
});
