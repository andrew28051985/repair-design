/*document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const btnModal = document.querySelectorAll('[data-toggle=modal]');
  const btnClose = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  const clsModalOnClick = document.querySelector('.modal__dialog');
  

  btnModal.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  btnClose.addEventListener('click', switchModal);
  
  document.onkeydown = function(e) {
    if (e.keyCode == 27) {
      modal.classList.remove('modal--visible');
    }
  }  

  modal.addEventListener('click', function (e) {
    if (!clsModalOnClick.contains(e.target) ) {
      modal.classList.remove('modal--visible');
    }
});

});*/ 

/* далее код будет на JQuery */

$(document).ready(function(){

  var modal = $('.modal'),
      clsModalOnClick = $('.modal__dialog'),
      btnModal = $('[data-toggle=modal]'),
      btnClose = $('.modal__close'),
      btnScrolUp = $('.button__scroll-up');
      btnScrollDown = $('.hero__scroll-down');
      btnScrollUpLogo = $('.logo__link');
      btnScrollUpMain = $('.nav__item--main');

  btnModal.on('click', function(){
    modal.toggleClass('modal--visible');
  });   

  btnClose.on('click', function(){
    modal.toggleClass('modal--visible');
  });

  $(document).keydown(function (e) { 
    if (e.which == 27) {
      modal.removeClass('modal--visible');
    }
  });

  $(document).on('click', function(e) {
    if ($(e.target).hasClass('modal')) {
      modal.removeClass('modal--visible');
    }    
  });

  $(document).scroll (function() {
    if ($(this).scrollTop () > 500) {
      btnScrolUp.fadeIn();
    } else {
      btnScrolUp.fadeOut();}
  });

  btnScrolUp.on('click', function() {
    $('body, html').animate({
      scrollTop: 0
      }, 1000);
      return false;
  });

  btnScrollUpLogo.on('click', function() {
    $('body, html').animate({
      scrollTop: 0
      }, 1000);
      return false;
  });

  btnScrollUpMain.on('click', function() {
    $('body, html').animate({
      scrollTop: 0
      }, 1000);
      return false;
  });

  btnScrollDown.on('click', function(){
    $('body, html').animate({
      scrollTop: 680
    }, 1000);
    return false; 
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets =$('.swiper-pagination');

  next.css('left', prev.width() + 20 + bullets.width() + 22);
  bullets.css('left', prev.width() + 25);

  var nextSteps = $('.steps__swiper-button-next');
  var prevSteps = $('.steps__swiper-button-prev');
  var bulletsSteps =$('.steps__swiper-pagination');

  nextSteps.css('left', prevSteps.width() + 20 + bulletsSteps.width() + 22);
  bulletsSteps.css('left', prevSteps.width() + 25);

});