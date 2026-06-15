document.addEventListener('DOMContentLoaded', () => {
  const requestButtons = document.querySelectorAll('.js-open-request');

  requestButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      console.log('Здесь будет открываться форма заявки');
    });
  });

  const submenuItems = document.querySelectorAll('.has-submenu');

  submenuItems.forEach((item) => {
    const toggle = item.querySelector('.nav-toggle');

    if (!toggle) return;

    toggle.addEventListener('click', () => {
      const isOpen = item.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  });
});