$(function() {
  
  //function for repeated hide/show sliders
  function toggledChangedBtn() {
    $('.sliders').show();
    var sliderIndex = $('.example').index($('.active'));
    if (sliderIndex == 0) {
      $('.left-btn').hide();
    } else if (sliderIndex == $('.example').length - 1) {
      $('.right-btn').hide();
    }
  }
  //for navbar
  $('.fa-bars').click(function() {
    $('.hlist-navbar').fadeIn();
  });
  $('.fa-regular').click(function() {
    $('.hlist-navbar').fadeOut();
  });
  //for modal
  $('.sample-btn').click(function() {
   $('#modal').fadeIn(2000);
  });
  $('#close-modal-btn').click(function() {
    $('#modal').fadeOut();
  });
  $('#real-modal').click(function() {
    $('#modal-one').fadeIn(1000);
  });
  $('#close-btn').click(function() {
    $('#modal-one').fadeOut(5000);
  });
  
  //for slide
  $('.number-btn').click(function(){
     $('.active').removeClass('active');
  var clickedIndex = $('.number-btn').index($(this));
     $('.example').eq(clickedIndex).addClass('active');
     toggledChangedBtn();
  });
  
 //for next and prev button
 $('.sliders').click(function () {
   var $displaySliders = $('.active');
   $displaySliders.removeClass('active');
   if ($(this).hasClass('left-btn')){
     $displaySliders.prev().addClass('active');
   } else {
     $displaySliders.next().addClass('active');
   }
   toggledChangedBtn();
 });
 
 //password p-text
 
 
 //top btn 
$('#top-style-btn').click(function() {
   $('html, body').animate({
     'scrollTop': 0
   }, 2000);
 });
 
});