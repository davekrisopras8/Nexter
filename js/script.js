(() => {
  const triggers = document.querySelectorAll('.js-toggle-nav');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      document.querySelector('.navigation__container')?.classList.toggle('navigation__container--active');
    });
  });
})();


