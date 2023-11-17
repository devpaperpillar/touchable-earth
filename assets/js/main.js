document.addEventListener('DOMContentLoaded', function () {
  const navigation = document.querySelector('.navigation__content');

  window.addEventListener('scroll', function () {
      if (window.scrollY > 0) {
          navigation.classList.add('navigation--scrolled');
      } else {
          navigation.classList.remove('navigation--scrolled');
      }
  });

  const button = document.querySelector('.navigation__button-menu');
  const navigation__overflow = document.querySelector('.navigation__overflow');
  const bodyElement = document.body;
  button.addEventListener('click', function () {
      // Toggle the 'menu-open' class on the button
      navigation.classList.toggle('navigation--show-menu')
      bodyElement.classList.toggle("show-menu")
  });
  navigation__overflow.addEventListener('click', function () {
    // Toggle the 'menu-open' class on the button
    navigation.classList.toggle('navigation--show-menu')
    bodyElement.classList.toggle("show-menu")
});
});