var swiper = new Swiper(".slide-intro", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var sidebar = new StickySidebar(".sidebar", {
  topSpacing: 20,
  bottomSpacing: 20,
  containerSelector: ".wrap",
  innerWrapperSelector: ".sidebar__inner",
});

$(function () {
  $(".depth1 > li").mouseover(function () {
    $(this).find(".depth2").stop().slideDown(400);
    $(this).addClass("on");
  });
  $(".depth1 > li").mouseleave(function () {
    $(this).find(".depth2").stop().slideUp(400);
  });
});
