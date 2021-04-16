// eslint-disable-next-line strict
alert('hello');

// eslint-disable-next-line no-undef
$(function(){
  // eslint-disable-next-line no-undef
  $('.carousel').carousel({interval: 2000});
  // eslint-disable-next-line no-undef
  $('.carouselButton').on('click', function(){
    // eslint-disable-next-line no-undef
    if($('#carouselButton').children('i').hasClass('fa-pause')){
      // eslint-disable-next-line no-undef
      $('.carousel').carousel('pause');
      // eslint-disable-next-line no-undef
      $('#carouselButton').children('i').removeClass('fa-pause');
      // eslint-disable-next-line no-undef
      $('#carouselButton').children('i').hasClass('fa-play');
    } else {
      // eslint-disable-next-line no-undef
      $('.carousel').carousel('cycle');
      // eslint-disable-next-line no-undef
      $('#carouselButton').children('i').removeClass('fa-play');
      // eslint-disable-next-line no-undef
      $('#carouselButton').children('i').addClass('fa-pause');
    }
  });
});