//= ../libs/swiper-bundle.min.js

$(".services__slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
});
$(".reviews__slider").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
});

if ($(".questions__item-top")) {
  $(".questions__item-top").on('click', function(){
    $(".questions__item-top").removeClass("active");
    $(this).toggleClass('active');
  })
}