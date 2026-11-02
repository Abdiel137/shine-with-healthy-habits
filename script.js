const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

// This demonstration form does not send or store information.
// It opens a draft in the visitor's email app once the project email is configured.
const projectEmail = ''; // Add the official SHINE contact email before publishing.
document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const note = document.getElementById('form-note');
  if (!projectEmail) {
    note.textContent = 'The website is working, but the project email has not been added yet. Add it in script.js before publishing the contact form.';
    return;
  }
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent('Message from SHINE website: ' + data.get('topic'));
  const body = encodeURIComponent(
    'Name: ' + data.get('name') + '\\nEmail: ' + data.get('email') +
    '\\nTopic: ' + data.get('topic') + '\\n\\nMessage:\\n' + data.get('message')
  );
  window.location.href = 'mailto:' + projectEmail + '?subject=' + subject + '&body=' + body;
});
