// header-sticky javascript
$(window).scroll(function(){
  var sticky = $('#header'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

// second-holder
$('.hold-banner').slick({
  dots: true,
  infinite: true,
  speed: 500,
  cssEase: 'linear'
});
// design-poseter

$('.post-img.story-img').slick({
  dots: true,
  infinite: true,
  speed: 500,
  cssEase: 'linear'
});
// owl cursol
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})
// onclick class add and remove by javascript
$("span.control-search-icon").click(function(){
  $(".hold-navigation").toggleClass("khang");
});