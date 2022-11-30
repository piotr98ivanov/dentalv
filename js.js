// Идея хорошая, но не стоит придумывать колесо))) все уже придумали за нас
// Я всегда использовал для слайдево Swiper плагин. https://swiperjs.com/get-started
// Он очень гибкий и легко настраиваемый
// Все параметры слайдера можно глянуть тут https://swiperjs.com/swiper-api#parameters

// Ждем чтобы все элементы страницы загрузились и браузер их спарсил
document.addEventListener('DOMContentLoaded', function () {

  // Инициализация слайдера
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
});
