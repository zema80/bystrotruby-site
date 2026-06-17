document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.mega-menu').forEach((menu) => {
    const tabs = menu.querySelectorAll('[data-mega-tab]');
    const panels = menu.querySelectorAll('[data-mega-panel]');
    tabs.forEach((tab) => {
      tab.addEventListener('mouseenter', () => activateMegaTab(tab, tabs, panels));
      tab.addEventListener('focus', () => activateMegaTab(tab, tabs, panels));
      tab.addEventListener('click', () => activateMegaTab(tab, tabs, panels));
    });
  });
  function activateMegaTab(tab, tabs, panels) {
    const id = tab.dataset.megaTab;
    tabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle('is-active', isActive);
      item.setAttribute('aria-selected', String(isActive));
    });
    panels.forEach((panel) => {
      const isActive = panel.dataset.megaPanel === id;
      panel.classList.toggle('is-active', isActive);
      panel.hidden = !isActive;
    });
  }
  const body = document.body;
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClosers = document.querySelectorAll('[data-mobile-close]');
  function setMobileMenu(open) {
    body.classList.toggle('mobile-menu-open', open);
    body.classList.toggle('is-locked', open);
    if (menuToggle) menuToggle.setAttribute('aria-expanded', String(open));
    if (mobileMenu) mobileMenu.setAttribute('aria-hidden', String(!open));
  }
  if (menuToggle) menuToggle.addEventListener('click', () => setMobileMenu(true));
  mobileClosers.forEach((closer) => closer.addEventListener('click', () => setMobileMenu(false)));
  document.querySelectorAll('.mobile-nav__toggle').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const item = toggle.closest('.mobile-nav__item');
      const isOpen = item.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  });
  const modal = document.querySelector('#request-modal');
  const modalButtons = document.querySelectorAll('.js-open-request');
  const modalClosers = document.querySelectorAll('[data-modal-close]');
  const requestForm = document.querySelector('.request-form');
  const pageUrlInput = requestForm ? requestForm.querySelector('input[name="page_url"]') : null;
  const formMessage = document.querySelector('.request-form__message');
  function setModal(open) {
    if (!modal) return;
    modal.classList.toggle('is-open', open);
    modal.setAttribute('aria-hidden', String(!open));
    body.classList.toggle('is-locked', open || body.classList.contains('mobile-menu-open'));
    if (open && pageUrlInput) pageUrlInput.value = window.location.href;
  }
  modalButtons.forEach((button) => button.addEventListener('click', () => setModal(true)));
  modalClosers.forEach((closer) => closer.addEventListener('click', () => setModal(false)));
  if (requestForm) {
    requestForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (pageUrlInput) pageUrlInput.value = window.location.href;
      if (formMessage) formMessage.textContent = 'Форма пока не подключена. Здесь будет отправка заявки.';
    });
  }
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setModal(false);
      setMobileMenu(false);
    }
  });
});