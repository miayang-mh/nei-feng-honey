$(document).ready(function () {


  //點擊展開效果(1階層式)
  // $('.menu-product').click(function (e) {
  //   e.preventDefault();
  //   $('.menu-product-open').slideToggle();
  // });


  // 點擊展開效果(2階層式)
  $(document).ready(function () {
    $('.menu-product>a').click(function (event) {
      event.preventDefault();
      //this以外都隱藏起來
      $(this).parent().siblings().find('.menu-product-open').slideUp();
      //找自己的ul做折疊效果(ul寫成.menu-product-open也可以,如上)
      $(this).parent().find('ul').slideToggle();
    });
  });


  //輪播
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 1000,
    },//自動撥放

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
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

  //滾置最上效果
  $('footer>a').click(function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 1000); // 1000=1秒
  });
  //html,body→animate動化→scroll滾top最上0的位置

});